# Changelog

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
