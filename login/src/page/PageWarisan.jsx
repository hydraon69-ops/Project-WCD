function PageWarisan() {
  return (
    <>
      <section className="warisan-hero">
        <small>PENINGGALAN DUNIA</small>
        <h1>Yang Masih Hidup Hingga Kini</h1>
        <p>Bagaimana lima peradaban kuno membentuk dunia modern</p>
      </section>

      <section className="section">

        <div className="grid">

          <div className="warisan-card">
            <div className="card-header gold">
              <h3>Mesir Kuno</h3>
              <span>3000 SM – 30 SM</span>
            </div>

            <div className="warisan-card-body">
              <div className="item">
                <h4>Sistem Kalender 365 Hari</h4>
                <p>Fondasi kalender modern yang dipakai hingga saat ini.</p>
              </div>

              <div className="item">
                <h4>Hieroglif</h4>
                <p>Salah satu sistem tulisan tertua di dunia.</p>
              </div>

              <div className="item">
                <h4>Arsitektur Monumental</h4>
                <p>Menginspirasi desain bangunan hingga era modern.</p>
              </div>

              <a href="#" className="read">Baca Selengkapnya →</a>
            </div>
          </div>

          <div className="warisan-card">
            <div className="card-header green">
              <h3>Mesopotamia</h3>
              <span>3500 SM – 539 SM</span>
            </div>

            <div className="warisan-card-body">
              <div className="item">
                <h4>Tulisan Paku</h4>
                <p>Sistem pencatatan awal dalam sejarah manusia.</p>
              </div>

              <div className="item">
                <h4>Roda</h4>
                <p>Teknologi yang mengubah transportasi dunia.</p>
              </div>

              <div className="item">
                <h4>Kode Hammurabi</h4>
                <p>Dasar konsep hukum tertulis.</p>
              </div>

              <a href="#" className="read">Baca Selengkapnya →</a>
            </div>
          </div>

          <div className="warisan-card">
            <div className="card-header blue">
              <h3>Sungai Indus</h3>
              <span>2600 SM – 1900 SM</span>
            </div>

            <div className="warisan-card-body">
              <div className="item">
                <h4>Sistem Drainase Kota</h4>
                <p>Model sanitasi kota yang maju untuk masanya.</p>
              </div>

              <div className="item">
                <h4>Perencanaan Kota Grid</h4>
                <p>Dasar tata kota modern.</p>
              </div>

              <div className="item">
                <h4>Standarisasi Ukuran</h4>
                <p>Konsep pengukuran yang seragam.</p>
              </div>

              <a href="#" className="read">Baca Selengkapnya →</a>
            </div>
          </div>

          <div className="warisan-card">
            <div className="card-header purple">
              <h3>Babilonia</h3>
              <span>1800 SM – 539 SM</span>
            </div>

            <div className="warisan-card-body">
              <div className="item">
                <h4>Kode Hammurabi</h4>
                <p>Salah satu hukum tertulis tertua di dunia.</p>
              </div>

              <div className="item">
                <h4>Matematika & Astronomi</h4>
                <p>Konsep 60 menit dan 60 detik.</p>
              </div>

              <div className="item">
                <h4>Zodiak</h4>
                <p>Pengamatan langit yang berpengaruh hingga kini.</p>
              </div>

              <a href="#" className="read">Baca Selengkapnya →</a>
            </div>
          </div>

          <div className="warisan-card">
            <div className="card-header red">
              <h3>Roma Kuno</h3>
              <span>753 SM – 476 M</span>
            </div>

            <div className="warisan-card-body">
              <div className="item">
                <h4>Sistem Jalan Romawi</h4>
                <p>Jaringan transportasi yang luas dan efektif.</p>
              </div>

              <div className="item">
                <h4>Beton & Arsitektur Kubah</h4>
                <p>Teknik konstruksi yang bertahan ribuan tahun.</p>
              </div>

              <div className="item">
                <h4>Hukum Romawi</h4>
                <p>Dasar banyak sistem hukum modern.</p>
              </div>

              <a href="#" className="read">Baca Selengkapnya →</a>
            </div>
          </div>

        </div>

        <div className="title">
          <small>MASIH RELEVAN HARI INI</small>
          <h2>Warisan yang Masih Anda Gunakan Hari Ini</h2>
        </div>

        <div className="stats-warisan">

          <div className="stat">
            <div className="stat-number blue-text">60</div>
            <small>Detik & Menit</small>

            <h3>Satuan Waktu Modern</h3>

            <p>
              Sistem bilangan basis 60 dari Mesopotamia masih digunakan
              dalam pengukuran waktu modern.
            </p>
          </div>

          <div className="stat">
            <div className="stat-number gold-text">365</div>
            <small>Hari Setahun</small>

            <h3>Kalender 365 Hari</h3>

            <p>
              Berasal dari pengamatan astronomi Mesir Kuno yang menjadi
              dasar kalender saat ini.
            </p>
          </div>

          <div className="stat">
            <div className="stat-number red-text">150+</div>
            <small>Negara</small>

            <h3>Sistem Hukum Modern</h3>

            <p>
              Banyak negara masih mengadopsi prinsip hukum yang berasal
              dari Romawi Kuno.
            </p>
          </div>

        </div>

      </section>

      <footer>
        © 2025 Peradaban Kuno
      </footer>
    </>
  );
}

export default PageWarisan;