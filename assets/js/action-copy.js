/**
 * Contextual action-card copy engine for Perang Narasi.
 *
 * The timeline already carries a subject, source documents, affected people,
 * and a counter-narrative. This module turns those fields into card copy so a
 * strategy about school meals does not read like a strategy about elections.
 *
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

(() => {
  "use strict";

  const GENERIC = {
    subject: /^(isu|topik|timeline|respons|ending|[a-z0-9]+(?:[A-Z][a-z0-9]+){2,})$/i,
    document: /^(dokumen primer|dokumen utama|kronologi|anggaran|tanggapan resmi)/i,
    people: /^warga yang hidup di dalam dampaknya$/i,
    counter: /^kesalahan kubu lain dan alasan keadaan global$/i,
  };

  const DOMAIN_RULES = [
    ["fuel", /\b(pertamax|pertalite|bbm|spbu|bensin|ron 92|ron 95|harga minyak)\b/i],
    ["mbg", /\b(mbg|makan bergizi|sppg|bgn|gizi|dapur|menu|keracunan|porsi)\b/i],
    ["kopdes", /\b(kopdes|koperasi desa|merah putih|gerai koperasi)\b/i],
    ["education", /\b(pendidikan|sekolah|guru|kampus|mahasiswa|beasiswa|riset|akademik|universitas)\b/i],
    ["military", /\b(tni|militer|prajurit|pertahanan|rudal|seragam|jenderal|dwifungsi|supremasi sipil)\b/i],
    ["diplomacy", /\b(lawatan|luar negeri|diplomasi|brics|asean|tiongkok|china|geopolitik|kedutaan|foreign policy)\b/i],
    ["market", /\b(rupiah|ihsg|pasar|saham|kurs|dolar|dollar|msci|investor|bank indonesia)\b/i],
    ["stateAssets", /\b(danantara|aset negara|bumn|holding|konsorsium|dividen|investasi|masterplan)\b/i],
    ["budget", /\b(apbn|anggaran|defisit|utang|efisiensi|fiskal|pajak|subsidi|serapan|biaya peluang)\b/i],
    ["election", /\b(pemilu|pilkada|capres|cawapres|paslon|kandidat|quick count|rekap|tps|kampanye|koalisi|dinasti|partai|duet politik)\b/i],
    ["law", /\b(mk|mahkamah|putusan|pasal|konstitusi|pengadilan|hukum|amar|dissent|kewenangan|regulasi)\b/i],
    ["protest", /\b(demo|demonstran|protes|jalanan|polisi|represi|korban|17\+8|makar|terorisme)\b/i],
    ["environment", /\b(banjir|iklim|tambang|nikel|hutan|lingkungan|bencana|rekonstruksi|sumber daya)\b/i],
    ["energy", /\b(pln|listrik|energi|pemadaman|genset|infrastruktur)\b/i],
    ["media", /\b(podcast|film|dokumenter|influencer|seleb|kreator|deepfake|akun|fufufafa|media|algoritma)\b/i],
    ["procurement", /\b(vendor|kontrak|pengadaan|korupsi|audit|invoice|tender|konflik kepentingan)\b/i],
    ["welfare", /\b(buruh|pekerja|upah|bansos|kemiskinan|daya beli|kelas menengah|ojol|cicilan)\b/i],
    ["religion", /\b(agama|ulama|iman|ormas|gereja|masjid|moral)\b/i],
  ];

  const DOMAIN_LENS = {
    fuel: {
      label: "Pompa dan Formula",
      object: "harga BBM",
      evidence: "harga sebelum-sesudah, formula BBM, kurs, harga minyak, dan koordinasi regulator",
      people: "pengemudi, pekerja komuter, keluarga, dan usaha kecil",
      counter: "sound viral serta konten AI yang lebih ramai daripada papan harga",
      buzzer: "Feed bisa dibuat glowing; struk di SPBU tetap mencetak angka tanpa filter.",
      activist: "Pisahkan harga subsidi dan nonsubsidi, buka formulanya, lalu hitung dampak ke mobilitas warga.",
    },
    mbg: {
      label: "Dapur Anggaran",
      object: "nampan MBG",
      evidence: "kontrak dapur, biaya per porsi, hasil uji, dan laporan insiden",
      people: "anak, orang tua, guru, dan petugas dapur",
      counter: "foto satu dapur rapi yang dipakai mewakili seluruh sistem",
      buzzer: "Satu nampan fotogenik bisa menutup satu spreadsheet yang baunya mulai aneh.",
      activist: "Kotak makan bukan sertifikat keamanan pangan; angka porsi harus bertemu hasil lab.",
    },
    kopdes: {
      label: "Koperasi Massal",
      object: "KopDes Merah Putih",
      evidence: "akta, arus kas, utang, target gerai, dan daftar koperasi aktif",
      people: "anggota koperasi, pengurus desa, pedagang, dan warga pembayar cicilan",
      counter: "jumlah koperasi di panggung yang belum sama dengan usaha hidup di lapangan",
      buzzer: "Angka peluncuran selalu lebih cepat daripada kasir, gudang, dan cicilan.",
      activist: "Banyaknya papan nama bukan bukti koperasi hidup; buka arus kas dan siapa menanggung utang.",
    },
    education: {
      label: "Sekolah Patungan",
      object: "anggaran pendidikan",
      evidence: "klasifikasi anggaran, belanja guru, sekolah, beasiswa, dan riset",
      people: "murid, guru, mahasiswa, peneliti, dan keluarga",
      counter: "persentase formal yang tidak menjelaskan layanan yang hilang",
      buzzer: "Persentasenya tetap cakep selama isi keranjangnya tidak di-zoom.",
      activist: "Amanat anggaran bukan sulap klasifikasi; hitung apa yang benar-benar sampai ke kelas.",
    },
    military: {
      label: "Komando Sipil",
      object: "ekspansi peran militer",
      evidence: "pasal kewenangan, jabatan sipil, kontrak pertahanan, dan pengawasan parlemen",
      people: "warga sipil, prajurit, pekerja pertahanan, dan lembaga pengawas",
      counter: "patriotisme yang dipakai agar biaya dan kewenangan tidak boleh ditanya",
      buzzer: "Kalau semua pertanyaan disebut ancaman, notulen rapat tinggal berisi ‘siap laksanakan’.",
      activist: "Hormat pada prajurit tidak berarti memberi cek kosong pada kewenangan dan pengadaan.",
    },
    diplomacy: {
      label: "Karpet Merah",
      object: "lawatan dan diplomasi",
      evidence: "agenda, biaya perjalanan, leverage, kesepakatan, dan hasil yang bisa ditagih",
      people: "warga yang membayar perjalanan dan menunggu hasil konkretnya",
      counter: "album bandara yang diperlakukan sebagai capaian kebijakan luar negeri",
      buzzer: "Foto jabat tangan selalu tayang dulu; strategic payoff menyusul lewat jalur diplomatik.",
      activist: "Karpet merah bukan kuitansi hasil; cocokkan itinerary dengan leverage dan tindak lanjut.",
    },
    market: {
      label: "Pasar Timeline",
      object: "rupiah dan IHSG",
      evidence: "kurs, indeks, volume perdagangan, kebijakan fiskal, dan keputusan bank sentral",
      people: "pekerja, penabung, pelaku usaha, importir, dan rumah tangga",
      counter: "satu pidato yang dijadikan sebab tunggal seluruh gerak pasar",
      buzzer: "Kalau grafik merah, baseline dipindah; kalau hijau lima menit, langsung jadi keberhasilan struktural.",
      activist: "Pasar punya banyak sebab; kritik yang serius tetap memisahkan meme podium dari data harian.",
    },
    stateAssets: {
      label: "Negara Korporasi",
      object: "konsolidasi aset negara",
      evidence: "struktur kepemilikan, mandat, valuasi, dividen, risiko, dan penerima manfaat",
      people: "warga sebagai pemilik akhir aset publik dan pekerja di dalamnya",
      counter: "kata sinergi yang menutupi siapa mengawasi siapa",
      buzzer: "Semakin besar logonya, semakin kecil biasanya font risiko di slide terakhir.",
      activist: "Aset publik bukan pitch deck pribadi; buka mandat, valuasi, pengawasan, dan penerima manfaat.",
    },
    budget: {
      label: "Dompet Republik",
      object: "pilihan fiskal",
      evidence: "asumsi APBN, sumber dana, realisasi, utang, dan biaya peluang",
      people: "pembayar pajak dan pengguna layanan yang anggarannya ikut bergeser",
      counter: "angka serapan yang dipakai menggantikan pertanyaan tentang hasil",
      buzzer: "Excel bisa dibuat seimbang; yang tidak muat dipindah ke hidup warga.",
      activist: "Setiap program punya invoice dan layanan yang dikorbankan; tampilkan keduanya.",
    },
    election: {
      label: "Mesin Elektoral",
      object: "kompetisi pemilu",
      evidence: "rekap, metode survei, aturan pencalonan, donor, dan belanja kampanye",
      people: "pemilih, petugas pemilu, kandidat, dan warga yang tidak masuk fanbase",
      counter: "klaim mandat yang datang lebih cepat daripada data resmi",
      buzzer: "Mandat rakyat paling mudah dicetak sebelum server rekap selesai sarapan.",
      activist: "Jangan tukar metode, dana, dan aturan main dengan warna layar yang paling ramah kubu.",
    },
    law: {
      label: "Pasal dan Amar",
      object: "aturan main kekuasaan",
      evidence: "amar, pertimbangan, dissent, prosedur, dan konflik kepentingan",
      people: "warga yang haknya bergantung pada proses yang adil",
      counter: "potongan satu paragraf yang dipakai sebagai seluruh konstitusi",
      buzzer: "Enam jam sidang tetap bisa diperas jadi enam detik ekspresi hakim.",
      activist: "Baca amar dan pertimbangannya; screenshot tanpa prosedur cuma kostum kepastian hukum.",
    },
    protest: {
      label: "Jalanan dan Podium",
      object: "protes dan akuntabilitas",
      evidence: "kronologi, rekaman lapangan, daftar korban, perintah, dan hasil investigasi",
      people: "demonstran, keluarga korban, petugas lapangan, dan warga sekitar",
      counter: "label makar atau rusuh yang menghapus tuntutan dan korban",
      buzzer: "Begitu kata ‘musuh bersama’ naik podium, pertanyaan siapa bertanggung jawab disuruh tiarap.",
      activist: "Lindungi korban, verifikasi rekaman, dan jangan biarkan rumor memakan tuntutan.",
    },
    environment: {
      label: "Peta yang Kebanjiran",
      object: "krisis lingkungan dan bencana",
      evidence: "peta risiko, izin, kontrak, data kerusakan, dan anggaran pemulihan",
      people: "warga terdampak, komunitas lokal, petugas lapangan, dan generasi berikutnya",
      counter: "kunjungan kamera yang selesai sebelum pemulihan dimulai",
      buzzer: "Bencana paling mudah dikelola saat cukup dijadikan latar konferensi pers.",
      activist: "Hubungkan izin, kerusakan, aliran manfaat, dan siapa yang masih tinggal setelah kamera pulang.",
    },
    energy: {
      label: "Negeri Mati Lampu",
      object: "layanan energi",
      evidence: "data pemadaman, cadangan daya, kontrak, biaya, dan rencana pemulihan",
      people: "rumah tangga, rumah sakit, pekerja, sekolah, dan usaha kecil",
      counter: "klaim andal yang padam saat diuji di wilayah terdampak",
      buzzer: "Narasi tetap menyala 24 jam meski genset warga sudah batuk-batuk.",
      activist: "Hitung durasi padam, kesiapan cadangan, biaya, dan siapa terakhir mendapat listrik kembali.",
    },
    media: {
      label: "Algoritma dan Arsip",
      object: "konten politik",
      evidence: "rekaman utuh, metadata, sumber dana, afiliasi, dan versi koreksi",
      people: "narasumber, audiens, figur yang diserang, dan warga yang butuh verifikasi",
      counter: "potongan viral yang lebih cepat daripada konteks dan hak jawab",
      buzzer: "Reaction face besar; disclosure dan konteks muat kalau layar diputar horizontal.",
      activist: "Reach bukan metode; buka rekaman, metadata, afiliasi, dan koreksi.",
    },
    procurement: {
      label: "Invoice Kekuasaan",
      object: "pengadaan dan konflik kepentingan",
      evidence: "kontrak, pemilik vendor, tender, invoice, audit, dan aliran manfaat",
      people: "pengguna layanan, pekerja, pembayar pajak, dan pihak yang menanggung kegagalan",
      counter: "serapan dan peresmian yang tidak menjawab siapa mendapat kontrak",
      buzzer: "Vendor boleh berlapis; caption tetap satu: demi rakyat.",
      activist: "Ikuti kontrak, pemilik, aliran uang, hasil, dan siapa yang menanggung kegagalan.",
    },
    welfare: {
      label: "Dompet Warga",
      object: "daya beli dan perlindungan sosial",
      evidence: "harga, upah, data penerima, biaya hidup, dan ketepatan penyaluran",
      people: "pekerja, keluarga, pengemudi, penerima bantuan, dan usaha kecil",
      counter: "rata-rata nasional yang menghapus tagihan di meja makan",
      buzzer: "Rata-rata selalu tampak kenyang kalau dompet yang kosong tidak ikut diwawancara.",
      activist: "Turunkan angka makro ke harga, upah, cicilan, dan siapa yang tidak masuk daftar.",
    },
    religion: {
      label: "Moral di Rate Card",
      object: "otoritas moral dalam politik",
      evidence: "afiliasi, pendanaan, jabatan, pernyataan utuh, dan dampak kebijakan",
      people: "umat dan warga yang keyakinannya dijadikan target mobilisasi",
      counter: "kepastian moral instan yang menyembunyikan kepentingan politik",
      buzzer: "Kalau endorsement diberi aura ibadah, disclosure terasa seperti gangguan khusyuk.",
      activist: "Iman bukan rate card; buka afiliasi, uang, kuasa, dan siapa yang diuntungkan.",
    },
    generic: {
      label: "Ruang Publik",
      object: "isu bulan ini",
      evidence: "kronologi, dokumen utama, anggaran, dan tanggapan pihak terkait",
      people: "warga yang menanggung keputusan",
      counter: "pengalihan yang tidak menjawab inti persoalan",
      buzzer: "Kalau substansi belum siap, kemasannya bisa lembur dulu.",
      activist: "Tarik isu kembali ke bukti, dampak, kuasa, dan siapa yang harus menjawab.",
    },
  };

  const clean = (value) => String(value || "").replace(/\s+/g, " ").trim();

  function humanize(value) {
    return clean(value)
      .replace(/^#/, "")
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .replace(/([A-Za-z])(\d)/g, "$1 $2")
      .replace(/(\d)([A-Za-z])/g, "$1 $2")
      .replace(/[_-]+/g, " ");
  }

  function clip(value, max = 76) {
    const text = clean(value);
    if (text.length <= max) return text;
    const cut = text.slice(0, max - 1).replace(/\s+\S*$/, "");
    return `${cut || text.slice(0, max - 1)}…`;
  }

  function parts(value) {
    return clean(value)
      .split(/\s*(?:,|;|\+|\bdan\b|\bserta\b)\s*/i)
      .map(clean)
      .filter(Boolean);
  }

  function firstFact(issue) {
    const fact = Array.isArray(issue?.facts) ? issue.facts.find((entry) => Array.isArray(entry)) : null;
    return clean(fact?.[0] || "");
  }

  function classify(issue) {
    const weightedFields = [
      [issue?.key, 5],
      [issue?.arc, 5],
      [issue?.title, 4],
      [issue?.subject, 5],
      [issue?.document, 3],
      [issue?.post, 2],
      [issue?.lesson, 1],
    ];
    const ranked = DOMAIN_RULES.map(([domain, pattern], order) => ({
      domain,
      order,
      score: weightedFields.reduce(
        (sum, [value, weight]) => sum + (pattern.test(clean(value)) ? weight : 0),
        0,
      ),
    })).sort((a, b) => b.score - a.score || a.order - b.order);
    return ranked[0]?.score > 0 ? ranked[0].domain : "generic";
  }

  function usable(value, kind) {
    const text = clean(value);
    return Boolean(text) && !GENERIC[kind]?.test(text);
  }

  function hooks(issue) {
    const domain = classify(issue);
    const lens = DOMAIN_LENS[domain] || DOMAIN_LENS.generic;
    const title = humanize(issue?.title || issue?.key || lens.object);
    const rawSubject = usable(issue?.subject, "subject") ? clean(issue.subject) : title;
    const subject = clip(rawSubject || lens.object, 84);

    const rawDocument = usable(issue?.document, "document")
      ? clean(issue.document)
      : firstFact(issue) || lens.evidence;
    const documentParts = parts(rawDocument);
    const evidenceA = clip(documentParts[0] || lens.evidence, 54);
    const evidenceB = clip(documentParts[1] || documentParts[0] || lens.evidence, 54);

    const rawPeople = usable(issue?.people, "people") ? clean(issue.people) : lens.people;
    const peopleParts = parts(rawPeople);
    const people = clip(peopleParts.slice(0, 2).join(" dan ") || lens.people, 66);

    const rawCounter = usable(issue?.counter, "counter") ? clean(issue.counter) : lens.counter;
    const counter = clip(rawCounter, 76);
    const focusShort = clip(parts(subject)[0] || subject || lens.object, 64);
    const next = clip(humanize(issue?.teaser || "tagihan bulan berikutnya"), 58);

    return {
      domain,
      lens,
      title,
      subject,
      focusShort,
      evidenceA,
      evidenceB,
      evidence: clip(`${evidenceA} + ${evidenceB}`, 112),
      people,
      counter,
      next,
      speaker: clip(issue?.npc || "akun utama bulan ini", 48),
    };
  }

  const choose = (items, variantIndex, salt = 0) => items[(Math.max(0, Number(variantIndex) || 0) + salt) % items.length];

  const SPECIAL_ACTION_COPY = {
    "pertamax-mbg-ai": {
      buzzer: {
        meme: [
          {
            name: "Naikkan Lagi Sound “MBG: Mas Bahlul Ganteng”",
            desc: "Dorong remix, dance, dan potongan ‘bolu ketan’ sampai feed membahas kegantengan fiktif lebih lama daripada Pertamax Rp16.250.",
          },
          {
            name: "Sebar Poster AI Bahlul Glowing di SPBU",
            desc: "Bikin rahang enam-pack, pompa bensin neon, dan slogan energi aman; struk kenaikan harga diperkecil seperti disclaimer paid promote.",
          },
          {
            name: "Banjiri Feed dengan Video Reaction Bolu Ketan",
            desc: "Kirim kreator untuk pura-pura kaget pada lagu MBG, duet satu sama lain, lalu biarkan pertanyaan formula harga tenggelam di reaction face.",
          },
        ],
      },
      aktivis: {
        meme: [
          {
            name: "Tempel Struk Rp16.250 ke Sound MBG",
            desc: "Pakai sound viral sebagai pintu masuk, lalu tampilkan lonjakan Pertamax dan Pertamax Green tanpa mengubah lagu receh menjadi bukti konspirasi.",
          },
          {
            name: "Duet Poster AI dengan Harga Riil SPBU",
            desc: "Taruh wajah glowing buatan mesin di sebelah papan harga asli; sumber harga tetap lebih besar daripada punchline.",
          },
          {
            name: "Bikin Karaoke Biaya Peluang Pertamax",
            desc: "Ubah selisih harga menjadi ongkos kerja, kuliah, dan antar jemput; lucu dulu, lalu arahkan penonton ke formula serta tanggal penyesuaian.",
          },
        ],
      },
    },
  };

  function specialActionCopy(role, actionId, issue, variantIndex) {
    const arc = clean(issue?.arc);
    const variants = SPECIAL_ACTION_COPY[arc]?.[role]?.[actionId];
    return variants?.length ? variants[(Number(variantIndex) || 0) % variants.length] : null;
  }

  const BUZZER = {
    meme: (h, v) => ({
      name: choose([
        `Stikerkan ${h.focusShort}`,
        `Potong ${h.focusShort} Jadi Reels 11 Detik`,
        `Bikin ${h.lens.object} Terlihat Gemoy`,
        `Masukkan ${h.focusShort} ke Grup Keluarga`,
      ], v),
      desc: choose([
        `Ambil satu visual dari ${h.subject}, buang ${h.evidenceA}, lalu jadikan ${h.counter} punchline utama.`,
        `Peras ${h.subject} sampai tinggal template, emoji, dan satu musuh bersama; ${h.people} tidak kebagian frame.`,
        `Ubah ${h.lens.object} jadi candaan berulang sebelum orang sempat membuka ${h.evidenceA}.`,
        `Tempel wajah lucu pada ${h.subject}; algoritma dapat bahan, ${h.evidenceB} kehilangan kursi.`,
      ], v),
    }),
    patriot: (h, v) => ({
      name: choose([
        `Merah-Putihkan ${h.focusShort}`,
        `Pasang Tameng Kedaulatan di ${h.lens.object}`,
        `Cap Penanya ${h.lens.label} Kurang Nasionalis`,
        `Naikkan Lagu Kebangsaan, Kecilkan ${h.evidenceA}`,
      ], v),
      desc: choose([
        `Geser debat ${h.subject} dari ${h.evidence} ke tes cinta negara; ${h.counter} jadi barisan pertahanan.`,
        `Buat pertanyaan tentang ${h.evidenceA} terdengar seperti serangan pada bangsa, bukan tagihan untuk pejabat.`,
        `Panggil ${h.lens.object} kepentingan nasional agar ${h.people} tampak egois ketika meminta bukti.`,
        `Jadikan ${h.counter} musuh bersama; detail ${h.evidenceB} boleh menunggu setelah upacara.`,
      ], v),
    }),
    data: (h, v) => ({
      name: choose([
        `Besarkan ${h.evidenceA}, Kecilkan ${h.evidenceB}`,
        `Crop Angka untuk ${h.focusShort}`,
        `Pilih Baseline Ramah ${h.lens.label}`,
        `Bikin Dashboard ${h.lens.object} Tetap Hijau`,
      ], v),
      desc: choose([
        `Pajang ${h.evidenceA} yang paling ramah kantor, kubur ${h.evidenceB}; biarkan ${h.people} membaca kesimpulan tanpa pembanding.`,
        `Gunakan angka sah dari ${h.evidenceA}, tetapi pilih periode yang membuat ${h.subject} tampak selesai.`,
        `Susun ${h.evidence} sebagai grafik optimistis; ${h.counter} masuk catatan kaki ukuran delapan.`,
        `Hitung yang sudah diumumkan, jangan yang gagal sampai ke ${h.people}; judul slide tetap “sesuai target”.`,
      ], v),
    }),
    whatabout: (h, v) => ({
      name: choose([
        `Lempar ${h.focusShort} ke Kubu Sebelah`,
        `Buka Dosa Lama Saat Ditanya ${h.evidenceA}`,
        `Bandingkan ${h.lens.object} dengan Masalah yang Lebih Tua`,
        `Jawab ${h.subject} Pakai “Dulu Juga”`,
      ], v),
      desc: choose([
        `Saat ${h.evidenceA} ditagih, pindahkan layar ke ${h.counter}; pertanyaan bulan ini dibiarkan antre.`,
        `Normalisasi ${h.subject} dengan kompilasi kesalahan lama, tanpa menyentuh ${h.evidenceB}.`,
        `Gunakan “kubu lain juga begitu” untuk mengecilkan dampak pada ${h.people}.`,
        `Bawa debat ke masa lalu sampai ${h.lens.object} hari ini kehilangan alamat dan penanggung jawab.`,
      ], v),
    }),
    endorse: (h, v) => ({
      name: choose([
        `Titip ${h.focusShort} ke Influencer`,
        `Bikin Tur Konten di ${h.lens.label}`,
        `Ajak Seleb Foto Bareng ${h.lens.object}`,
        `Affiliate-kan ${h.subject}`,
      ], v),
      desc: choose([
        `Pinjam kedekatan kreator untuk menjual ${h.subject}; label kerja sama lebih kecil daripada ${h.counter}.`,
        `Kirim figur populer ke panggung ${h.lens.object}; ${h.evidenceA} cukup muncul satu detik sebagai properti.`,
        `Buat ${h.speaker} terasa sudah dijawab karena seleb mengangguk, meski ${h.evidence} belum dibuka.`,
        `Ubah ${h.people} menjadi latar konten dan ${h.subject} menjadi caption “jujurly aku suka programnya”.`,
      ], v),
    }),
    podcast: (h, v) => ({
      name: choose([
        `Kubur ${h.focusShort} di Podcast Dua Jam`,
        `Panjangkan Jawaban soal ${h.evidenceA}`,
        `Undang Orang Dalam Bahas ${h.lens.object}`,
        `Bikin Obrolan Santai tentang ${h.subject}`,
      ], v),
      desc: choose([
        `Bicarakan ${h.subject} sampai baterai penonton habis; pertanyaan tentang ${h.evidence} baru muncul menjelang outro.`,
        `Dudukkan pejabat dengan host ramah, sponsor lengkap, dan follow-up tipis saat ${h.counter} disebut.`,
        `Larutkan ${h.evidenceA} ke kisah masa kecil dan visi besar; ${h.people} kebagian salam penutup.`,
        `Jawab ${h.speaker} lewat dua jam obrolan tanpa satu layar pun menampilkan ${h.evidenceB}.`,
      ], v),
    }),
    attack: (h, v) => ({
      name: choose([
        `Audit ${h.speaker}, Jangan ${h.lens.object}`,
        `Cari Foto Lama Penanya ${h.focusShort}`,
        `Bedah Motif Pengkritik ${h.lens.label}`,
        `Naikkan Afiliasi ${h.speaker}`,
      ], v),
      desc: choose([
        `Jadikan riwayat ${h.speaker} isu utama agar ${h.evidence} lolos dari pemeriksaan.`,
        `Cari unggahan lama, lingkar pertemanan, dan salah ucap penanya; ${h.subject} diparkir sampai timeline capek.`,
        `Tuduh pembawa kritik punya agenda sebelum membuka ${h.evidenceA} dan siapa yang bertanggung jawab.`,
        `Serang reputasi ${h.speaker}; viralnya cepat, tetapi dampak pada ${h.people} tetap tidak terjawab.`,
      ], v),
    }),
    concert: (h, v) => ({
      name: choose([
        `Panggung-Rakyatkan ${h.focusShort}`,
        `Bikin Festival ${h.lens.label}`,
        `Soundcheck untuk ${h.lens.object}`,
        `Peluncuran Akbar ${h.subject}`,
      ], v),
      desc: choose([
        `Pasang LED, lagu, dan kerumunan di depan ${h.subject}; ${h.evidence} diletakkan setelah rundown hiburan.`,
        `Ubah ${h.lens.object} menjadi perayaan nasional agar pertanyaan ${h.speaker} terdengar merusak suasana.`,
        `Tampilkan ${h.people} sebagai massa pendukung; jangan beri mikrofon saat ${h.counter} ditagih.`,
        `Buat panggung lebih besar daripada ${h.evidenceA} dan tepuk tangan lebih cepat daripada evaluasi.`,
      ], v),
    }),
    transparency: (h, v) => ({
      name: choose([
        `Buka ${h.evidenceA}, Akui ${h.focusShort}`,
        `Rilis Dashboard Utuh ${h.lens.label}`,
        `Unggah ${h.evidence} Tanpa Crop`,
        `Jawab ${h.speaker} Pakai Dokumen`,
      ], v),
      desc: choose([
        `Publikasikan ${h.evidence}, sebut bagian yang gagal, dan jawab dampaknya pada ${h.people}.`,
        `Akui batas serta kesalahan di ${h.subject}; beri tenggat koreksi, PIC, dan data yang bisa diperiksa.`,
        `Hadapi ${h.counter} dengan bukti utuh, bukan tujuh jilid klarifikasi yang saling bantah.`,
        `Buka siapa memutuskan, siapa menerima manfaat, dan apa yang berubah setelah ${h.speaker} bertanya.`,
      ], v),
    }),
  };

  const ACTIVIST = {
    context: (h, v) => ({
      name: choose([
        `Urutkan ${h.focusShort} Sebelum Dipotong`,
        `Tarik Kronologi ${h.lens.label}`,
        `Buka Video Utuh ${h.speaker}`,
        `Sambungkan ${h.evidenceA} ke ${h.evidenceB}`,
      ], v),
      desc: choose([
        `Susun kapan ${h.subject} dimulai, siapa memutuskan, lalu cocokkan ${h.evidence} sebelum klip viral mengambil alih.`,
        `Kembalikan unggahan ${h.speaker} ke urutan kejadian; bedakan fakta, bantahan, dan ${h.counter}.`,
        `Tarik garis dari ${h.evidenceA} ke dampak pada ${h.people}, bukan ke fanwar bulan lalu.`,
        `Buka versi panjang, perubahan narasi, dan tanggal dokumen agar ${h.subject} tidak hidup sebagai screenshot yatim.`,
      ], v),
    }),
    data: (h, v) => ({
      name: choose([
        `Cocokkan ${h.evidenceA} dengan ${h.evidenceB}`,
        `Hitung Ulang ${h.focusShort}`,
        `Buka Dataset ${h.lens.label}`,
        `Audit Angka di Balik ${h.lens.object}`,
      ], v),
      desc: choose([
        `Uji ${h.subject} lewat ${h.evidence}; hitung siapa menikmati hasil dan apa yang ditanggung ${h.people}.`,
        `Bandingkan target, realisasi, baseline, dan biaya penuh ${h.lens.object}; jangan berhenti di angka peresmian.`,
        `Buka metode serta sumber ${h.evidenceA}, lalu cari bagian yang hilang dari klaim ${h.speaker}.`,
        `Paksa ${h.evidenceA} dan ${h.evidenceB} duduk satu tabel sampai ${h.counter} tidak bisa bersembunyi di rata-rata.`,
      ], v),
    }),
    empathy: (h, v) => ({
      name: choose([
        `Dengar ${h.people} di Balik ${h.lens.object}`,
        `Bawa Suara Terdampak ke ${h.lens.label}`,
        `Rekam Hidup di Balik ${h.focusShort}`,
        `Temui ${h.people}, Jangan Cuma Grafiknya`,
      ], v),
      desc: choose([
        `Hubungkan ${h.subject} dengan pengalaman ${h.people}; minta izin, lindungi identitas, dan jangan jual trauma sebagai thumbnail.`,
        `Biarkan ${h.people} menjelaskan apa yang tidak terlihat di ${h.evidenceA}, tanpa dipaksa menjadi maskot kubu.`,
        `Turunkan ${h.lens.object} dari podium ke hidup sehari-hari; cek kesaksian dengan ${h.evidenceB}.`,
        `Beri mikrofon pada ${h.people} dan ruang untuk menolak direkam; cerita mereka bukan B-roll gerakan.`,
      ], v),
    }),
    meme: (h, v) => ({
      name: choose([
        `Bikin ${h.lens.object} Jadi Meme Ber-Link`,
        `Stikerkan Kontradiksi ${h.focusShort}`,
        `Remix Janji di ${h.lens.label}`,
        `Bikin Bingo ${h.subject}`,
      ], v),
      desc: choose([
        `Pakai humor untuk membuka kontradiksi ${h.subject}; tautkan ${h.evidenceA} sebelum punchline disalin tanpa sumber.`,
        `Buat ${h.counter} terlihat absurd tanpa mengubah ${h.people} menjadi bahan tertawaan.`,
        `Ringkas ${h.lens.object} jadi format yang bisa dibagikan, lalu arahkan orang ke ${h.evidence}.`,
        `Tertawakan jarak antara ${h.evidenceA} dan ${h.evidenceB}; jangan bikin klaim baru cuma demi template.`,
      ], v),
    }),
    network: (h, v) => ({
      name: choose([
        `Bangun Posko ${h.lens.label}`,
        `Hubungkan Jaringan untuk ${h.focusShort}`,
        `Bagi Kerja Verifikasi ${h.evidenceA}`,
        `Sebar Pengawas ke Arena ${h.lens.object}`,
      ], v),
      desc: choose([
        `Bagi tugas riset ${h.evidence}, pendampingan ${h.people}, logistik, keamanan, dan tindak lanjut setelah tagar turun.`,
        `Hubungkan kampus, komunitas, jurnalis, ahli, serta bantuan hukum yang memang relevan dengan ${h.subject}.`,
        `Ubah engagement ${h.speaker} menjadi posko kerja; satu tim pegang data, satu tim menjaga ${h.people}.`,
        `Bangun koalisi di sekitar tuntutan ${h.subject}, bukan fanbase satu akun atau lomba logo organisasi.`,
      ], v),
    }),
    law: (h, v) => ({
      name: choose([
        `Uji ${h.focusShort} ke Pasal dan Wewenang`,
        `Baca Amar untuk ${h.lens.object}`,
        `Susun Legal Brief ${h.lens.label}`,
        `Gugat Prosedur di Balik ${h.subject}`,
      ], v),
      desc: choose([
        `Periksa dasar hukum, prosedur, konflik kepentingan, dan siapa mengawasi keputusan tentang ${h.subject}.`,
        `Buka ${h.evidence}, lalu terjemahkan akibat hukumnya bagi ${h.people} tanpa cosplay menjadi hakim.`,
        `Pisahkan apa yang ilegal, cacat prosedur, tidak etis, dan sekadar buruk dalam ${h.lens.object}.`,
        `Susun argumen dari kewenangan serta bukti ${h.evidenceA}; slogan ${h.counter} bukan yurisprudensi.`,
      ], v),
    }),
    film: (h, v) => ({
      name: choose([
        `Rekam ${h.people}, Kunci ${h.evidenceA}`,
        `Bikin Mini-Doc ${h.lens.label}`,
        `Buka Footage ${h.focusShort}`,
        `Susun Visual Evidence ${h.lens.object}`,
      ], v),
      desc: choose([
        `Hubungkan gambar, lokasi, waktu, ${h.evidence}, dan kesaksian ${h.people}; sediakan hak jawab serta koreksi.`,
        `Buat ${h.subject} sulit dihapus dari ingatan tanpa membuat trauma ${h.people} jadi cliffhanger.`,
        `Rilis footage ketika versi resmi melupakan kamera pernah menyala; jelaskan apa yang gambar itu tidak bisa buktikan.`,
        `Susun arsip visual ${h.lens.object} dengan metadata, metode, narasumber, dan catatan bagian yang masih diperdebatkan.`,
      ], v),
    }),
    attack: (h, v) => ({
      name: choose([
        `Seret Kehidupan Pribadi ${h.speaker}`,
        `Bongkar Aib Sampingan di ${h.lens.label}`,
        `Doxxing Halus Penjaga ${h.lens.object}`,
        `Goreng Salah Ucap ${h.speaker}`,
      ], v),
      desc: choose([
        `Cari foto keluarga dan aib ${h.speaker}; ${h.subject} mungkin viral, tetapi ${h.evidence} tetap tidak terjawab.`,
        `Ubah kritik ${h.lens.object} menjadi infotainment pribadi. Cepat, kotor, dan integritas gerakan ikut membayar.`,
        `Sebar petunjuk identitas sambil pura-pura netizen menemukannya sendiri; ${h.people} kehilangan isu, kamu kehilangan kompas.`,
        `Besarkan salah ucap ${h.speaker}, tinggalkan ${h.evidenceA}, lalu bersiap menjelaskan kenapa gerakanmu mirip mesin lawan.`,
      ], v),
    }),
    transparency: (h, v) => ({
      name: choose([
        `Koreksi Klaim soal ${h.focusShort}`,
        `Buka Metode Riset ${h.lens.label}`,
        `Publikasikan Donor Gerakan ${h.lens.object}`,
        `Unggah Sumber Primer ${h.evidenceA}`,
      ], v),
      desc: choose([
        `Buka sumber, metode, donor, dan bagian keliru dari responsmu atas ${h.subject} sebelum lawan menjadikannya monumen.`,
        `Tunjukkan bagaimana ${h.evidence} diverifikasi, apa yang belum pasti, dan siapa boleh mengoreksi.`,
        `Akui afiliasi serta biaya kerja ${h.lens.object}; kepercayaan tumbuh ketika gerakan ikut bisa diaudit.`,
        `Publikasikan versi lama dan koreksi baru; jangan hapus jejak saat klaim tentang ${h.evidenceA} berubah.`,
      ], v),
    }),
  };

  function contextLine(role, actionId, h) {
    const harmful = role === "buzzer" && actionId !== "transparency";
    if (role === "aktivis" && actionId === "attack") {
      return `↳ CATATAN MORAL — Bukti yang seharusnya diuji: ${h.evidence}. Viral tidak membuat serangan pribadi relevan.`;
    }
    if (harmful) {
      return `↳ TARGET NARASI — ${h.subject}. YANG DIKABURKAN: ${h.evidence}.`;
    }
    return `↳ BUKTI BULAN INI — ${h.evidence}. DAMPAK: ${h.people}.`;
  }

  function present({ role, action, issue, variantIndex = 0 }) {
    const h = hooks(issue || {});
    const id = clean(action?.id);
    const factory = (role === "buzzer" ? BUZZER : ACTIVIST)[id];
    if (!factory) return null;
    const copy = specialActionCopy(role, id, issue, variantIndex) || factory(h, variantIndex);
    const punch = h.lens[role];
    const draftBody = `${copy.name} ${copy.desc}`.toLowerCase();
    const hasIssueAnchor = [h.focusShort, h.evidenceA, h.evidenceB, h.people]
      .map((value) => clean(value).toLowerCase())
      .filter((value) => value.length >= 5)
      .some((value) => draftBody.includes(value));
    const contextualDesc = hasIssueAnchor
      ? copy.desc
      : `Soal ${h.focusShort}: ${copy.desc}`;
    return {
      name: clip(copy.name, 96),
      desc: `${clip(contextualDesc, 202)} ${clip(punch, 86)}`,
      context: clip(contextLine(role, id, h), 184),
      audit: {
        domain: h.domain,
        subject: h.subject,
        focusShort: h.focusShort,
        evidence: h.evidence,
        people: h.people,
        variant: Number(variantIndex) || 0,
      },
    };
  }

  function audit({ role, action, issue, variantIndex = 0 }) {
    const copy = present({ role, action, issue, variantIndex });
    if (!copy) return { ok: false, problems: ["action tidak punya contextual copy"] };
    const body = `${copy.name} ${copy.desc}`.toLowerCase();
    const haystack = `${body} ${copy.context}`.toLowerCase();
    const markers = [copy.audit.subject, copy.audit.focusShort, copy.audit.evidence, copy.audit.people]
      .flatMap((value) => parts(value))
      .map((value) => clean(value).toLowerCase())
      .filter((value) => value.length >= 5);
    const problems = [];
    if (!markers.some((marker) => body.includes(marker))) problems.push("judul/deskripsi tidak membawa jangkar isu");
    if (/nyambung langsung ke|bikin isu gampang dibagikan|kalau berhasil, timeline berubah/i.test(haystack)) {
      problems.push("masih memakai template generik lama");
    }
    if (copy.name.length > 96) problems.push("judul terlalu panjang");
    if (copy.desc.length > 300) problems.push("deskripsi terlalu panjang");
    return { ok: problems.length === 0, problems, copy };
  }

  window.PNActionCopy = Object.freeze({ present, audit, classify, hooks });
})();
