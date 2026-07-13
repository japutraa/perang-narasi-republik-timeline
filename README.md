# Perang Narasi: Republik Timeline

> **Free Mode & Parody Cast Edition — v3.9.0**  
> Game satire politik Indonesia tentang kekuasaan, buzzer, aktivisme, propaganda, algoritma, dan ingatan publik.

[![Release](https://img.shields.io/badge/release-3.9.0-f4d34a)](https://github.com/japutraa/perang-narasi-republik-timeline/releases)
[![Platform](https://img.shields.io/badge/platform-browser-8bd3ff)](https://japutraa.github.io/perang-narasi-republik-timeline/)
[![License](https://img.shields.io/badge/license-GPL--3.0-a9f98f)](LICENSE)

## Mainkan

**https://japutraa.github.io/perang-narasi-republik-timeline/**

Game tidak memerlukan akun, backend, build step, atau dependency runtime. Semua permainan berlangsung di browser dan save hanya disimpan secara lokal.

## Tentang game

Pemain memilih salah satu dari dua jalur:

- **Relawan Paslon → mesin komunikasi kekuasaan**
- **Aktivis Timeline → jaringan kampus, masyarakat sipil, watchdog, atau figur publik**

Campaign membentang selama **6 fase × 12 bulan = 72 episode**, dari Pemilu 2024 sampai Pemilu 2029. Bagian 2024 hingga Juli 2026 mengambil inspirasi dari peristiwa politik yang terdokumentasi. Episode setelahnya ditandai jelas sebagai **fiksi prediktif**, bukan ramalan atau klaim faktual.

## Fitur v3.9.0

- Mode **Kronik** untuk campaign penuh dan **Mode Bebas** untuk mulai atau lompat ke fase 2024–2029 mana saja.
- Daftar Tokoh yang disinkronkan otomatis dari seluruh roster enam fase, lengkap dengan penanda fase kemunculan.
- Nama karakter dipoles menjadi plesetan yang lebih jelas fiktif—termasuk **Prof. Konni BaksLaah** dan **Mas Nadim Makaroni**—tanpa mengubah atribusi di Arsip Fakta.
- 72 skenario bulanan dalam enam fase politik.
- 41 strategic events untuk masing-masing kubu.
- Empat strategi per event: **328 pilihan** di seluruh kombinasi event dan kubu.
- **656 cabang konsekuensi** berhasil/gagal yang dapat jatuh 1–4 bulan kemudian.
- Outcome positif, negatif, netral, dan campuran yang memengaruhi statistik, komentar, buff/debuff, riwayat keputusan, serta ending.
- Tim & Mentor dengan tiga kartu aktif per bulan, seimbang untuk kedua kubu dan didistribusikan sepanjang timeline.
- Sistem deduksi crew: match sempurna membuka follow-up card khusus; salah memilih tokoh tetap menghabiskan ability.
- Action deck kontekstual, ekonomi progresif, utang, bailout, krisis karier, dan ending kebangkrutan.
- Engagement, komentar publik, Radar Trend, Arsip Fakta, serta Cek Nalar opsional.
- Autosave dan Continue yang tetap kompatibel dengan save seri v3.x.
- PWA/offline app shell tanpa analytics dan tanpa pengiriman data permainan.

## Struktur proyek

```text
.
├── index.html                 # markup dan antarmuka
├── assets/
│   ├── css/game.css           # seluruh stylesheet
│   ├── js/game.js             # data naratif + mesin permainan
│   ├── js/runtime.js          # boot diagnostics + registrasi offline
│   └── icons/icon.svg         # ikon lokal
├── manifest.webmanifest       # metadata PWA
├── sw.js                      # offline cache
├── tests/game.test.mjs        # smoke test + simulasi 72 bulan
├── .github/workflows/
│   └── deploy-pages.yml       # test dan deploy GitHub Pages
├── CHANGELOG.md
├── LICENSE
└── package.json
```

Tidak ada library pihak ketiga yang dikirim ke browser. `jsdom` hanya merupakan dev dependency untuk simulasi otomatis dan tidak ikut ke runtime game.

## Menjalankan secara lokal

Karena rilis modular memakai beberapa file, jalankan static server dari root repo:

```bash
python3 -m http.server 8080
```

Lalu buka `http://localhost:8080`.

## Test

```bash
npm ci
npm test
```

Test memeriksa sintaks JavaScript, kelengkapan file modular, sinkronisasi roster Tokoh, Mode Bebas untuk kedua kubu, 41 event × 2 kubu × 4 pilihan, dua cabang konsekuensi untuk setiap pilihan, kompatibilitas save v3, dan simulasi campaign penuh untuk kedua kubu.

## Deploy ke GitHub Pages

1. Buat repository bernama `perang-narasi-republik-timeline` di akun `japutraa`.
2. Upload isi folder ini ke branch `main`.
3. Buka **Settings → Pages** dan pilih **GitHub Actions** sebagai Source.
4. Workflow akan menjalankan test lalu menerbitkan game secara otomatis.

## Privasi dan save game

Save memakai key `perang-narasi-save-v3` pada `localStorage`. Tidak ada akun, server analytics, tracking pixel, atau pengiriman data permainan. Menghapus data situs di browser juga akan menghapus save lokal.

## Prinsip editorial

- Satire bukan pengganti verifikasi.
- Tokoh adalah plesetan atau komposit, bukan biografi.
- Dukungan politik, jabatan publik, dan kerja komunikasi tidak otomatis membuktikan seseorang adalah buzzer berbayar.
- Tudingan, bantahan, dakwaan, putusan, serta upaya hukum harus dibedakan.
- Episode masa depan selalu diberi label fiksi prediktif.
- Kemenangan karier tidak selalu berarti kemenangan demokrasi.

## Kredit

**Game design, writing, and development:**  
[Adrian Janitra Putra](https://github.com/japutraa) — `japutraa`

## Lisensi

Copyright © 2026 Adrian Janitra Putra.

Kode dirilis di bawah [GNU General Public License v3.0 or later](LICENSE).
