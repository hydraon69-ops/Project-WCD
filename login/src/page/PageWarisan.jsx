function PageWarisan() {
  return (
    <>
      <section className="bg-[#2d241d] py-24 text-center text-white px-6">
        <small className="text-xs uppercase tracking-[2px] text-[#d8b47d]">PENINGGALAN DUNIA</small>
        <h1 className="mt-4 text-4xl font-light sm:text-5xl">Yang Masih Hidup Hingga Kini</h1>
        <p className="mt-4 max-w-2xl mx-auto text-base text-[#d9d0c5] sm:text-lg">
          Bagaimana lima peradaban kuno membentuk dunia modern
        </p>
      </section>

      <section className="bg-[#f8f2e8] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {[
            {
              title: "Mesir Kuno",
              date: "3000 SM – 30 SM",
              headerBg: "from-[#a0782e] to-[#8b6436]",
              items: [
                { title: "Sistem Kalender 365 Hari", desc: "Fondasi kalender modern yang dipakai hingga saat ini." },
                { title: "Hieroglif", desc: "Salah satu sistem tulisan tertua di dunia." },
                { title: "Arsitektur Monumental", desc: "Menginspirasi desain bangunan hingga era modern." },
              ],
            },
            {
              title: "Mesopotamia",
              date: "3500 SM – 539 SM",
              headerBg: "from-[#2f6f39] to-[#226338]",
              items: [
                { title: "Tulisan Paku", desc: "Sistem pencatatan awal dalam sejarah manusia." },
                { title: "Roda", desc: "Teknologi yang mengubah transportasi dunia." },
                { title: "Kode Hammurabi", desc: "Dasar konsep hukum tertulis." },
              ],
            },
            {
              title: "Sungai Indus",
              date: "2600 SM – 1900 SM",
              headerBg: "from-[#2563eb] to-[#1e40af]",
              items: [
                { title: "Sistem Drainase Kota", desc: "Model sanitasi kota yang maju untuk masanya." },
                { title: "Perencanaan Kota Grid", desc: "Dasar tata kota modern." },
                { title: "Standarisasi Ukuran", desc: "Konsep pengukuran yang seragam." },
              ],
            },
            {
              title: "Babilonia",
              date: "1800 SM – 539 SM",
              headerBg: "from-[#7c3aed] to-[#5b21b6]",
              items: [
                { title: "Kode Hammurabi", desc: "Salah satu hukum tertulis tertua di dunia." },
                { title: "Matematika & Astronomi", desc: "Konsep 60 menit dan 60 detik." },
                { title: "Zodiak", desc: "Pengamatan langit yang berpengaruh hingga kini." },
              ],
            },
            {
              title: "Roma Kuno",
              date: "753 SM – 476 M",
              headerBg: "from-[#dc2626] to-[#991b1b]",
              items: [
                { title: "Sistem Jalan Romawi", desc: "Jaringan transportasi yang luas dan efektif." },
                { title: "Beton & Arsitektur Kubah", desc: "Teknik konstruksi yang bertahan ribuan tahun." },
                { title: "Hukum Romawi", desc: "Dasar banyak sistem hukum modern." },
              ],
            },
          ].map((card) => (
            <div key={card.title} className="overflow-hidden rounded-[24px] bg-white shadow-xl">
              <div className={`bg-gradient-to-r ${card.headerBg} px-8 py-8`}>
                <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                <span className="mt-2 block text-sm text-white/80">{card.date}</span>
              </div>
              <div className="space-y-5 p-8">
                {card.items.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <h4 className="text-lg font-semibold text-[#1f1f1f]">{item.title}</h4>
                    <p className="text-sm leading-7 text-[#555]">{item.desc}</p>
                  </div>
                ))}
                <a href="#" className="inline-flex text-sm font-semibold text-[#b88c53] transition hover:text-[#8f6d43]">
                  Baca Selengkapnya →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-4xl text-center">
          <small className="text-xs uppercase tracking-[2px] text-[#8c6a4d]">MASIH RELEVAN HARI INI</small>
          <h2 className="mt-4 text-4xl font-light sm:text-5xl">Warisan yang Masih Anda Gunakan Hari Ini</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[24px] bg-white p-8 shadow-xl">
            <div className="text-4xl font-bold text-[#2f86d4]">60</div>
            <span className="text-sm text-[#7b7b7b]">Detik & Menit</span>
            <h3 className="mt-4 text-xl font-semibold text-[#1f1f1f]">Satuan Waktu Modern</h3>
            <p className="mt-3 text-sm leading-7 text-[#555]">
              Sistem bilangan basis 60 dari Mesopotamia masih digunakan dalam pengukuran waktu modern.
            </p>
          </div>

          <div className="rounded-[24px] bg-white p-8 shadow-xl">
            <div className="text-4xl font-bold text-[#b88c53]">365</div>
            <span className="text-sm text-[#7b7b7b]">Hari Setahun</span>
            <h3 className="mt-4 text-xl font-semibold text-[#1f1f1f]">Kalender 365 Hari</h3>
            <p className="mt-3 text-sm leading-7 text-[#555]">
              Berasal dari pengamatan astronomi Mesir Kuno yang menjadi dasar kalender saat ini.
            </p>
          </div>

          <div className="rounded-[24px] bg-white p-8 shadow-xl">
            <div className="text-4xl font-bold text-[#d34f40]">150+</div>
            <span className="text-sm text-[#7b7b7b]">Negara</span>
            <h3 className="mt-4 text-xl font-semibold text-[#1f1f1f]">Sistem Hukum Modern</h3>
            <p className="mt-3 text-sm leading-7 text-[#555]">
              Banyak negara masih mengadopsi prinsip hukum yang berasal dari Romawi Kuno.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#1b1614] py-8 text-center text-sm text-[#c9b8a4]">
        © 2025 Peradaban Kuno
      </footer>
    </>
  );
}

export default PageWarisan;
