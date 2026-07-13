import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { JSDOM, VirtualConsole } from "jsdom";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexSource = fs.readFileSync(path.join(root, "index.html"), "utf8");
const runtimeSource = fs.readFileSync(path.join(root, "assets/js/runtime.js"), "utf8");
const netizenSource = fs.readFileSync(path.join(root, "assets/js/netizen-pack.js"), "utf8");
const timelineVariantsSource = fs.readFileSync(path.join(root, "assets/js/timeline-variants.js"), "utf8");
const endingSource = fs.readFileSync(path.join(root, "assets/js/ending-system.js"), "utf8");
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
      '\n  window.__PN_TEST__ = { state, phases, phaseRosters, specialEvents, eventChoices, castEntries, monthlyRosterSchedule, monthlyRosterFor, voicePostHtml };\n})();\n\ndocument.documentElement.dataset.gameReady',
    );
  }

  return indexSource
    .replace('<link rel="stylesheet" href="assets/css/game.css" />', "")
    .replace('<script src="assets/js/runtime.js" defer></script>', () => inlineScript(runtimeSource))
    .replace('<script src="assets/js/netizen-pack.js" defer></script>', () => inlineScript(netizenSource))
    .replace('<script src="assets/js/timeline-variants.js" defer></script>', () => inlineScript(timelineVariantsSource))
    .replace('<script src="assets/js/ending-system.js" defer></script>', () => inlineScript(endingSource))
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
    "assets/js/netizen-pack.js",
    "assets/js/timeline-variants.js",
    "assets/js/ending-system.js",
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
  assert.match(indexSource, /meta name="version" content="3\.12\.0"/);
  assert.match(gameSource, /SAVE_KEY = "perang-narasi-save-v3"/);
  assert.match(gameSource, /Prof\. Konni BaksLaah/);
  assert.match(gameSource, /Mas Nadim Makaroni/);
  assert.doesNotMatch(gameSource, /Konni Bakso-Rie/);
  assert.doesNotMatch(gameSource, /Purba-Yaya|Felix Si-Auw|Dandhy Lensono|Akbar Fasal|Gita Wira-Wacana|Latah-Hitung/);
  assert.match(netizenSource, /BOT JUDOL NYASAR/);
  assert.match(netizenSource, /Anjing|Bangsat/);
  assert.match(netizenSource, /ARSIP FUFUFAFA • PEMILIK BELUM TERBUKTI/);
  assert.match(timelineVariantsSource, /Satuan Penjilat Pak Gemoyono–Mas Samsul/);
  assert.match(timelineVariantsSource, /fufufafa-memorable-quotes/);
  assert.match(endingSource, /SULTAN INVOICE, FAKIR NURANI/);
});

function displayText(value, seen = new Set()) {
  if (typeof value === "string") return /^https?:\/\//i.test(value) ? "" : value;
  if (!value || typeof value !== "object" || seen.has(value)) return "";
  seen.add(value);
  const technicalKeys = new Set(["id", "key", "sourceKey", "arc", "teaser", "themes", "weak", "resist", "actionIds", "characterId"]);
  return Object.entries(value)
    .filter(([key]) => !technicalKeys.has(key))
    .map(([, item]) => displayText(item, seen)).join("\n");
}

test("all displayed political figures use parody aliases", async () => {
  const { dom, errors } = createDom({ expose: true });
  await tick(dom.window);
  assert.equal(errors.length, 0, errors.map((error) => error.message).join("\n"));
  const api = dom.window.__PN_TEST__;
  const variants = api.phases.flatMap((phase, phaseIndex) => phase.days.flatMap((issue, dayIndex) =>
    dom.window.PNTimelineVariants.build(issue, { phaseIndex, dayIndex })));
  const renderedData = displayText({
    phases: api.phases,
    rosters: api.phaseRosters,
    events: api.specialEvents,
    cast: [...api.castEntries("power"), ...api.castEntries("activist")],
    variants,
  });
  const realNamePattern = /\b(?:Prabowo|Jokowi|Joko Widodo|Gibran|Nadiem|Teddy Indra Wijaya|Bahlil|Hasan Nasbi|Purbaya Yudhi Sadewa|Sri Mulyani|Puan Maharani|Megawati Soekarnoputri|Connie(?: Rahakundini Bakrie| Bakrie)?|Anies Baswedan|Ganjar Pranowo|Tiyo Ardianto|Yanuar Nugroho|Yanuar Risky Banget)\b/i;
  const leakedName = renderedData.match(realNamePattern);
  assert.equal(leakedName, null, `real political name leaked into display: ${leakedName?.[0]}`);
  assert.match(renderedData, /Risky Februari/);
  assert.match(renderedData, /Mayor Tedi Ketok-Pintu/);
  dom.window.close();
});

test("Tokoh catalogue includes every six-phase roster entry", async () => {
  const { dom, errors } = createDom({ expose: true });
  await tick(dom.window);
  const api = dom.window.__PN_TEST__;
  assert.equal(errors.length, 0, errors.map((error) => error.message).join("\n"));

  for (const [role, group] of [["buzzer", "power"], ["aktivis", "activist"]]) {
    const catalogue = new Set(api.castEntries(group).map((entry) => entry.name));
    api.phaseRosters[role].flat().forEach((character) => {
      assert.ok(catalogue.has(character.name), `${character.name} missing from ${group} catalogue`);
    });
  }
  dom.window.close();
});

test("every roster character is scheduled before a phase ends", async () => {
  const { dom, errors } = createDom({ expose: true });
  await tick(dom.window);
  const api = dom.window.__PN_TEST__;
  assert.equal(errors.length, 0, errors.map((error) => error.message).join("\n"));
  for (const role of ["buzzer", "aktivis"]) {
    api.phaseRosters[role].forEach((roster, phaseIndex) => {
      const schedule = api.monthlyRosterSchedule(role, phaseIndex);
      assert.equal(schedule.length, 12, `${role}/phase ${phaseIndex + 1} month count`);
      schedule.forEach((month, monthIndex) => assert.equal(month.length, 3, `${role}/${phaseIndex + 1}/${monthIndex + 1}`));
      const appeared = new Set(schedule.flat().map((character) => character.id));
      roster.forEach((character) => assert.ok(appeared.has(character.id), `${character.name} skipped in ${role}/phase ${phaseIndex + 1}`));
    });
  }
  dom.window.close();
});

for (const [role, startMoney, jumpMoney] of [
  ["buzzer", 12000000000, 28000000000],
  ["aktivis", 650000000, 1600000000],
]) {
  test(`Mode Bebas starts and jumps phases for ${role}`, async () => {
    const { dom, errors } = createDom({ expose: true });
    const { window } = dom;
    const { document } = window;
    await tick(window);

    document.querySelector("#freeModeBtn").click();
    document.querySelector('[data-free-phase="3"]').click();
    document.querySelector(`[data-role="${role}"]`).click();

    let state = window.__PN_TEST__.state;
    assert.equal(state.gameMode, "free");
    assert.equal(state.phase, 3);
    assert.equal(state.day, 1);
    assert.equal(state.money, startMoney);
    assert.equal(state.career, 36);
    document.querySelector("#phaseStartBtn").click();
    await tick(window);
    assert.ok(!document.querySelector("#freeJumpBtn").classList.contains("hidden"));

    document.querySelector("#freeJumpBtn").click();
    document.querySelector('[data-jump-phase="5"]').click();
    state = window.__PN_TEST__.state;
    assert.equal(state.phase, 5);
    assert.equal(state.day, 1);
    assert.equal(state.money, jumpMoney);
    assert.equal(state.career, 60);
    assert.ok(document.querySelector("#phaseStartBtn"));
    assert.equal(errors.length, 0, errors.map((error) => error.message).join("\n"));
    dom.window.close();
  });
}

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
  assert.match(document.querySelector("#issueTitle").textContent, /TIMELINE \d\/\d • RUN \d{4}/);
  assert.doesNotMatch(document.querySelector("#npcName").textContent, /\s(?:&|vs\.?|dan)\s|,/);
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
  assert.equal(api.specialEvents.length, 42);
  assert.doesNotMatch(
    api.phases.flatMap((phase) => phase.days.map((day) => day.post)).join("\n"),
    /FIKSI PREDIKTIF:|FIKSI PEMILU:|PROYEKSI FIKSI:/,
  );
  api.phases.flatMap((phase) => phase.days).forEach((day) => {
    assert.doesNotMatch(day.post, /^[a-z]/, `${day.title} starts like an unfinished sentence`);
    assert.doesNotMatch(
      Object.values(day.discussion).join(" "),
      /respons ini benar-benar menjawab|pisahkan fakta, tudingan, bantahan, dan dampaknya/i,
      `${day.title} still uses generic discussion filler`,
    );
  });

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

  assert.equal(choices, 336);
  assert.equal(delayedBranches, 672);
  dom.window.close();
});

test("every month has seeded single-speaker timeline variants", async () => {
  const { dom, errors } = createDom({ expose: true });
  await tick(dom.window);
  assert.equal(errors.length, 0, errors.map((error) => error.message).join("\n"));
  const { phases } = dom.window.__PN_TEST__;
  const pack = dom.window.PNTimelineVariants;
  let total = 0;
  let changedBetweenRuns = 0;

  phases.forEach((phase, phaseIndex) => phase.days.forEach((issue, dayIndex) => {
    const variants = pack.build(issue, { phaseIndex, dayIndex });
    assert.ok(variants.length >= 3, `${phaseIndex + 1}/${dayIndex + 1} needs at least three variants`);
    assert.equal(new Set(variants.map((variant) => variant.post)).size, variants.length);
    variants.forEach((variant) => {
      assert.doesNotMatch(variant.npc, /\s(?:&|vs\.?|dan)\s|,/, `${variant.npc} is not a single focal account`);
      assert.ok(variant.handle.startsWith("@"));
    });
    const runA = pack.select(issue, { phaseIndex, dayIndex, seed: 104729 });
    const runB = pack.select(issue, { phaseIndex, dayIndex, seed: 130363 });
    if (runA._variantId !== runB._variantId) changedBetweenRuns++;
    total += variants.length;
  }));

  assert.ok(total >= 216, `${total} variants configured`);
  assert.ok(changedBetweenRuns >= 24, `${changedBetweenRuns} months should differ between two runs`);
  const podcastVariants = pack.build(phases[4].days[0], { phaseIndex: 4, dayIndex: 0 });
  assert.equal(
    podcastVariants.map((variant) => variant.npc).join(" | "),
    "Bang Akbar Pasal | Om Gita Wacana-Wira | Prof. Renal Disrupsi",
  );
  const rupiahVariants = pack.build(phases[2].days[4], { phaseIndex: 2, dayIndex: 4 });
  assert.ok(rupiahVariants.some((variant) => /desa enggak pakai dolar/i.test(variant.post)));
  assert.ok(rupiahVariants.some((variant) => /Satuan Penjilat Pak Gemoyono–Mas Samsul/.test(variant.post)));
  const julyVariants = pack.build(phases[2].days[6], { phaseIndex: 2, dayIndex: 6 });
  assert.ok(julyVariants.some((variant) => /kerja sama pertahanan|rudal/i.test(variant.post)));
  assert.ok(julyVariants.every((variant) => variant.facts.some((fact) => /2026-07-07/.test(fact[2] || ""))));
  assert.equal(phases[2].days[6].status, "ARSIP POLITIK 2026");
  assert.equal(phases[2].days[7].status, "TIMELINE ALTERNATIF");

  const campaignGemoy = pack.build(phases[0].days[1], { phaseIndex: 0, dayIndex: 1 });
  assert.ok(campaignGemoy.some((variant) => variant.npc === "Pak Jenderal Gemoyono" && /joget/i.test(variant.post)));
  const presidentialGemoy = pack.build(phases[1].days[2], { phaseIndex: 1, dayIndex: 2 })
    .find((variant) => variant.npc === "Pak Jenderal Gemoyono");
  assert.equal(presidentialGemoy.stance, "regime");
  assert.match(presidentialGemoy.post, /negara|perwira|strategis/i);
  dom.window.close();
});

test("ending evaluator reflects choices, debt, cash morality, and election outcome", async () => {
  const { dom, errors } = createDom({ expose: true });
  await tick(dom.window);
  assert.equal(errors.length, 0, errors.map((error) => error.message).join("\n"));
  const evaluate = dom.window.PNEndingSystem.evaluate;
  const good = evaluate({
    role: "aktivis", phase: 5, integrity: 88, credibility: 84, democracy: 82,
    network: 86, reach: 68, heat: 30, stress: 45, career: 130,
    money: 500000000, debt: 0, missedPayments: 0, bailoutCount: 0,
    quizAnswered: 20, quizCorrect: 18, perfectMatches: 10, crewMisfires: 1,
    history: Array.from({ length: 20 }, (_, i) => ({ action: ["data", "context", "law", "network"][i % 4] })),
    eventOutcomeProfile: { positive: 30, negative: 2, mixed: 6, neutral: 4 },
    resolvedRipples: Array.from({ length: 34 }, () => ({ tone: "good" })),
    specialties: ["Gerakan kolektif"],
  });
  const bad = evaluate({
    role: "buzzer", phase: 5, integrity: 18, credibility: 25, democracy: 20,
    network: 45, reach: 95, heat: 94, stress: 72, career: 110,
    money: 25000000000, debt: 18000000000, missedPayments: 3, bailoutCount: 2,
    quizAnswered: 10, quizCorrect: 2, perfectMatches: 2, crewMisfires: 12,
    history: Array.from({ length: 25 }, (_, i) => ({ action: ["patriot", "attack", "whatabout", "meme"][i % 4] })),
    eventOutcomeProfile: { positive: 1, negative: 30, mixed: 5, neutral: 6 },
    resolvedRipples: Array.from({ length: 30 }, () => ({ tone: "bad" })),
    specialties: ["Loyalis final"],
  });

  assert.ok(good.performance.score > bad.performance.score);
  assert.ok(good.finance.solvency > bad.finance.solvency);
  assert.ok(good.morality.score > bad.morality.score);
  assert.equal(good.election.winner.key, "reform");
  assert.equal(bad.election.winner.key, "wildcard");
  assert.equal(good.election.candidates.reduce((sum, candidate) => sum + candidate.vote, 0), 100);
  assert.equal(bad.election.candidates.reduce((sum, candidate) => sum + candidate.vote, 0), 100);
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

  const endingText = document.querySelector("#modalContent")?.textContent || "";
  const electionButton = document.querySelector("#electionNight");
  assert.ok(electionButton, `${role} ending must expose election results`);
  electionButton.click();
  await tick(window);
  const electionText = document.querySelector("#modalContent")?.textContent || "";
  const candidateCards = document.querySelectorAll(".candidate-result").length;

  const result = {
    ...window.__PN_TEST__.state,
    configuredEvents: window.__PN_TEST__.specialEvents.length,
    runtimeErrors: errors,
    endingAudit: { endingText, electionText, candidateCards },
  };
  dom.window.close();
  return result;
}

for (const role of ["buzzer", "aktivis"]) {
  test(`${role} campaign reaches a scored election ending with every event resolved`, async () => {
    const state = await runCampaign(role);
    assert.equal(state.runtimeErrors.length, 0);
    assert.equal(state.finished, true);
    assert.equal(state.phase, 5);
    assert.equal(state.day, 12);
    assert.equal(state.eventHistory.length, state.configuredEvents);
    assert.equal(state.eventHistory.length, 42);
    assert.equal(state.narrativeRipples.length, 0);
    assert.equal(state.resolvedRipples.length, 42);
    assert.ok(state.finalReport);
    assert.ok(state.finalReport.performance.score >= 0 && state.finalReport.performance.score <= 100);
    assert.equal(state.finalReport.election.candidates.reduce((sum, candidate) => sum + candidate.vote, 0), 100);
    assert.match(state.endingAudit.endingText, /NILAI KINERJA/);
    assert.match(state.endingAudit.endingText, /Utang/);
    assert.match(state.endingAudit.electionText, /bukan prediksi pemilu dunia nyata/i);
    assert.equal(state.endingAudit.candidateCards, 4);
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
  assert.ok(state.runSeed > 0);
  assert.deepEqual([...state.narrativeRipples], []);
  assert.deepEqual([...state.resolvedRipples], []);
  dom.window.close();
});
