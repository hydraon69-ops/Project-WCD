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
      <nav className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 text-white">
        <div
          className="text-sm font-bold tracking-[1px] cursor-pointer"
          onClick={() => navigate("/home")}
        >
          PERADABAN KUNO
        </div>

        <ul className="flex items-center gap-7 text-sm">
          <li>
            <button
              type="button"
              onClick={() => navigate("/home")}
              className="transition hover:text-[#d8b47d]"
            >
              Beranda
            </button>
          </li>
          <li>
            <a href="#peradaban" className="transition hover:text-[#d8b47d]">
              Peradaban
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={() => navigate("/timeline")}
              className="transition hover:text-[#d8b47d]"
            >
              Timeline
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => navigate("/warisan")}
              className="transition hover:text-[#d8b47d]"
            >
              Warisan
            </button>
          </li>
        </ul>

        <button
          className="rounded-full bg-[#d8b47d] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#c49c6d]"
          onClick={() => navigate("/warisan")}
        >
          Mulai Jelajah
        </button>
      </nav>

      <section className="relative h-screen bg-[url('https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=1920')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <p className="text-xs uppercase tracking-[2px] text-[#d8b47d] mb-4">
            SERI 5 PERADABAN KUNO DUNIA
          </p>
          <h1 className="text-5xl font-light leading-tight sm:text-6xl">
            Lima Peradaban
            <br />
            yang Mengubah Segalanya
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base opacity-90 sm:text-lg">
            Mesir • Mesopotamia • Sungai Indus • Babilonia • Roma
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {civilizations.map((item) => (
              <button
                key={item.title}
                type="button"
                onClick={() => navigate(item.path)}
                className="rounded-2xl border border-white/80 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white hover:text-black"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 bg-[#2d241d] px-6 py-10 text-white sm:grid-cols-2 lg:grid-cols-4 lg:px-16">
        <div className="text-center">
          <h3 className="text-3xl font-semibold">5</h3>
          <p className="mt-2 text-sm text-[#ccc]">Peradaban</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-semibold">8.000+</h3>
          <p className="mt-2 text-sm text-[#ccc]">Tahun Sejarah</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-semibold">40+</h3>
          <p className="mt-2 text-sm text-[#ccc]">Artefak Kuno</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-semibold">9</h3>
          <p className="mt-2 text-sm text-[#ccc]">Era Perkembangan</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <span className="text-xs uppercase tracking-[2px] text-[#b88c53]">
          PENGANTAR
        </span>
        <h2 className="mt-4 text-4xl font-light leading-tight sm:text-5xl">
          Dari Padang Pasir ke Lembah Sungai
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#4b4b4b]">
          Lima peradaban besar telah membentuk fondasi dunia modern. Dari sistem
          pemerintahan hingga ilmu pengetahuan, warisan mereka masih dapat kita
          rasakan hingga saat ini.
        </p>
      </section>

      <section id="peradaban" className="bg-[#f8f2e8] px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs uppercase tracking-[2px] text-[#b88c53]">
            PILIH PERADABAN ANDA
          </span>
          <h2 className="mt-4 text-4xl font-light leading-tight sm:text-5xl">
            Lima Kisah yang Satu
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {civilizations.map((item) => (
            <div
              className="overflow-hidden rounded-[24px] bg-white shadow-lg transition duration-300 hover:-translate-y-1"
              key={item.title}
            >
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1f1f1f]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#555]">{item.desc}</p>
                <button
                  type="button"
                  onClick={() => navigate(item.path)}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-[#b88c53] transition hover:text-[#8f6d43]"
                >
                  Jelajahi →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-[#676767]">
        © 2025 Peradaban Kuno. Semua Hak Dilindungi.
      </footer>
    </>
  );
}

export default Homepage;
