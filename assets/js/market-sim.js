/**
 * Pasar Timeline — deterministic USD/IDR and IHSG simulation.
 * Historical anchors are dated editorial snapshots, not a live market feed.
 * Copyright (C) 2026 Adrian Janitra Putra
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
(function (global) {
  "use strict";

  const ARCHIVE_END_INDEX = 31; // August 2026; latest available close is 3 August
  const anchors = [
    { index: 0, usd: 15400, ihsg: 7200, note: "Awal 2024: pasar masih membaca pemilu dan arah transisi." },
    { index: 11, usd: 16100, ihsg: 7080, note: "Akhir 2024: kurs dan saham membawa sisa ketidakpastian transisi." },
    { index: 14, usd: 16640, ihsg: 6500, note: "Maret 2025: rupiah melemah dan IHSG sempat kena trading halt." },
    { index: 19, usd: 16475, ihsg: 7830, note: "Agustus 2025: protes, risiko politik, dan arus modal membuat pasar bergejolak." },
    { index: 24, usd: 16820, ihsg: 9135, note: "Januari 2026: saham sempat mencetak puncak sebelum koreksi tajam." },
    { index: 25, usd: 16888, ihsg: 7923, note: "Februari 2026: isu transparansi pasar dan fiskal memicu aksi jual." },
    { index: 28, usd: 17670, ihsg: 6900, note: "Mei 2026: rupiah menyentuh rekor lemah dan saham kembali tertekan." },
    { index: 29, usd: 17850, ihsg: 6600, note: "Juni 2026: energi global, arus modal, dan kredibilitas kebijakan masih dibaca pasar." },
    { index: 30, usd: 17900, ihsg: 6300, note: "Juli 2026: pasar masih membaca fiskal, energi global, dan ketidakpastian institusi." },
    { index: 31, usd: 17991, ihsg: 6234.5, note: "Data terakhir tersedia 3 Agustus 2026: JISDOR Rp17.991 per US$ dan IHSG ditutup 6.234,50." },
  ];

  const clamp = (number, min, max) => Math.max(min, Math.min(max, number));
  function hash(text) {
    let value = 2166136261;
    for (const character of String(text)) value = Math.imul(value ^ character.charCodeAt(0), 16777619);
    return value >>> 0;
  }
  function noise(seed, index, channel) {
    return (hash(`${seed}:${index}:${channel}`) / 4294967295) * 2 - 1;
  }
  function interpolate(left, right, index, key) {
    if (left.index === right.index) return left[key];
    const progress = (index - left.index) / (right.index - left.index);
    return left[key] + (right[key] - left[key]) * progress;
  }
  function baseline(index) {
    const safeIndex = clamp(Math.round(Number(index) || 0), 0, 71);
    const next = anchors.find((anchor) => anchor.index >= safeIndex) || anchors.at(-1);
    const previous = [...anchors].reverse().find((anchor) => anchor.index <= safeIndex) || anchors[0];
    if (safeIndex <= ARCHIVE_END_INDEX) {
      return {
        usd: Number(interpolate(previous, next, safeIndex, "usd").toFixed(2)),
        ihsg: Number(interpolate(previous, next, safeIndex, "ihsg").toFixed(2)),
        note: next.note,
        archive: true,
      };
    }
    const monthsAhead = safeIndex - ARCHIVE_END_INDEX;
    return {
      usd: Math.round(anchors.at(-1).usd * (1 + monthsAhead * 0.0018)),
      ihsg: Math.round(anchors.at(-1).ihsg * (1 + monthsAhead * 0.0025)),
      note: "Sesudah Agustus 2026, arah pasar sepenuhnya dibentuk oleh seed, risiko global, dan pilihan di dalam game.",
      archive: false,
    };
  }

  function snapshot({ index = 0, seed = 1, stats = {}, signals = {}, previous = null } = {}) {
    const base = baseline(index);
    const credibilityGap = Math.max(0, 55 - (Number(stats.credibility) || 50));
    const integrityGap = Math.max(0, 55 - (Number(stats.integrity) || 50));
    const democracyGap = Math.max(0, 50 - (Number(stats.democracy) || 50));
    const debtBillions = Math.min(40, Math.max(0, Number(stats.debt) || 0) / 1e9);
    const podiumRisk = clamp(Number(stats.podiumRisk) || 0, 0, 100);
    const receipts = clamp(Number(stats.diplomacyReceipts) || 0, -100, 100);
    const policyRisk = credibilityGap * 5 + integrityGap * 2 + democracyGap * 2 + debtBillions * 8 + podiumRisk * 3 - receipts * 1.5;
    const futureScale = index > ARCHIVE_END_INDEX ? 1 : 0;
    const usdJitter = index > ARCHIVE_END_INDEX ? noise(seed, index, "usd") * 135 : 0;
    const ihsgJitter = index > ARCHIVE_END_INDEX ? noise(seed, index, "ihsg") * 95 : 0;
    const usdRaw = base.usd + (policyRisk + (Number(signals.usd) || 0)) * futureScale + usdJitter;
    const ihsgRaw = base.ihsg - (policyRisk * 1.3 - (Number(signals.ihsg) || 0)) * futureScale + ihsgJitter;
    const usd = clamp(base.archive ? Number(usdRaw.toFixed(2)) : Math.round(usdRaw), 13500, 25000);
    const ihsg = clamp(base.archive ? Number(ihsgRaw.toFixed(2)) : Math.round(ihsgRaw), 2500, 12500);
    const oldUsd = Number(previous?.usdIdr) || usd;
    const oldIhsg = Number(previous?.ihsg) || ihsg;
    return {
      usdIdr: usd,
      ihsg,
      usdDelta: usd - oldUsd,
      ihsgDelta: ihsg - oldIhsg,
      cause: signals.cause || base.note,
      archive: base.archive,
      asOf: index === ARCHIVE_END_INDEX ? "3 Agustus 2026" : "",
      monthIndex: index,
    };
  }

  function labels(market = {}) {
    const usdBase = Math.max(1, Number(market.usdIdr) - (Number(market.usdDelta) || 0));
    const ihsgBase = Math.max(1, Number(market.ihsg) - (Number(market.ihsgDelta) || 0));
    const usdPercent = ((Number(market.usdDelta) || 0) / usdBase) * 100;
    const ihsgPercent = ((Number(market.ihsgDelta) || 0) / ihsgBase) * 100;
    return {
      usdPercent,
      ihsgPercent,
      usd: usdPercent >= 1.5 ? "RUPIAH ANJLOK" : usdPercent >= 0.25 ? "RUPIAH MELEMAH" : usdPercent <= -0.25 ? "RUPIAH MENGUAT" : "RUPIAH DATAR",
      ihsg: ihsgPercent <= -2 ? "IHSG AMBLES" : ihsgPercent <= -0.35 ? "IHSG MELEMAH" : ihsgPercent >= 0.35 ? "IHSG MENGUAT" : "IHSG DATAR",
    };
  }

  global.PNMarketSim = { ARCHIVE_END_INDEX, anchors, baseline, snapshot, labels };
})(window);
