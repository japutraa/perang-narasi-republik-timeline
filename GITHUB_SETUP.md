# GitHub Repository Setup

## Recommended repository name

`perang-narasi-republik-timeline`

## Description

> Game satire politik Indonesia tentang buzzer, aktivisme, propaganda, dan literasi demokrasi — langsung dimainkan di browser.

## Homepage

`https://japutraa.github.io/perang-narasi-republik-timeline/`

## Deployment

Package ini memakai GitHub Actions melalui:

`.github/workflows/deploy-pages.yml`

Sesudah semua file dipush ke branch `main`:

1. Buka **Settings → Pages**.
2. Pada **Build and deployment → Source**, pilih **GitHub Actions**.
3. Buka tab **Actions**.
4. Pastikan workflow **Deploy static content to Pages** berjalan.
5. Bila belum berjalan, pilih workflow tersebut lalu tekan **Run workflow** pada branch `main`.

Setiap push berikutnya ke `main` akan otomatis menerbitkan versi terbaru.

## Suggested topics

`browser-game` `indonesia` `political-satire` `civic-education` `media-literacy` `javascript` `html5-game` `indonesian` `gplv3`

## Visibility

Public, supaya GitHub Pages dan lisensi open-source mudah ditemukan.

## About section

Aktifkan:

- Use your GitHub Pages website
- Releases

Wiki dan Packages tidak diperlukan untuk versi statis ini.
