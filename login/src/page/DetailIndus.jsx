import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Droplets, Grid3x3, Scale, Globe, Palette, Landmark } from "lucide-react";

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

const stats = [
  { num: "5 Juta", label: "Populasi Puncak" },
  { num: "1.000+", label: "Pemukiman" },
  { num: "500+", label: "Simbol Tersisa" },
  { num: "Abad ke-19", label: "Sanitasi Modern" }
];

const innovationCards = [
  { Icon: Palette, title: "Seni & Pahat", desc: "Artefak perunggu dan patung yang detail menunjukkan apresiasi artistik tinggi." },
  { Icon: Globe, title: "Astronomi & Kalender", desc: "Siklus musim dan bintang digunakan untuk mengatur pertanian dan panen." },
  { Icon: Landmark, title: "Arsitektur Thermal", desc: "Desain rumah pasif dengan sirkulasi udara alami dan tata kota terencana." },
  { Icon: Grid3x3, title: "Grid Kota", desc: "Blok kota berukuran seragam menunjukkan tata kota modern sebelum waktunya." }
];

const timelineRows = [
  { periode: "~7000 SM", peristiwa: "Permukiman pertama di Mehrgarh." },
  { periode: "~3300 SM", peristiwa: "Peradaban Indus mulai muncul." },
  { periode: "~2600 SM", peristiwa: "Mohenjo-Daro dan Harappa mencapai kematangan urban." },
  { periode: "~2000 SM", peristiwa: "Awal kemunduran dan pergeseran populasi." },
  { periode: "~1500 SM", peristiwa: "Invasi Arya menandai akhir era besar." }
];

const warisanRows = [
  { warisan: "Drainase Kota", wujud: "Saluran terintegrasi dalam setiap rumah", relevansi: "Cikal bakal sanitasi perkotaan modern." },
  { warisan: "Grid Kota", wujud: "Blok persegi teratur", relevansi: "Model tata kota yang digunakan di dunia saat ini." },
  { warisan: "Standardisasi", wujud: "Bata dan ukuran seragam", relevansi: "Dasar sistem manufaktur dan metrologi." },
  { warisan: "Tulisan Misterius", wujud: "500+ simbol piktografik", relevansi: "Salah satu teka-teki terbesar sejarah tulisan." }
];

export function DetailIndus() {
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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900">
              <ArrowLeft size={18} /> PERADABAN KUNO
            </Link>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-500">Sungai Indus</span>
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
          <div className="h-full bg-sky-700 transition-all duration-150" style={{ width: `${progress}%` }} />
        </div>
      </nav>

      <header className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.4em] text-sky-300">SERI 5 PERADABAN KUNO DUNIA</p>
          <h1 className="mt-6 text-4xl font-light leading-tight md:text-5xl">Sungai Indus — Kota yang Menjelajah Waktu</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300/90">Mohenjo-Daro dan Harappa menunjukkan bahwa tata kota, sanitasi, dan standar hidup modern lahir jauh sebelum warnet digital.</p>
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
              <button key={chapter.id} type="button" onClick={() => scrollTo(chapter.id)} className={`flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left text-sm font-semibold transition ${activeSection === chapter.id ? 'bg-slate-100 text-slate-900' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}>
                <span className="min-w-[28px] text-xs text-slate-400">{chapter.bab}</span>
                {chapter.label}
              </button>
            ))}
          </div>
        </aside>

        <section className="space-y-16">
          <article id="latar-belakang" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">01 · Latar Belakang</p>
            <h2 className="text-3xl font-semibold text-slate-900">Misteri Terbesar Sejarah</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">Pada puncaknya, peradaban Indus menampung jutaan jiwa dalam kota-kota terencana yang memegang standar kebersihan dan tata kota yang jauh melebihi masa mereka.</p>
          </article>

          <article id="geografi" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">02 · Geografi</p>
            <h2 className="text-3xl font-semibold text-slate-900">Lembah yang Melahirkan Kota Kembar</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">Peradaban ini tumbuh di lembah Sungai Indus, dengan permukiman yang tersebar di wilayah yang kini menjadi Pakistan dan India barat. Sungai dan anak-anak sungainya memberi kehidupan bagi sistem pertanian serta jaringan perdagangan yang luas.</p>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.28em] text-sky-600">Jaringan Perdagangan</p>
              <div className="mt-4 overflow-hidden rounded-2xl bg-slate-50 p-4">
                <svg viewBox="0 0 640 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                  <rect width="640" height="300" rx="16" fill="#F8FAFC" />
                  <ellipse cx="320" cy="150" rx="280" ry="110" fill="#E0F2FE" />
                  <path d="M 420 60 Q 380 110 340 140 Q 300 170 260 215" stroke="#0E7490" strokeWidth="3" fill="none" strokeDasharray="8 6" />
                  <circle cx="420" cy="150" r="6" fill="#0E7490" />
                  <text x="430" y="154" fontSize="11" fill="#0F172A">Mohenjo-Daro</text>
                  <circle cx="440" cy="100" r="6" fill="#0E7490" />
                  <text x="450" y="104" fontSize="11" fill="#0F172A">Harappa</text>
                </svg>
              </div>
            </div>
          </article>

          <article id="puncak-kejayaan" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">03 · Puncak Kejayaan</p>
            <h2 className="text-3xl font-semibold text-slate-900">Kota yang Mendahului Zaman</h2>
            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-semibold text-sky-700">Sistem Sanitasi</p>
              <p className="mt-3 text-slate-700">Rumah-rumah di Mohenjo-Daro dilengkapi toilet dan saluran pembuangan yang terhubung ke sistem drainase kota — sebuah pencapaian yang tidak akan terlihat lagi hingga abad ke-19.</p>
            </div>
          </article>

          <article id="ilmu-inovasi" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">04 · Ilmu & Inovasi</p>
            <h2 className="text-3xl font-semibold text-slate-900">Teknologi Urban Sebelum Industrialisasi</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {innovationCards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <card.Icon className="h-6 w-6 text-sky-700" />
                    <p className="text-lg font-semibold text-slate-900">{card.title}</p>
                  </div>
                  <p className="mt-3 text-slate-700">{card.desc}</p>
                </div>
              ))}
            </div>
          </article>

          <article id="agama-sosial" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">05 · Agama & Sosial</p>
            <h2 className="text-3xl font-semibold text-slate-900">Republik Pedagang Tanpa Istana</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">Peradaban Indus mungkin bukan monarki besar; banyak ahli menyebutnya sebagai jaringan kota yang dikelola bersama, dengan sedikit bukti tentang royalty yang mewah dan lebih banyak bukti tentang keseimbangan sosial.</p>
          </article>

          <article id="timeline" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">07 · Timeline</p>
            <h2 className="text-3xl font-semibold text-slate-900">Garis Waktu Singkat</h2>
            <div className="space-y-6 border-l-2 border-slate-300 pl-6">
              {timelineRows.map((row) => (
                <div key={row.periode}>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{row.periode}</p>
                  <p className="mt-2 text-slate-700">{row.peristiwa}</p>
                </div>
              ))}
            </div>
          </article>

          <article id="warisan" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">08 · Warisan Dunia</p>
            <h2 className="text-3xl font-semibold text-slate-900">Peninggalan yang Masih Berpengaruh</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {warisanRows.map((row) => (
                <div key={row.warisan} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{row.warisan}</p>
                  <p className="mt-2 font-semibold text-slate-900">{row.wujud}</p>
                  <p className="mt-3 text-slate-700">{row.relevansi}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Berikutnya</p>
                <p className="mt-2 text-base font-semibold text-slate-900">Babilonia — Kode Hukum dan Kota Legendaris</p>
              </div>
              <Link to="/detail-babylon" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Lanjut ke Babilonia <ArrowRight size={18} />
              </Link>
            </div>
          </article>

          <article id="hari-ini" className="scroll-mt-24 pb-10">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-500">09 · Hari Ini</p>
            <h2 className="text-3xl font-semibold text-slate-900">Pelajaran dari Kota yang Terlupakan</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">Apa yang masih bisa kita pelajari? Bahwa kemajuan bukan hanya soal kekuasaan dan monumen — tetapi juga tentang infrastruktur, kesehatan publik, dan tata kota yang berkelanjutan.</p>
          </article>
        </section>
      </main>
    </div>
  );
}
