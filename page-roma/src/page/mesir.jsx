import React, { useState, useEffect } from 'react';

const figmaEgyptCSS = `
  :root {
    --bg-dark: #221F1E;
    --bg-light: #EFECE6;
    --text-dark: #2A2625;
    --text-muted: #7C766E;
    --accent-coral: #E07A5F;
    --card-bg: rgba(42, 38, 37, 0.03);
    --font-serif: 'Playfair Display', serif;
    --font-sans: 'Plus Jakarta Sans', sans-serif;
  }

  .egypt-figma-container {
    background-color: var(--bg-light);
    color: var(--text-dark);
    font-family: var(--font-sans);
    line-height: 1.7;
    width: 100%;
    min-height: 100vh;
  }

  .egypt-figma-container * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }

  .hero-section {
    background-color: var(--bg-dark);
    color: var(--bg-light);
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 80px 20px;
  }

  .hero-tag {
    font-size: 0.85rem;
    letter-spacing: 4px;
    color: var(--accent-coral);
    text-transform: uppercase;
    margin-bottom: 24px;
    font-weight: 600;
  }

  .hero-section h1 {
    font-family: var(--font-serif);
    font-size: 3.8rem;
    font-weight: 400;
    max-width: 950px;
    margin-bottom: 24px;
    line-height: 1.15;
  }

  .hero-subtext {
    font-size: 1.1rem;
    color: #9C968E;
    margin-bottom: 48px;
    letter-spacing: 1px;
  }

  .hero-navigation {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
    max-width: 900px;
  }

  .hero-navigation a {
    color: var(--bg-light);
    text-decoration: none;
    padding: 10px 22px;
    border: 1px solid rgba(239, 236, 230, 0.2);
    border-radius: 24px;
    font-size: 0.85rem;
    transition: all 0.3s ease;
  }

  .hero-navigation a:hover, .hero-navigation a.active {
    background-color: var(--accent-coral);
    border-color: var(--accent-coral);
    color: white;
  }

  .layout-wrapper {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
  }

  .sticky-sidebar {
    width: 300px;
    padding: 80px 40px;
    position: sticky;
    top: 0;
    height: 100vh;
    border-right: 1px solid rgba(42, 38, 37, 0.1);
    overflow-y: auto;
  }

  .sidebar-header {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--text-muted);
    margin-bottom: 32px;
    font-weight: 700;
  }

  .nav-list {
    list-style: none;
  }

  .nav-list li {
    margin-bottom: 22px;
    display: flex;
    align-items: flex-start;
  }

  .nav-list .index-num {
    font-size: 0.8rem;
    color: rgba(42, 38, 37, 0.4);
    width: 30px;
    font-weight: 600;
    margin-top: 2px;
  }

  .nav-list a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.2s ease;
  }

  .nav-list li.active a, .nav-list a:hover {
    color: var(--text-dark);
    font-weight: 700;
  }

  .main-content {
    flex: 1;
    padding: 80px 100px;
  }

  .chapter-tag {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--text-muted);
    margin-bottom: 16px;
    display: block;
    font-weight: 600;
  }

  .main-content section {
    padding-bottom: 80px;
    margin-bottom: 80px;
    border-bottom: 1px solid rgba(42, 38, 37, 0.1);
  }

  .main-content h2 {
    font-family: var(--font-serif);
    font-size: 2.8rem;
    font-weight: 400;
    margin-bottom: 36px;
    color: var(--text-dark);
    line-height: 1.25;
  }

  .quote-highlight-box {
    border-left: 3px solid var(--accent-coral);
    background-color: rgba(224, 122, 95, 0.05);
    padding: 30px 35px;
    margin-bottom: 40px;
  }

  .quote-highlight-box h4 {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--accent-coral);
    margin-bottom: 12px;
    font-weight: 700;
  }

  .quote-highlight-box p {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.15rem;
    color: #3A3533;
    line-height: 1.6;
  }

  .body-text {
    font-size: 1.05rem;
    color: #3A3533;
    margin-bottom: 28px;
    text-align: justify;
  }

  .sub-chapter-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-dark);
    margin: 40px 0 16px 0;
    letter-spacing: -0.3px;
  }

  .figma-timeline {
    position: relative;
    padding-left: 140px;
    margin-top: 50px;
  }

  .figma-timeline::before {
    content: '';
    position: absolute;
    left: 120px;
    top: 12px;
    bottom: 12px;
    width: 1px;
    background-color: rgba(42, 38, 37, 0.15);
  }

  .timeline-node-item {
    position: relative;
    margin-bottom: 48px;
  }

  .node-left-year {
    position: absolute;
    left: -140px;
    top: 0;
    width: 100px;
    text-align: right;
    font-size: 0.95rem;
    color: var(--accent-coral);
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .timeline-node-item::after {
    content: '';
    position: absolute;
    left: -23px;
    top: 7px;
    width: 7px;
    height: 7px;
    background-color: var(--bg-light);
    border: 2px solid var(--accent-coral);
    border-radius: 50%;
    z-index: 2;
  }

  .node-right-content h4 {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 6px;
  }

  .node-right-content p {
    font-size: 0.95rem;
    color: var(--text-muted);
  }

  .legacy-grid-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 32px;
  }

  .figma-legacy-card {
    background-color: var(--card-bg);
    border-radius: 6px;
    padding: 28px;
    border: 1px solid rgba(42, 38, 37, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s ease;
  }

  .figma-legacy-card:hover {
    transform: translateY(-2px);
  }

  .legacy-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
  }

  .legacy-card-title {
    font-weight: 700;
    font-size: 1.15rem;
    color: var(--text-dark);
    letter-spacing: -0.2px;
  }

  .legacy-card-badge {
    background-color: rgba(42, 38, 37, 0.06);
    color: var(--text-dark);
    font-size: 0.7rem;
    padding: 4px 10px;
    border-radius: 4px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .legacy-card-desc {
    font-size: 0.95rem;
    color: #55504A;
    line-height: 1.6;
  }

  .bottom-pagination {
    margin-top: 80px;
    padding-top: 40px;
    border-top: 1px solid rgba(42, 38, 37, 0.1);
  }

  .bottom-pagination span {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--text-muted);
    display: block;
    margin-bottom: 6px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  .bottom-pagination button {
    background: none;
    border: none;
    color: var(--text-dark);
    font-family: var(--font-serif);
    font-size: 2.2rem;
    font-weight: 400;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s ease;
  }

  .bottom-pagination button:hover {
    color: var(--accent-coral);
  }

  @media (max-width: 1024px) {
    .legacy-grid-layout {
      grid-template-columns: 1fr;
    }
    .layout-wrapper {
      flex-direction: column;
    }
    .sticky-sidebar {
      width: 100%;
      height: auto;
      position: relative;
      border-right: none;
      border-bottom: 1px solid rgba(42, 38, 37, 0.1);
      padding: 40px 20px;
    }
    .main-content {
      padding: 40px 20px;
    }
    .hero-section h1 {
      font-size: 2.6rem;
    }
  }
`;

const MesirPage = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('fakta-pembuka');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'fakta-pembuka';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'fakta-pembuka', num: 1, text: 'Fakta Pembuka' },
    { id: 'umur-panjang', num: 2, text: 'Umur Panjang Peradaban' },
    { id: 'asal-usul', num: 3, text: 'Asal-Usul & Geografi' },
    { id: 'tiga-era', num: 4, text: 'Puncak Kejayaan' },
    { id: 'ilmu-inovasi', num: 5, text: 'Ilmu & Inovasi' },
    { id: 'agama-kosmologi', num: 6, text: 'Agama & Kosmologi' },
    { id: 'keruntuhan', num: 7, text: 'Keruntuhan' },
    { id: 'timeline', num: 8, text: 'Timeline' },
    { id: 'warisan', num: 9, text: 'Warisan Dunia' },
  ];

  return (
    <div className="egypt-figma-container">
      <style dangerouslySetInnerHTML={{ __html: figmaEgyptCSS }} />

      <header className="hero-section">
        <div className="hero-tag">Mesir Kuno · ~3100 SM – 30 SM</div>
        <h1>Hadiah Sungai Nil untuk Dunia — Peradaban yang Tak Pernah Mati</h1>
        <div className="hero-subtext">Lembah Sungai Nil, Afrika Utara</div>
        
        <nav className="hero-navigation">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? 'active' : ''}>
              {item.text}
            </a>
          ))}
        </nav>
      </header>

      <div className="layout-wrapper">
        <aside className="sticky-sidebar">
          <div className="sidebar-header">Isi Halaman</div>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
                <span className="index-num">{item.num}</span>
                <a href={`#${item.id}`}>{item.text}</a>
              </li>
            ))}
          </ul>
        </aside>

        <main className="main-content">
          <section id="fakta-pembuka">
            <span className="chapter-tag">Bab 1 · Fakta Pembuka</span>
            <h2>Keajaiban Teknik di Padang Pasir</h2>
            <div className="quote-highlight-box">
              <h4>Fakta Pembuka</h4>
              <p>Pada tahun 2560 SM, sekitar 20.000–30.000 pekerja membangun sebuah struktur yang begitu presisi sehingga sisi-sisinya melenceng kurang dari 5 sentimeter dari garis lurus sempurna — padahal panjangnya lebih dari 230 meter. Itu adalah Piramida Agung Giza. Para insinyur modern, dengan semua teknologi yang ada, masih kesulitan menjelaskan bagaimana manusia dengan tali, batu, dan tangan telanjang mampu mencapai tingkat presisi seperti itu.</p>
            </div>
          </section>

          <section id="umur-panjang">
            <span className="chapter-tag">Bab 2 · Durasi Sejarah</span>
            <h2>Peradaban yang Berlangsung Lebih Lama dari Apapun</h2>
            <p className="body-text">Dari semua peradaban kuno yang ada di muka bumi, Mesir adalah yang paling panjang umurnya. Selama lebih dari 3.000 tahun — dari penyatuan pertama sekitar 3100 SM hingga kematian Cleopatra VII pada 30 SM — Mesir tidak pernah benar-benar berhenti sebagai entitas peradaban yang kohesif. Untuk membayangkan skalanya: jarak waktu antara kita hari ini dengan jatuhnya Kekaisaran Romawi Barat (476 M) adalah sekitar 1.550 tahun. Tetapi Piramida Giza sudah berusia lebih dari 2.000 tahun ketika Cleopatra lahir. Bagi Cleopatra, piramida-piramida itu sudah tampak sama tuanya seperti Cleopatra bagi kita hari ini.</p>
            <p className="body-text">Rahasia umur panjang Mesir adalah Sungai Nil. Sejarawan Yunani Herodotus menyebutnya 'Hadiah Sungai Nil' — dan ia tidak keliru. Setiap tahun, banjir Nil yang terprediksi membawa lapisan lumpur hitam yang menyuburkan tanah di kedua tepiannya, menjadikan kawasan sempit itu salah satu lahan pertanian paling produktif di dunia kuno, dikelilingi oleh gurun yang secara alami melindunginya dari invasi.</p>
            <p className="body-text">Namun kekuatan Mesir bukan hanya geografis. Peradaban ini membangun sistem administrasi, sistem kepercayaan, sistem tulisan, dan sistem hukum yang mampu bertahan melalui dinasti demi dinasti, penaklukan demi penaklukan, selama tiga milenium penuh. Tidak ada peradaban lain dalam sejarah manusia yang mencatat pencapaian serupa.</p>
          </section>

          <section id="asal-usul">
            <span className="chapter-tag">Bab 3 · Batas Alam</span>
            <h2>Asal-Usul dan Geografi</h2>
            <p className="body-text">Mesir Kuno tumbuh di sepanjang jalur sempit yang diairi Sungai Nil — sebuah sungai yang mengalir dari pegunungan Afrika Tengah ke utara menuju Laut Mediterania. Di kiri dan kanan jalur subur ini hanya ada gurun: gurun Sahara di barat dan gurun Arabia di timur. Kondisi ini menciptakan peradaban yang terisolasi secara alami namun kaya secara agraris.</p>
            <p className="body-text">Sebelum 3100 SM, Mesir terbagi menjadi dua kerajaan terpisah: Mesir Hulu (Upper Egypt) di selatan dengan ibu kota Tinis, dan Mesir Hilir (Lower Egypt) di utara dengan ibu kota Memphis. Perbedaan budaya, bahasa, dan tradisi antara keduanya sangat nyata — hingga seorang raja bernama Narmer (juga dikenal sebagai Menes) dari Mesir Hulu menyatukan keduanya dalam satu peristiwa yang kemudian dianggap sebagai kelahiran Mesir sebagai bangsa.</p>
            <p className="body-text">Sistem ekonomi Mesir bertumpu pada pertanian gandum dan pohon papirus di sepanjang tepi Nil, yang kemudian diperdagangkan melalui sungai ke pelabuhan-pelabuhan di utara. Kapasitas produksi surplus inilah yang memungkinkan Mesir membiayai pembangunan monumen-monumen raksasa, memelihara tentara profesional, dan mendukung kelas pendeta dan administrator yang besar.</p>
          </section>

          <section id="tiga-era">
            <span className="chapter-tag">Bab 4 · Dinasti Emas</span>
            <h2>Puncak Kejayaan — Tiga Era Keemasan</h2>
            <div className="sub-chapter-title">Era Kerajaan Lama: Abad Piramida (2686–2181 SM)</div>
            <p className="body-text">Ketika Firaun Joser naik tahta sekitar 2686 SM, Mesir memasuki era yang kemudian dikenal sebagai Kerajaan Lama — periode ketika manusia pertama kali membangun monumen batu permanen dalam skala yang belum pernah ada sebelumnya. Arsitek jenius bernama Imhotep merancang piramida pertama: Piramida Berundak di Saqqara, yang juga merupakan bangunan batu besar pertama dalam sejarah manusia.</p>
            <p className="body-text">Puncaknya datang di bawah pemerintahan Firaun Khufu (Cheops) sekitar 2560 SM. Piramida Agung yang dibangunnya di Giza menggunakan lebih dari 2,3 juta balok batu yang masing-masing beratnya antara 2,5 hingga 80 ton. Selama lebih dari 3.800 tahun, Piramida Agung Giza tetap menjadi bangunan tertinggi di muka bumi — sebuah rekor yang baru dilampaui pada tahun 1311 M oleh Katedral Lincoln di Inggris. Di kompleks yang sama, Sfinks Agung berdiri sebagai penjaga — patung terbesar dari zaman kuno, dengan panjang 73 meter dan tinggi 20 meter, dipahat langsung dari batu kapur alami. Sfinks adalah simbol kekuatan dan kearifan firaun: tubuh singa yang kuat, kepala manusia yang bijaksana.</p>
            <div className="sub-chapter-title">Era Kerajaan Baru: Mesir sebagai Kekuatan Militer (1550–1070 SM)</div>
            <p className="body-text">Setelah periode pergolakan yang ditandai dengan invasi Bangsa Hiksos dari timur, Raja Ahmose I membebaskan Mesir dan memulai era yang disebut Kerajaan Baru — periode ketika Mesir mengalami kebangkitan militer dan kultural yang luar biasa. Pada masa ini, tentara Mesir tidak lagi hanya bertahan; mereka melancarkan ekspedisi dan penaklukan ke Nubia di selatan, Levant di utara, dan Libya di barat.</p>
            <p className="body-text">Era ini melahirkan beberapa nama paling ikonik dalam sejarah: Ramesses II (Ramesses Agung), yang memerintah selama 66 tahun, membangun lebih banyak kuil and monumen dari firaun manapun, dan menandatangani Perjanjian Kadesh pada 1247 SM — dokumen perjanjian damai tertua yang diketahui dan tersimpan dalam sejarah manusia. Pada era ini juga muncul Hatshepsut — salah satu dari sedikit perempuan yang memerintah Mesir sebagai firaun penuh, dan yang membangun kuil-kuil paling elegan di Deir el-Bahari.</p>
            <div className="sub-chapter-title">Hieroglif dan Papirus: Revolusi Tulis</div>
            <p className="body-text">Salah satu kontribusi terbesar Mesir untuk peradaban manusia adalah sistem tulisan hieroglif — sistem yang menggunakan gambar dan simbol untuk merepresentasikan suara, kata, dan konsep abstrak. Dengan lebih dari 700 simbol yang diketahui, hieroglif bukan sekadar seni; ia adalah sistem administratif yang memungkinkan Mesir mendokumentasikan hukum, transaksi, sejarah, dan astronomi. Papirus — tanaman yang tumbuh di tepian Nil — menjadi medium tulisan pertama yang ringan, fleksibel, dan bisa dibawa bepergian. Gulungan papirus yang diekspor ke seluruh Mediterania kuno menjadi komoditas intelektual yang sangat berharga, dan kata 'paper' (kertas) dalam bahasa Inggris berasal langsung dari kata 'papyrus'.</p>
          </section>

          <section id="ilmu-inovasi">
            <span className="chapter-tag">Bab 5 · Sains Praktis</span>
            <h2>Ilmu Pengetahuan dan Inovasi</h2>
            <p className="body-text">Di balik kemegahan piramida dan mistisisme para dewa, Mesir Kuno adalah peradaban yang sangat ilmiah untuk zamannya. Kebutuhan praktis untuk mengelola banjir Nil, membangun struktur masif, dan mengelola kerajaan besar mendorong perkembangan ilmu pengetahuan yang luar biasa.</p>
            <div className="sub-chapter-title">Matematika</div>
            <p className="body-text">Papirus Rhind (sekitar 1650 SM) adalah salah satu dokumen matematika tertua yang diketahui — berisi 84 soal matematika mencakup aritmatika, geometri, dan penggunaan pecahan. Orang Mesir mengetahui nilai Pi (diperkirakan 3,16) dan menggunakan geometri untuk mengukur ulang lahan pertanian setelah banjir Nil setiap tahunnya.</p>
            <div className="sub-chapter-title">Kalender & Kedokteran</div>
            <p className="body-text">Mesir mengembangkan kalender 365 hari berdasarkan siklus banjir Nil dan kemunculan bintang Sirius — kalender yang kemudian diadopsi oleh Romawi dan menjadi fondasi kalender Gregorian yang digunakan seluruh dunia hingga hari ini.</p>
            <p className="body-text">Papirus Ebers (sekitar 1550 SM) berisi lebih dari 700 formula obat-obatan dan prosedur medis. Dokter Mesir memiliki spesialisasi — ada dokter gigi, dokter mata, dan dokter tulang. Mereka juga mengembangkan teknik pembedahan dan pemahaman dasar tentang anatomi tubuh manusia melalui praktik mumifikasi.</p>
            <div className="sub-chapter-title">Arsitektur dan Rekayasa</div>
            <p className="body-text">Pembangunan piramida memerlukan pemahaman tentang mekanika, matematika terapan, logistik, dan manajemen tenaga kerja dalam skala yang tidak tertandingi. Sistem kanal dan bendungan yang dibangun untuk mengatur banjir Nil adalah salah satu proyek rekayasa sipil pertama dalam sejarah.</p>
          </section>

          <section id="agama-kosmologi">
            <span className="chapter-tag">Bab 6 · Harmoni Ma'at</span>
            <h2>Agama, Kosmologi, dan Konsep Ma'at</h2>
            <p className="body-text">Tidak ada aspek kehidupan Mesir Kuno yang tidak dipengaruhi agama. Berbeda dari banyak peradaban lain yang memisahkan dunia fisik dari dunia spiritual, bagi orang Mesir keduanya adalah satu kesatuan: alam semesta adalah ekspresi kehendak para dewa, dan tugas manusia adalah hidup selaras dengannya.</p>
            <p className="body-text">Prinsip utama agama Mesir adalah Ma'at — sebuah konsep yang mencakup kebenaran, keadilan, keseimbangan, dan harmoni kosmik sekaligus. Ma'at bukan hanya nilai moral individual; ia adalah hukum alam yang menopang seluruh ketertiban alam semesta. Firaun berkewajiban menegakkan Ma'at di bumi, dan setiap warga negara berkewajiban hidup sesuai prinsip-prinsipnya agar alam semesta tetap berjalan dengan baik.</p>
            <p className="body-text">Para dewa Mesir berjumlah ratusan — masing-masing menguasai aspek tertentu dari alam dan kehidupan. Dewa matahari Ra (atau Atum-Ra) adalah dewa tertinggi yang dipercaya menciptakan dunia dari kekacauan primordial. Osiris adalah dewa kematian dan kebangkitan; Isis, istrinya, adalah dewi sihir dan penyembuhan; Horus, putra mereka, adalah dewa langit yang melambangkan kekuasaan firaun di bumi; dan Anubis adalah dewa berwajah serigala yang mengantar jiwa ke alam baka.</p>
            <p className="body-text">Konsep kehidupan setelah kematian dalam agama Mesir sangat kaya dan kompleks. Jiwa manusia dianggap terdiri dari sembilan elemen berbeda. Setelah kematian, jiwa menjalani perjalanan panjang menuju Hall of Truth (Aula Kebenaran), di mana jantungnya ditimbang dengan bulu kebenaran di hadapan Osiris. Jika jantung lebih ringan dari bulu itu — artinya orang itu hidup dengan Ma'at — ia diizinkan memasuki Field of Reeds (Ladang Alang-alang), surga abadi yang merupakan cermin kehidupan di bumi tanpa penyakit, penderitaan, dan kematian. Inilah mengapa mumifikasi begitu penting: tubuh fisik harus diawetkan agar jiwa memiliki tempat kembali. Dan inilah mengapa piramida dibangun: bukan sebagai pamer kekuasaan semata, melainkan sebagai kendaraan jiwa raja untuk naik ke surga dan bergabung dengan dewa-dewa.</p>
          </section>

          <section id="keruntuhan">
            <span className="chapter-tag">Bab 7 · Akhir Dinasti</span>
            <h2>Keruntuhan — Tiga Ribu Tahun yang Berakhir</h2>
            <p className="body-text">Mesir tidak runtuh dalam satu malam. Selama lebih dari 3.000 tahun, ia bangkit dan jatuh berkali-kali, selalu menemukan cara untuk menyatukan diri kembali — hingga tekanan dari luar dan dalam akhirnya terlalu besar untuk ditanggung. Proses keruntuhan dimulai dengan Periode Menengah Ketiga, ketika Mesir kembali terpecah antara Mesir Hulu yang dikuasai pendeta Thebes dan Mesir Hilir yang dikuasai pedagang dan penguasa asing. Bangsa Kush dari selatan kemudian menginvasi, diikuti Assyria dari timur, kemudian Persia di bawah Cambyses II yang menaklukkan Mesir pada 525 SM.</p>
            <p className="body-text">Momen terakhir kejayaan Mesir datang ketika Alexander Agung dari Makedonia menaklukkan Mesir pada 332 SM — namun anehnya, orang Mesir menyambutnya sebagai pembebas dari penjajahan Persia. Alexander dinyatakan sebagai firaun yang sah dan anak dewa Ra. Setelah kematian Alexander, dinasti Ptolomeus memerintah Mesir selama tiga abad — memadukan tradisi Mesir dengan kebudayaan Yunani dalam era Helenistik yang produktif secara intelektual. Bab terakhir ditulis oleh Cleopatra VII — firaun terakhir yang memerintah Mesir sebagai entitas merdeka. Ketika ia meninggal pada 30 SM, Mesir menjadi provinsi Kekaisaran Romawi.</p>
          </section>

          <section id="timeline">
            <span className="chapter-tag">Bab 8 · Lintas Waktu</span>
            <h2>Timeline Peradaban Mesir Kuno</h2>
            <div className="figma-timeline">
              <div className="timeline-node-item"><div className="node-left-year">~3100 SM</div><div className="node-right-content"><h4>Penyatuan Entitas Tunggal</h4><p>Raja Narmer menyatukan Mesir Hulu dan Hilir — lahirnya Mesir sebagai entitas tunggal (Raja Narmer / Menes).</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">~2600 SM</div><div className="node-right-content"><h4>Era Keemasan Pertama</h4><p>Dinasti Lama dimulai, era keemasan pertama, pembangunan Piramida Giza (Firaun Joser, Khufu).</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">~2560 SM</div><div className="node-right-content"><h4>Pembangunan Monumen Akbar</h4><p>Piramida Agung Giza dan Sfinks dibangun — rekayasa terbesar sepanjang masa (Firaun Khufu).</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">~2055 SM</div><div className="node-right-content"><h4>Penyatuan Periode Menengah</h4><p>Mesir bersatu kembali setelah Periode Menengah Pertama (Mentuhotep II).</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">~1550 SM</div><div className="node-right-content"><h4>Kebangkitan Kekuatan Militer</h4><p>Kerajaan Baru: Mesir menjadi kekuatan militer terbesar di Mediterania (Ahmose I).</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">~1247 SM</div><div className="node-right-content"><h4>Diplomasi Perjanjian Kadesh</h4><p>Perjanjian Kadesh — perjanjian damai tertua yang diketahui dalam sejarah (Ramesses II).</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">~332 SM</div><div className="node-right-content"><h4>Ekspedisi Alexander Agung</h4><p>Alexander Agung menaklukkan Mesir tanpa perlawanan (Alexander, Ptolomeus I).</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">~30 SM</div><div className="node-right-content"><h4>Akhir Era Firaun</h4><p>Cleopatra VII wafat, Mesir menjadi provinsi Romawi, akhir era Firaun (Cleopatra VII).</p></div></div>
            </div>
          </section>

          <section id="warisan">
            <span className="chapter-tag">Bab 9 · Peninggalan Abadi</span>
            <h2>Peninggalan and Warisan Dunia</h2>
            <p className="body-text">Dari semua peradaban kuno, Mesir adalah yang paling hadir secara fisik dalam kesadaran modern. Piramida ada di uang kertas Amerika Serikat. Simbol Mata Horus (Eye of Ra) muncul di perhiasan dan tattoo di seluruh dunia. Kalender yang kita gunakan setiap hari adalah warisan langsung dari pengamatan astronomi para pendeta Mesir.</p>
            
            <div className="legacy-grid-layout">
              <div className="figma-legacy-card">
                <div className="legacy-card-header">
                  <div className="legacy-card-title">Sistem Kalender</div>
                  <span className="legacy-card-badge">Warisan</span>
                </div>
                <p className="legacy-card-desc">Kalender 365 hari berdasarkan banjir Nil dan orbit matahari yang menjadi fondasi kalender Gregorian di dunia modern.</p>
              </div>
              <div className="figma-legacy-card">
                <div className="legacy-card-header">
                  <div className="legacy-card-title">Hieroglif</div>
                  <span className="legacy-card-badge">Warisan</span>
                </div>
                <p className="legacy-card-desc">Sistem tulisan 700+ simbol terdokumentasi lengkap yang mendasari ilmu linguistik dan arkeologi kuno.</p>
              </div>
              <div className="figma-legacy-card">
                <div className="legacy-card-header">
                  <div className="legacy-card-title">Arsitektur Monumental</div>
                  <span className="legacy-card-badge">Warisan</span>
                </div>
                <p className="legacy-card-desc">Piramida Giza, Sfinks, Kuil Karnak, dan Abu Simbel yang menyusun prinsip rekayasa sipil modern.</p>
              </div>
              <div className="figma-legacy-card">
                <div className="legacy-card-header">
                  <div className="legacy-card-title">Mumifikasi</div>
                  <span className="legacy-card-badge">Warisan</span>
                </div>
                <p className="legacy-card-desc">Teknik pengawetan dengan natron, resin, dan linen yang menjadi cikal bakal ilmu patologi serta forensik.</p>
              </div>
              <div className="figma-legacy-card">
                <div className="legacy-card-header">
                  <div className="legacy-card-title">Hukum & Perjanjian</div>
                  <span className="legacy-card-badge">Warisan</span>
                </div>
                <p className="legacy-card-desc">Perjanjian Kadesh sebagai wujud dokumen diplomatik dan model perjanjian damai internasional pertama di bumi.</p>
              </div>
              <div className="figma-legacy-card">
                <div className="legacy-card-header">
                  <div className="legacy-card-title">Matematika & Geometri</div>
                  <span className="legacy-card-badge">Warisan</span>
                </div>
                <p className="legacy-card-desc">Papirus Rhind berisi rumusan aritmatika, pecahan, dan kalkulasi geometri pengukuran tanah terapan.</p>
              </div>
            </div>

            <div style={{ marginTop: '50px' }}>
              <p className="body-text">Mesir kuno tidak pernah benar-benar mati — ia hanya berganti bahasa. Dari hieroglif ke bahasa Koptik ke bahasa Arab, dari firaun ke khalifah ke presiden, dari pemujaan Ra ke Kristen ke Islam. Mesir adalah bukti bahwa peradaban sejati bukan tentang bertahan hidup, tetapi tentang kemampuan untuk terus bertransformasi sambil mempertahankan jiwa.</p>
              <p className="body-text">Meskipun ribuan tahun telah berlalu, Mesir masih belum selesai bercerita. Peradaban yang membangun untuk keabadian — yang mengukir kalimat di batu bukan di kayu, yang membangun piramida bukan rumah panggung — mengajarkan bahwa investasi paling bernilai bukan untuk hari ini, melainkan untuk ribuan tahun yang akan datang.</p>
            </div>

            {/* BAGIAN TERKAIT FIGMA INTERAKTIF */}
            <div className="bottom-pagination">
              <span>Selanjutnya</span>
              <button onClick={() => onNavigate('romawi')}>Roma Kuno / ~753 SM →</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MesirPage;