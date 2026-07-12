# Changelog

## 3.4.2 — Phase-Locked Action Deck Edition

- Mengubah batas pemakaian action dari per bulan menjadi per fase/tahun.
- Action yang sudah dipakai tidak kembali ketika bulan berganti; progresnya disimpan dalam autosave berdasarkan fase dan keluarga kartu.
- Menambahkan 60 slot unik untuk setiap keluarga action pada setiap fase, cukup untuk seluruh 12 bulan tanpa mengulang judul.
- Membuat nama dan deskripsi varian menggabungkan teknik action dengan tema fase seperti MBG, UU TNI, rupiah, Danantara, deepfake, dan rekap 2029.
- Menghubungkan komentar secara langsung ke judul action yang benar-benar dipilih.
- Menambahkan respons khusus per keluarga action untuk bapak Facebook, Gen Z, emak grup WA, anak PDF, milenial sotoy, fanwar, dan akun konspirasi.
- Menambahkan migrasi save 3.4.1 agar penggunaan kartu pada bulan aktif dibawa ke counter fase baru.

## 3.4.1 — Rotating Action Deck Edition

- Memisahkan area judul dan harga pada action card agar tidak overlap.
- Setiap format action hanya dapat dipakai sekali per bulan.
- Setelah dipakai, kartu otomatis diganti varian baru dengan nama dan deskripsi berbeda tetapi mekanik sejenis.
- Menambahkan hingga empat format unik untuk setiap keluarga action sebelum pendekatan tersebut habis pada bulan aktif.
- Menyimpan progres varian action di autosave dan tetap kompatibel dengan save versi 3.x.

## 3.4.0 — Ekonomi Politik & Kolom Warga Edition

### Added

- Progressive action pricing across all six phases and career levels.
- Separate patron economy for buzzers and donation economy for activists.
- Debt, monthly interest, minimum installments, missed payments, credit limits, and debt management UI.
- Bankruptcy ending with optional bailout routes.
- Buzzer bailout option **Insya Allah Komisaris** and activist bailout paths through **Koperasi Gerakan** or **Pinjol Algoritma**.
- Special event **Insya Allah Komisaris** about concurrent executive and SOE commissioner roles.
- Active wildcard **Guru Gembul-bul** with a once-per-phase context/data ability.
- Threaded comment replies that explicitly respond to the current tweet and chosen action.
- Topic-aware jokes for bapak Facebook, Gen Z, emak group chat, PDF readers, fanwar accounts, millennials, and conspiracy accounts.

### Changed

- Buzzer starts with substantially larger operational capital and receives larger monthly patron invoices.
- Activist starts with a smaller movement treasury and receives limited donations and community contributions.
- Special-event expenses scale with phase and role.
- Final recap now includes bailout count and outstanding debt.
- Comment threads prioritize issue-specific discussion before random timeline noise.

### Fixed

- Negative cash values now render correctly instead of appearing as Rp0.
- Players with no affordable action receive a clear financing/game-over route instead of a silent disabled deck.

## 3.3.0 — Kolom Netizen & Akun Hantu Edition

- Merombak komentar menjadi persona netizen yang mudah dibaca dan berbeda gaya: bapak Facebook, Gen Z base, milenial sotoy, emak grup WA, anak PDF, fanwar, akun konspirasi, dan akun forum lama.
- Menambahkan memori komentar agar teks yang sama tidak cepat berulang.
- Mengubah Radar Trend menjadi bisikan dari persona berbeda dengan bahasa yang lebih natural dan receh.
- Menambahkan **Bossman Mardi-Gitu** sebagai wildcard fase 2027 dengan ability Tarik Benang Merah Global.
- Menambahkan special event **Akun Lama, Koalisi Baru** pada 2024 dan **Cache Lama Ikut Kampanye Lagi** pada 2028.
- Pilihan pemain pada event pertama disimpan dan mengubah bonus, penalti, serta narasi plot twist pada event kedua.
- Menandai secara eksplisit bahwa kepemilikan akun @fufufafa tidak diperlakukan sebagai fakta yang telah terbukti.
- Menambahkan sumber arsip untuk kontroversi akun Kaskus dan memperluas disclaimer anti-doxing serta standar bukti.
- Mempertahankan kompatibilitas save versi 3.x.

## 3.2.0 — Crew Ability Edition

- Mengubah panel **Tim & Mentor** dari dekorasi menjadi sistem gameplay aktif.
- Menambahkan 36 karakter fase yang unik: tiga karakter per jalur pada setiap fase, tanpa pengulangan roster lintas tahun.
- Setiap mentor atau cameo memiliki kemampuan khusus yang hanya dapat dipakai satu kali dalam fase tersebut.
- Menambahkan buff action: bonus damage, diskon biaya, pengali engagement, perlindungan penalti moral, dan radar tren.
- Menyesuaikan pemilihan karakter dengan tema fase: rebranding pemilu, tahun pertama pemerintahan, tekanan fiskal dan ruang sipil, negara korporasi, pra-pemilu influencer, serta pemilu 2029.
- Menambahkan indikator ability terpakai, buff aktif, log crew combo, histori ability pada menu Karier, dan jumlah crew call pada final.
- Mengubah gaya unggahan serta balasan menjadi lebih kasual, netizen-like, dan berbeda menurut persona akun.
- Mempertahankan kompatibilitas autosave versi 3.x.

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
