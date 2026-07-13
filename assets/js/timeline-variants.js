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
    "Hasbun Naskah Basi": ["@hasbunbrief", "🧯"],
    "Bahlul Hilir-Hilir": ["@hilirterus", "⛏️"],
    "Pak Purba-Yey Dompet Negara": ["@dompetnegara", "💼"],
    "Feri Latih-Hitung": ["@ferilatihhitung", "🧮"],
    "Yanuar Risky Banget": ["@riskybanget", "⚠️"],
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
    economy: ["Feri Latih-Hitung", "Yanuar Risky Banget", "Pak Purba-Yey Dompet Negara"],
    government: ["Pak Jenderal Gemoyono", "Hasbun Naskah Basi", "Bahlul Hilir-Hilir"],
    law: ["Bang Akbar Pasal", "Mbak Amar Setengah", "Mbak Pintu Rapat"],
    civic: ["Mas Tiyo Toa", "Fatima Footnote", "Bang Dandy Lensa-Sono"],
    geopolitics: ["Om Gita Wacana-Wira", "Om Diplo Peta Dunia", "Menlu Sunyi Gono-Gini"],
    election: ["Prof. Margin Error", "Mas Hendro Satir-IO", "Mbak Peta Keluarga"],
    media: ["Bang Akbar Pasal", "Bang Dandy Lensa-Sono", "Mbak Nana Kursi Kosong"],
    religion: ["Ustaz Feli-Xi-Auw", "Fatima Footnote", "Warga Garuda Biru"],
    publicService: ["Mbak Audit Kotak Makan", "Fatima Footnote", "Feri Latih-Hitung"],
    default: ["Warga Garuda Biru", "Fatima Footnote", "Hasbun Naskah Basi"],
  };

  const sources = {
    dollarVillage: [
      "Pernyataan rupiah dan warga desa",
      "Pada Mei 2026 Prabowo mengatakan warga desa tidak memakai dolar ketika menanggapi pelemahan rupiah. Kurs tetap dapat merambat ke harga impor, energi, obat, bahan baku, dan utang valas.",
      "https://www.reuters.com/world/asia-pacific/indonesia-rupiah-hits-new-record-low-president-downplays-day-to-day-impact-2026-05-18/",
    ],
    tiyoSppg: [
      "Polemik SPPG dan Tiyo Ardianto",
      "Dalam forum Terus Terang pada Mei 2026, Tiyo Ardianto memelesetkan SPPG menjadi ‘Satuan Penjilat Prabowo-Gibran’. Hasan Nasbi membalas bahwa nalarnya didiskon dan menilai pekerja serta penerima program ikut terhina.",
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
  };

  const explicit = {
    "0:0": [
      {
        npc: "Pak Jenderal Gemoyono",
        post: "“Etik, etik, ndasmu etik.” Potongan itu kembali lewat di timeline tepat ketika orang sedang membahas batas kekuasaan dan konflik kepentingan. Candaan buat satu ruangan; tagihan etiknya buat satu republik.",
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
        post: "Hak menyampaikan pendapat harus dihormati, tetapi kerusuhan disebut mulai mengarah pada makar dan terorisme. Sekali lagi, kritik masuk ruangan lewat pintu depan; musuh bersama sudah menunggu di podium.",
        source: sources.foreignAgents,
      },
    ],
    "2:4": [
      {
        npc: "Pak Jenderal Gemoyono",
        post: "“Mau dolar berapa ribu kek, orang rakyat di desa enggak pakai dolar kok.” Kalimatnya singkat. Rantai impor, harga energi, obat, pupuk, dan cicilan valas sayangnya tidak ikut dibuat singkat.",
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
        npc: "Mas Tiyo Toa",
        post: "“SPPG sejatinya adalah Satuan Penjilat Prabowo-Gibran.” Plesetannya meledak karena program makan sudah terlalu lama diperlakukan seperti alat branding. Kritiknya tajam; generalisasinya tetap pantas diuji.",
        source: sources.tiyoSppg,
      },
      {
        npc: "Hasbun Naskah Basi",
        post: "Menyebut SPPG sebagai satuan penjilat dinilai punya ‘nalar yang didiskon’ karena pekerja dapur dan penerima manfaat ikut terseret. Jawaban itu keras; pertanyaan vendor, mutu, keracunan, dan konflik kepentingan tetap belum boleh ikut didiskon.",
        source: sources.tiyoSppg,
      },
      {
        npc: "Mbak Audit Kotak Makan",
        post: "Nama program boleh diplesetkan, tapi audit jangan. Buka vendor, pemilik manfaat, standar dapur, jumlah korban, harga per porsi, dan siapa yang tetap dibayar ketika anak-anak justru pulang sakit.",
        source: sources.tiyoSppg,
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
        npc: "Yanuar Risky Banget",
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
        npc: "Yanuar Risky Banget",
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
    return { npc: name, handle, avatar };
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
    const copy = genericCopy[group] || genericCopy.default;
    return names.map((name, index) => ({
      ...speakerData(name, issue),
      post: copy[index % copy.length](issue),
      lesson: issue.lesson,
      facts: mergeFacts(issue.facts),
      variantId: `${key}:${group}:${index}`,
    }));
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
