import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Star, Pencil, Clock, Telescope } from "lucide-react";

const chapters = [
  { id: "latar-belakang", label: "Latar Belakang", bab: 1 },
  { id: "geografi", label: "Geografi", bab: 2 },
  { id: "puncak-kejayaan", label: "Puncak Kejayaan", bab: 3 },
  { id: "ilmu-inovasi", label: "Ilmu & Inovasi", bab: 4 },
  { id: "agama-sosial", label: "Agama & Sosial", bab: 5 },
  { id: "keruntuhan", label: "Keruntuhan", bab: 6 },
  { id: "timeline", label: "Timeline", bab: 7 },
  { id: "warisan", label: "Warisan", bab: 8 },
  { id: "hari-ini", label: "Hari Ini", bab: 9 }
];

const timelineEvents = [
  { year: "~1900 SM", event: "Babilonia muncul sebagai pusat kerajaan kuat." },
  { year: "~1792 SM", event: "Hammurabi menciptakan kode hukum publik." },
  { year: "~605 SM", event: "Nebukadnezar II memperluas Babilon menjadi kota megah." },
  { year: "~539 SM", event: "Persia menaklukkan Babilon tanpa perlawanan besar." }
];

const legacyItems = [
  { Icon: Pencil, title: "Kode Hammurabi", desc: "Hukum tertulis pertama yang dipajang di ruang publik untuk semua warga." },
  { Icon: Clock, title: "Sistem Kalender Lunar", desc: "Kalender berbasis bulan yang mempengaruhi agama-agama besar." },
  { Icon: Telescope, title: "Astronomi Babilonia", desc: "Prediksi gerhana dan studi bintang yang melampaui zamannya." }
];

const placeholderSections = [
  { id: "geografi", bab: 2, title: "Kota Babel di Tepi Sungai Efrat" },
  { id: "puncak-kejayaan", bab: 3, title: "Era Hukum dan Ukiran" },
  { id: "ilmu-inovasi", bab: 4, title: "Taman Gantung & Astronomi" },
  { id: "agama-sosial", bab: 5, title: "Dewa, Ritual, dan Struktur Sosial" },
  { id: "keruntuhan", bab: 6, title: "Malam Terakhir di Babel" }
];

export function DetailBabylon() {
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
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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
    <div className="min-h-screen bg-[#E8E5DF] text-slate-900">
      <nav className="sticky top-0 z-30 border-b border-slate-300 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900">
              <ArrowLeft size={18} /> PERADABAN KUNO
            </Link>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-500">Babilonia</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            {[{ label: "Bab 1", id: "latar-belakang" }, { label: "Bab 2", id: "geografi" }, { label: "Timeline", id: "timeline" }, { label: "Warisan", id: "warisan" }].map((item) => (
              <button key={item.id} type="button" onClick={() => scrollTo(item.id)} className="text-slate-600 transition hover:text-slate-900">
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="h-1 bg-slate-200">
          <div className="h-full bg-[#7A5090] transition-all duration-150" style={{ width: `${progress}%` }} />
        </div>
      </nav>

      <header className="relative overflow-hidden bg-[#2A2925] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.4em] text-[#D8B4FE]">BABILONIA · ~1900 SM – 539 SM</p>
          <h1 className="mt-6 text-4xl font-light leading-tight md:text-5xl">Hukum, Bintang, dan Taman Gantung</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300/90">Negara-kota yang membangun hukum pertama dan meninggalkan karya ilmiah yang mempengaruhi dunia.</p>
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
        <aside className="sticky top-6 self-start rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-4">Isi Halaman</p>
          <div className="space-y-2">
            {chapters.map((chapter) => (
              <button key={chapter.id} type="button" onClick={() => scrollTo(chapter.id)} className={`flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left text-sm font-semibold transition ${activeSection === chapter.id ? 'bg-[#F5E7FF] text-slate-900' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>
                <span className="min-w-[28px] text-xs text-slate-400">{chapter.bab}</span>
                {chapter.label}
              </button>
            ))}
          </div>
        </aside>

        <section className="space-y-16">
          <article id="latar-belakang" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">01 · Latar Belakang</p>
            <h2 className="text-3xl font-semibold text-slate-900">Kota yang Menulis Hukum</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">Babilon bukan hanya kota; ia adalah ide bahwa hukum dapat ditulis dan dibaca oleh masyarakat. Kode Hammurabi menjadi salah satu fondasi hukum modern dunia.</p>
          </article>

          <article id="geografi" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">02 · Geografi</p>
            <h2 className="text-3xl font-semibold text-slate-900">Sungai Efrat sebagai Tulang Punggung</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">Kota Babel berkembang di tepi Efrat dengan kanal, benteng, dan taman yang dirancang untuk menahan banjir sekaligus mengairi ladang.</p>
          </article>

          <article id="puncak-kejayaan" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">03 · Puncak Kejayaan</p>
            <h2 className="text-3xl font-semibold text-slate-900">Era Hammurabi dan Nebukadnezar</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">Dari hukum yang ditulis di obelisk hingga taman yang tersusun rapi, Babilon menunjukkan kecanggihan budaya dan ilmiah yang menginspirasi seluruh dunia kuno.</p>
          </article>

          <article id="ilmu-inovasi" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">04 · Ilmu & Inovasi</p>
            <h2 className="text-3xl font-semibold text-slate-900">Observatorium Bintang dan Kalender</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {legacyItems.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-slate-900 mb-4">
                    <item.Icon className="h-6 w-6 text-[#7A5090]" />
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </article>

          <article id="agama-sosial" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">05 · Agama & Sosial</p>
            <h2 className="text-3xl font-semibold text-slate-900">Dewa, Ritual, dan Hukum</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">Di Babilon, kepercayaan dan aturan sosial saling berkelindan. Kode hukum berfungsi sebagai perwujudan kehendak ilahi yang diterjemahkan menjadi aturan publik.</p>
          </article>

          <article id="keruntuhan" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">06 · Keruntuhan</p>
            <h2 className="text-3xl font-semibold text-slate-900">Akhir Babilonia</h2>
            <blockquote className="mt-4 rounded-3xl border-l-4 border-[#7A5090] bg-[#F5E7FF] p-6 text-slate-700">
              "Babilon jatuh bukan karena kekurangan hukum, tetapi karena gelombang kekuasaan yang lebih besar bergerak di atasnya."
            </blockquote>
          </article>

          <article id="timeline" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">07 · Timeline</p>
            <h2 className="text-3xl font-semibold text-slate-900">Kronologi Babilonia</h2>
            <div className="space-y-6 border-l-2 border-slate-300 pl-6">
              {timelineEvents.map((event) => (
                <div key={event.year}>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{event.year}</p>
                  <p className="mt-2 text-slate-700">{event.event}</p>
                </div>
              ))}
            </div>
          </article>

          <article id="warisan" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">08 · Warisan</p>
            <h2 className="text-3xl font-semibold text-slate-900">Yang Masih Terasa</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {legacyItems.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4 text-slate-900">
                    <item.Icon className="h-6 w-6 text-[#7A5090]" />
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-[#F9F5FF] p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Berikutnya</p>
                <p className="mt-2 text-base font-semibold text-slate-900">Roma Kuno — Imperium yang Mengubah Dunia</p>
              </div>
              <Link to="/detail-rome" className="inline-flex items-center gap-2 rounded-full bg-[#7A5090] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6b3f7c]">
                Lanjut ke Roma <ArrowRight size={18} />
              </Link>
            </div>
          </article>

          <article id="hari-ini" className="scroll-mt-24 pb-10">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">09 · Hari Ini</p>
            <h2 className="text-3xl font-semibold text-slate-900">Warisan yang Terlupakan</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">Babilonia masih hidup dalam sistem hukum, astronomi, dan konsep pemerintahan. Bahkan ketika kerajaannya runtuh, idenya tetap mendunia.</p>
          </article>
        </section>
      </main>
    </div>
  );
}
