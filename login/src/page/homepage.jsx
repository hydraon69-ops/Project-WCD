import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  const civilizations = [
    {
      title: "Mesir Kuno",
      desc: "Piramida, Sungai Nil, dan 3000 tahun kejayaan.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
      path: "/detail-mesir",
    },
    {
      title: "Mesopotamia",
      desc: "Tempat lahir tulisan dan hukum pertama dunia.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200",
      path: "/detail-mesopotamia",
    },
    {
      title: "Sungai Indus",
      desc: "Kota-kota terencana sejak ribuan tahun lalu.",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200",
      path: "/detail-indus",
    },
    {
      title: "Babilonia",
      desc: "Rumah bagi Taman Gantung dan hukum Hammurabi.",
      image: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1200",
      path: "/detail-babylon",
    },
    {
      title: "Roma Kuno",
      desc: "Republik, Kekaisaran, dan warisan hukum modern.",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200",
      path: "/detail-rome",
    },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/home")}>
          PERADABAN KUNO
        </div>

        <ul className="nav-links">
          <li>
            <button type="button" onClick={() => navigate("/home")}>
              Beranda
            </button>
          </li>
          <li>
            <a href="#peradaban">Peradaban</a>
          </li>
          <li>
            <button type="button" onClick={() => navigate("/timeline")}>
              Timeline
            </button>
          </li>
          <li>
            <button type="button" onClick={() => navigate("/warisan")}>
              Warisan
            </button>
          </li>
        </ul>

        <button className="btn" onClick={() => navigate("/warisan")}>
          Mulai Jelajah
        </button>
      </nav>

      <section className="hero">
        <div className="overlay">
          <p className="subtitle">SERI 5 PERADABAN KUNO DUNIA</p>
          <h1>
            Lima Peradaban
            <br />
            yang Mengubah Segalanya
          </h1>
          <p className="hero-desc">
            Mesir • Mesopotamia • Sungai Indus • Babilonia • Roma
          </p>

          <div className="hero-buttons">
            {civilizations.map((item) => (
              <button key={item.title} onClick={() => navigate(item.path)}>
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <h3>5</h3>
          <p>Peradaban</p>
        </div>
        <div>
          <h3>8.000+</h3>
          <p>Tahun Sejarah</p>
        </div>
        <div>
          <h3>40+</h3>
          <p>Artefak Kuno</p>
        </div>
        <div>
          <h3>9</h3>
          <p>Era Perkembangan</p>
        </div>
      </section>

      <section className="intro">
        <span>PENGANTAR</span>
        <h2>Dari Padang Pasir ke Lembah Sungai</h2>
        <p>
          Lima peradaban besar telah membentuk fondasi dunia modern.
          Dari sistem pemerintahan hingga ilmu pengetahuan, warisan mereka
          masih dapat kita rasakan hingga saat ini.
        </p>
      </section>

      <section className="cards" id="peradaban">
        <div className="section-title">
          <span>PILIH PERADABAN ANDA</span>
          <h2>Lima Kisah yang Satu</h2>
        </div>

        <div className="card-container">
          {civilizations.map((item) => (
            <div className="home-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="home-card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button
                  type="button"
                  className="read-more"
                  onClick={() => navigate(item.path)}
                >
                  Jelajahi →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>© 2025 Peradaban Kuno. Semua Hak Dilindungi.</footer>
    </>
  );
}

export default Homepage;