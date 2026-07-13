/**
 * Perang Narasi — seeded monthly timeline variants.
 * Every variant has one focal account. Direct quotes are short, sourced, and
 * kept separate from fictional reactions or Timeline Alternatif scenarios.
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

(() => {
  "use strict";

  const hash = (value) => {
    let out = 2166136261;
    for (const char of String(value))
      out = Math.imul(out ^ char.charCodeAt(0), 16777619);
    return out >>> 0;
  };

  const speakers = {
    "Pak Jenderal Gemoyono": ["@gemoyonoresmi", "🦅"],
    "Mayor Tedi Ketok-Pintu": ["@rundownkomando", "🎖️"],
    "Hasbun Naskah Basi": ["@hasbunbrief", "🧯"],
    "Bahlul Hilir-Hilir": ["@hilirterus", "⛏️"],
    "Pak Purba-Yey Dompet Negara": ["@dompetnegara", "💼"],
    "Feri Latih-Hitung": ["@ferilatihhitung", "🧮"],
    "Risky Februari": ["@riskyfebruari", "⚠️"],
    "Bang Akbar Pasal": ["@akbarpasal", "🎙️"],
    "Mbak Amar Setengah": ["@pasalbelumselesai", "⚖️"],
    "Mbak Pintu Rapat": ["@draftnyadimana", "🚪"],
    "Mas Tiyo Toa": ["@tiyotoa", "📣"],
    "Fatima Footnote": ["@fatimabacapdf", "📚"],
    "Bang Dandy Lensa-Sono": ["@arsiptayang", "🎬"],
    "Om Gita Wacana-Wira": ["@gitawacanawira", "🎧"],
    "Om Diplo Peta Dunia": ["@diplopetadunia", "🌏"],
    "Menlu Sunyi Gono-Gini": ["@bebasaktifsunyi", "🧳"],
    "Prof. Renal Disrupsi": ["@renaldisrupsi", "📈"],
    "Prof. Margin Error": ["@sampelnyaom", "📊"],
    "Mas Hendro Satir-IO": ["@satirio", "🌡️"],
    "Mbak Peta Keluarga": ["@namabelakangmenang", "🗺️"],
    "Mbak Nana Kursi Kosong": ["@kursinyakosong", "🪑"],
    "Ustaz Feli-Xi-Auw": ["@dalildanalgoritma", "🕌"],
    "Mbak Audit Kotak Makan": ["@porsinyadihitungulang", "🍱"],
    "Warga Garuda Biru": ["@demokrasidarurat", "🚨"],
    "Akun Forum yang Tidak Mau Mati": ["@fufufafa_archive", "👻"],
  };

  const speakerBanks = {
    economy: ["Feri Latih-Hitung", "Risky Februari", "Pak Purba-Yey Dompet Negara"],
    government: ["Pak Jenderal Gemoyono", "Mayor Tedi Ketok-Pintu", "Hasbun Naskah Basi"],
    law: ["Bang Akbar Pasal", "Mbak Amar Setengah", "Mbak Pintu Rapat"],
    civic: ["Mas Tiyo Toa", "Fatima Footnote", "Bang Dandy Lensa-Sono"],
    geopolitics: ["Om Gita Wacana-Wira", "Om Diplo Peta Dunia", "Menlu Sunyi Gono-Gini"],
    election: ["Prof. Margin Error", "Mas Hendro Satir-IO", "Mbak Peta Keluarga"],
    media: ["Bang Akbar Pasal", "Bang Dandy Lensa-Sono", "Mbak Nana Kursi Kosong"],
    religion: ["Ustaz Feli-Xi-Auw", "Fatima Footnote", "Warga Garuda Biru"],
    publicService: ["Mbak Audit Kotak Makan", "Fatima Footnote", "Feri Latih-Hitung"],
    default: ["Warga Garuda Biru", "Fatima Footnote", "Hasbun Naskah Basi"],
  };

  // The account must speak from its own political position. Regime accounts
  // defend, command, minimise, or redirect; critics scrutinise those moves.
  const speakerStances = {
    "Pak Jenderal Gemoyono": "regime",
    "Mayor Tedi Ketok-Pintu": "regime",
    "Hasbun Naskah Basi": "regime",
    "Bahlul Hilir-Hilir": "regime",
    "Pak Purba-Yey Dompet Negara": "regime",
    "Menlu Sunyi Gono-Gini": "regime",
    "Prof. Margin Error": "institutional",
    "Mbak Audit Kotak Makan": "institutional",
    "Akun Forum yang Tidak Mau Mati": "archive",
  };

  const sources = {
    dollarVillage: [
      "Pernyataan rupiah dan warga desa",
      "Pada Mei 2026 Pak Jenderal Gemoyono mengatakan warga desa tidak memakai dolar ketika menanggapi pelemahan rupiah. Kurs tetap dapat merambat ke harga impor, energi, obat, bahan baku, dan utang valas.",
      "https://www.reuters.com/world/asia-pacific/indonesia-rupiah-hits-new-record-low-president-downplays-day-to-day-impact-2026-05-18/",
    ],
    tiyoSppg: [
      "Polemik SPPG dan Mas Tiyo Toa",
      "Dalam forum Terus Terang pada Mei 2026, Mas Tiyo Toa memelesetkan SPPG menjadi ‘Satuan Penjilat Pak Gemoyono–Mas Samsul’. Pak Hasbun Naskah Basi membalas bahwa nalarnya didiskon dan menilai pekerja serta penerima program ikut terhina.",
      "https://wartaekonomi.co.id/read614555/sppg-diplesetin-jadi-satuan-penjilat-prabowo-gibran-hasan-nasbi-nalarnya-didiskon",
    ],
    foreignAgents: [
      "Musuh bersama bernama agen asing",
      "Amnesty International mendokumentasikan penggunaan berulang narasi agen asing untuk mendeligitimasi kritik. Bukti publik untuk tuduhan terhadap para pengkritik tidak selalu disertakan.",
      "https://www.reuters.com/business/media-telecom/indonesian-authorities-using-online-disinformation-campaigns-target-critics-2026-05-19/",
    ],
    bankruptStudents: [
      "Menuju Indonesia Bangkrut",
      "Reuters meliput aksi mahasiswa Juni 2026 yang mengkritik prioritas belanja, kenaikan harga bahan bakar, dan tekanan ekonomi. ‘Bangkrut’ digunakan sebagai alarm politik, bukan putusan kepailitan negara.",
      "https://www.reuters.com/world/asia-pacific/students-hold-heading-bankrupt-indonesia-protests-against-prabowos-policies-2026-06-12/",
    ],
    fufufafaRepo: [
      "Arsip komentar akun fufufafa",
      "Repository ini mengarsipkan komentar lama akun Kaskus fufufafa untuk kepentingan sejarah. Keterkaitan akun dengan figur politik tertentu tetap diperlakukan game sebagai dugaan yang belum terbukti final.",
      "https://github.com/fufufufafafa/fufufafa-memorable-quotes",
    ],
    ndasmuEtik: [
      "Kontroversi ‘ndasmu etik’",
      "Ucapan ‘etik, etik, ndasmu etik’ beredar menjelang Pemilu 2024. Juru bicara menyebutnya candaan, sementara kritik menyorot cara etika diperlakukan sebagai bahan olok-olok.",
      "https://www.cnnindonesia.com/nasional/20231217145956-617-1038376/prabowo-soal-video-etik-ndasmu-tak-usah-dibesar-besarkan",
    ],
    gemoyDance: [
      "Citra gemoy dan joget kampanye",
      "Pada kampanye Februari 2024, video joget dan citra kakek gemoy Pak Jenderal Gemoyono meraih jutaan tayangan. Strategi itu menggeser perhatian dari latar militernya ke persona yang lebih lunak.",
      "https://www.reuters.com/world/asia-pacific/dance-moves-deepfakes-indonesia-presidential-candidates-duke-it-out-tiktok-2024-02-12/",
    ],
    militaryExpansion: [
      "Program sipil masuk rantai komando",
      "Pada Januari 2025, Reuters mencatat perluasan peran militer ke program makan sekolah, pertanian, dan pekerjaan sipil lain. Pemerintah menyebut rantai komando efisien; pengkritik mengingatkan supremasi sipil.",
      "https://www.reuters.com/world/asia-pacific/indonesias-new-leader-expands-militarys-role-test-fragile-democracy-2025-01-28/",
    ],
    tediCivilianPost: [
      "Sekretaris kabinet tetap perwira aktif",
      "Mayor Tedi Ketok-Pintu diangkat menjadi sekretaris kabinet ketika masih berstatus perwira aktif. Posisi itu dipersoalkan karena berada di luar daftar jabatan sipil yang saat itu diperbolehkan bagi perwira aktif.",
      "https://www.straitstimes.com/asia/se-asia/concerns-grow-over-militarys-role-in-indonesia-as-prabowo-appoints-officers-to-civilian-posts",
    ],
    tniLaw: [
      "Revisi UU TNI memperluas jabatan sipil",
      "Pada 20 Maret 2025, parlemen mengesahkan perubahan UU TNI yang memperluas jabatan sipil bagi perwira aktif. Aktivis memprotes proses dan risiko kembalinya dwifungsi; pemerintah menekankan disiplin dan kebutuhan strategis.",
      "https://www.reuters.com/world/asia-pacific/indonesia-parliament-passes-contentious-amendments-military-law-2025-03-20/",
    ],
    imaginaryEnemies: [
      "Kritik dilabeli agen asing",
      "Laporan Mei 2026 mendokumentasikan pelabelan aktivis dan jurnalis sebagai agen asing. Narasi itu disebut berulang dalam pidato Pak Jenderal Gemoyono tanpa bukti publik untuk tuduhan spesifiknya.",
      "https://www.amnesty.org/en/latest/news/2026/05/indonesia-military-silences-dissent-disinformation-campaigns-branding-activists-journalists-foreign-agents/",
    ],
    julyDefence: [
      "Kerja sama rudal dan prioritas pertahanan",
      "Pada 7 Juli 2026, Indonesia dan India menandatangani rangkaian kerja sama yang mencakup pengadaan rudal. Nilai strategis, biaya, pengawasan sipil, dan prioritas anggaran tetap perlu diuji terbuka.",
      "https://www.reuters.com/world/asia-pacific/indias-modi-meet-indonesias-prabowo-talks-defence-food-security-2026-07-07/",
    ],
  };

  const explicit = {
    "0:0": [
      {
        npc: "Pak Jenderal Gemoyono",
        post: "“Etik, etik, ndasmu etik.” Itu candaan di depan kader sendiri, jangan dibesar-besarkan. Pemilu harus gembira; kalau suasana terlalu tegang, ya kita joget dulu.",
        source: sources.ndasmuEtik,
      },
      {
        npc: "Mbak Amar Setengah",
        post: "Putusan bisa sah secara hukum dan tetap meninggalkan luka legitimasi. Pertanyaannya bukan cuma siapa lolos syarat umur, tetapi siapa mengubah pintu dan siapa sudah berdiri di depannya sebelum kunci dipasang.",
      },
      {
        npc: "Bang Akbar Pasal",
        post: "Satu pertanyaan saja: kalau konflik kepentingan dianggap selesai setelah putusan dibacakan, untuk apa republik repot-repot punya etik selain sebagai dekorasi ruang sidang?",
      },
    ],
    "0:1": [
      {
        npc: "Pak Jenderal Gemoyono",
        post: "Kampanye itu harus riang. Saya joget karena rakyat ingin pemimpin yang dekat, bukan yang tiap hari mukanya kayak habis dimarahi tabel Excel. Soal masa lalu, sudah berkali-kali saya jawab.",
        source: sources.gemoyDance,
      },
      {
        npc: "Bang Dandy Lensa-Sono",
        post: "Joget adalah gambar; rekam jejak adalah arsip. Keduanya boleh ditonton, tapi jangan biarkan musik 27 detik memotong pertanyaan yang umurnya puluhan tahun.",
        source: sources.gemoyDance,
      },
      {
        npc: "Mbak Nana Kursi Kosong",
        post: "Persona gemoy boleh jadi strategi kampanye. Justru karena berhasil, pertanyaan lanjutannya makin penting: yang dilunakkan cuma gaya kamera atau juga cara memperlakukan kritik?",
        source: sources.gemoyDance,
      },
    ],
    "0:9": [
      {
        npc: "Mayor Tedi Ketok-Pintu",
        post: "Arahan sudah jelas: kabinet bergerak cepat, jalur laporan dipendekkan, hambatan program disingkirkan. Soal seragam saya, fokus saja ke hasil. Negara butuh orang yang siap laksanakan.",
        source: sources.tediCivilianPost,
      },
      {
        npc: "Pak Jenderal Gemoyono",
        post: "Saya pilih orang yang disiplin dan loyal pada tugas. Pemerintahan tidak boleh lambat hanya karena semua orang sibuk memperdebatkan asal seragam.",
        source: sources.tediCivilianPost,
      },
      {
        npc: "Mbak Amar Setengah",
        post: "Masalahnya bukan alergi seragam. Masalahnya sederhana: jabatan sipil punya pagar hukum, rantai pertanggungjawaban, dan prinsip supremasi sipil. Pagar bukan dekorasi pelantikan.",
        source: sources.tediCivilianPost,
      },
    ],
    "1:0": [
      {
        npc: "Pak Jenderal Gemoyono",
        post: "Tentara punya disiplin, jaringan, dan kemampuan bergerak cepat. Kalau dapur sekolah, lahan pangan, dan saluran air perlu selesai, saya pakai kekuatan yang negara punya.",
        source: sources.militaryExpansion,
      },
      {
        npc: "Mayor Tedi Ketok-Pintu",
        post: "Program strategis tidak bisa menunggu rapat koordinasi yang rapatnya membahas jadwal rapat. Rantai komando dipakai supaya target turun sampai lapangan dan laporan naik sebelum kopi dingin.",
        source: sources.militaryExpansion,
      },
      {
        npc: "Risky Februari",
        post: "Cepat bukan sinonim akuntabel. Ketika tentara mengurus dapur, sawah, dan proyek sipil, buka biaya, mandat, audit, jalur keluhan, serta siapa yang mengoreksi kalau rantai komando salah arah.",
        source: sources.militaryExpansion,
      },
    ],
    "0:8": [
      {
        npc: "Akun Forum yang Tidak Mau Mati",
        post: "Cache lama nongol dengan gaya komentar yang seperti tidak mengenal rem: pendek, kasar, sok pertamax, lalu menghilang sebelum diminta menjelaskan. Isinya bisa diverifikasi; siapa pemilik akunnya belum boleh disulap dari dugaan menjadi vonis.",
        source: sources.fufufafaRepo,
      },
      {
        npc: "Akun Forum yang Tidak Mau Mati",
        post: "“Kampanye sambil tidur” muncul lagi dari lemari arsip. Lucu sebagai artefak internet, mengganggu sebagai cermin: persona resmi boleh ganti baju, cache tetap datang pakai sandal lama.",
        source: sources.fufufafaRepo,
      },
      {
        npc: "Akun Forum yang Tidak Mau Mati",
        post: "Forum lama pernah penuh ejekan receh, hinaan politik, dan komentar yang sekarang pasti dibungkus tim komunikasi sebagai ‘di luar konteks’. Masalahnya, konteks justru yang disimpan arsip.",
        source: sources.fufufafaRepo,
      },
    ],
    "1:1": [
      {
        npc: "Mas Tiyo Toa",
        post: "Efisiensi katanya untuk menyelamatkan negara. Kampus melihat UKT, riset, beasiswa, dan layanan publik ikut diet. Kalau masa depan diminta hemat, minimal masa lalu pemborosan juga disuruh buka rekening.",
      },
      {
        npc: "Fatima Footnote",
        post: "Indonesia Gelap bukan ramalan kiamat. Ia nama untuk perasaan ketika anggaran dipotong dulu, penjelasan datang belakangan, dan mahasiswa diminta bersyukur karena slide presentasinya tetap berwarna.",
      },
      {
        npc: "Hasbun Naskah Basi",
        post: "Pemerintah memastikan efisiensi tidak mengganggu layanan prioritas. Lampiran tentang layanan mana yang dianggap tidak prioritas akan disampaikan setelah semua orang berhenti bertanya keras-keras.",
      },
    ],
    "1:2": [
      {
        npc: "Mayor Tedi Ketok-Pintu",
        post: "Jabatan ini soal memastikan perintah presiden jalan, bukan soal nostalgia dwifungsi. Seragam tidak otomatis menghapus profesionalitas; yang dibutuhkan kabinet adalah disiplin dan satu pintu komando.",
        source: sources.tediCivilianPost,
      },
      {
        npc: "Pak Jenderal Gemoyono",
        post: "Dunia berubah, ancaman berubah, negara harus kuat. Perwira yang kompeten jangan dilarang membantu hanya karena sebagian orang masih memelihara ketakutan lama.",
        source: sources.tniLaw,
      },
      {
        npc: "Mas Tiyo Toa",
        post: "Bangsat, rapat undang-undangnya ngebut dan tertutup, habis itu publik disuruh percaya ini bukan jalan tol menuju dwifungsi. Kalau yakin demokratis, buka draf, daftar jabatan, dan mekanisme kontrolnya.",
        source: sources.tniLaw,
      },
    ],
    "1:8": [
      {
        npc: "Warga Garuda Biru",
        post: "Tunjangan rumah wakil rakyat lebih besar dari banyak penghasilan tahunan warga. Ketika protes pecah, elite baru ingat rumah dinas politik yang sebenarnya: kepercayaan publik.",
      },
      {
        npc: "Mas Tiyo Toa",
        post: "Kalau rakyat diminta efisien sementara parlemen menaikkan kenyamanan sendiri, jangan kaget kalau kata ‘wakil’ terdengar seperti merek dagang yang sudah kedaluwarsa.",
      },
      {
        npc: "Pak Jenderal Gemoyono",
        post: "Hak menyampaikan pendapat saya hormati. Tapi negara tidak boleh kalah pada tindakan yang mengarah ke makar dan teror. Aparat harus tegas, rakyat jangan mau diadu domba kekuatan yang ingin Indonesia kacau.",
        source: sources.foreignAgents,
      },
    ],
    "2:4": [
      {
        npc: "Pak Jenderal Gemoyono",
        post: "“Mau dolar berapa ribu kek, orang rakyat di desa enggak pakai dolar kok.” Jangan bikin rakyat panik. Pemerintah jaga ekonomi, fundamental kita kuat, dan kita tidak boleh didikte spekulan.",
        source: sources.dollarVillage,
      },
      {
        npc: "Feri Latih-Hitung",
        post: "Warga desa mungkin tidak beli dolar di money changer. Mereka tetap membeli barang yang bahan baku, energi, mesin, obat, atau pupuknya kenal kurs. Dompet tidak perlu paspor untuk kena nilai tukar.",
        source: sources.dollarVillage,
      },
      {
        npc: "Om Gita Wacana-Wira",
        post: "Jangan bikin takhayul bahwa satu pidato otomatis menjatuhkan rupiah. Yang perlu diuji justru konsistensi fiskal, kualitas institusi, arus modal, dan kenapa komunikasi negara selalu sibuk mengecilkan termometer.",
        source: sources.dollarVillage,
      },
      {
        npc: "Mas Tiyo Toa",
        post: "“SPPG itu Satuan Penjilat Pak Gemoyono–Mas Samsul.” Kasar? Iya. Tapi branding program makan juga anjing banget kalau vendor, mutu, korban keracunan, dan konflik kepentingannya disuruh diam di belakang baliho.",
        source: sources.tiyoSppg,
      },
      {
        npc: "Fatima Footnote",
        post: "Setiap kritik dilabeli agen asing, republik kehilangan kemampuan membedakan ancaman nyata dari warga yang membawa data. Kalau tuduhannya serius, buka buktinya; kalau tidak, berhenti bikin musuh imajiner.",
        source: sources.imaginaryEnemies,
      },
    ],
    "2:5": [
      {
        npc: "Fatima Footnote",
        post: "‘Menuju Indonesia Bangkrut’ itu alarm, bukan laporan kurator. Kalau pemerintah cuma membalasnya dengan PDB agregat, berarti pengalaman warga dan statistik nasional masih tinggal di dua negara berbeda.",
        source: sources.bankruptStudents,
      },
      {
        npc: "Mas Tiyo Toa",
        post: "Katanya fundamental kuat. Oke. Sekarang jelaskan kenapa harga, kerja, kuliah, bensin, dan masa depan terasa makin mahal tanpa menyuruh mahasiswa mencintai grafik lebih keras.",
        source: sources.bankruptStudents,
      },
      {
        npc: "Pak Purba-Yey Dompet Negara",
        post: "Negara tidak bangkrut hanya karena satu slogan demonstrasi. Tetapi pemerintah juga tidak otomatis sehat hanya karena memilih indikator yang masih hijau. Neraca makro perlu bertemu struk rumah tangga.",
        source: sources.bankruptStudents,
      },
    ],
    "2:6": [
      {
        npc: "Pak Jenderal Gemoyono",
        post: "Kerja sama pertahanan ini memperkuat posisi Indonesia. Negara besar harus punya alat pertahanan kuat, sahabat strategis, dan keberanian menjaga kepentingan nasional.",
        source: sources.julyDefence,
      },
      {
        npc: "Prof. Konni BaksLaah",
        post: "Rudal bukan merchandise kunjungan negara. Buka kebutuhan strategis, interoperabilitas, biaya siklus hidup, alih teknologi, dan siapa yang mengawasi pengadaannya. Peta pertahanan nggak boleh dilipat jadi brosur investasi.",
        source: sources.julyDefence,
      },
      {
        npc: "Risky Februari",
        post: "Pertahanan kuat tetap punya opportunity cost. Tampilkan nilai kontrak, jadwal bayar, risiko kurs, kebutuhan paling mendesak, dan kenapa prioritas ini menang ketika defisit sudah dekat pagar hukum.",
        source: sources.julyDefence,
      },
    ],
    "4:0": [
      {
        npc: "Bang Akbar Pasal",
        post: "Kandidat datang ke podcast membawa kata ‘kolaborasi’. Pertanyaan lanjutannya sederhana: kolaborasi dengan siapa, memakai anggaran apa, targetnya kapan, dan siapa yang boleh bilang programmu gagal?",
      },
      {
        npc: "Om Gita Wacana-Wira",
        post: "Visi dua puluh tahun terdengar indah di studio. Long game tetap dibangun oleh institusi yang sanggup membayar short invoice, menerima koreksi, dan hidup lebih lama daripada thumbnail kandidat.",
      },
      {
        npc: "Prof. Renal Disrupsi",
        post: "Semua kandidat mengaku membawa perubahan. Kalau yang berubah cuma logo, susunan slide, dan agensi digital, itu bukan transformasi. Itu invoice desain yang belajar bicara kebijakan.",
      },
    ],
    "4:5": [
      {
        npc: "Feri Latih-Hitung",
        post: "Kurs masuk bahan kampanye dan semua kandidat memilih titik awal grafik yang paling baik untuk dirinya. Tolong pilih juga siapa yang membayar bunga, impor, subsidi, dan janji gratisnya.",
      },
      {
        npc: "Risky Februari",
        post: "Kandidat menjanjikan rupiah kuat tanpa membuka risk register. Kalau skenario buruk dilarang masuk panggung, jangan kaget ketika ia datang sendiri membawa kurs pasar.",
      },
      {
        npc: "Om Gita Wacana-Wira",
        post: "Kurs bukan aura kandidat. Ia membaca produktivitas, fiskal, institusi, arus modal, dan risiko global. Kampanye yang menjual satu angka tanpa arsitektur kebijakan cuma sedang cosplay jadi ekonom.",
      },
    ],
    "5:1": [
      {
        npc: "Feri Latih-Hitung",
        post: "Empat kandidat membawa enam grafik. Saya cuma minta satu tabel: biaya program, sumber dana, asumsi kurs, risiko gagal, dan kelompok yang paling dulu diminta berkorban.",
      },
      {
        npc: "Risky Februari",
        post: "Debat ekonomi selalu punya skenario sukses. Malam ini tolong tampilkan juga skenario rugi, penjamin terakhir, dan nomor telepon orang yang tidak boleh kabur ketika targetnya meleset.",
      },
      {
        npc: "Om Gita Wacana-Wira",
        post: "Semua kandidat bicara pertumbuhan. Yang membedakan bukan angka tertinggi, melainkan institusi apa yang mereka bangun agar kemakmuran tidak berhenti sebagai musik penutup debat.",
      },
    ],
    "5:2": [
      {
        npc: "Bang Akbar Pasal",
        post: "Semua kandidat mengaku korban rezim sebelumnya. Baik. Sekarang jawab: ketika kamu berkuasa, siapa mengawasi polisi, siapa melindungi pers, dan apa yang terjadi kalau kritik terhadapmu viral?",
      },
      {
        npc: "Mbak Nana Kursi Kosong",
        post: "Kursi kosong tidak pernah memotong jawaban, tetapi ia jujur menunjukkan siapa yang lebih takut pada pertanyaan lanjutan daripada pada kehilangan suara.",
      },
      {
        npc: "Mbak Amar Setengah",
        post: "Demokrasi tidak diuji saat kandidat sedang butuh suara. Ia diuji setelah menang, ketika putusan tidak nyaman, pers menyebalkan, dan warga menolak disuruh pulang.",
      },
    ],
  };

  const groupPatterns = [
    ["economy", /rupiah|dolar|kurs|ihsg|pasar|fiskal|utang|anggaran|kelas menengah|daya beli|danantara|aset|ekonomi/i],
    ["publicService", /mbg|makan|dapur|listrik|pln|banjir|bencana|layanan|pangan/i],
    ["law", /hukum|pasal|putusan|sidang|dakwaan|amnesti|abolisi|undang-undang|tni|ijazah/i],
    ["geopolitics", /diplomasi|asean|brics|global south|luar negeri|rudal|pertahanan|geopolitik/i],
    ["election", /pemilu|pilkada|kandidat|capres|survei|quick count|koalisi|kampanye|elektabilitas/i],
    ["religion", /agama|ustaz|dakwah|akidah|ceramah/i],
    ["civic", /mahasiswa|aktivis|protes|demokrasi|tuntutan|reformasi|warga|jalan|pers/i],
    ["media", /podcast|film|video|akun|fufufafa|influencer|ai|deepfake|redaksi|timeline/i],
    ["government", /presiden|kabinet|menteri|istana|pemerintah|gemoyono/i],
  ];

  function topicGroup(issue) {
    const text = `${issue.key} ${issue.arc || ""} ${issue.title} ${issue.subject || ""} ${issue.post}`;
    return groupPatterns.find(([, pattern]) => pattern.test(text))?.[0] || "default";
  }

  function firstSpeaker(issue) {
    const value = String(issue.npc || "").split(/\s+(?:&|vs\.?|dan)\s+|,\s*/i)[0].trim();
    if (!value || /^(panel|koalisi|dpr|republik timeline|kandidat|aktivis|mahasiswa)/i.test(value)) return null;
    return value;
  }

  function speakerData(name, base) {
    const [handle, avatar] = speakers[name] || [
      `@${String(name).toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 24) || "akuntimeline"}`,
      base.avatar || "👤",
    ];
    return { npc: name, handle, avatar, stance: speakerStances[name] || "critic" };
  }

  const genericCopy = {
    economy: [
      (i) => `Katanya angka makro sehat. Oke. Sekarang tunjukkan siapa yang bisa makan pertumbuhan dan siapa yang cuma kebagian cicilan dari ${i.subject}.`,
      (i) => `Kalau ${i.document} baru dibuka setelah pasar panik, itu bukan transparansi. Itu autopsi dengan desain presentasi yang lebih mahal.`,
      (i) => `Gratis adalah cara menerima, bukan cara membiayai. Soal ${i.subject}, APBN tetap punya kalkulator meski podium punya mic lebih besar.`,
    ],
    publicService: [
      (i) => `Program ini katanya untuk ${i.people}. Bagus. Berarti vendor, standar keselamatan, kanal keluhan, dan biaya gagalnya juga harus bisa dibaca oleh mereka.`,
      (i) => `Jangan jadikan warga B-roll kebijakan. Soal ${i.subject}, buka ${i.document} sebelum kamera datang dan tetap buka setelah kamera pulang.`,
      (i) => `Layanan publik bukan lomba siapa paling cepat gunting pita. Ukur siapa menerima, siapa sakit, siapa kehilangan akses, dan siapa tetap mengirim invoice.`,
    ],
    law: [
      (i) => `Satu pasal tidak hidup sendirian. Soal ${i.subject}, baca kewenangan, prosedur, konflik kepentingan, akibat hukum, dan siapa yang punya jalan keluar khusus.`,
      (i) => `Kalau ${i.document} cuma dibuka setelah keputusan final, partisipasi publik namanya bukan partisipasi. Itu penonton yang kebagian spoiler.`,
      (i) => `Ditanya ${i.subject}, jangan jawab dengan kesalahan kubu lain. Hukum bukan whataboutism yang kebetulan punya nomor perkara.`,
    ],
    civic: [
      (i) => `Kalau kritik tentang ${i.subject} selalu dibalas dengan tuduhan dalang, mungkin yang rapuh bukan negara. Mungkin cuma kuping kekuasaannya.`,
      (i) => `Gerakan bukan sekadar tagar. Untuk ${i.people}, ia butuh arsip, kas, bantuan hukum, logistik, dan orang yang masih datang setelah FYP pindah.`,
      (i) => `Marah itu bahan bakar, bukan setir. Soal ${i.subject}, bukti dan organisasi harus tetap ikut sampai tujuan.`,
    ],
    geopolitics: [
      (i) => `Foto karpet merah bagus. Sekarang jelaskan hasil konkretnya: untuk ${i.subject}, apa kepentingan nasional, biaya, risiko, dan strategic payoff-nya?`,
      (i) => `Bebas aktif bukan berarti aktif terbang dan bebas dari evaluasi. Buka ${i.document}; warga tidak bisa makan frequent-flyer miles.`,
      (i) => `Menuduh kritik sebagai antek jauh lebih murah daripada menjelaskan strategi. Sayangnya geopolitik tidak menerima pembayaran dengan slogan.`,
    ],
    election: [
      (i) => `Semua kandidat bicara rakyat. Tolong sekali-kali ${i.people} jangan cuma muncul sebagai dekorasi podium dan angka di survei internal.`,
      (i) => `Soal ${i.subject}, buka donor, metode survei, konflik kepentingan, dan siapa yang menulis kalimat ‘demi kepentingan bangsa’.`,
      (i) => `Kampanye boleh punya musik. Program tetap harus punya costing, tenggat, indikator gagal, dan keberanian menerima pertanyaan kedua.`,
    ],
    media: [
      (i) => `Satu potongan tentang ${i.subject} meledak. Versi penuh dan ${i.document} tenggelam karena algoritma memang alergi pada kalimat bersyarat.`,
      (i) => `Kalau bukti cuma muncul sebagai screenshot, jangan paksa publik memilih antara percaya admin dan percaya admin lawan. Buka arsipnya.`,
      (i) => `Viral adalah distribusi, bukan verifikasi. Soal ${i.subject}, konteks tetap harus punya sebelum, sesudah, sumber, dan tombol koreksi.`,
    ],
    religion: [
      (i) => `Iman bukan rate card. Kalau ${i.subject} masuk kampanye, buka afiliasi, uang, kuasa, dan siapa yang diuntungkan dari kepastian moral instan.`,
      (i) => `Ceramah boleh bicara etika publik. Yang berbahaya ketika pilihan politik dijual sebagai satu-satunya jalan menuju keselamatan.`,
      (i) => `Kalau kritik dibalas dengan dalil tetapi kontrak dan ${i.document} tetap gelap, yang sakral mungkin cuma engagement-nya.`,
    ],
    government: [
      (i) => `Pidato tentang ${i.subject} panjang sekali. Bagian siapa bertanggung jawab, kapan selesai, dan ${i.document} bisa dibuka justru pulang duluan.`,
      (i) => `Versi resmi bilang situasi terkendali. Warga cuma minta tahu apakah yang dikendalikan masalahnya atau kalimat yang boleh masuk berita.`,
      (i) => `Musuh bersama kembali naik panggung. Sementara itu ${i.people} masih menunggu jawaban yang tidak dimulai dengan ‘ada kekuatan asing’.`,
    ],
    default: [
      (i) => `Soal ${i.subject}, pertanyaannya tetap tiga: siapa memutuskan, siapa untung, dan dokumen apa yang sengaja tidak masuk carousel?`,
      (i) => `Kalau ${i.document} tidak dibuka, publik cuma diminta memilih antara percaya, curiga, atau capek. Itu bukan akuntabilitas.`,
      (i) => `Programnya katanya untuk ${i.people}. Pastikan mereka tidak cuma kebagian foto, slogan, dan tagihan yang namanya diganti jadi pengorbanan.`,
    ],
  };

  const regimeCopy = {
    economy: [
      (i) => `Fundamental kita kuat. Soal ${i.subject}, rakyat jangan ikut panik karena potongan grafik dan omon-omon yang tidak melihat kerja pemerintah secara utuh.`,
      (i) => `Pemerintah terus memantau ${i.subject}. Yang penting produksi jalan, program prioritas lanjut, dan jangan semua gejolak global ditarik jadi drama Istana.`,
      (i) => `Angka boleh naik-turun, komando kebijakan tidak boleh ragu. ${i.document} akan dijelaskan pada waktunya; sekarang jangan ganggu kepercayaan pasar.`,
    ],
    publicService: [
      (i) => `${i.subject} adalah program strategis untuk rakyat. Kekurangan akan dievaluasi, tapi jangan satu insiden dipakai untuk menghina seluruh petugas dan penerima manfaat.`,
      (i) => `Negara harus bergerak cepat. Kalau birokrasi sipil terlalu lambat, kita pakai struktur yang disiplin supaya layanan sampai ke ${i.people}.`,
      (i) => `Kami dengar kritiknya. Program tetap jalan, pengawasan diperkuat, dan pihak yang sengaja menggagalkan akan ditindak tegas.`,
    ],
    law: [
      (i) => `Negara butuh kepastian dan ketegasan. Soal ${i.subject}, jangan pakai ketakutan masa lalu untuk menghambat kebutuhan strategis hari ini.`,
      (i) => `${i.document} sudah melalui mekanisme resmi. Perdebatan boleh, tapi pemerintah tidak bisa berhenti bekerja tiap kali timeline menuduh otoriter.`,
      (i) => `Hak warga dihormati. Namun ketika ketertiban dan kepentingan nasional terganggu, aparat wajib bertindak dan semua pihak harus siap laksanakan.`,
    ],
    civic: [
      (i) => `Kritik silakan, anarki jangan. Soal ${i.subject}, saya minta rakyat waspada pada pihak yang menunggangi keresahan untuk memecah bangsa.`,
      (i) => `Pemerintah mendengar tuntutan ${i.people}. Tetapi jalanan tidak boleh dijadikan alasan untuk melemahkan negara atau menyebarkan pesimisme.`,
      (i) => `Mari bersatu. Jangan mau diprovokasi akun, organisasi, atau kepentingan asing yang tidak ingin Indonesia berdiri kuat.`,
    ],
    geopolitics: [
      (i) => `Indonesia harus dihormati. Untuk ${i.subject}, kita berteman dengan semua pihak, membeli yang kita perlukan, dan tidak minta izin pada negara lain.`,
      (i) => `Diplomasi ini membawa kepentingan konkret. Detail ${i.document} akan mengikuti; yang utama posisi Indonesia makin kuat.`,
      (i) => `Dunia sedang tidak baik-baik saja. Karena itu pertahanan, pangan, dan energi harus berada dalam satu komando nasional yang berani.`,
    ],
    election: [
      (i) => `Rakyat sudah memberi mandat. Soal ${i.subject}, berhenti meragukan pilihan rakyat hanya karena hasilnya tidak sesuai dengan harapan elite tertentu.`,
      (i) => `Kampanye harus gembira dan menyatukan. Program kami jelas, rakyat paham, dan yang terus marah mungkin lupa sesekali joget.`,
      (i) => `Koalisi besar bukan masalah kalau tujuannya stabilitas. Negara tidak bisa dibangun dengan pertengkaran tiap hari dan oposisi demi konten.`,
    ],
    media: [
      (i) => `Potongan tentang ${i.subject} sudah keluar dari konteks. Dengarkan pernyataan lengkap, jangan percaya akun yang hidup dari membuat pemerintah terlihat gagal.`,
      (i) => `Pemerintah terbuka pada pers yang bertanggung jawab. Tapi kebebasan bukan izin menyebarkan fitnah, pesimisme, dan kepentingan asing.`,
      (i) => `Klarifikasi resmi sudah diberikan. Kalau masih dipelintir, berarti masalahnya bukan kekurangan jawaban, tapi ada yang memang tidak mau mengerti.`,
    ],
    religion: [
      (i) => `Persatuan umat dan bangsa harus dijaga. Jangan bawa ${i.subject} untuk memecah rakyat demi kepentingan politik sempit.`,
      (i) => `Pemerintah menghormati semua keyakinan. Yang kami lawan adalah provokasi yang memakai agama untuk melemahkan negara.`,
      (i) => `Nilai moral harus memperkuat disiplin dan pengabdian, bukan jadi alasan untuk menolak program strategis pemerintah.`,
    ],
    government: [
      (i) => `Saya bicara terus terang: ${i.subject} harus diselesaikan dengan disiplin, keberanian, dan satu komando. Omon-omon tidak memberi makan rakyat.`,
      (i) => `Situasi terkendali. Menteri sudah saya perintahkan, Mayor Tedi Ketok-Pintu sudah mencatat, dan yang menghambat akan saya evaluasi.`,
      (i) => `Pemerintah bekerja untuk rakyat. Kalau ada yang terus menyebar pesimisme, rakyat berhak bertanya: mereka mengkritik atau memang ingin negara gagal?`,
    ],
    default: [
      (i) => `${i.subject} adalah bagian dari agenda besar negara. Kritik boleh, tetapi pemerintah tidak akan mundur hanya karena timeline sedang ramai.`,
      (i) => `Saya sudah perintahkan semua jajaran bergerak. ${i.document} akan disampaikan, sekarang fokusnya hasil dan ketertiban.`,
      (i) => `Rakyat butuh kerja, bukan omon-omon. Negara harus tegas pada pihak yang mengganggu program untuk ${i.people}.`,
    ],
  };

  function mergeFacts(baseFacts, source) {
    const all = source ? [source, ...(baseFacts || [])] : [...(baseFacts || [])];
    const seen = new Set();
    return all.filter((item) => {
      const key = `${item?.[0] || ""}|${item?.[2] || ""}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function build(issue, context = {}) {
    const key = `${Number(context.phaseIndex) || 0}:${Number(context.dayIndex) || 0}`;
    const special = explicit[key];
    if (special) {
      return special.map((variant, index) => ({
        ...speakerData(variant.npc, issue),
        post: variant.post,
        lesson: variant.lesson || issue.lesson,
        facts: mergeFacts(issue.facts, variant.source),
        variantId: `${key}:quoted:${index}`,
      }));
    }

    const group = topicGroup(issue);
    const primary = firstSpeaker(issue);
    const names = [...new Set([primary, ...(speakerBanks[group] || speakerBanks.default)].filter(Boolean))].slice(0, 3);
    while (names.length < 3) names.push(speakerBanks.default[names.length]);
    return names.map((name, index) => {
      const speaker = speakerData(name, issue);
      const bank = speaker.stance === "regime" ? regimeCopy : genericCopy;
      const copy = bank[group] || bank.default;
      return {
        ...speaker,
        post: copy[index % copy.length](issue),
        lesson: issue.lesson,
        facts: mergeFacts(issue.facts),
        variantId: `${key}:${group}:${speaker.stance}:${index}`,
      };
    });
  }

  function select(issue, context = {}) {
    const variants = build(issue, context);
    const index = hash(`${Number(context.seed) || 1}:${context.phaseIndex}:${context.dayIndex}`) % variants.length;
    return {
      ...issue,
      ...variants[index],
      _variantIndex: index,
      _variantCount: variants.length,
      _variantId: variants[index].variantId,
    };
  }

  window.PNTimelineVariants = Object.freeze({ build, select, hash, sources });
})();
