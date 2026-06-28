import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Droplets, Grid3x3, Scale, Globe, Palette, Landmark } from "lucide-react";

const navItems = [
  { id: 'latar-belakang', num: '01', text: 'Latar Belakang' },
  { id: 'urgensi', num: '02', text: 'Mengapa Penting?' },
  { id: 'asal-usul', num: '03', text: 'Asal-Usul & Geografis' },
  { id: 'puncak-kejayaan', num: '04', text: 'Puncak Kejayaan' },
  { id: 'ilmu-inovasi', num: '05', text: 'Ilmu & Budaya' },
  { id: 'agama-sosial', num: '06', text: 'Kepercayaan & Sosial' },
  { id: 'keruntuhan', num: '07', text: 'Keruntuhan' },
  { id: 'timeline', num: '08', text: 'Timeline' },
  { id: 'warisan', num: '09', text: 'Peninggalan & Warisan' }
];

const placeholderSections = [
  { id: 'geografi', bab: 2, label: 'Geografi', title: 'Kota Babel di Tepi Sungai Efrat' },
  { id: 'puncak-kejayaan', bab: 3, label: 'Puncak Kejayaan', title: 'Era Hammurabi — Hukum untuk Semua' },
  { id: 'ilmu-inovasi', bab: 4, label: 'Ilmu & Inovasi', title: 'Bintang, Angka, dan Taman Gantung' },
  { id: 'agama-sosial', bab: 5, label: 'Agama & Sosial', title: 'Marduk dan Ziggurat Etemenanki' },
  { id: 'keruntuhan', bab: 6, label: 'Keruntuhan', title: 'Malam Terakhir di Babel' }
];

const timelineEvents = [
  { year: '~1900 SM', event: 'Dinasti Amorit mendirikan Babel sebagai kota kerajaan', who: 'Raja-raja Amorit' },
  { year: '~1792 SM', event: 'Hammurabi naik tahta, memulai era keemasan Babilonia', who: 'Raja Hammurabi' },
  { year: '~1754 SM', event: 'Kode Hammurabi dipahat — 282 pasal hukum tertulis pertama yang lengkap', who: 'Raja Hammurabi' },
  { year: '~605 SM', event: 'Nebukadnezar II membangun Taman Gantung dan memperluas kota Babel', who: 'Nebukadnezar II' },
  { year: '~539 SM', event: 'Koresh II dari Persia menaklukkan Babel tanpa pertumpahan darah', who: 'Koresh II (Cyrus the Great)' }
];

const legacyItems = [
  { Icon: ArrowRight, title: 'Kode Hammurabi', desc: '282 pasal hukum tertulis — prinsip hukum yang sama untuk semua orang.' },
  { Icon: Scale, title: 'Astronomi & Matematika Babilonia', desc: 'Prediksi gerhana, tabel trigonometri, dan kalender lunar sebelum Yunani.' },
  { Icon: Droplets, title: 'Sistem Kalender Lunar', desc: 'Kalender berbasis siklus bulan yang menjadi akar kalender Yahudi, Islam, dan Hindu.' }
];

const RomawiPage = () => {
  const [activeSection, setActiveSection] = useState('latar-belakang');
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    [...navItems, ...placeholderSections].forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#FFF5F5] text-[#1A1A1A]">
      <div className="bg-[#3A0F11] px-6 py-5 sm:px-8">
        <button onClick={() => navigate('/home')} className="text-sm font-semibold text-[#FCEFEF] transition hover:text-[#FFB3B7]">
          ← Kembali ke Beranda
        </button>
      </div>

      <section className="relative overflow-hidden bg-[#3A0F11] py-20 text-center text-[#FCEFEF] px-6 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#FFB3B7] mb-6">Roma Kuno · ~753 SM – 476 M</p>
          <h1 className="text-4xl font-light md:text-5xl leading-tight">Romawi Kuno: Sang Imperium yang Mengukir Sejarah Dunia</h1>
          <p className="mt-6 text-base text-[#D9A0A2]">Semenanjung Italia, Europa Selatan</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${activeSection === item.id ? 'border-[#FFB3B7] bg-[#FFB3B7] text-[#3A0F11]' : 'border-white/20 text-white/90 hover:border-[#FFB3B7] hover:text-white'}`}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8">
        <aside className="sticky top-6 self-start rounded-[32px] border border-[#FCEFEF] bg-[#FCEFEF] p-8 shadow-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-[#7A0C14] mb-6">Isi Halaman</p>
          <div className="space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex w-full items-center gap-3 rounded-3xl px-5 py-3 text-left text-sm font-semibold transition ${activeSection === item.id ? 'bg-[#FFF1F2] text-[#3A0F11]' : 'bg-white text-[#7A0C14] hover:bg-[#FFF1F2]'}`}
              >
                <span className="min-w-[30px] text-xs text-[#A61C26]">{item.num}</span>
                {item.text}
              </button>
            ))}
          </div>
        </aside>

        <main className="space-y-16">
          <section id="latar-belakang" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.34em] text-[#7A0C14] mb-4">Bab 1 · Latar Belakang</p>
            <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-6">Kota yang Membuat Dunia Tunduk pada Hukum</h2>
            <div className="space-y-6 text-base leading-8 text-[#3A0F12]">
              <p>
                Babilonia adalah warisan terbesar dari peradaban Mesopotamia — sebuah kota yang pada masa kejayaannya di bawah Nebukadnezar II menjadi kota terbesar di dunia dengan populasi lebih dari 200.000 jiwa. Di sinilah konsep hukum yang adil, astronomi terstruktur, dan arsitektur monumental bertemu dalam satu peradaban yang mendefinisikan standar kebesaran dunia kuno.
              </p>
              <p>
                Babilonia adalah warisan terbesar dari peradaban Mesopotamia — sebuah kota yang pada masa kejayaannya di bawah Nebukadnezar II menjadi kota terbesar di dunia dengan populasi lebih dari 200.000 jiwa. Di sinilah konsep hukum yang adil, astronomi terstruktur, dan arsitektur monumental bertemu dalam satu peradaban yang mendefinisikan standar kebesaran dunia kuno.
              </p>
            </div>
          </section>

          {placeholderSections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <p className="text-xs uppercase tracking-[0.34em] text-[#7A0C14] mb-4">Bab {section.bab} · {section.label}</p>
              <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-6">{section.title}</h2>
              <div className="rounded-[32px] border border-[#F0DFDE] bg-white p-8 text-[#4A2C2E] shadow-sm">
                <p className="text-base leading-8">
                  Konten pendek untuk {section.title}. Halaman ini ditata ulang dengan Tailwind CSS dan siap dikembangkan dengan materi tambahan. Untuk sekarang, area ini menyimpan ringkasan serta visual yang mendukung narasi sejarah Roma Kuno.
                </p>
              </div>
            </section>
          ))}

          <section id="timeline" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.34em] text-[#7A0C14] mb-4">Bab 8 · Timeline</p>
            <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-8">Kronologi Peradaban</h2>
            <div className="space-y-8 border-l border-[#F0DFDE] pl-8">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="relative">
                  <span className="absolute -left-5 top-1 h-3 w-3 rounded-full bg-[#A61C26]" />
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#7A0C14]">{event.year}</p>
                  <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-2">{event.event}</h3>
                  <p className="text-base leading-7 text-[#4A2C2E]">{event.who}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="warisan" className="scroll-mt-24">
            <p className="text-xs uppercase tracking-[0.34em] text-[#7A0C14] mb-4">Bab 9 · Peninggalan & Warisan</p>
            <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-8">Yang Masih Hidup Hingga Kini</h2>
            <div className="space-y-4">
              {legacyItems.map((item) => (
                <article key={item.title} className="rounded-[28px] border border-[#F0DFDE] bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <item.Icon size={22} className="mt-1 text-[#A61C26]" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">{item.title}</h3>
                      <p className="text-base leading-7 text-[#4A2C2E]">{item.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default RomawiPage;
