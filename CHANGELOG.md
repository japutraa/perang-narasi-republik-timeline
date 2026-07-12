# Changelog

## 3.1.0 — Voice & Trend Edition

- Memperbaiki layout final malam pemilu agar teks tidak tertutup animasi kotak dan kertas suara.
- Memisahkan narasi final dan ilustrasi ke layout responsif dua kolom, lalu menumpuknya pada layar kecil.
- Menambahkan action card kontekstual untuk enam fase serta override isu seperti pemilu, MBG, fiskal, UU TNI, dokumenter, figur publik, dan Pemilu 2029.
- Membuat biaya action meningkat secara bertahap mengikuti skala operasi setiap fase.
- Menambahkan sistem gaya komunikasi karakter: komando, kalkulator fiskal, ceramah algoritmik, boardroom explainer, monolog aktivis, dokumenter, pernyataan kampus, konten vertikal, dan bot sintetis.
- Memperluas bank komentar berdasarkan isu dan fase.
- Menambahkan balasan langsung dari akun pembuat unggahan serta label **Akun Asli**.
- Menambahkan komentar **Radar Trend** yang memberi petunjuk mengenai isu bulan berikutnya.
- Mempertahankan kompatibilitas autosave versi 3.x.

## 3.0.4 — Dynamic Breaking Ticker

- Membuat billboard **BREAKING** berubah mengikuti keenam fase campaign.
- Menambahkan headline khusus untuk Pemilu 2024, tahun pertama pemerintahan, tekanan ekonomi 2026, dan tiga fase fiksi prediktif 2027–2029.
- Mengembalikan ticker kronik umum saat pemain kembali ke menu utama.
- Memulai ulang animasi ticker ketika fase berubah agar headline baru langsung terbaca.

## 3.0.3 — Safe Main Menu

- Mengganti tombol **Ulang** menjadi **Menu Utama**.
- Menambahkan dialog konfirmasi untuk menyimpan progres sebelum kembali ke menu.
- Kembali ke menu tidak lagi menghapus save atau mereset campaign secara permanen.
- Opsi tanpa simpan manual tetap mempertahankan autosave terakhir.
- Mengganti mentor fase pertama buzzer dari pengulangan Narasi Bersama Konsultan menjadi **Kak Gemoyfikasi Nasional**.

## 3.0.2 — Chronicle Continuity Fix

- Menghapus premature game over akibat stres 100, kredibilitas 0, atau saldo negatif.
- Mengubah kondisi kritis menjadi **Krisis Karier** dengan tiga pilihan pemulihan dan konsekuensi permanen.
- Menjamin campaign utama hanya berakhir pada fase 6, bulan 12.
- Menyimpan riwayat krisis dalam autosave dan menampilkannya pada rekap final.
- Mempertahankan kompatibilitas save versi 3.x.

## 3.0.1 — Preview & Runtime Fix

- Memperbaiki error startup akibat tombol `saveBtn` belum tersedia di DOM.
- Menambahkan tombol **Simpan** manual ke panel kontrol.
- Memperbaiki elemen kalender bulanan yang hilang dan menyebabkan render fase pertama berhenti.
- Menambahkan binding event yang tahan terhadap elemen opsional.
- Menampilkan seluruh enam fase pada layar awal.
- Mempertahankan autosave dan kompatibilitas save v3.0.0.

## 3.0.0 — Six-Year Chronicle

- Campaign diperluas menjadi 6 fase dan 72 bulan.
- Arsip politik 2024–Juli 2026 dan skenario fiksi prediktif 2026–2029.
- Autosave lokal dan Continue dari permainan terakhir.
- Tokoh baru: Felix Si-Auw, Raymond Cuan-Check, dan figur komposit lain.
- Special event baru untuk politik investasi, iklim, AI, dana kampanye, dan Pemilu 2029.
- Final malam pemilu sinematik dengan open ending.
- UI hari diubah menjadi kalender bulanan.


## 2.4.3 — 2026-07-12

- Membersihkan catatan teknis dari antarmuka Cek Nalar.
- Menyederhanakan label Special Event tanpa penanda posisi hari internal.
- Tidak ada perubahan pada logika soal, event, atau gameplay.

## 2.4.2 — 2026-07-12

- Memperbaiki trigger deployment agar mengikuti default branch repository secara otomatis, bukan hanya branch `main`.
- Menambahkan trigger manual melalui `workflow_dispatch`.
- Memisahkan proses persiapan artifact dan deployment menjadi dua job dengan dependensi eksplisit.
- Mengunggah hanya file situs publik dari direktori `_site`, sehingga artifact Pages lebih bersih dan konsisten.
- Menambahkan pemeriksaan keberadaan `index.html` sebelum deployment.

## 2.4.0 — 2026-07-12

- Mengembalikan tokoh plesetan utama, termasuk Pak Jenderal Gemoyono, Mas Samsul Raka Buming-Buming, Mayor Tedi Beruang, Pak Bahlul Serba Bisa, dan Narasi Bersama Konsultan.
- Menambahkan roster Kabinet Gemoyverse serta aktivis, pakar, jurnalis, dokumenteris, dan aktivis-influencer dalam bentuk parodi-komposit.
- Menambahkan 21 special event yang muncul di antara hari-hari campaign.
- Mengintegrasikan catatan 100 hari YLBHI, Indonesia Gelap, revisi UU TNI, rangkaian demonstrasi, 17+8, reshuffle Menteri Keuangan, serta tekanan ekonomi sebagai konteks event.
- Membuat repost, like, comment, dan views berubah berdasarkan aksi pemain.
- Menambahkan kolom komentar interaktif, sentimen, dan estimasi distribusi organik/terkoordinasi.
- Menaikkan skala dana dan biaya permainan ke jutaan hingga miliaran rupiah.
- Menambahkan format angka ringkas `rb`, `jt`, `M`, dan `T`.
- Memperbarui README menjadi dokumentasi release 2.4.0.

## 2.3.2 — 2026-07-11

- Menambahkan workflow GitHub Actions untuk deployment otomatis ke GitHub Pages.
- Menggunakan pola static Pages: checkout, configure, upload artifact, dan deploy.
- Mengubah panduan Pages dari **Deploy from a branch** menjadi **GitHub Actions**.
- Menambahkan badge status deployment pada README.

## 2.3.1 — 2026-07-11

- Menghapus panel promosi “Baru di versi 2.2” dari layar awal.
- Menyederhanakan pengaturan Cek Nalar agar menyatu dengan desain utama.
- Fitur toggle dan bank soal tetap tidak berubah.

## 2.3.0 — 2026-07-11

- Menyiapkan struktur repository yang GitHub-ready.
- Menambahkan metadata author, creator, Open Graph, canonical URL, dan theme color.
- Menampilkan kredit **Adrian Janitra Putra / japutraa** berdampingan dengan GNU GPL v3 di dalam game.
- Menambahkan tautan profil GitHub pembuat game.
- Mengganti LICENSE ringkas dengan teks lengkap resmi GNU GPL v3.
- Menambahkan dokumentasi deployment GitHub Pages.

## 2.2.0 — 2026-07-11

- Memperluas bank Cek Nalar menjadi 50 pertanyaan.
- Menyeimbangkan posisi jawaban benar pada A, B, C, dan D sepanjang deck.
- Menambahkan kontrol Cek Nalar ON/OFF yang jelas sebelum dan selama campaign.
- Mencegah soal berulang sebelum seluruh deck habis.

## 2.0.0 — 2026-07-11

- Memperluas campaign menjadi lima fase dan 35 hari.
- Menambahkan jalur karier, spesialisasi, promosi, dan ending lintas fase.
