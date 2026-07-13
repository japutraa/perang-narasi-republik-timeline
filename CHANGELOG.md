# Changelog

Semua perubahan penting pada proyek ini dicatat di sini.

## 3.11.0 — 2026-07-13

- Menambahkan minimal tiga alternatif post untuk masing-masing dari 72 bulan: lebih dari 216 varian timeline.
- Menambahkan seed per campaign yang disimpan bersama save; reload konsisten, sedangkan run baru menghasilkan kombinasi timeline berbeda.
- Mengubah post utama menjadi satu akun/tokoh fokus, termasuk memecah panel fase 5 bulan 1 menjadi varian terpisah untuk Bang Akbar Pasal, Om Gita Wacana-Wira, dan Prof. Renal Disrupsi.
- Menambahkan varian berbasis pernyataan terdokumentasi mengenai rupiah–dolar, SPPG, ‘ndasmu etik’, demonstrasi ekonomi, dan narasi agen asing.
- Menambahkan gaya khusus Mas Tiyo Toa serta varian kritik “Satuan Penjilat Prabowo-Gibran” dengan konteks dan tanggapan yang dapat diperiksa.
- Mengembangkan `@fufufafa_archive` menjadi persona komentar acak yang terinspirasi repository arsip, tanpa menetapkan identitas pemilik sebagai fakta.
- Menambahkan label varian dan empat digit seed pada timeline aktif agar perbedaan antarrun terlihat.
- Memisahkan bank variasi bulanan ke `assets/js/timeline-variants.js`.
- Menambahkan pengujian 216+ varian, satu pembicara per post, perbedaan seed, serta mempertahankan simulasi campaign penuh dua kubu.

## 3.10.0 — 2026-07-13

- Menambahkan raport ending 0–100 untuk kinerja, pilihan substantif, moral, utang, solvabilitas, dan sisa uang.
- Menambahkan pangkat satir khusus buzzer dan aktivis berdasarkan rekam permainan.
- Menambahkan empat kandidat fiktif; pilihan serta kondisi akhir pemain menentukan persentase suara dan pemenang pemilu.
- Membuat saldo akhir buzzer berpengaruh pada penilaian moral, terutama bila uang terkumpul lewat pilihan manipulatif.
- Menambah satu strategic event mengenai pidato, rupiah, kredibilitas kebijakan, dan narasi agen asing: total menjadi 42 event, 336 pilihan, dan 672 cabang konsekuensi.
- Menghapus awalan kalimat `FIKSI PREDIKTIF:`, `FIKSI PEMILU:`, serta `PROYEKSI FIKSI:`; episode masa depan kini memakai status Timeline Alternatif yang lebih natural.
- Memoles teks dengan nada netizen Indonesia, karakter-spesifik, dan kritik “omon-omon”, sambil tetap membedakan fakta, korelasi, serta klaim politik.
- Menambahkan persona komentar warga kasar, akun numpang jualan, crypto bro, dan bot judol fiktif tanpa tautan atau ajakan operasional.
- Menyelaraskan alias tokoh yang tersisa, termasuk `Pak Purba-Yey`, `Feli-Xi-Auw`, `Bang Dandy Lensa-Sono`, `Bang Akbar Pasal`, `Om Gita Wacana-Wira`, dan `Feri Latih-Hitung`.
- Memisahkan evaluator ending dan paket komentar ke `assets/js/ending-system.js` serta `assets/js/netizen-pack.js`.
- Menambahkan test evaluator ending dan mempertahankan kompatibilitas key save `perang-narasi-save-v3`.

## 3.9.0 — 2026-07-13

- Menambahkan Mode Bebas untuk memulai permainan dari salah satu dari enam fase dan lompat fase kapan saja.
- Menyesuaikan dana, statistik, dan progres awal sandbox menurut fase yang dipilih untuk kedua kubu.
- Mengganti nama `Prof. Konni Bakso-Rie` menjadi `Prof. Konni BaksLaah`.
- Mengganti nama Nadiem yang masih literal menjadi `Mas Nadim Makaroni` serta memoles nama tokoh lain agar lebih jelas sebagai parodi.
- Menjadikan katalog Tokoh dinamis: daftar modal kini menyertakan seluruh roster enam fase dan penanda fase kemunculannya.
- Menambahkan pengujian Mode Bebas, konsistensi nama parodi, dan sinkronisasi katalog Tokoh.
- Mempertahankan save key `perang-narasi-save-v3` dan migrasi save seri v3.x.

## 3.8.1 — 2026-07-13

- Memperbaiki paket rilis v3.8.0 yang tidak lengkap.
- Memisahkan markup, stylesheet, mesin game, boot diagnostics, manifest, ikon, dan service worker.
- Menambahkan manifest serta app shell offline yang sebelumnya direferensikan tetapi tidak tersedia.
- Memperbarui README dari dokumentasi v3.2.0 ke fitur aktual v3.8.x.
- Menambahkan simulasi otomatis untuk dua kubu, seluruh 72 bulan, 41 strategic events, dan konsekuensi tertunda.
- Mempertahankan save key `perang-narasi-save-v3` agar save seri v3.x tetap dapat dilanjutkan.

## 3.8.0 — 2026-07-13

- Mengubah Event2 menjadi 41 dilema strategis.
- Menyediakan empat pilihan per event untuk kedua kubu: 328 pilihan total.
- Menambahkan 656 cabang konsekuensi berhasil/gagal yang jatuh 1–4 bulan kemudian.
- Menambahkan outcome positif, negatif, netral, dan campuran yang memengaruhi statistik, komentar publik, buff/debuff, riwayat, serta ending.
