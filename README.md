# Perang Narasi: Republik Timeline

> **Multi-Timeline Run & Fufufafa Cache — v3.11.0**  
> Game satire politik Indonesia tentang kekuasaan, buzzer, aktivisme, propaganda, algoritma, dan ingatan publik.

[![Release](https://img.shields.io/badge/release-3.11.0-f4d34a)](https://github.com/japutraa/perang-narasi-republik-timeline/releases)
[![Platform](https://img.shields.io/badge/platform-browser-8bd3ff)](https://japutraa.github.io/perang-narasi-republik-timeline/)
[![License](https://img.shields.io/badge/license-GPL--3.0-a9f98f)](LICENSE)

## Mainkan

**https://japutraa.github.io/perang-narasi-republik-timeline/**

Game tidak memerlukan akun, backend, build step, atau dependency runtime. Semua permainan berlangsung di browser dan save hanya disimpan secara lokal.

## Tentang game

Pemain memilih salah satu dari dua jalur:

- **Relawan Paslon → mesin komunikasi kekuasaan**
- **Aktivis Timeline → jaringan kampus, masyarakat sipil, watchdog, atau figur publik**

Campaign membentang selama **6 fase × 12 bulan = 72 episode**, dari Pemilu 2024 sampai Pemilu 2029. Bagian 2024 hingga Juli 2026 mengambil inspirasi dari peristiwa politik yang terdokumentasi. Episode setelahnya berada dalam **Timeline Alternatif**, bukan ramalan atau klaim faktual.

## Fitur v3.11.0

- Mode **Kronik** untuk campaign penuh dan **Mode Bebas** untuk mulai atau lompat ke fase 2024–2029 mana saja.
- Setiap bulan memiliki minimal tiga alternatif post utama: **216+ varian timeline** untuk 72 bulan.
- Seed campaign menentukan varian yang muncul dan ikut tersimpan di save. Reload mempertahankan timeline yang sama; campaign baru menyusun kombinasi lain.
- Setiap post utama hanya berfokus pada satu akun/tokoh. Panel ramai tetap boleh muncul sebagai special event, bukan sebagai satu tweet keroyokan.
- Varian arsip memakai pernyataan kontroversial yang terdokumentasi, termasuk komentar rupiah–dolar, polemik SPPG, narasi agen asing, serta arsip fufufafa; kutipan, parafrasa, dan satire dibedakan lewat kartu sumber.
- Akun `@fufufafa_archive` kini dapat muncul acak di kolom komentar dengan gaya forum lama. Labelnya selalu mengingatkan bahwa identitas pemilik belum terbukti final.
- Raport ending yang menilai kinerja, mutu pilihan, moral, utang, solvabilitas, dan sisa uang pemain.
- Empat calon presiden fiktif dengan persentase suara dinamis; pilihan pemain ikut menentukan siapa yang menang.
- Pangkat akhir satir berdasarkan peran dan rekam permainan, dari **Arsiparis Republik Anti-Amnesia** sampai **Sultan Invoice, Fakir Nurani**.
- Moral buzzer kini ikut membaca sisa uang: saldo besar yang dikumpulkan lewat pilihan manipulatif bukan lagi dianggap kemenangan bersih.
- Komentar netizen lebih liar dan Indonesia: ada warga ngamuk, akun numpang jualan, crypto bro, serta bot judol fiktif tanpa tautan atau ajakan yang dapat dipakai.
- Wording timeline dipoles agar lebih mengalir, karakter-spesifik, dan dekat dengan nada kolom Omong-Omong: satire tenang, bukti dulu, lalu tusukan di akhir.
- Kritik 2026 mencakup tekanan rupiah dan pasar, defisit, gaya pidato “omon-omon”, serta produksi musuh bersama—dengan pemisahan tegas antara korelasi pasar dan klaim sebab-akibat.
- Daftar Tokoh yang disinkronkan otomatis dari seluruh roster enam fase, lengkap dengan penanda fase kemunculan.
- Nama karakter dipoles menjadi plesetan yang lebih jelas fiktif—termasuk **Prof. Konni BaksLaah** dan **Mas Nadim Makaroni**—tanpa mengubah atribusi di Arsip Fakta.
- 72 skenario bulanan dalam enam fase politik.
- 42 strategic events untuk masing-masing kubu.
- Empat strategi per event: **336 pilihan** di seluruh kombinasi event dan kubu.
- **672 cabang konsekuensi** berhasil/gagal yang dapat jatuh 1–4 bulan kemudian.
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
│   ├── js/ending-system.js    # skor, moral, utang, pangkat, dan pemilu
│   ├── js/netizen-pack.js     # persona komentar dan spam satir
│   ├── js/timeline-variants.js # 216+ post bulanan, speaker, seed, sumber
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

Sebelas test memeriksa sintaks JavaScript, kelengkapan file modular, 216+ varian satu-tokoh, perbedaan seed antarrun, sinkronisasi roster Tokoh, Mode Bebas untuk kedua kubu, 42 event × 2 kubu × 4 pilihan, evaluator ending, kompatibilitas save v3, dan simulasi campaign penuh untuk kedua kubu.

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
- Kutipan singkat yang terdokumentasi ditautkan ke sumber; reaksi dan dialog karakter tetap satire.
- Arsip fufufafa dapat diverifikasi sebagai kumpulan unggahan, tetapi identitas pemilik akun tidak diperlakukan sebagai fakta final.
- Dukungan politik, jabatan publik, dan kerja komunikasi tidak otomatis membuktikan seseorang adalah buzzer berbayar.
- Tudingan, bantahan, dakwaan, putusan, serta upaya hukum harus dibedakan.
- Episode masa depan berada di Timeline Alternatif dan tidak diperlakukan sebagai fakta.
- Kemenangan karier tidak selalu berarti kemenangan demokrasi.

## Kredit

**Game design, writing, and development:**  
[Adrian Janitra Putra](https://github.com/japutraa) — `japutraa`

## Lisensi

Copyright © 2026 Adrian Janitra Putra.

Kode dirilis di bawah [GNU General Public License v3.0 or later](LICENSE).
