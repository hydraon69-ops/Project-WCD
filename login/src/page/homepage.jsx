import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <div className="logo">PERADABAN KUNO</div>

        <ul className="nav-links">
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Peradaban</a></li>
          <li><a href="#">Timeline</a></li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/warisan");
              }}
            >
              Warisan
            </a>
          </li>
        </ul>

        <button
          className="btn"
          onClick={() => navigate("/warisan")}
        >
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
            <button>Mesir Kuno</button>
            <button>Mesopotamia</button>
            <button>Sungai Indus</button>
            <button>Babilonia</button>
            <button>Roma Kuno</button>
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
      <section className="cards">

        <div className="section-title">
          <span>PILIH PERADABAN ANDA</span>
          <h2>Lima Kisah yang Satu</h2>
        </div>

        <div className="card-container">

          <div className="home-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg" />
            <div className="home-card-content">
              <h3>Mesir Kuno</h3>
              <p>Piramida, Sungai Nil, dan 3000 tahun kejayaan.</p>
              <a href="#" className="read-more">Jelajahi →</a>
            </div>
          </div>

          <div className="home-card">
            <img src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200" />
            <div className="home-card-content">
              <h3>Mesopotamia</h3>
              <p>Tempat lahir tulisan dan hukum pertama dunia.</p>
              <a href="#" className="read-more">Jelajahi →</a>
            </div>
          </div>

          <div className="home-card">
            <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200" />
            <div className="home-card-content">
              <h3>Sungai Indus</h3>
              <p>Kota-kota terencana sejak ribuan tahun lalu.</p>
              <a href="#" className="read-more">Jelajahi →</a>
            </div>
          </div>

          <div className="home-card">
            <img src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1200" />
            <div className="home-card-content">
              <h3>Babilonia</h3>
              <p>Rumah bagi Taman Gantung dan hukum Hammurabi.</p>
              <a href="#" className="read-more">Jelajahi →</a>
            </div>
          </div>

          <div className="home-card">
            <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200" />
            <div className="home-card-content">
              <h3>Roma Kuno</h3>
              <p>Republik, Kekaisaran, dan warisan hukum modern.</p>
              <a href="#" className="read-more">Jelajahi →</a>
            </div>
          </div>

        </div>
      </section>

      <footer>
        © 2025 Peradaban Kuno. Semua Hak Dilindungi.
      </footer>
    </>
  );
}

export default Homepage;