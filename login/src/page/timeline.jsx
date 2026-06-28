import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const timelineItems = [
  { year: '~5500 SM', civ: 'MESOPOTAMIA', color: '#4EA8DE', title: 'Bangsa Ubaid — Penghuni Pertama', desc: 'Pertanian irigasi awal di rawa-rawa Mesopotamia', category: 'Mesopotamia' },
  { year: '~5000 SM', civ: 'MESOPOTAMIA', color: '#4EA8DE', title: 'Bangsa Sumeria Tiba', desc: 'Membangun kota-kota pertama di dunia', category: 'Mesopotamia' },
  { year: '~3300 SM', civ: 'SUNGAI INDUS', color: '#48CAE4', title: 'Fase Awal Peradaban Indus', desc: 'Pemukiman menyebar di lembah Sungai Indus', category: 'Indus' },
  { year: '~3100 SM', civ: 'MESIR KUNO', color: '#D4A373', title: 'Penyatuan Mesir', desc: 'Raja Narmer menyatukan Mesir Hulu dan Hilir', category: 'Mesir' },
  { year: '~2560 SM', civ: 'MESIR KUNO', color: '#D4A373', title: 'Piramida Agung Giza', desc: 'Firaun Khufu membangun piramida paling presisi di dunia', category: 'Mesir' },
  { year: '~1900 SM', civ: 'BABILONIA', color: '#B5E2FA', title: 'Codex Hammurabi', desc: '282 pasal hukum tertulis pertama di dunia', category: 'Babilonia' },
  { year: '~753 SM', civ: 'ROMA KUNO', color: '#E07A5F', title: 'Berdirinya Roma', desc: 'Romulus mendirikan kota Roma di 7 bukit', category: 'Roma' },
  { year: '~30 SM', civ: 'MESIR KUNO', color: '#D4A373', title: 'Mesir Jatuh ke Romawi', desc: 'Cleopatra VII wafat, Mesir menjadi provinsi Romawi', category: 'Mesir' },
  { year: '476 M', civ: 'ROMA KUNO', color: '#E07A5F', title: 'Kejatuhan Roma Barat', desc: 'Akhir Kekaisaran Romawi Barat', category: 'Roma' }
];

const filters = ['Semua', 'Mesir', 'Mesopotamia', 'Indus', 'Babilonia', 'Roma'];

const colorMap = {
  Mesir: '#D4A373',
  Mesopotamia: '#4EA8DE',
  Indus: '#48CAE4',
  Babilonia: '#B5E2FA',
  Roma: '#E07A5F'
};

const TimelinePage = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const navigate = useNavigate();
  const filteredItems = activeFilter === 'Semua'
    ? timelineItems
    : timelineItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-slate-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-700">Perjalanan Sejarah</p>
            <p className="text-sm text-slate-500">Temukan momen penting dari berbagai peradaban dunia.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => navigate('/home')} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              Beranda
            </button>
            <button onClick={() => navigate('/timeline')} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              Timeline
            </button>
            <button onClick={() => navigate('/warisan')} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              Warisan
            </button>
          </div>

          <button onClick={() => navigate('/detail-mesir')} className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
            Mulai Jelajah
          </button>
        </div>
      </header>

      <section className="bg-slate-950 text-white py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-sm uppercase tracking-[0.4em] text-amber-300">Lintas Peradaban</span>
          <h1 className="mt-6 text-4xl font-semibold md:text-5xl">Timeline Global</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">8.000 tahun sejarah dalam satu pandangan.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeFilter === cat ? 'bg-slate-900 text-white' : 'bg-white text-slate-700 shadow-sm hover:bg-slate-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative mt-12">
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-slate-300/80" />
          <div className="space-y-12">
            {filteredItems.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={`${item.year}-${item.title}`} className={`relative flex flex-col gap-6 rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-xl lg:flex-row ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`lg:w-1/2 ${isLeft ? 'lg:pl-12 lg:text-right' : 'lg:pr-12 lg:text-left'}`}>
                    <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold shadow-sm" style={{ borderColor: item.color, color: item.color }}>
                      {item.category}
                    </div>
                    <div className="mt-6">
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">{item.civ}</p>
                      <h2 className="mt-3 text-3xl font-semibold text-slate-900">{item.title}</h2>
                      <p className="mt-4 text-base leading-8 text-slate-600">{item.desc}</p>
                    </div>
                  </div>

                  <div className="lg:w-1/2 flex items-center justify-center">
                    <div className="relative w-full max-w-md rounded-[32px] border border-slate-200 bg-slate-950 p-10 text-center text-white shadow-2xl">
                      <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 bg-white shadow-lg" style={{ borderColor: item.color }} />
                      <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Tahun</p>
                      <p className="mt-4 text-5xl font-semibold" style={{ color: item.color }}>{item.year}</p>
                      <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400">{item.civ}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimelinePage;
