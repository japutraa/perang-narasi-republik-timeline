/**
 * Perang Narasi — Indonesian timeline voices and deliberate comment-section noise.
 * All gambling/shop accounts are fictional parody and contain no usable destination.
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

(() => {
  "use strict";

  const personas = {
    seller: {
      label: "NUMPANG JUALAN",
      avatars: ["🛍️", "🧴", "👚", "📦"],
      handles: ["@racuncheckout", "@preloved_bekasrapat", "@serumglowingmurah", "@jastipdekatistana"],
      openers: ["Maaf OOT kak, ", "Izin lapak admin 🙏 ", "Yang capek habis debat boleh cek profil, ", "Numpang lewat sebelum komen dikunci: "],
      closers: [" Bisa COD depan minimarket.", " Ongkir ditanggung yang kalah debat.", " Jangan lupa pakai kode REPUBLIKCAPEK.", " Admin hapus kalau nggak berkenan ya kak 🙏"],
      bodies: [
        "serum pencerah diskon 70%, hasil tidak secepat klarifikasi pemerintah tapi lumayan",
        "jual kemeja putih bekas konferensi pers, baru dipakai sekali buat bilang ‘situasi terkendali’",
        "open PO tote bag BACA DOKUMEN, ironisnya deskripsi produk belum gue baca",
        "jastip meterai, map merah, dan gorengan buat yang masih nunggu lampiran resmi",
      ],
    },
    judol: {
      label: "BOT JUDOL NYASAR",
      avatars: ["🎰", "🤑", "🍒", "🚨"],
      handles: ["@GACOR_TAPI_FIKTIF", "@slotrapat777", "@maxwin_omon", "@adminjackpotpalsu"],
      openers: ["🔥 INFO GACOR PALSU 🔥 ", "MIN DEPO—eh salah kolom, ", "JACKPOT MALAM INI: ", "Akun negara kena hack? bukan, ini cuma bot: "],
      closers: [" Link sengaja nggak ada, tolol.", " Kalau bisa menang terus namanya bukan judi, Bang.", " Jangan klik apa pun; adminnya juga fiktif.", " Rumah habis, bandar tetap bikin story motivasi."],
      bodies: [
        "modal receh dijanjikan jadi miliaran—mirip janji kampanye, bedanya ini terang-terangan nipu",
        "bonus member baru 200%, syarat dan akal sehat disembunyikan di halaman 84",
        "pola gacor anti-rungkad tersedia setelah Anda menyerahkan uang dan harga diri",
        "bandar selalu menang; rakyat disuruh menyebut kekalahan sebagai proses pembelajaran",
      ],
    },
    cryptoBro: {
      label: "BRO CUAN DADAKAN",
      avatars: ["🚀", "🪙", "📉", "🌕"],
      handles: ["@to_the_bulan", "@cuanataumiskin", "@whitepaperbelumbaca", "@brofundamental"],
      openers: ["Bukan financial advice, tapi ", "Semua ini bisa selesai kalau negara masuk blockchain, ", "Bro dengerin gue, ", "Gue baca dua thread ekonomi dan kesimpulannya "],
      closers: [" DYOR, singkatan dari duitnya ya orang rugi.", " Kalau turun berarti diskon, kalau nol berarti pengalaman.", " Whitepaper menyusul setelah token laku.", " Admin project sekarang centang dua doang."],
      bodies: [
        "rupiah lemah karena belum punya roadmap to the moon",
        "utang itu cuma leverage kalau lo ngomongnya pakai bahasa Inggris",
        "fundamental negara kuat, portfolio gue yang sedang berziarah",
        "solusinya tokenisasi bansos—anjing, bercanda, jangan benar-benar dibuat",
      ],
    },
    lewatGan: {
      label: "CUMA NUMPANG LEWAT",
      avatars: ["🚶", "🛵", "👀", "🩴"],
      handles: ["@numpanglewatgan", "@scrollterus", "@salahbelokgan", "@cendolbelakangan"],
      openers: ["Ane cuma numpang lewat gan, ", "Nggak ngikutin dari awal, tapi ", "Izin lewat, jangan diseret ke kubu mana-mana: ", "Pertamax—eh, pertama kali lewat thread ini: "],
      closers: [" Lanjut scroll, gan.", " Cendol virtual buat yang baca sampai sini.", " Jangan reply panjang, kuota ane kritis.", " Ane balik jadi silent reader."],
      bodies: [
        "rame amat, kirain ada pembagian sembako ternyata pembagian label pengkhianat",
        "ane belum paham isunya tapi admin yang paling caps lock biasanya paling butuh tidur",
        "thread politik selalu mulai dari data lalu berakhir ada yang jual serum",
        "semoga yang benar menang; yang salah minimal jangan jadi komisaris dulu",
      ],
    },
    firstHunter: {
      label: "PEMBURU PERTAMAX",
      avatars: ["🥇", "⛽", "1️⃣", "🏃"],
      handles: ["@pertamaxgan", "@firstduluisi", "@komensebelumbaca", "@satusatunya"],
      openers: ["PERTAMAX GAN—lah kok naik, ", "FIRST sebelum baca: ", "Amankan podium komentar dulu, ", "Saya datang paling awal untuk bilang "],
      closers: [" Sekarang baru baca artikelnya.", " Ternyata salah thread, tetap first.", " Hadiahnya mana admin?", " Bensin mahal, komentar masih gratis."],
      bodies: [
        "komentar pertama tidak punya substansi, sama seperti beberapa konferensi pers",
        "gue cuma ngejar first, negara malah ngejar engagement",
        "belum tahu siapa benar tapi posisi komentar sudah saya amankan",
        "tolong bedakan Pertamax komentar dengan Pertamax yang bikin dompet batuk",
      ],
    },
    salahThread: {
      label: "SALAH THREAD",
      avatars: ["🧭", "🍲", "🐈", "📺"],
      handles: ["@nyasarberanda", "@kirainresep", "@mininibukangrup", "@salahpintu"],
      openers: ["Min maaf salah masuk, ", "Kirain ini thread resep bolu ketan, ", "Lho ini bukan grup pecinta kucing? ", "Saya dari FYP sebelah, "],
      closers: [" Yaudah sekalian nitip sandal.", " Mohon arah pulang.", " Admin jangan ban, saya bingung beneran.", " Oke lanjut debatnya."],
      bodies: [
        "kok semua orang marah dan nggak ada yang kasih takaran tepung",
        "judulnya MBG, saya kira Masak Bareng Gratis",
        "mau tanya jadwal bola malah dapat kuliah biaya peluang",
        "saya cari video kucing, algoritma memberi rapat kabinet",
      ],
    },
    pencariKerja: {
      label: "DROP CV DI MANA SAJA",
      avatars: ["📄", "💼", "🧑‍💻", "🙏"],
      handles: ["@opentoworkbanget", "@cvterlampir", "@freshgradlelah", "@hrdmohonlihat"],
      openers: ["Maaf OOT, izin drop CV: ", "Kalau ada lowongan admin klarifikasi, ", "Saya fresh graduate dan bisa Excel, ", "Mumpung pejabatnya kumpul, "],
      closers: [" Bersedia ditempatkan kecuali di kolom judol.", " Ekspektasi gaji menyesuaikan harga Pertamax.", " Portofolio ada, orang dalam belum.", " Terima kasih atas atensinya, HR jangan ghosting."],
      bodies: [
        "saya mampu membuat grafik tanpa memotong sumbu dan itu rupanya skill langka",
        "butuh kerja, bisa menulis notulen yang kesimpulannya lebih dari ‘akan dikoordinasikan’",
        "pengalaman tiga tahun disuruh entry level, pejabat tiga jabatan disebut pengabdian",
        "bisa bikin poster AI juga, tapi janji tidak akan memberi menteri rahang enam-pack",
      ],
    },
    botDoa: {
      label: "RANTAI DOA & HOAKS TANTE",
      avatars: ["🙏", "🌹", "☕", "📿"],
      handles: ["@sebarkanke7grup", "@tanteonline", "@aminpalingkeras", "@kopipagiberkah"],
      openers: ["Aamiin dulu meski belum baca, ", "Teruskan ke tujuh grup sebelum magrib: ", "Tante cuma mengingatkan, ", "Info dari grup alumni katanya "],
      closers: [" Yang tidak meneruskan tetap semoga sehat.", " Sudah dicek ponakan tante, katanya sumbernya ‘percaya aja’.", " Aamiin paling kencang dapat stiker bunga.", " Jangan debat sama tante, tensi naik."],
      bodies: [
        "semoga negeri aman dan para admin diberi kekuatan membaca link yang mereka kirim sendiri",
        "katanya besok semua harga turun kalau pesan ini tidak diputus, tapi kok mencurigakan ya",
        "doa baik tidak perlu diselipkan foto pejabat dan nomor rekening panitia",
        "semoga yang korup tobat sebelum sempat bikin podcast klarifikasi",
      ],
    },
    rageCitizen: {
      label: "WARGA HABIS SABAR",
      avatars: ["😡", "🗯️", "🩴", "🤬"],
      handles: ["@capekdibohongin", "@wargabukanfiguran", "@bangsatkokrapatlagi", "@pajaksayadipakaiapa"],
      openers: ["Anjing, ", "Bangsat, ", "Gue nanya baik-baik dari tadi: ", "Sumpah ya, "],
      closers: [" Jangan suruh rakyat sabar lagi.", " Itu duit publik, bukan saldo game.", " Jawab lurus atau minggir dari mikrofon.", " Capek, Bang, negara kok hobi bikin side quest."],
      bodies: [
        "pertanyaannya sederhana, kenapa jawabannya muter sampai antek asing lagi",
        "orang lagi ngomong harga hidup, pejabat malah audisi siapa paling nasionalis",
        "kalau semua kritik disebut makar, kuping kekuasaan memang sudah jadi bangker",
        "pidatonya dua jam, rasa tanggung jawabnya cuma cameo tujuh detik",
      ],
    },
    forumGhost: {
      label: "ARSIP FUFUFAFA • PEMILIK BELUM TERBUKTI",
      avatars: ["👻", "🗃️", "💾", "🕳️"],
      handles: ["@fufufafa_archive", "@fufufafa_cache", "@akunlamabangkit"],
      openers: ["Ane numpang lewat gan, ", "Pertamax dari kuburan cache: ", "Wkwkwk old thread never dies, ", "Sebelum akun ini dibantah lagi: "],
      closers: [" Cendol belakangan, verifikasi dulu.", " Pemiliknya belum terbukti; jejak tulisannya keburu abadi.", " Thread boleh tutup, screenshot tetap lembur.", " Jangan vonis identitas cuma modal cocoklogi."],
      bodies: [
        "kampanye sambil tidur; bangun-bangun semua sudah jadi tim sukses",
        "ini orang ngomongnya ngawur banget, bukti disuruh nyusul setelah emosi",
        "banjir kok ditanya seiman—air saja nggak pernah minta lihat KTP, gan",
        "ke mana-mana sama papi mami, tetapi bio politiknya tetap mulai dari nol",
        "tampang pas-pasan bukan masalah; kuasa kebanyakan tanpa akuntabilitas baru masalah",
        "makan tuh doa? anak sekolah juga butuh gizi, vendor waras, dan dapur yang tidak bikin sakit",
        "dulu nyebut semua orang panasbung, sekarang semua kritik dibilang pesanan asing",
        "wkwkwk bodoh boleh jadi gaya forum; kebijakan bodoh tetap harus dibayar rakyat beneran",
      ],
    },
  };

  const comments = {
    good: [
      "Nah, begini. Nggak sok suci, nggak sok paling tahu, sumbernya juga nggak dikunci di grup panitia.",
      "Gue mungkin nggak sepakat, tapi ini jawab pertanyaan. Standar kita rendah banget sampai hal begini terasa mewah.",
      "Warga disebut sebagai manusia, bukan dekorasi di belakang podium. Rare banget, anjir.",
      "Ada kalimat ‘kami salah’ tanpa diikuti ‘tetapi netizen’. Tolong museumkan momen ini.",
    ],
    bad: [
      "Anjing, duit publik dibakar buat bikin pertanyaan sederhana kelihatan rumit.",
      "Bangsat, ditanya kebijakan jawabnya musuh asing lagi. Kasetnya cuma satu apa gimana?",
      "Pidatonya menggelegar, isinya omon-omon pakai backsound kenegaraan.",
      "Rakyat disuruh berkorban, elite disuruh bergeser sedikit biar fotonya nggak backlight.",
      "Katanya situasi terkendali. Iya, yang dikendalikan narasinya; masalahnya masih liar.",
    ],
    neutral: [
      "Gue cuma mau tahu: siapa bayar, siapa untung, siapa disuruh ikhlas?",
      "Boleh nggak sekali aja pejabat jawab tanpa flashback, musuh asing, dan tepuk tangan?",
      "Ini kebijakan atau pidato yang kebetulan punya nomor anggaran?",
      "Kalau datanya kuat, kenapa kritik harus diteriaki dulu baru dijawab?",
    ],
  };

  window.PNNetizenPack = Object.freeze({
    spamChance: 0.12,
    noiseSupplementChance: 0.88,
    noiseSupplementMin: 1,
    noiseSupplementMax: 3,
    roughChance: 0.09,
    fufuChance: 0.065,
    fufuSource: "https://github.com/fufufufafafa/fufufafa-memorable-quotes",
    spamPersonaIds: ["seller", "judol", "cryptoBro", "lewatGan", "firstHunter", "salahThread", "pencariKerja", "botDoa"],
    noisePersonaIds: ["seller", "judol", "cryptoBro", "lewatGan", "firstHunter", "salahThread", "pencariKerja", "botDoa"],
    personas,
    comments,
  });
})();
