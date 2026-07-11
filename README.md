# Perang Narasi: Republik Timeline

Game satire politik Indonesia berbasis browser tentang perang narasi, buzzer, aktivisme, propaganda, literasi media, dan kualitas demokrasi.

**Dibuat oleh [Adrian Janitra Putra](https://github.com/japutraa) (`japutraa`).**

## Mainkan

Setelah GitHub Pages diaktifkan, game dapat dimainkan di:

**https://japutraa.github.io/perang-narasi-republik-timeline/**

Game juga dapat dimainkan secara lokal dengan membuka `index.html` langsung di Firefox, Chrome, Edge, atau Safari modern. Tidak ada dependency, proses build, akun, atau koneksi internet yang diwajibkan untuk gameplay utama.

## Tentang game

Pemain memilih salah satu dari dua jalur:

- **Buzzer:** berawal sebagai relawan paslon, lalu dapat naik menjadi operator koalisi, staf narasi, buzzer istana, dan arsitek komunikasi kekuasaan.
- **Aktivis:** berawal sebagai aktivis media sosial, lalu dapat berkembang melalui kampus, riset kebijakan, advokasi konstitusi, dokumenter, atau gerakan kolektif.

Campaign terdiri dari **5 fase politik × 7 hari = 35 hari**, mulai dari pemilu sampai krisis dan perebutan warisan sejarah. Keberhasilan tidak hanya diukur dari viralitas, tetapi juga kredibilitas, integritas, jaringan, kesehatan mental, dan kualitas demokrasi yang ditinggalkan.

Fitur utama:

- 35 skenario kampanye dalam lima fase politik.
- Dua jalur karier dengan spesialisasi dan ending berbeda.
- Sistem kartu retorika, riset, mobilisasi, propaganda, dan kontra-narasi.
- 50 pertanyaan **Cek Nalar** dengan posisi jawaban A–D yang diseimbangkan.
- Cek Nalar dapat dinyalakan atau dimatikan sebelum maupun selama campaign.
- Arsip fakta dan sumber untuk membedakan satire, opini, propaganda, dan klaim faktual.
- Dapat dimainkan offline dalam satu file HTML.

## GitHub Pages

1. Buat repository baru bernama `perang-narasi-republik-timeline` pada akun `japutraa`.
2. Upload seluruh isi folder ini ke root repository, bukan folder pembungkusnya.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch **main**, folder **/(root)**, lalu klik **Save**.
6. GitHub akan menerbitkan game pada URL yang tercantum di atas.

Alternatif melalui terminal:

```bash
git init
git add .
git commit -m "Initial release of Perang Narasi"
git branch -M main
git remote add origin https://github.com/japutraa/perang-narasi-republik-timeline.git
git push -u origin main
```

## Struktur repository

```text
.
├── index.html       # Seluruh game: HTML, CSS, dan JavaScript
├── LICENSE          # Teks lengkap GNU GPL v3
├── README.md        # Dokumentasi proyek
├── GITHUB_SETUP.md  # Nama, deskripsi, homepage, dan topics repo
├── CHANGELOG.md     # Riwayat versi
├── .gitignore
└── .nojekyll        # Mencegah pemrosesan Jekyll pada GitHub Pages
```

## Catatan editorial

Tokoh dan lembaga dalam game adalah **parodi-komposit**. Plesetan tidak boleh dibaca sebagai biografi atau tuduhan faktual terhadap individu tertentu. Jabatan publik, dukungan politik, atau kemunculan figur publik dalam pemerintahan juga tidak otomatis berarti seseorang terlibat dalam operasi buzzer ilegal.

Game ini mengajak pemain menguji teknik propaganda dan aktivisme secara kritis. Tidak ada kubu yang otomatis bermoral: aktivisme yang mengorbankan bukti demi kemarahan dapat berubah menjadi buzzerisme oposisi, sementara komunikasi pemerintah yang transparan dapat memperkuat kepercayaan publik.

## Lisensi

Copyright © 2026 **Adrian Janitra Putra**.

Kode sumber dirilis di bawah **GNU General Public License v3.0**. Lihat file [`LICENSE`](LICENSE). Anda boleh menggunakan, mempelajari, mengubah, dan mendistribusikan ulang game ini sesuai ketentuan GPL v3.

## Kredit

**Game design, writing, and development:** Adrian Janitra Putra — [github.com/japutraa](https://github.com/japutraa)
