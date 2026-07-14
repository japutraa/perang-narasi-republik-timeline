# Perang Narasi: Republik Timeline

> **Identitas Tokoh Konsisten — v3.20.1**  
> Game satire politik Indonesia tentang kekuasaan, buzzer, aktivisme, propaganda, algoritma, dan ingatan publik.

[![Release](https://img.shields.io/badge/release-3.20.1-f4d34a)](https://github.com/japutraa/perang-narasi-republik-timeline/releases)
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

## Fitur v3.20.1

- Balasan pemilik post tidak lagi membeo judul action card lengkap. Mesin mengubahnya menjadi rujukan percakapan seperti *cara membaca pasalnya*, *grafik yang dipilih*, *footage yang dibuka*, atau *pengalihan ke kubu sebelah*.
- Voiceprint pemilik post mendapat variasi pembuka dan penutup berdasarkan posisi respons: mendukung, memverifikasi, membela, menolak, mengoreksi, atau mengarsipkan. Catchphrase karakter tetap bisa muncul, tetapi bukan lagi awalan wajib setiap klik.
- Label membingungkan **AKUN ASLI** diganti menjadi **PEMILIK POST**. Nama action lengkap tetap tersimpan sebagai metadata, sementara chip balasan hanya menampilkan judul pendek agar tidak mengulang subjek panjang dua kali.
- Identitas tokoh kartu memakai resolver kanonis. Bila tokoh kartu dan pemilik post adalah orang yang sama, nama akun, handle, serta avatar mengikuti post aktif dan komentar diberi label **TOKOH YANG SAMA**.
- Mas Dandi kini konsisten memakai `@arsiptayang` ketika muncul sebagai post utama, ability, maupun context combo. Tokoh lain yang memiliki alias handle kanonis memakai aturan yang sama.
- Guard konteks memastikan setiap balasan pemilik post tetap menyebut isu, dokumen, atau warga terdampak meski variasi respons action tertentu terlalu singkat.
- Regresi identitas menyapu seluruh varian timeline dan seluruh 59 kartu roster. Setiap overlap profil wajib dikenali sebagai tokoh yang sama serta menghasilkan handle dan avatar milik post aktif.

## Fitur v3.20.0

- Kolom komentar action kini punya tiga tahap percakapan. Reaksi pertama membaca jurus yang baru dimainkan, reaksi kedua menyebut jurus sebelumnya dan menangkap pola framing, sedangkan reaksi ketiga menegur saturasi serta menuntut bukti atau jawaban konkret.
- Setiap keluarga action hanya dapat dipakai **maksimal tiga kali per bulan**. Ketiganya memakai judul dan pendekatan berbeda yang membaca tema aktif; setelah itu kartu terkunci sampai bulan berikutnya.
- Akun utama timeline, pembaca skeptis, warga, dan pengarsip tetap membalas action card yang benar-benar dipilih. Nama kartu, subjek, dokumen, warga terdampak, dan stance akun dibawa bersama agar klik beruntun tidak mencampur konteks.
- Noise netizen diperluas menjadi akun numpang lewat, pemburu pertamax, salah thread, pencari kerja, rantai doa tante, jualan, bot judol fiktif, dan crypto bro. Setiap gelombang mendapat 1–3 selingan acak; akun ngawur sengaja dipisahkan dari komentar inti.
- Juni 2026 mendapat tiga varian timeline baru tentang lonjakan Pertamax, formula harga BBM, dan benturan dengan sound viral **MBG: Mas Bahlul Ganteng**. Arsip membedakan fakta harga, budaya netizen, dan skenario pengalihan satiris oleh pemain.
- Kartu meme buzzer pada arc tersebut memiliki tiga jurus khusus: menaikkan lagi sound MBG, menyebar poster AI Bahlul glowing di SPBU, serta membanjiri feed dengan video reaction bolu ketan. Jalur aktivis mendapat tiga tandingan yang mengembalikan struk, harga, dan biaya peluang ke layar.
- Regresi baru memastikan batas tiga klik tidak dapat ditembus, keluarga kartu terbuka kembali pada bulan berikutnya, ketiga copy berbeda, komentar bertahap tetap action-linked, dan sumber Pertamax serta lagu MBG ikut terpasang.


## Struktur proyek

```text
.
├── index.html                 # markup dan antarmuka
├── assets/
│   ├── css/game.css           # seluruh stylesheet
│   ├── js/action-copy.js      # copy action card berbasis konteks timeline
│   ├── js/character-voices.js # 93 voiceprint + sumber gaya + renderer dialog
│   ├── js/game.js             # data naratif + mesin permainan
│   ├── js/ending-system.js    # skor, moral, utang, pangkat, dan pemilu
│   ├── js/market-sim.js       # simulasi seed-based USD/IDR dan IHSG
│   ├── js/netizen-pack.js     # persona komentar dan spam satir
│   ├── js/timeline-variants.js # 380 post bulanan, speaker, seed, cooldown
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

Sembilan belas test memeriksa sintaks JavaScript, kelengkapan file modular, lebih dari 5.000 kombinasi action card kontekstual, 59/59 voiceprint roster beserta seluruh focal account timeline, koherensi komentar untuk seluruh action dan stance akun, audit alias politik, 380 varian satu-tokoh, ticker berbasis seed, cooldown serta batas frekuensi pembicara, coverage seluruh roster, Mode Bebas untuk kedua kubu, 43 event × 2 kubu × 4 pilihan, evaluator ending, kompatibilitas save v3, dan simulasi campaign penuh untuk kedua kubu.

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
