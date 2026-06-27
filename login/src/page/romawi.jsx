import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const figmaDesignCSS = `
  :root {
    --bg-dark: #3A0F11;
    --bg-page: #FFF5F5;
    --bg-sidebar: #FCEFEF;
    --text-black: #1A1A1A;
    --text-maroon: #7A0C14;
    --text-muted: #8E6566;
    --accent-red: #A61C26;
    --card-bg: #FFFFFF;
    --border-color: rgba(122, 12, 20, 0.15);
    --font-serif: 'Playfair Display', serif;
    --font-sans: 'Plus Jakarta Sans', sans-serif;
  }

  .roma-figma-container {
    background-color: var(--bg-page);
    color: var(--text-black);
    font-family: var(--font-sans);
    line-height: 1.7;
    width: 100%;
    min-height: 100vh;
  }

  .roma-figma-container * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }

  .top-header-bar {
    background-color: var(--bg-dark);
    padding: 20px 40px;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(252, 239, 239, 0.1);
  }

  .back-home-button {
    background: none;
    border: none;
    color: #FCEFEF;
    font-family: var(--font-sans);
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .back-home-button:hover {
    color: #FFB3B7;
  }

  .hero-section {
    background-color: var(--bg-dark);
    color: #FCEFEF;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 60px 20px 80px 20px;
  }

  .hero-tag {
    font-size: 0.85rem;
    letter-spacing: 4px;
    color: #FFB3B7;
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
    color: #D9A0A2;
    margin-bottom: 48px;
    letter-spacing: 1px;
  }

  .hero-navigation {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
    max-width: 1000px;
  }

  .hero-navigation a {
    color: #FCEFEF;
    text-decoration: none;
    padding: 10px 22px;
    border: 1px solid rgba(252, 239, 239, 0.2);
    border-radius: 24px;
    font-size: 0.85rem;
    transition: all 0.3s ease;
  }

  .hero-navigation a:hover, .hero-navigation a.active {
    background-color: var(--accent-red);
    border-color: var(--accent-red);
    color: white;
  }

  .layout-wrapper {
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
  }

  .sticky-sidebar {
    width: 280px;
    padding: 80px 30px;
    position: sticky;
    top: 0;
    height: 100vh;
    background-color: var(--bg-sidebar);
    border-right: 1px solid var(--border-color);
    overflow-y: auto;
  }

  .sidebar-header {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--text-maroon);
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
    color: var(--accent-red);
    width: 30px;
    font-weight: 700;
    margin-top: 2px;
  }

  .nav-list a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.2s ease;
  }

  .nav-list li.active a, .nav-list a:hover {
    color: var(--text-maroon);
    font-weight: 700;
  }

  .main-content {
    flex: 1;
    padding: 80px 80px 80px 50px;
    max-width: 1000px;
  }

  .chapter-tag {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--accent-red);
    margin-bottom: 16px;
    display: block;
    font-weight: 700;
  }

  .main-content section {
    padding: 40px;
    background-color: var(--card-bg);
    border-radius: 12px;
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 20px rgba(122, 12, 20, 0.02);
    margin-bottom: 40px;
  }

  .main-content h2 {
    font-family: var(--font-serif);
    font-size: 2.8rem;
    font-weight: 400;
    margin-bottom: 36px;
    color: var(--text-maroon);
    line-height: 1.25;
  }

  .body-text {
    font-size: 1.05rem;
    color: var(--text-black);
    margin-bottom: 28px;
    text-align: justify;
  }

  .sub-chapter-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-maroon);
    margin: 40px 0 16px 0;
    letter-spacing: -0.3px;
    border-left: 3px solid var(--accent-red);
    padding-left: 12px;
  }

  .roma-highlight-banner {
    background-color: var(--bg-dark);
    color: #FCEFEF;
    padding: 40px;
    border-radius: 8px;
    margin-bottom: 40px;
    border-left: 4px solid var(--accent-red);
    box-shadow: 0 10px 30px rgba(122, 12, 20, 0.08);
  }

  .roma-highlight-banner span {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #FFB3B7;
    display: block;
    margin-bottom: 12px;
    font-weight: 700;
  }

  .roma-highlight-banner p {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.2rem;
    line-height: 1.6;
    color: white;
  }

  .roma-visual-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin: 40px 0;
  }

  .grid-card-item {
    background-color: var(--bg-sidebar);
    border-top: 4px solid var(--accent-maroon);
    padding: 30px;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 6px 20px rgba(122, 12, 20, 0.04);
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .grid-card-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 25px rgba(122, 12, 20, 0.08);
  }

  .grid-card-item h4 {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--accent-maroon);
    margin-bottom: 12px;
    font-family: var(--font-serif);
  }

  .grid-card-item p {
    font-size: 0.95rem;
    color: var(--text-black);
  }

  .badge-category {
    background-color: rgba(122, 12, 20, 0.08);
    color: var(--accent-maroon);
    font-size: 0.75rem;
    padding: 4px 10px;
    border-radius: 4px;
    font-weight: 700;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 8px;
  }

  .roma-structured-table {
    width: 100%;
    border-collapse: collapse;
    margin: 35px 0;
    background-color: var(--card-bg);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(122, 12, 20, 0.04);
    border: 1px solid var(--border-color);
  }

  .roma-structured-table th {
    background-color: var(--accent-maroon);
    color: white;
    text-align: left;
    padding: 18px 24px;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .roma-structured-table td {
    padding: 20px 24px;
    border-bottom: 1px solid var(--border-color);
    font-size: 1rem;
    color: var(--text-dark);
  }

  .roma-structured-table tr:last-child td {
    border-bottom: none;
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
    background-color: var(--border-color);
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
    color: var(--accent-red);
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
    background-color: var(--card-bg);
    border: 2px solid var(--accent-red);
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

  .bottom-pagination {
    margin-top: 40px;
    padding-top: 40px;
    border-top: 1px solid var(--border-color);
  }

  .bottom-pagination span {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--text-muted);
    display: block;
    margin-bottom: 10px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .bottom-pagination button {
    background: none;
    border: none;
    color: var(--accent-maroon);
    font-family: var(--font-serif);
    font-size: 2.2rem;
    font-weight: 700;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s ease;
  }

  .bottom-pagination button:hover {
    color: var(--accent-red);
  }

  @media (max-width: 1024px) {
    .layout-wrapper {
      flex-direction: column;
    }
    .sticky-sidebar {
      width: 100%;
      height: auto;
      position: relative;
      border-right: none;
      border-bottom: 1px solid var(--border-color);
      padding: 30px;
    }
    .main-content {
      padding: 40px 20px;
    }
    .roma-visual-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const RomawiPage = () => {
  const [activeSection, setActiveSection] = useState('latar-belakang');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'latar-belakang';

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
    { id: 'latar-belakang', num: '01', text: 'Latar Belakang' },
    { id: 'urgensi', num: '02', text: 'Mengapa Penting?' },
    { id: 'asal-usul', num: '03', text: 'Asal-Usul & Geografis' },
    { id: 'puncak-kejayaan', num: '04', text: 'Puncak Kejayaan' },
    { id: 'ilmu-inovasi', num: '05', text: 'Ilmu & Budaya' },
    { id: 'agama-sosial', num: '06', text: 'Kepercayaan & Sosial' },
    { id: 'keruntuhan', num: '07', text: 'Keruntuhan' },
    { id: 'timeline', num: '08', text: 'Timeline' },
    { id: 'warisan', num: '09', text: 'Peninggalan & Warisan' },
  ];

  return (
    <div className="roma-figma-container">
      <style dangerouslySetInnerHTML={{ __html: figmaDesignCSS }} />

      <div className="top-header-bar">
        <button className="back-home-button" onClick={() => navigate('/home')}>
          ← Kembali ke Beranda
        </button>
      </div>

      <header className="hero-section">
        <div className="hero-tag">Roma Kuno · ~753 SM – 476 M</div>
        <h1>Romawi Kuno: Sang Imperium yang Mengukir Sejarah Dunia</h1>
        <div className="hero-subtext">Semenanjung Italia, Europa Selatan</div>
        
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
          <section id="latar-belakang">
            <span className="chapter-tag">Bab 1 · Latar Belakang</span>
            <h2>Sebuah Fondasi Peradaban Barat</h2>
            
            <div className="roma-highlight-banner">
              <span>Legenda Serigala Capitolina</span>
              <p>"Bayangkan seekor serigala betina yang sedang menyusui dua bayi manusia di tepi Sungai Tiber. Itulah legenda pendirian Roma pada 753 SM — Romulus dan Remus, anak kembar dewa perang Mars, yang kelak satu membunuh saudaranya sendiri demi mendirikan kota yang akan menguasai sebagian besar dunia."</p>
            </div>

            <p className="body-text">Kota itu lahir dari darah, ambisi, dan kejeniusan adaptasi. Dalam waktu kurang dari 500 tahun, Roma berubah dari desa petani Latin menjadi kekuatan yang mengalahkan Kartago, Yunani, dan Mesir. Mereka bukan hanya penakluk; mereka adalah pembangun. Beton yang mereka ciptakan masih menjadi rahasia kekuatan Colosseum dan Pantheon — struktur yang bertahan gempa, banjir, dan perang. Saat Eropa masih gelap di Zaman Pertengahan, reruntuhan Romawi menjadi inspirasi bagi Renaisans. Hingga kini, bahasa kita sehari-hari — dari "senat" hingga "kalender" — adalah warisan langsung mereka.</p>
            <p className="body-text">Peradaban ini tidak sekadar hilang; ia menyatu dalam DNA peradaban Barat. Setiap kali kita menyebut "republik", "kaisar", atau bahkan bulan Juli dan Agustus, kita sedang mengucapkan nama Julius Caesar dan Augustus. Roma bukanlah masa lalu yang mati. Ia adalah fondasi yang masih menopang dunia modern.</p>
          </section>

          <section id="urgensi">
            <span className="chapter-tag">Bab 2 · Urgensi Sejarah</span>
            <h2>Mengapa Peradaban Romawi Penting?</h2>
            <p className="body-text">Roma bukan sekadar imperium kuno — ia adalah laboratorium pertama bagi ide-ide yang masih mendefinisikan peradaban manusia. Apa yang membedakannya? Kemampuan luar biasa untuk menyerap, menyempurnakan, dan menyebarkan budaya orang lain. Sementara Yunani memberikan filsafat dan seni, Roma memberi kita hukum, infrastruktur, dan sistem pemerintahan yang scalable.</p>
            <p className="body-text">Dampaknya masih terasa hingga hari ini: sistem hukum sipil di banyak negara Eropa dan Amerika Latin berakar pada Hukum Dua Belas Tabel. Bahasa Latin menjadi induk bagi bahasa Prancis, Spanyol, Italia, Portugis, dan Rumania. Arsitektur kubah dan lengkung Romawi menginspirasi Gedung Kongres AS, Basilika Santo Petrus, hingga gedung-gedung pemerintahan modern. Bahkan agama terbesar di dunia — Kristen — menjadi agama negara Romawi dan menyebar ke seluruh penjuru bumi berkat jaringan jalan dan perdagangan mereka.</p>
            <p className="body-text">Roma mengajarkan dunia bahwa kekuasaan sejati bukan hanya soal pedang, melainkan juga soal hukum, rekayasa, dan visi jangka panjang. Di era di mana negara-negara modern bergulat dengan tata kelola, Roma menawarkan pelajaran abadi: imperium terbesar sekalipun bisa runtuh jika melupakan akarnya.</p>
          </section>

          <section id="asal-usul">
            <span className="chapter-tag">Bab 3 · Asal-Usul & Geografis</span>
            <h2>Tujuh Bukit dan Strategi Sungai Tiber</h2>
            <p className="body-text">Roma lahir di wilayah Latium, Italia Tengah, di tepi Sungai Tiber yang subur. Tujuh bukit — Palatine, Capitoline, Esquiline, dan lainnya — menjadi benteng alami sekaligus panggung bagi kota yang terus berkembang. Letaknya yang strategis di tengah Semenanjung Italia memberi akses mudah ke Laut Mediterania, menjadikannya pusat perdagangan sejak Zaman Perunggu.</p>
            <p className="body-text">Pendiri legendarisnya adalah Romulus dan Remus. Menurut mitos, mereka adalah keturunan Aeneas, pahlawan Troya yang melarikan diri ke Italia. Realitas sejarah menunjukkan bahwa suku Latin yang tinggal di sana sejak abad ke-10 SM mulai membentuk komunitas agraris yang kuat. Pengaruh Etruscan dari utara dan koloni Yunani dari selatan membentuk budaya mereka — dari alfabet hingga arsitektur. Faktor geografis menjadi kunci: tanah vulkanik yang subur mendukung pertanian, sementara sungai Tiber memfasilitasi transportasi. Namun kedekatan dengan laut juga menarik musuh — dari Etruscan hingga Gallia. Justru ancaman ini yang memaksa Roma membangun militer dan infrastruktur yang tak tertandingi.</p>
          </section>

          <section id="puncak-kejayaan">
            <span className="chapter-tag">Bab 4 · Puncak Kejayaan</span>
            <h2>Lahirnya Republik dan Masa Emas Kekaisaran</h2>
            
            <table className="roma-structured-table">
              <thead>
                <tr>
                  <th>Fase Pemerintahan</th>
                  <th>Garis Kronologi</th>
                  <th>Sistem & Karakteristik Politik Utama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-row-title">Kerajaan hingga Republik</td>
                  <td>753 – 27 SM</td>
                  <td>Penghapusan monarki, pembentukan majelis Senat konsul yang seimbang. Kemenangan mutlak atas Kartago.</td>
                </tr>
                <tr>
                  <td className="table-row-title">Masa Transisi Diktator</td>
                  <td>Abad ke-1 SM</td>
                  <td>Ekspansi Galia oleh Julius Caesar, penyeberangan Rubicon, konflik internal Ides of March.</td>
                </tr>
                <tr>
                  <td className="table-row-title">Pax Romana Kekaisaran</td>
                  <td>27 SM – 180 M</td>
                  <td>Era keemasan di bawah kepemimpinan Kaisar Augustus. Stabilitas wilayah makro seluas 5 juta km².</td>
                </tr>
              </tbody>
            </table>

            <div className="sub-chapter-title">Era Kerajaan hingga Republik (753–27 SM)</div>
            <p className="body-text">Dari tujuh raja legendaris, Romulus membangun fondasi. Monarki berakhir dramatis pada 509 SM ketika rakyat memberontak melawan Tarquinius Superbus setelah putranya memperkosa Lucretia. Lahirlah Republik — res publica, "urusan rakyat". Dua konsul, Senat, dan Majelis Rakyat menciptakan keseimbangan kekuasaan yang revolusioner. Roma menaklukkan Italia, lalu memenangi tiga Perang Punisia melawan Kartago (264–146 SM). Kemenangan atas Hannibal dan penghancuran Kartago menjadikan Roma penguasa Mediterania Barat.</p>
            
            <div className="sub-chapter-title">Era Julius Caesar dan Transisi ke Kekaisaran</div>
            <p className="body-text">Puncak drama terjadi di akhir Republik. Julius Caesar, jenderal brilian, menaklukkan Galia (58–50 SM), menyeberangi Rubicon, dan menjadi diktator seumur hidup. Pembunuhannya pada 15 Maret 44 SM (Ides of March) memicu perang saudara. Octavian — kelak Augustus — muncul sebagai pemenang di Pertempuran Actium (31 SM) dan pada 27 SM menerima gelar "Augustus" dari Senat.</p>
            
            <div className="sub-chapter-title">Pax Romana (27 SM–180 M)</div>
            <p className="body-text">Ini adalah era keemasan sejati. Di bawah Augustus, Tiberius, Trajan, Hadrian, dan Marcus Aurelius, Roma mencapai puncak wilayah terluas: 5 juta km², 50–90 juta penduduk. Jalan sepanjang 80.000 km menghubungkan imperium, aqueduct membawa air bersih ke kota-kota, dan perdamaian relatif memungkinkan seni, sastra, dan teknik berkembang pesat. Colosseum dibangun, Pantheon disempurnakan, dan hukum Romawi menjadi standar keadilan. Augustus memerintah 56 tahun — terpanjang dalam sejarah Romawi — dan mengubah republik yang rapuh menjadi kekaisaran yang stabil.</p>
          </section>

          <section id="ilmu-inovasi">
            <span className="chapter-tag">Bab 5 · Kontribusi Ilmu Pengetahuan & Budaya</span>
            <h2>Inovasi Rekayasa yang Bertahan Milenium</h2>
            <p className="body-text">Roma adalah insinyur ulung. Mereka menemukan beton (campuran kapur, pasir, kerikil) yang memungkinkan pembangunan kubah raksasa dan lengkung yang tahan rancangan ribuan tahun. Aqueduct sepanjang 60 mil membawa air ke Roma. Jalan Romawi — dengan drainase dan penanda mil — masih menjadi dasar sistem jalan modern di Eropa. Dalam hukum, Hukum Dua Belas Tabel (450 SM) menjadi fondasi hukum perdata Barat. Kalender Julian yang diciptakan Caesar (dengan penyesuaian Augustus) masih kita pakai hari ini, hanya dengan sedikit koreksi Gregorian. Seni dan sastra mereka mengadopsi Yunani tapi memberi sentuhan praktis: Virgil menulis Aeneid untuk melegitimasi asal-usul Troya, sementara Horace dan Ovid menginspirasi puisi Eropa. Arsitektur mereka — forum, basilika, thermae — menjadi prototipe gedung pemerintahan dan tempat ibadah modern.</p>
          </section>

          <section id="agama-sosial">
            <span className="chapter-tag">Bab 6 · Sistem Kepercayaan & Tatanan Sosial</span>
            <h2>Politeisme Olimpus Hingga Kebangkitan Kekristenan</h2>
            <p className="body-text">Agama Romawi politeis, mengadopsi dewa-dewa Yunani dengan nama Latin: Jupiter (Zeus), Mars (Ares), Venus (Aphrodite). Nama planet hingga kini berasal dari dewa mereka. Kuil-kuil megah menjadi pusat ritual negara. Tatanan sosial tegas: patrician (keturunan pendiri) menguasai Senat, sementara plebeian (rakyat biasa) berjuang melalui "Perjuangan Ordo" hingga mendapat hak tribun. Budak — hasil perang — menjadi tulang punggung perekonomian, tapi juga sumber ketegangan. Kristen muncul dari Palestina dan menyebar cepat meski dianiaya Nero pasca kebakaran besar Roma (64 M). Justru penganiayaan itu yang membuat iman semakin kuat. Konstantin pada 313 M menjadikannya agama resmi, mengubah sejarah dunia.</p>
          </section>

          <section id="keruntuhan">
            <span className="chapter-tag">Bab 7 · Keruntuhan</span>
            <h2>Degradasi Internal dan Serbuan Bangsa Barbar</h2>
            <p className="body-text">Keruntuhan bukan karena satu serangan barbar, melainkan kombinasi mematikan faktor internal dan eksternal. Setelah kematian Marcus Aurelius (180 M), Commodus membawa dekadensi. Abad ke-3 menyaksikan 22 kaisar dalam 50 tahun — kebanyakan dibunuh tentara sendiri. Diocletian mencoba reformasi dengan Tetrarki, tapi pembagian kekaisaran menjadi Barat dan Timur justru memperlemah Barat. Invasi barbar (Visigoth, Vandals, Huns di bawah Attila) semakin sering. Ekonomi runtuh karena inflasi, pajak berat, dan pertanian yang ditinggalkan. Korupsi, kesenjangan kaya-miskin, dan hilangnya semangat sipil mempercepat kejatuhan. Puncaknya: pada 476 M, Odoacer — pemimpin Jermanik — menurunkan Romulus Augustulus, kaisar remaja terakhir. Kekaisaran Romawi Barat resmi berakhir. Timur bertahan sebagai Bizantium hingga 1453. Namun warisan Mesir tidak ikut mati: agama, arsitektur, kalender, dan ilmu pengetahuannya terus mengalir ke dalam peradaban Romawi, Kristen, dan Islam — dan dari sana ke seluruh dunia modern.</p>
          </section>

          <section id="timeline">
            <span className="chapter-tag">Bab 8 · Lintas Zaman dalam Angka</span>
            <h2>Garis Waktu Perjalanan Imperium Roma</h2>
            <div className="figma-timeline">
              <div className="timeline-node-item"><div className="node-left-year">753 SM</div><div className="node-right-content"><h4>Pendirian Roma oleh Romulus</h4><p>Awal berdirinya tonggak sejarah peradaban Roma.</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">509 SM</div><div className="node-right-content"><h4>Berdirinya Republik</h4><p>Berakhirnya kekuasaan monarki berganti urusan rakyat.</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">264–146 SM</div><div className="node-right-content"><h4>Perang Punisia</h4><p>Kemenangan besar mengalahkan dominasi Kartago.</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">49 SM</div><div className="node-right-content"><h4>Caesar menyeberangi Rubicon</h4><p>Langkah militer berani Julius Caesar memicu perang saudara.</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">27 SM</div><div className="node-right-content"><h4>Augustus menjadi Kaisar pertama</h4><p>Awal berdirinya kekaisaran stabil dan era Pax Romana.</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">64 M</div><div className="node-right-content"><h4>Kebakaran Roma & penganiayaan Kristen</h4><p>Tragedi sosial kemanusiaan besar pada masa Nero.</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">313 M</div><div className="node-right-content"><h4>Edik Milan disahkan</h4><p>Agama Kristen resmi diakui dan dilindungi negara.</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">476 M</div><div className="node-right-content"><h4>Jatuhnya Kekaisaran Romawi Barat</h4><p>Kaisar remaja terakhir diturunkan oleh Jermanik Odoacer.</p></div></div>
            </div>
          </section>

          <section id="warisan">
            <span className="chapter-tag">Bab 9 · Peninggalan & Warisan</span>
            <h2>Wujud Fisik dan Relevansi Modern</h2>
            
            <div className="roma-visual-grid">
              <div className="grid-card-item">
                <span className="badge-category">Infrastruktur</span>
                <h4>Sistem Jalan Romawi</h4>
                <p>Jalan batu berlapis drainase mumpuni sepanjang puluhan ribu kilometer yang mendasari rute logistik trans-Eropa.</p>
              </div>
              <div className="grid-card-item">
                <span className="badge-category">Konstruksi</span>
                <h4>Sains Beton & Kubah</h4>
                <p>Formulasi semen vulkanik kokoh abadi pembentuk struktur monumental raksasa Colosseum dan kubah Pantheon.</p>
              </div>
              <div className="grid-card-item">
                <span className="badge-category">Yurisprudensi</span>
                <h4>Hukum Sipil Kuno</h4>
                <p>Hukum Dua Belas Tabel pembawa asas hukum praduga tak bersalah yang diadopsi sistem peradilan sipil modern.</p>
              </div>
              <div className="grid-card-item">
                <span className="badge-category">Demokrasi</span>
                <h4>Sistem Pemerintahan Republik</h4>
                <p>Konsep perwakilan trias politika melalui dewan legislatif Senat dan Parlemen rakyat yang menjadi acuan demokrasi barat.</p>
              </div>
            </div>

            <div className="bottom-pagination">
              <span>Berikutnya</span>
              <button onClick={() => navigate('/timeline')} style={{ cursor: 'pointer' }}>Timeline Global / Lintas Peradaban →</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default RomawiPage;