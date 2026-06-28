import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Circle, Star, BookOpen, Scale, Library } from "lucide-react";

export function DetailMesopotamia({ chapters, dynastyRows, figureCards, timelineEvents, warisanRows }) {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("latar-belakang");

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -60% 0px" }
    );
    chapters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-[#F4F2EE] text-slate-900">
      <nav className="sticky top-0 z-30 border-b border-slate-300 bg-[#F4F2EE]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900">
              <ArrowLeft size={18} /> PERADABAN KUNO
            </Link>
            <span className="rounded-full bg-slate-200 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-600">Mesopotamia</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            {[{ label: "Bab 1", id: "latar-belakang" }, { label: "Bab 2", id: "geografi" }, { label: "Timeline", id: "timeline" }, { label: "Warisan", id: "warisan" }].map((item, index) => (
              <button key={item.id} type="button" onClick={() => scrollTo(item.id)} className="text-slate-600 transition hover:text-slate-900">
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="h-1 bg-slate-300">
          <div className="h-full bg-slate-900 transition-all duration-150" style={{ width: `${progress}%` }} />
        </div>
      </nav>

      <header className="relative overflow-hidden bg-[#0f766e] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">SERI 5 PERADABAN KUNO DUNIA</p>
          <h1 className="mt-6 text-4xl font-light leading-tight md:text-5xl">Mesopotamia — Lembah Dua Sungai</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-200/90">Tempat tulisan, hukum, dan kota pertama lahir di antara Eufrat dan Tigris.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {chapters.slice(0, 6).map((item) => (
              <button key={item.id} type="button" onClick={() => scrollTo(item.id)} className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/15">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
        <aside className="sticky top-6 self-start rounded-3xl border border-slate-300 bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-4">Isi Halaman</p>
          <div className="space-y-2">
            {chapters.map((chapter) => (
              <button key={chapter.id} type="button" onClick={() => scrollTo(chapter.id)} className={`flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left text-sm font-semibold transition ${activeSection === chapter.id ? 'bg-emerald-50 text-slate-900' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>
                <span className="min-w-[28px] text-xs text-slate-400">{chapter.bab}</span>
                {chapter.label}
              </button>
            ))}
          </div>
        </aside>

        <section className="space-y-16">
          <article id="latar-belakang" className="scroll-mt-24">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-slate-500">01 · Latar Belakang</p>
              <h2 className="text-3xl font-semibold text-slate-900">Tempat Segalanya Dimulai</h2>
              <p className="text-base leading-8 text-slate-700">Di antara Sungai Eufrat dan Tigris terbentang tanah yang dikenal sebagai Mesopotamia — pusat di mana peradaban manusia pertama kali mengubah kehidupan nomaden menjadi kota, tulisan, dan administrasi yang teratur.</p>
            </div>
          </article>

          <article id="geografi" className="scroll-mt-24">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-slate-500">02 · Geografi</p>
              <h2 className="text-3xl font-semibold text-slate-900">Lembah Subur di Antara Dua Sungai</h2>
              <p className="text-base leading-8 text-slate-700">Banjir tahunan kedua sungai meninggalkan lapisan lumpur subur yang memungkinkan pertanian intensif. Itulah yang menjadikan kawasan ini pusat perdagangan, teknologi, dan ide selama ribuan tahun.</p>
              <div className="rounded-3xl border border-slate-300 bg-slate-50 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-emerald-600 mb-4">Peta Mesopotamia</p>
                <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-sm">
                  <svg viewBox="0 0 640 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                    <rect width="640" height="300" rx="16" fill="#D8F3EE" />
                    <ellipse cx="320" cy="160" rx="280" ry="120" fill="#F3F8F6" />
                    <path d="M 220 80 Q 260 120 300 165 Q 330 190 370 235" stroke="#059669" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <path d="M 260 70 Q 290 110 320 155 Q 345 185 390 225" stroke="#0F766E" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <ellipse cx="420" cy="245" rx="60" ry="24" fill="#BCEAD5" />
                    <circle cx="300" cy="185" r="5" fill="#065F46" /><text x="312" y="189" fontSize="11" fill="#134E4A">Ur</text>
                    <circle cx="320" cy="165" r="5" fill="#065F46" /><text x="332" y="169" fontSize="11" fill="#134E4A">Uruk</text>
                    <circle cx="285" cy="140" r="5" fill="#065F46" /><text x="297" y="144" fontSize="11" fill="#134E4A">Babilon</text>
                  </svg>
                </div>
              </div>
            </div>
          </article>

          <article id="puncak-kejayaan" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">03 · Puncak Kejayaan</p>
            <h2 className="text-3xl font-semibold text-slate-900">Empat Milenium, Tujuh Bangsa</h2>
            <div className="space-y-6 text-slate-700 leading-8">
              <p>Mesopotamia adalah panggung besar di mana Sumeria, Akkadia, Babilonia, Assyria, dan Persia saling bergantian. Setiap era mewarisi tulisan, sistem hukum, dan arsitektur pendahulunya.</p>
              <div className="overflow-hidden rounded-3xl border border-slate-300 bg-white shadow-sm">
                <div className="grid grid-cols-3 gap-4 bg-[#047857] px-5 py-4 text-white text-xs uppercase tracking-[0.16em]">
                  <span>Bangsa</span>
                  <span>Periode</span>
                  <span>Kontribusi</span>
                </div>
                <div className="divide-y divide-slate-200">
                  {dynastyRows.map((row, index) => (
                    <div key={row.bangsa} className={`grid grid-cols-3 gap-4 px-5 py-4 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                      <span className="font-semibold text-slate-900">{row.bangsa}</span>
                      <span className="font-mono text-slate-600">{row.periode}</span>
                      <span className="text-slate-700">{row.kontribusi}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article id="ilmu-inovasi" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">04 · Ilmu & Inovasi</p>
            <h2 className="text-3xl font-semibold text-slate-900">Dari Tulisan ke Perpustakaan</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {figureCards.map((card) => (
                <div key={card.name} className="rounded-3xl border border-slate-300 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-slate-900 mb-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">✓</span>
                    <div>
                      <p className="text-lg font-semibold">{card.name}</p>
                      <p className="text-sm text-slate-500">{card.period}</p>
                    </div>
                  </div>
                  <p className="text-slate-700">{card.desc}</p>
                </div>
              ))}
            </div>
          </article>

          <article id="agama-sosial" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">05 · Agama & Sosial</p>
            <h2 className="text-3xl font-semibold text-slate-900">Peradaban dan Kepercayaan</h2>
            <div className="space-y-6 text-slate-700 leading-8">
              <p>Mesopotamia adalah tempat lahirnya politeisme pragmatis, di mana manusia tidak dijanjikan surga sempurna, tetapi harus hidup dengan aturan dan hukum yang jelas di dunia nyata.</p>
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="font-semibold text-emerald-900">Ma'at Tidak di Sini, Tapi Hukum Ada</p>
                <p className="mt-3 text-slate-700">Pendekatan Mesopotamia terhadap agama lebih terfokus pada ritual dan kerjasama sosial daripada janji-janji kehidupan setelah mati. Ini membuat mereka menciptakan sistem hukum yang berfungsi sebagai kekuatan pengatur masyarakat.</p>
              </div>
            </div>
          </article>

          <article id="timeline" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">07 · Timeline</p>
            <h2 className="text-3xl font-semibold text-slate-900">Kronologi Singkat</h2>
            <div className="space-y-6 border-l-2 border-slate-300 pl-6">
              {timelineEvents.map((event) => (
                <div key={event.year} className="relative">
                  <div className="absolute -left-3 top-2 h-3 w-3 rounded-full bg-emerald-700" />
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{event.year}</p>
                  <p className="mt-2 text-base text-slate-700">{event.event}</p>
                </div>
              ))}
            </div>
          </article>

          <article id="warisan" className="scroll-mt-24 pb-10">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">08 · Warisan Dunia</p>
            <h2 className="text-3xl font-semibold text-slate-900">Kontribusi yang Masih Kita Gunakan</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {warisanRows.map((row) => (
                <div key={row.warisan} className="rounded-3xl border border-slate-300 bg-white p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{row.warisan}</p>
                  <p className="mt-2 font-semibold text-slate-900">{row.wujud}</p>
                  <p className="mt-3 text-slate-700">{row.relevansi}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-slate-300 bg-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Berikutnya</p>
                <p className="mt-2 text-base font-semibold text-slate-900">Sungai Indus — Peradaban Selanjutnya</p>
              </div>
              <Link to="/detail-indus" className="inline-flex items-center rounded-full bg-[#047857] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#065f46]">
                Lanjutkan ke Indus <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
