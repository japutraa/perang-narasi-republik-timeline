# GitHub Repository Setup

## Recommended repository name

`perang-narasi-republik-timeline`

## Description

> Game satire politik Indonesia tentang buzzer, aktivisme, propaganda, dan literasi demokrasi — langsung dimainkan di browser.

## Homepage

`https://japutraa.github.io/perang-narasi-republik-timeline/`

## Deployment

Package menyertakan workflow otomatis di:

`.github/workflows/deploy-pages.yml`

Workflow mengikuti default branch repository secara otomatis. Nama branch tidak harus `main`; `master` atau nama default lain juga dapat dipakai.

1. Upload seluruh isi package ke root repository, termasuk folder tersembunyi `.github`.
2. Buka **Settings → Pages**.
3. Pada **Build and deployment → Source**, pilih **GitHub Actions**.
4. Pastikan GitHub Actions diizinkan melalui **Settings → Actions → General**.
5. Push commit ke default branch, atau jalankan workflow **Deploy Perang Narasi to GitHub Pages** secara manual dari tab **Actions**.

## Suggested topics

`browser-game` `indonesia` `political-satire` `civic-education` `media-literacy` `javascript` `html5-game` `indonesian` `gplv3`

## Visibility

Public, supaya GitHub Pages dan lisensi open-source mudah ditemukan.

## About section

Aktifkan:

- Use your GitHub Pages website
- Releases

Wiki dan Packages tidak diperlukan untuk versi statis ini.
