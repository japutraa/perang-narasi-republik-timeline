# Changelog

Semua perubahan penting pada proyek ini dicatat di sini.

## 3.13.0 — 2026-07-13

- Menyatukan seluruh alias Tedi lama menjadi **Mayor Tedi Ketok-Pintu**, termasuk katalog Tokoh, special event, dan data roster.
- Melengkapi setiap roster fase menjadi minimal sembilan tokoh agar rotasi tiga kartu per bulan punya cukup wajah untuk berganti.
- Menambahkan cooldown keras: tokoh yang tampil bulan ini tidak boleh masuk lineup bulan berikutnya. Scheduler tetap mengutamakan jeda dua bulan penuh dan menjaga batas maksimal lima kemunculan per fase.
- Mempertahankan jaminan coverage: semua tokoh di roster enam fase tetap muncul setidaknya sekali sebelum fasenya selesai.
- Menghapus blok **Catatan Admin Aktivis** beserta CSS-nya agar post timeline lebih natural dan tidak ditumpuk hint editorial yang tidak perlu.
- Menambah uji regresi untuk nama Tedi, pool roster minimum, ID duplikat, cooldown antarbulan, batas frekuensi, coverage, dan penghapusan catatan editorial.

## 3.12.0 — 2026-07-13

- Mengaudit seluruh data yang tampil dan mengganti nama politik asli dengan alias parodi, termasuk kartu fakta, special event, roster, katalog, dan varian timeline.
- Memisahkan persona Pak Jenderal Gemoyono: joget-gemoy pada kampanye 2024, lalu pidato komando, ketertiban, omon-omon, dan musuh bersama setelah menjadi presiden.
- Memisahkan ucapan akun utama dari `Catatan Admin Aktivis` agar kritik editorial tidak lagi terdengar sebagai ucapan tokoh rezim.
- Menambahkan model stance `regime`, `critic`, `institutional`, dan `archive`; varian generik kini ditulis dari posisi politik akun yang berbicara.
- Menjadikan militerisasi tema kronologis utama: Mayor Tedi Ketok-Pintu di jabatan sipil, program sipil dalam rantai komando, revisi UU TNI, narasi agen asing, serta pengadaan pertahanan Juli 2026.
- Mengunci batas arsip faktual pada Juli 2026; Agustus 2026 dan seterusnya tetap Timeline Alternatif.
- Mengganti `Yanuar Risky Banget` menjadi `Risky Februari`.
- Menjamin seluruh tokoh roster tampil minimal sekali dalam setiap fase sebelum slot diisi pengulangan.
- Menambahkan test audit alias, stance/kronologi, dan coverage roster tanpa skip.

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
