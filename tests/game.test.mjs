import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { JSDOM, VirtualConsole } from "jsdom";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
const runtimeSource = fs.readFileSync(path.join(root, "assets/js/runtime.js"), "utf8");
const gameSource = fs.readFileSync(path.join(root, "assets/js/game.js"), "utf8");

function inlineScript(source) {
  return `<script>${source.replaceAll("</script", "<\\\\/script")}</script>`;
}

function testHtml({ expose = false } = {}) {
  let game = gameSource;
  if (expose) {
    const marker = "\n})();\n\ndocument.documentElement.dataset.gameReady";
    assert.ok(game.includes(marker), "game test hook marker must exist");
    game = game.replace(
      marker,
      '\n  window.__PN_TEST__ = { state, phases, specialEvents, eventChoices };\n})();\n\ndocument.documentElement.dataset.gameReady',
    );
  }

  return indexSource
    .replace('<link rel="stylesheet" href="assets/css/game.css" />', "")
    .replace('<script src="assets/js/runtime.js" defer></script>', () => inlineScript(runtimeSource))
    .replace('<script src="assets/js/game.js" defer></script>', () => inlineScript(game));
}

function createDom({ expose = false, beforeParse } = {}) {
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on("jsdomError", (error) => errors.push(error));
  virtualConsole.on("error", (error) => errors.push(error));
  const dom = new JSDOM(testHtml({ expose }), {
    runScripts: "dangerously",
    url: "https://japutraa.github.io/perang-narasi-republik-timeline/",
    pretendToBeVisual: true,
    virtualConsole,
    beforeParse,
  });
  return { dom, errors };
}

async function tick(window) {
  await new Promise((resolve) => window.setTimeout(resolve, 0));
}

test("release references only files that are present", () => {
  const required = [
    "index.html",
    "assets/css/game.css",
    "assets/js/runtime.js",
    "assets/js/game.js",
    "assets/icons/icon.svg",
    "manifest.webmanifest",
    "sw.js",
    "README.md",
    "LICENSE",
  ];
  required.forEach((file) => assert.ok(fs.existsSync(path.join(root, file)), `${file} is missing`));
  assert.doesNotMatch(indexSource, /<style(?:\s|>)/i, "CSS must not be embedded in index.html");
  assert.doesNotMatch(indexSource, /<script(?![^>]+src=)[^>]*>/i, "JavaScript must not be embedded in index.html");
  assert.match(indexSource, /meta name="version" content="3\.8\.1"/);
  assert.match(gameSource, /SAVE_KEY = "perang-narasi-save-v3"/);
});

test("modular build boots and starts a campaign", async () => {
  const { dom, errors } = createDom({ expose: true });
  const { document } = dom.window;
  await tick(dom.window);

  assert.equal(errors.length, 0, errors.map((error) => error.message).join("\n"));
  assert.equal(document.documentElement.dataset.gameReady, "true");
  document.querySelector('[data-role="buzzer"]').click();
  document.querySelector("#phaseStartBtn").click();
  await tick(dom.window);

  assert.ok(document.querySelector("#startScreen").classList.contains("hidden"));
  assert.ok(!document.querySelector("#gameScreen").classList.contains("hidden"));
  assert.ok(document.querySelectorAll("#cards .action-card").length > 0);
  assert.ok(dom.window.localStorage.getItem("perang-narasi-save-v3"));
  dom.window.close();
});

test("all strategic events expose four choices and two delayed branches", async () => {
  const { dom, errors } = createDom({ expose: true });
  await tick(dom.window);
  const api = dom.window.__PN_TEST__;
  assert.equal(errors.length, 0, errors.map((error) => error.message).join("\n"));
  assert.equal(api.phases.length, 6);
  assert.equal(api.phases.reduce((sum, phase) => sum + phase.days.length, 0), 72);
  assert.equal(api.specialEvents.length, 41);

  let choices = 0;
  let delayedBranches = 0;
  for (const event of api.specialEvents) {
    for (const role of ["buzzer", "aktivis"]) {
      const options = api.eventChoices(event, role);
      assert.equal(options.length, 4, `${event.id}/${role}`);
      choices += options.length;
      options.forEach((option, index) => {
        assert.ok(option[4]?.delayed?.success, `${event.id}/${role}/${index} success branch`);
        assert.ok(option[4]?.delayed?.failure, `${event.id}/${role}/${index} failure branch`);
        assert.ok(option[4].delayed.afterMonths >= 1 && option[4].delayed.afterMonths <= 4);
        delayedBranches += 2;
      });
    }
  }

  assert.equal(choices, 328);
  assert.equal(delayedBranches, 656);
  dom.window.close();
});

async function runCampaign(role) {
  const { dom, errors } = createDom({ expose: true });
  const { window } = dom;
  const { document } = window;
  document.querySelector("#quizStartOff").click();
  document.querySelector(`[data-role="${role}"]`).click();
  await tick(window);

  for (let step = 0; step < 1000 && !window.__PN_TEST__.state.finished; step++) {
    const state = window.__PN_TEST__.state;
    const modalOpen = !document.querySelector("#modal").classList.contains("hidden");
    if (!modalOpen) {
      document.querySelector("#endDayBtn").click();
      await tick(window);
      continue;
    }

    const control =
      document.querySelector("[data-event-choice].outcome-positive") ||
      document.querySelector("[data-event-choice].outcome-mixed") ||
      document.querySelector("[data-event-choice]") ||
      document.querySelector("#eventContinue") ||
      document.querySelector('[data-crisis="correction"]') ||
      document.querySelector(`[data-bailout="${role === "buzzer" ? "commissioner" : "solidarity"}"]`) ||
      document.querySelector("[data-promo]") ||
      document.querySelector("#phaseStartBtn");
    assert.ok(control, `unhandled modal at phase ${state.phase + 1}, month ${state.day}`);
    control.click();
    await tick(window);
  }

  const result = {
    ...window.__PN_TEST__.state,
    configuredEvents: window.__PN_TEST__.specialEvents.length,
    runtimeErrors: errors,
  };
  dom.window.close();
  return result;
}

for (const role of ["buzzer", "aktivis"]) {
  test(`${role} campaign reaches the open ending with every event resolved`, async () => {
    const state = await runCampaign(role);
    assert.equal(state.runtimeErrors.length, 0);
    assert.equal(state.finished, true);
    assert.equal(state.phase, 5);
    assert.equal(state.day, 12);
    assert.equal(state.eventHistory.length, state.configuredEvents);
    assert.equal(state.eventHistory.length, 41);
    assert.equal(state.narrativeRipples.length, 0);
    assert.equal(state.resolvedRipples.length, 41);
  });
}

test("v3.x save key and migration path remain compatible", async () => {
  const legacyState = {
    role: "aktivis",
    phase: 2,
    day: 6,
    money: 120000000,
    reach: 51,
    credibility: 61,
    integrity: 69,
    stress: 34,
    democracy: 58,
    network: 47,
    heat: 45,
    resolve: 74,
    actions: 1,
    quizEnabled: false,
    quizDeck: [],
    quizPositionDeck: [],
    quizIndex: 0,
    specialties: [],
    history: [],
    postMetrics: { reposts: 10, likes: 20, replies: 5, views: 500 },
    comments: [],
    seenEvents: [],
    eventHistory: [],
  };
  const { dom, errors } = createDom({
    expose: true,
    beforeParse(window) {
      window.localStorage.setItem(
        "perang-narasi-save-v3",
        JSON.stringify({ version: 3, state: legacyState }),
      );
    },
  });
  await tick(dom.window);
  const { document } = dom.window;
  assert.ok(!document.querySelector("#continuePanel").classList.contains("hidden"));
  document.querySelector("#continueBtn").click();
  await tick(dom.window);

  const state = dom.window.__PN_TEST__.state;
  assert.equal(errors.length, 0, errors.map((error) => error.message).join("\n"));
  assert.equal(state.role, "aktivis");
  assert.equal(state.phase, 2);
  assert.equal(state.day, 6);
  assert.deepEqual([...state.narrativeRipples], []);
  assert.deepEqual([...state.resolvedRipples], []);
  dom.window.close();
});
