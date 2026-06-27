import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const figmaEgyptCSS = `
  :root {
    --bg-dark: #2B231F;
    --bg-light: #F6F3ED;
    --text-dark: #3E322B;
    --text-muted: #8E8076;
    --accent-orange: #E07A5F;
    --accent-brown: #7D5C4C;
    --card-bg: #FFFFFF;
    --border-color: rgba(62, 50, 43, 0.08);
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

  .top-header-bar {
    background-color: var(--bg-dark);
    padding: 20px 40px;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(246, 243, 237, 0.1);
  }

  .back-home-button {
    background: none;
    border: none;
    color: var(--bg-light);
    font-family: var(--font-sans);
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .back-home-button:hover {
    color: var(--accent-orange);
  }

  .hero-section {
    background-color: var(--bg-dark);
    color: var(--bg-light);
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
    color: var(--accent-orange);
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
    color: #A99E95;
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
    color: var(--bg-light);
    text-decoration: none;
    padding: 10px 22px;
    border: 1px solid rgba(246, 243, 237, 0.2);
    border-radius: 24px;
    font-size: 0.85rem;
    transition: all 0.3s ease;
  }

  .hero-navigation a:hover, .hero-navigation a.active {
    background-color: var(--accent-orange);
    border-color: var(--accent-orange);
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
    border-right: 1px solid var(--border-color);
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
    color: rgba(62, 50, 43, 0.3);
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
    padding: 80px 80px 80px 50px;
    max-width: 1000px;
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
    border-bottom: 1px solid var(--border-color);
  }

  .main-content h2 {
    font-family: var(--font-serif);
    font-size: 2.8rem;
    font-weight: 400;
    margin-bottom: 36px;
    color: var(--text-dark);
    line-height: 1.25;
  }

  .body-text {
    font-size: 1.05rem;
    color: #4B3F38;
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

  /* === DATA VISUAL COMPONENT 1: HERO REFLECTION BOX === */
  .egypt-highlight-banner {
    background-color: var(--bg-dark);
    color: var(--bg-light);
    padding: 40px;
    border-radius: 8px;
    margin-bottom: 40px;
    border-left: 4px solid var(--accent-orange);
    box-shadow: 0 10px 30px rgba(43, 35, 31, 0.05);
  }

  .egypt-highlight-banner span {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--accent-orange);
    display: block;
    margin-bottom: 12px;
    font-weight: 700;
  }

  .egypt-highlight-banner p {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.2rem;
    line-height: 1.6;
  }

  /* === DATA VISUAL COMPONENT 2: INTERACTIVE TABLE === */
  .egypt-structured-table {
    width: 100%;
    border-collapse: collapse;
    margin: 35px 0;
    background-color: var(--card-bg);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(62, 50, 43, 0.03);
    border: 1px solid var(--border-color);
  }

  .egypt-structured-table th {
    background-color: var(--accent-brown);
    color: white;
    text-align: left;
    padding: 18px 24px;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .egypt-structured-table td {
    padding: 20px 24px;
    border-bottom: 1px solid var(--border-color);
    font-size: 1rem;
    color: var(--text-dark);
  }

  .egypt-structured-table tr:last-child td {
    border-bottom: none;
  }

  .table-row-title {
    font-weight: 700;
    color: var(--accent-orange);
  }

  /* === DATA VISUAL COMPONENT 3: DISPLAY GRID CARDS === */
  .egypt-visual-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin: 40px 0;
  }

  .grid-card-item {
    background-color: var(--card-bg);
    border-top: 4px solid var(--accent-orange);
    padding: 30px;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 15px rgba(62, 50, 43, 0.02);
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: transform 0.3s ease;
  }

  .grid-card-item:hover {
    transform: translateY(-3px);
  }

  .grid-card-item h4 {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 12px;
    font-family: var(--font-serif);
  }

  .grid-card-item p {
    font-size: 0.95rem;
    color: #5A4E46;
  }

  /* === DATA VISUAL COMPONENT 4: ICON SYMBOL REPLACEMENT === */
  .badge-category {
    background-color: rgba(125, 92, 76, 0.1);
    color: var(--accent-brown);
    font-size: 0.75rem;
    padding: 4px 10px;
    border-radius: 4px;
    font-weight: 700;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 8px;
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
    color: var(--accent-orange);
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
    border: 2px solid var(--accent-orange);
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
    margin-top: 80px;
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
    color: var(--text-dark);
    font-family: var(--font-serif);
    font-size: 2.2rem;
    font-weight: 400;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s ease;
  }

  .bottom-pagination button:hover {
    color: var(--accent-orange);
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
    .egypt-visual-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const MesirPage = () => {
  const [activeSection, setActiveSection] = useState('fakta-pembuka');
  const navigate = useNavigate();

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
    { id: 'fakta-pembuka', num: '01', text: 'Fakta Pembuka' },
    { id: 'umur-panjang', num: '02', text: 'Umur Panjang Peradaban' },
    { id: 'asal-usul', num: '03', text: 'Asal-Usul & Geografi' },
    { id: 'tiga-era', num: '04', text: 'Puncak Kejayaan' },
    { id: 'ilmu-inovasi', num: '05', text: 'Ilmu & Inovasi' },
    { id: 'agama-kosmologi', num: '06', text: 'Agama & Kosmologi' },
    { id: 'keruntuhan', num: '07', text: 'Keruntuhan' },
    { id: 'timeline', num: '08', text: 'Timeline' },
    { id: 'warisan', num: '09', text: 'Warisan Dunia' },
  ];

  return (
    <div className="egypt-figma-container">
      <style dangerouslySetInnerHTML={{ __html: figmaEgyptCSS }} />

      <div className="top-header-bar">
        <button className="back-home-button" onClick={() => navigate('/home')}>
          ← Kembali ke Beranda
        </button>
      </div>

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
            <div className="egypt-highlight-banner">
              <span>Arsitektur Presisi Giza</span>
              <p>"Pada tahun 2560 SM, sekitar 20.000–30.000 pekerja membangun sebuah struktur yang begitu presisi sehingga sisi-sisinya melenceng kurang dari 5 sentimeter dari garis lurus sempurna — padahal panjangnya lebih dari 230 meter. Itu adalah Piramida Agung Giza."</p>
            </div>
          </section>

          <section id="umur-panjang">
            <span className="chapter-tag">Bab 2 · Durasi Sejarah</span>
            <h2>Peradaban yang Berlangsung Lebih Lama dari Apapun</h2>
            <p className="body-text">Dari semua peradaban kuno yang ada di muka bumi, Mesir adalah yang paling panjang umurnya. Selama lebih dari 3.000 tahun — dari penyatuan pertama sekitar 3100 SM hingga kematian Cleopatra VII pada 30 SM — Mesir tidak pernah benar-benar berhenti sebagai entitas peradaban yang kohesif. Jarak waktu antara kita hari ini dengan jatuhnya Kekaisaran Romawi Barat (476 M) adalah sekitar 1.550 tahun. Tetapi Piramida Giza sudah berusia lebih dari 2.000 tahun ketika Cleopatra lahir. Bagi Cleopatra, piramida-piramida itu sudah tampak sama tuanya seperti Cleopatra bagi kita hari ini.</p>
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
            
            <table className="egypt-structured-table">
              <thead>
                <tr>
                  <th>Fase Kekuasaan</th>
                  <th>Garis Periode</th>
                  <th>Kontribusi & Karakteristik Utama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-row-title">Kerajaan Lama</td>
                  <td>~2686–2181 SM</td>
                  <td>Abad Piramida monumental, konstruksi presisi makro oleh Imhotep (Saqqara & Giza).</td>
                </tr>
                <tr>
                  <td className="table-row-title">Kerajaan Baru</td>
                  <td>~1550–1070 SM</td>
                  <td>Ekspansi militer eksternal, masa kemegahan monumen Luxor, Perjanjian Damai Kadesh.</td>
                </tr>
                <tr>
                  <td className="table-row-title">Revolusi Tulis</td>
                  <td>Seterusnya</td>
                  <td>Hieroglif sebagai basis pencatatan hukum empiris, gulungan kertas Papirus fleksibel.</td>
                </tr>
              </tbody>
            </table>

            <p className="body-text">Ketika Firaun Joser naik tahta sekitar 2686 SM, Mesir memasuki era yang kemudian dikenal sebagai Kerajaan Lama — periode ketika manusia pertama kali membangun monumen batu permanen dalam skala yang belum pernah ada sebelumnya. Arsitek jenius bernama Imhotep merancang piramida pertama: Piramida Berundak di Saqqara, yang juga merupakan bangunan batu besar pertama dalam sejarah manusia. Puncaknya datang di bawah pemerintahan Firaun Khufu (Cheops) sekitar 2560 SM. Piramida Agung yang dibangunnya di Giza menggunakan lebih dari 2,3 juta balok batu yang masing-masing beratnya antara 2,5 hingga 80 ton. Selama lebih dari 3.800 tahun, Piramida Agung Giza tetap menjadi bangunan tertinggi di muka bumi — sebuah rekor yang baru dilampaui pada tahun 1311 M oleh Katedral Lincoln di Inggris. Di kompleks yang sama, Sfinks Agung berdiri sebagai penjaga — patung terbesar dari zaman kuno, dengan panjang 73 meter dan tinggi 20 meter, dipahat langsung dari batu kapur alami. Sfinks adalah simbol kekuatan dan kearifan firaun: tubuh singa yang kuat, kepala manusia yang bijaksana.</p>
            
            <div className="sub-chapter-title">Era Kerajaan Baru: Mesir sebagai Kekuatan Militer (1550–1070 SM)</div>
            <p className="body-text">Setelah periode pergolakan yang ditandai dengan invasi Bangsa Hiksos dari timur, Raja Ahmose I membebaskan Mesir dan memulai era yang disebut Kerajaan Baru — periode ketika Mesir mengalami kebangkitan militer dan kultural yang luar biasa. Pada masa ini, tentara Mesir tidak lagi hanya bertahan; mereka melancarkan ekspedisi dan penaklukan ke Nubia di selatan, Levant di utara, dan Libya di barat. Era ini melahirkan beberapa nama paling ikonik dalam sejarah: Ramesses II (Ramesses Agung), yang memerintah selama 66 tahun, membangun lebih banyak kuil dan monumen dari firaun manapun, dan menandatangani Perjanjian Kadesh pada 1247 SM — dokumen perjanjian damai tertua yang diketahui dan tersimpan dalam sejarah manusia. Pada era ini juga muncul Hatshepsut — salah satu dari sedikit perempuan yang memerintah Mesir sebagai firaun penuh, dan yang membangun kuil-kuil paling elegan di Deir el-Bahari.</p>
            
            <div className="sub-chapter-title">Hieroglif dan Papirus: Revolusi Tulis</div>
            <p className="body-text">Salah satu kontribusi terbesar Mesir untuk peradaban manusia adalah sistem tulisan hieroglif — sistem yang menggunakan gambar dan simbol untuk merepresentasikan suara, kata, dan konsep abstrak. Dengan lebih dari 700 simbol yang diketahui, hieroglif bukan sekadar seni; ia adalah sistem administratif yang memungkinkan Mesir mendokumentasikan hukum, transaksi, sejarah, dan astronomi. Papirus — tanaman yang tumbuh di tepian Nil — menjadi medium tulisan pertama yang ringan, fleksibel, dan bisa dibawa bepergian. Gulungan papirus yang diekspor ke seluruh Mediterania kuno menjadi komoditas intelektual yang sangat berharga, dan kata 'paper' (kertas) dalam bahasa Inggris berasal langsung dari kata 'papyrus'.</p>
          </section>

          <section id="ilmu-inovasi">
            <span className="chapter-tag">Bab 5 · Sains Praktis</span>
            <h2>Warisan Ilmu yang Kita Gunakan Setiap Hari</h2>
            <p className="body-text">Di balik kemegahan piramida dan mistisisme para dewa, Mesir Kuno adalah peradaban yang sangat ilmiah untuk zamannya. Kebutuhan praktis untuk mengelola banjir Nil, membangun struktur masif, dan mengelola kerajaan besar mendorong perkembangan ilmu pengetahuan yang luar biasa.</p>
            
            <div className="egypt-visual-grid">
              <div className="grid-card-item">
                <span className="badge-category">Aritmatika</span>
                <h4>Matematika Terapan</h4>
                <p>Papirus Rhind mendokumentasikan rumusan pecahan dan perhitungan geometri tanah terukur paska luapan air sungai.</p>
              </div>
              <div className="grid-card-item">
                <span className="badge-category">Astronomi</span>
                <h4>Sistem Penanggalan</h4>
                <p>Pengembangan siklus kalender 365 hari berbasis orbit rasi Sirius dan matahari yang diadaptasi menjadi kalender Gregorian modern.</p>
              </div>
              <div className="grid-card-item">
                <span className="badge-category">Anatomi</span>
                <h4>Sains Kedokteran</h4>
                <p>Praktik bedah, formula obat herbal, serta pemahaman patologi struktural organ tubuh manusia lewat media Papirus Ebers.</p>
              </div>
              <div className="grid-card-item">
                <span className="badge-category">Hidrolik</span>
                <h4>Rekayasa Sipil</h4>
                <p>Arsitektur penanganan bendungan irigasi massal terstruktur yang membagi surplus komoditas pangan di sepanjang wilayah gersang.</p>
              </div>
            </div>
          </section>

          <section id="agama-kosmologi">
            <span className="chapter-tag">Bab 6 · Harmoni Ma'at</span>
            <h2>Agama, Kosmologi, dan Konsep Ma'at</h2>
            <p className="body-text">Tidak ada aspek kehidupan Mesir Kuno yang tidak dipengaruhi agama. Berbeda dari banyak peradaban lain yang memisahkan dunia fisik dari dunia spiritual, bagi orang Mesir keduanya adalah satu kesatuan: alam semesta adalah ekspresi kehendak para dewa, dan tugas manusia adalah hidup selaras dengannya. Prinsip utama agama Mesir adalah Ma'at — sebuah konsep yang mencakup kebenaran, keadilan, keseimbangan, dan harmoni kosmik sekaligus. Ma'at bukan hanya nilai moral individual; ia adalah hukum alam yang menopang seluruh ketertiban alam semesta. Firaun berkewajiban menegakkan Ma'at di bumi, dan setiap warga negara berkewajiban hidup sesuai prinsip-prinsipnya agar alam semesta tetap berjalan dengan baik.</p>
            <p className="body-text">Para dewa Mesir berjumlah ratusan — masing-masing menguasai aspek tertentu dari alam dan kehidupan. Dewa matahari Ra (atau Atum-Ra) adalah dewa tertinggi yang dipercaya menciptakan dunia dari kekacauan primordial. Osiris adalah dewa kematian dan kebangkitan; Isis, istrinya, adalah dewi sihir dan penyembuhan; Horus, putra mereka, adalah dewa langit yang melambangkan kekuasaan firaun di bumi; dan Anubis adalah dewa berwajah serigala yang mengantar jiwa ke alam baka.</p>
            <p className="body-text">Konsep kehidupan setelah kematian dalam agama Mesir sangat kaya dan kompleks. Jiwa manusia dianggap terdiri dari sembilan elemen berbeda. Setelah kematian, jiwa menjalani perjalanan panjang menuju Hall of Truth (Aula Kebenaran), di mana jantungnya ditimbang dengan bulu kebenaran di hadapan Osiris. Jika jantung lebih ringan dari bulu itu — artinya orang itu hidup dengan Ma'at — ia diizinkan memasuki Field of Reeds (Ladang Alang-alang), surga abadi yang merupakan cermin kehidupan di bumi tanpa penyakit, penderitaan, dan kematian. Inilah mengapa mumifikasi begitu penting: tubuh fisik harus diawetkan agar jiwa memiliki tempat kembali. Dan inilah mengapa piramida dibangun: bukan sebagai pamer kekuasaan semata, melainkan sebagai kendaraan jiwa raja untuk naik ke surga dan bergabung dengan dewa-dewa.</p>
          </section>

          <section id="keruntuhan">
            <span className="chapter-tag">Bab 7 · Akhir Dinasti</span>
            <h2>Keruntuhan — Tiga Ribu Tahun yang Berakhir</h2>
            <p className="body-text">Mesir tidak runtuh dalam satu malam. Proses keruntuhan dimulai dengan Periode Menengah Ketiga, ketika Mesir kembali terpecah antara Mesir Hulu yang dikuasai pendeta Thebes dan Mesir Hilir yang dikuasai pedagang dan penguasa asing. Bangsa Kush dari selatan kemudian menginvasi, diikuti Assyria dari timur, kemudian Persia di bawah Cambyses II yang menaklukkan Mesir pada 525 SM. Momen terakhir kejayaan Mesir datang ketika Alexander Agung dari Makedonia menaklukkan Mesir pada 332 SM. Setelah kematian Alexander, dinasti Ptolomeus memerintah Mesir selama three abad. Bab terakhir ditulis oleh Cleopatra VII — firaun terakhir yang memerintah Mesir sebagai entitas merdeka. Ketika ia meninggal pada 30 SM, Mesir menjadi provinsi Kekaisaran Romawi. Namun warisan Mesir tidak ikut mati: agama, arsitektur, kalender, dan ilmu pengetahuannya terus mengalir ke dalam peradaban Romawi, Kristen, dan Islam — dan dari sana ke seluruh dunia modern.</p>
          </section>

          <section id="timeline">
            <span className="chapter-tag">Bab 8 · Lintas Waktu</span>
            <h2>Timeline Peradaban Mesir Kuno</h2>
            <div className="figma-timeline">
              <div className="timeline-node-item"><div className="node-left-year">~3100 SM</div><div className="node-right-content"><h4>Penyatuan Entitas Tunggal</h4><p>Raja Narmer menyatukan Mesir Hulu dan Hilir.</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">~2600 SM</div><div className="node-right-content"><h4>Era Keemasan Pertama</h4><p>Dinasti Lama dimulai, pembangunan Piramida Giza.</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">~2560 SM</div><div className="node-right-content"><h4>Pembangunan Monumen Akbar</h4><p>Piramida Agung Giza dan Sfinks dibangun.</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">~1550 SM</div><div className="node-right-content"><h4>Kebangkitan Militer</h4><p>Kerajaan Baru: Mesir menjadi kekuatan militer terbesar.</p></div></div>
              <div className="timeline-node-item"><div className="node-left-year">~30 SM</div><div className="node-right-content"><h4>Akhir Era Firaun</h4><p>Cleopatra VII wafat, Mesir menjadi provinsi Romawi.</p></div></div>
            </div>
          </section>

          <section id="warisan">
            <span className="chapter-tag">Bab 9 · Peninggalan Abadi</span>
            <h2>Peninggalan dan Warisan Dunia</h2>
            
            <table className="egypt-structured-table">
              <thead>
                <tr>
                  <th>Nama Peninggalan</th>
                  <th>Klasifikasi</th>
                  <th>Deskripsi Historis Singkat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-row-title">Sistem Kalender</td>
                  <td><span className="legacy-badge">Warisan</span></td>
                  <td>Sistem kalender 365 hari terperinci berdasarkan luapan berkala berkala air Sungai Nil dan orbit matahari.</td>
                </tr>
                <tr>
                  <td className="table-row-title">Hieroglif</td>
                  <td><span className="legacy-badge">Warisan</span></td>
                  <td>Aksara tulis formal berjumlah 700+ simbol piktogram untuk urusan pencatatan administrasi kenegaraan.</td>
                </tr>
                <tr>
                  <td className="table-row-title">Arsitektur Monumental</td>
                  <td><span className="legacy-badge">Warisan</span></td>
                  <td>Bangunan makro permanen mulai dari kompleks Piramida Giza, patung Sphinx, hingga Kuil Karnak dan Abu Simbel.</td>
                </tr>
                <tr>
                  <td className="table-row-title">Hukum & Perjanjian</td>
                  <td><span className="legacy-badge">Warisan</span></td>
                  <td>Perjanjian Kadesh (1247 SM) oleh Ramesses II sebagai dokumen pakta diplomatik perdamaian tertua di dunia.</td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: '50px' }}>
              <p className="body-text">Mesir kuno tidak pernah benar-benar mati — ia hanya berganti bahasa. Dari hieroglif ke bahasa Koptik ke bahasa Arab, dari firaun ke khalifah ke presiden, dari pemujaan Ra ke Kristen ke Islam. Mesir adalah bukti bahwa peradaban sejati bukan tentang bertahan hidup, tetapi tentang kemampuan untuk terus bertransformasi sambil mempertahankan jiwa.</p>
              <p className="body-text">Meskipun ribuan tahun telah berlalu, Mesir masih belum selesai bercerita. Peradaban yang membangun untuk keabadian — yang mengukir kalimat di batu bukan di kayu, yang membangun piramida bukan rumah panggung — mengajarkan bahwa investasi paling bernilai bukan untuk hari ini, melainkan untuk ribuan tahun yang akan datang.</p>
            </div>

            <div className="bottom-pagination" style={{ marginTop: '50px' }}>
              <span>Berikutnya</span>
              <button onClick={() => navigate('/detail-mesopotamia')} style={{ cursor: 'pointer' }}>Mesopotamia Kuno / ~3500 SM →</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MesirPage;