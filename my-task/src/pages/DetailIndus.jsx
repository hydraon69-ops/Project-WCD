import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Droplets, Grid3x3, Scale, Globe, Palette, Landmark } from "lucide-react";

const T       = "#2563EB"; // blue accent
const T_LIGHT = "#EFF6FF";
const T_MID   = "#BFDBFE";
const TEXT    = "#1A1A1A";
const MUTED   = "#6B6B6B";
const BG      = "#F4F2EE";

const chapters = [
  { id: "latar-belakang",  label: "Latar Belakang",  bab: 1 },
  { id: "geografi",        label: "Geografi",         bab: 2 },
  { id: "puncak-kejayaan", label: "Puncak Kejayaan",  bab: 3 },
  { id: "ilmu-inovasi",    label: "Ilmu & Inovasi",   bab: 4 },
  { id: "agama-sosial",    label: "Agama & Sosial",   bab: 5 },
  { id: "keruntuhan",      label: "Keruntuhan",       bab: 6 },
  { id: "timeline",        label: "Timeline",         bab: 7 },
  { id: "warisan",         label: "Warisan",          bab: 8 },
  { id: "hari-ini",        label: "Hari Ini",         bab: 9 },
];

const stats = [
  { num: "5 Juta",     label: "Populasi Puncak (~2500 SM)"          },
  { num: "1.000+",     label: "Pemukiman Tersebar"                   },
  { num: "500+",       label: "Simbol Tulisan Belum Terpecahkan"     },
  { num: "Abad ke-19", label: "Eropa Baru Menyamai Sanitasi Mereka" },
];

const timelineRows = [
  { periode: "~7000 SM", peristiwa: "Permukiman pertanian awal di Mehrgarh, cikal bakal peradaban Indus",    fase: "Pra-Harappa"     },
  { periode: "~3300 SM", peristiwa: "Fase awal peradaban Indus dimulai, pemukiman menyebar",                fase: "Awal Harappa"    },
  { periode: "~2600 SM", peristiwa: "Kota Mohenjo-Daro dan Harappa mencapai bentuk urban penuh",            fase: "Puncak Matang"   },
  { periode: "~2500 SM", peristiwa: "Puncak kejayaan: 5 juta penduduk, 1.000+ pemukiman tersebar",          fase: "Kejayaan"        },
  { periode: "~2000 SM", peristiwa: "Tanda-tanda kemunduran mulai tampak: perpindahan populasi",            fase: "Transisi"        },
  { periode: "~1900 SM", peristiwa: "Kota-kota besar mulai ditinggalkan secara massal",                     fase: "Keruntuhan Awal" },
  { periode: "~1500 SM", peristiwa: "Invasi bangsa Arya masuk melalui Celah Khyber, fase akhir",           fase: "Keruntuhan Total"},
];

const warisanRows = [
  { warisan: "Sistem Drainase Kota",     wujud: "Saluran bawah tanah terintegrasi, toilet dalam rumah", relevansi: "Model sanitasi kota modern — diakui sebagai yang pertama di dunia" },
  { warisan: "Standardisasi Ukuran",     wujud: "Bata, bobot, dan ukuran seragam di seluruh wilayah",   relevansi: "Konsep standarisasi industri dan manufaktur modern" },
  { warisan: "Perencanaan Kota Grid",    wujud: "Jalan bersilang membentuk blok persegi teratur",        relevansi: "Dasar desain tata kota modern di seluruh dunia" },
  { warisan: "Tulisan Piktografik",      wujud: "500+ simbol belum terpecahkan hingga kini",             relevansi: "Salah satu sistem tulisan paling misterius — objek studi linguistik" },
  { warisan: "Sistem Timbang & Ukur",   wujud: "Bobot standar dari batu, akurat dan konsisten",          relevansi: "Awal mula metrologi (ilmu pengukuran) sistematis" },
  { warisan: "Perdagangan Lintas Wilayah", wujud: "Jaringan ke Mesopotamia, Persia, Asia Tengah",        relevansi: "Bukti globalisasi perdagangan pertama dalam sejarah" },
  { warisan: "Seni Pahat & Perunggu",   wujud: "Arca Gadis Penari, Pejabat Berjanggut dari Mohenjo-Daro", relevansi: "Karya seni tertua Asia Selatan, koleksi museum dunia" },
];

const innovationItems = [
  { Icon: Palette,   title: "Seni Pahat",             desc: "Di Mohenjo-Daro ditemukan arca pendeta berjanggut dengan hiasan daun semanggi, dan Gadis Penari — patung perunggu kecil dengan pose berdansa yang begitu hidup sehingga para ahli terpesona oleh kecanggihan tekniknya." },
  { Icon: Globe,     title: "Astronomi & Kalender",   desc: "Bukti menunjukkan masyarakat Indus memiliki pemahaman tentang pergerakan bintang dan musim, yang mereka gunakan untuk mengatur siklus pertanian." },
  { Icon: Landmark,  title: "Arsitektur Thermal",     desc: "Rumah-rumah di Mohenjo-Daro dirancang dengan jendela lebar yang menghadap ke dalam untuk menjaga sirkulasi udara — prinsip arsitektur pasif yang baru kembali dipopulerkan dalam desain bangunan berkelanjutan modern." },
  { Icon: Grid3x3,   title: "Permainan & Hiburan",    desc: "Artefak menunjukkan adanya mainan anak-anak dari tanah liat, dadu, dan papan permainan — gambaran masyarakat yang tidak hanya sibuk bekerja, tetapi juga bermain." },
];

const keruntuhTeori = [
  { title: "Perubahan Iklim & Kekeringan",  body: "Penelitian geologi menunjukkan bahwa kawasan ini mengalami perubahan pola curah hujan yang drastis sekitar 2000 SM. Sungai-sungai yang menjadi sumber kehidupan berubah alur atau mengering, menghancurkan sistem irigasi." },
  { title: "Banjir Berulang",               body: "Sungai Indus yang tidak terkendali kemungkinan menyebabkan banjir besar berulang kali yang menghancurkan infrastruktur kota dan memaksa penduduk mengungsi." },
  { title: "Penggundulan Hutan",            body: "Kebutuhan besar akan kayu bakar untuk pembakaran batu bata menyebabkan deforestasi masif, yang pada gilirannya memperburuk erosi dan banjir." },
  { title: "Invasi Bangsa Arya",            body: "Bangsa Arya yang masuk melalui Celah Khyber sekitar 1500 SM memberikan pukulan terakhir bagi peradaban yang sudah melemah. Kitab Weda bahkan menyebut penaklukan kota-kota 'yang tidak berhidung' — merujuk pada bangsa Dravida." },
];

export function DetailIndus() {
  const [progress, setProgress]           = useState(0);
  const [activeSection, setActiveSection] = useState("latar-belakang");

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop    = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    chapters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: BG, color: TEXT, width: "100%", overflowX: "hidden" }}>

      {/* ── NAVBAR ── */}
      <nav style={{ height: "64px", backgroundColor: BG, borderBottom: "0.5px solid #D4CFC8", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 80px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", color: MUTED, textDecoration: "none" }}>
            <ArrowLeft size={16} />
          </Link>
          <Link to="/" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em", color: TEXT, textDecoration: "none" }}>
            PERADABAN KUNO
          </Link>
          <span style={{ color: "#D4CFC8", fontSize: "14px" }}>/</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: T, backgroundColor: T_MID, padding: "3px 12px", borderRadius: "9999px" }}>
            Sungai Indus
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {[
            { label: "Bab 1",    id: "latar-belakang" },
            { label: "Bab 2",    id: "geografi"       },
            { label: "Timeline", id: "timeline"       },
            { label: "Warisan",  id: "warisan"        },
          ].map((item, i, arr) => (
            <span key={item.id} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <button onClick={() => scrollTo(item.id)} style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                {item.label}
              </button>
              {i < arr.length - 1 && <span style={{ color: "#D4CFC8" }}>·</span>}
            </span>
          ))}
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px", backgroundColor: "#E8E5DF" }}>
          <div style={{ height: "100%", width: `${progress}%`, backgroundColor: T, transition: "width 0.1s linear" }} />
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "520px", backgroundColor: "#0C1A3A", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 16px)", pointerEvents: "none" }} />
        {/* Blue glow */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(37,99,235,0.30) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Mohenjo-Daro city grid silhouette */}
        <svg viewBox="0 0 1440 150" preserveAspectRatio="xMidYMax slice"
          style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "150px", pointerEvents: "none" }}>
          {/* City grid blocks */}
          {[
            [300,80,80,70], [390,90,60,60], [460,75,90,75], [560,85,70,65],
            [640,70,80,80], [730,88,65,62], [800,72,90,78], [900,82,70,68],
            [980,76,85,74], [1075,84,75,66], [1160,78,80,72],
          ].map(([x,y,w,h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} fill="rgba(37,99,235,0.18)" />
          ))}
          {/* Taller citadel center */}
          <rect x="660" y="45" width="110" height="105" fill="rgba(37,99,235,0.25)" />
          <rect x="675" y="30" width="80"  height="17"  fill="rgba(37,99,235,0.25)" />
          {/* Horizontal "street" lines */}
          <line x1="280" y1="110" x2="1160" y2="110" stroke="rgba(37,99,235,0.22)" strokeWidth="2" />
          <line x1="280" y1="90"  x2="1160" y2="90"  stroke="rgba(37,99,235,0.14)" strokeWidth="1" />
          {/* Vertical "street" lines */}
          {[380,460,550,640,730,820,900,990,1080,1165].map((x, i) => (
            <line key={i} x1={x} y1="70" x2={x} y2="150" stroke="rgba(37,99,235,0.14)" strokeWidth="1" />
          ))}
          {/* River at bottom */}
          <path d="M 0 140 Q 360 128 720 134 Q 1080 140 1440 130 L 1440 150 L 0 150 Z" fill="rgba(37,99,235,0.28)" />
          <text x="50" y="145" fontFamily="Inter, sans-serif" fontSize="10" fill="rgba(191,219,254,0.6)" letterSpacing="2">SUNGAI INDUS</text>
        </svg>

        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 120px 110px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.14em", color: T_MID, textTransform: "uppercase", margin: 0 }}>SERI 5 PERADABAN KUNO DUNIA</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "68px", fontWeight: 400, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.0, margin: 0 }}>PERADABAN SUNGAI INDUS</h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.78)", margin: 0, maxWidth: "560px", lineHeight: 1.55, fontStyle: "italic" }}>Kota Paling Canggih di Dunia — Empat Ribu Tahun Sebelum Kita</p>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: T_MID, margin: 0, letterSpacing: "0.06em" }}>~3000 SM – 1500 SM | Mohenjo-Daro &amp; Harappa</p>
        </div>

        {/* Stat strip */}
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", backgroundColor: "rgba(0,0,0,0.32)", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 0", zIndex: 2 }}>
          {stats.map((s, i) => (
            <span key={s.label} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ textAlign: "center", padding: "0 40px" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "15px", color: "#ffffff", display: "block" }}>{s.num}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: T_MID, letterSpacing: "0.07em", textTransform: "uppercase" }}>{s.label}</span>
              </span>
              {i < stats.length - 1 && <span style={{ width: "1px", height: "26px", backgroundColor: "rgba(255,255,255,0.15)" }} />}
            </span>
          ))}
        </div>
      </section>

      {/* ── MAIN LAYOUT ── */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>

        {/* SIDEBAR */}
        <aside style={{ width: "232px", flexShrink: 0, backgroundColor: BG, borderRight: "0.5px solid #D4CFC8", padding: "28px 0", position: "sticky", top: "64px", height: "calc(100vh - 64px)", overflowY: "auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.1em", color: "#A8A49C", textTransform: "uppercase", padding: "0 22px", margin: "0 0 10px" }}>ISI HALAMAN</p>
          {chapters.map((ch) => (
            <button key={ch.id} onClick={() => scrollTo(ch.id)}
              style={{ width: "100%", textAlign: "left", fontFamily: "'Inter', sans-serif", fontSize: "13px", padding: "9px 22px", cursor: "pointer", background: activeSection === ch.id ? T_LIGHT : "none", border: "none", borderLeft: activeSection === ch.id ? `2px solid ${T}` : "2px solid transparent", color: activeSection === ch.id ? TEXT : MUTED, display: "flex", alignItems: "center", gap: "10px", transition: "all 0.15s" }}>
              <span style={{ fontSize: "10px", color: activeSection === ch.id ? T : "#A8A49C", minWidth: "14px" }}>{ch.bab}</span>
              {ch.label}
            </button>
          ))}
        </aside>

        {/* CONTENT */}
        <main style={{ flex: 1, padding: "48px 76px", minWidth: 0 }}>

          {/* ── BAB 1 — LATAR BELAKANG ── */}
          <section id="latar-belakang" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>BAB 1 · LATAR BELAKANG</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 28px", lineHeight: 1.15 }}>Misteri Terbesar Sejarah Dunia</h2>

            {/* Fakta Pembuka */}
            <div style={{ backgroundColor: T_LIGHT, borderLeft: `4px solid ${T}`, borderRadius: "0 8px 8px 0", padding: "24px 28px", marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <span style={{ color: T }}>✦</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.14em", color: T, textTransform: "uppercase" }}>FAKTA PEMBUKA</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "19px", color: TEXT, lineHeight: 1.65, fontStyle: "italic", margin: 0 }}>
                "Pada tahun 2600 SM, ketika sebagian besar dunia masih tinggal di gubuk tanah liat, penduduk Mohenjo-Daro sudah memiliki toilet di dalam rumah yang terhubung langsung dengan saluran pembuangan bawah tanah. Sistem sanitasi kota mereka tidak tertandingi di dunia manapun selama lebih dari 2.000 tahun setelahnya. London baru memiliki sistem drainase modern pada abad ke-19."
              </p>
            </div>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Ada peradaban yang begitu maju sehingga para arkeolog yang pertama kali menemukannya pada tahun 1920-an mengira mereka telah melakukan kesalahan. Apa yang mereka gali dari tanah di Pakistan dan India barat bukan reruntuhan kumuh — melainkan kota metropolitan yang terencana dengan presisi arsitektur yang membuat para insinyur modern takjub. Itulah Peradaban Lembah Sungai Indus.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Yang membuat peradaban ini benar-benar unik adalah apa yang <em>tidak</em> ditemukan di sana: tidak ada istana megah raja-raja, tidak ada kuil raksasa yang memaksa rakyat membangunnya, tidak ada kuburan mewah penguasa, dan — yang paling mengejutkan — hampir tidak ada senjata. Peradaban yang menjangkau wilayah lebih luas dari Mesir dan Mesopotamia digabungkan ini tampaknya dibangun bukan di atas kekuatan militer, melainkan di atas kecakapan urban, perdagangan, dan tatanan sosial yang luar biasa terorganisir.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: 0 }}>
              Pada puncaknya sekitar 2500 SM, Peradaban Indus dihuni oleh lebih dari 5 juta jiwa yang tersebar di lebih dari 1.000 pemukiman — mulai dari kota-kota besar seperti Mohenjo-Daro dan Harappa hingga desa-desa kecil yang semuanya mengikuti standar arsitektur dan tata kota yang sama. Ini adalah bukti sistem administrasi dan perencanaan yang jauh melampaui zamannya.
            </p>
          </section>

          {/* ── BAB 2 — GEOGRAFI ── */}
          <section id="geografi" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>BAB 2 · GEOGRAFI</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 28px", lineHeight: 1.15 }}>Lembah yang Melahirkan Kota Kembar</h2>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Peradaban Lembah Sungai Indus tumbuh di wilayah yang kini terbagi antara Pakistan dan India barat — membentang sepanjang Sungai Indus dan anak-anak sungainya: Yellum, Ravi, Chenab, Beas, dan Suttly di dataran Punjab. Tanah lembah yang subur, diperbarui setiap tahun oleh banjir sungai yang membawa lumpur kaya mineral, menjadi fondasi pertanian yang produktif.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Akar peradaban ini lebih tua dari yang banyak disadari. Arkeolog menemukan permukiman pertanian awal di Mehrgarh — di wilayah Baluchistan Pakistan modern — yang berasal dari sekitar 7000 SM. Selama ribuan tahun, komunitas-komunitas kecil ini perlahan berkembang, belajar bertani, membuat tembikar, dan berdagang, sebelum akhirnya meledak menjadi peradaban urban penuh sekitar 2600 SM.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 32px" }}>
              Penduduk utama peradaban ini adalah <strong>bangsa Dravida</strong> — kelompok ras australoid yang merupakan penduduk asli anak benua India. Merekalah yang merintis pembangunan Mohenjo-Daro dan Harappa, dua kota kembar yang berjarak sekitar 800 kilometer satu sama lain namun dibangun dengan cetak biru yang hampir identik.
            </p>

            {/* Peta SVG jaringan perdagangan */}
            <div style={{ backgroundColor: "#EBF3FF", border: `0.5px solid ${T}40`, borderRadius: "12px", padding: "28px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.1em", color: T, textTransform: "uppercase", margin: "0 0 16px" }}>JARINGAN PERDAGANGAN — INDUS KE MESOPOTAMIA</p>
              <svg viewBox="0 0 640 300" style={{ width: "100%", height: "auto", display: "block" }}>
                <rect width="640" height="300" fill="#C9DDF0" rx="8" />
                {/* Landmass */}
                <ellipse cx="320" cy="150" rx="295" ry="115" fill="#E8E5D4" />
                {/* Sungai Indus */}
                <path d="M 430 50 Q 420 100 410 150 Q 400 190 420 240" stroke={T} strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Jalur perdagangan */}
                <path d="M 420 150 Q 320 120 220 140 Q 160 150 120 140" stroke={T} strokeWidth="1.5" fill="none" strokeDasharray="6,4" opacity="0.7" />
                <path d="M 420 150 Q 430 100 460 80 Q 490 60 530 70" stroke={T} strokeWidth="1.5" fill="none" strokeDasharray="6,4" opacity="0.5" />
                {/* Kota-kota */}
                {[
                  { x: 420, y: 150, name: "Mohenjo-Daro", main: true  },
                  { x: 440, y: 100, name: "Harappa",       main: true  },
                  { x: 200, y: 140, name: "Mesopotamia",   main: false },
                  { x: 300, y: 118, name: "Persia",        main: false },
                  { x: 510, y: 75,  name: "Asia Tengah",   main: false },
                ].map((c) => (
                  <g key={c.name}>
                    <circle cx={c.x} cy={c.y} r={c.main ? 7 : 5} fill={c.main ? T : "#60A5FA"} opacity={c.main ? 1 : 0.7} />
                    {c.main && <circle cx={c.x} cy={c.y} r="13" fill="none" stroke={T} strokeWidth="2" opacity="0.3" />}
                    <text x={c.x + 10} y={c.y + 4} fontFamily="Inter, sans-serif" fontSize={c.main ? "11" : "10"} fontWeight={c.main ? "600" : "400"} fill={c.main ? TEXT : MUTED}>{c.name}</text>
                  </g>
                ))}
                {/* Arrow heads on trade routes */}
                <polygon points="124,136 116,144 116,133" fill={T} opacity="0.6" />
                {/* Legend */}
                <rect x="20" y="20" width="160" height="62" fill="rgba(255,255,255,0.80)" rx="4" />
                <circle cx="32" cy="36" r="5" fill={T} />
                <text x="42" y="40" fontFamily="Inter, sans-serif" fontSize="10" fill={TEXT}>Kota Utama Indus</text>
                <circle cx="32" cy="54" r="4" fill="#60A5FA" opacity="0.7" />
                <text x="42" y="58" fontFamily="Inter, sans-serif" fontSize="10" fill={TEXT}>Mitra Dagang</text>
                <line x1="24" y1="70" x2="40" y2="70" stroke={T} strokeWidth="1.5" strokeDasharray="4,3" opacity="0.7" />
                <text x="48" y="74" fontFamily="Inter, sans-serif" fontSize="10" fill={TEXT}>Jalur Perdagangan</text>
              </svg>
            </div>
          </section>

          {/* ── BAB 3 — PUNCAK KEJAYAAN ── */}
          <section id="puncak-kejayaan" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>BAB 3 · PUNCAK KEJAYAAN</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 28px", lineHeight: 1.15 }}>Kota yang Mendahului Zamannya</h2>

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 400, color: TEXT, margin: "0 0 14px" }}>Tata Kota yang Tak Tertandingi</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Jalan-jalan utama yang lebar membentang dari utara ke selatan dan dari timur ke barat — membentuk blok-blok persegi panjang yang teratur seperti grid kota Manhattan. Setiap lorong kecil mengikuti pola yang sama. Bata-bata bangunan memiliki ukuran yang identik dan terstandarisasi di seluruh wilayah yang membentang ribuan kilometer.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Kota dibagi menjadi dua zona: wilayah atas (citadel) sebagai pusat pemerintahan dan kegiatan publik, dan wilayah bawah sebagai kawasan hunian. Di zona atas Mohenjo-Daro terdapat Great Bath — kolam renang besar yang diyakini digunakan untuk ritual penyucian — sebuah bangunan gudang besar, dan bangsal pertemuan yang kemungkinan berfungsi sebagai pusat administrasi.
            </p>

            {/* Highlight sistem sanitasi */}
            <div style={{ backgroundColor: T_LIGHT, borderLeft: `4px solid ${T}`, borderRadius: "0 8px 8px 0", padding: "20px 24px", marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <Droplets size={14} color={T} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: T, textTransform: "uppercase" }}>SISTEM SANITASI</span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: MUTED, lineHeight: 1.65, margin: 0 }}>
                Hampir setiap rumah di Mohenjo-Daro dilengkapi dengan kamar mandi dan toilet yang terhubung dengan saluran pembuangan bawah tanah. Saluran-saluran ini dibuat dari bata yang dibakar, dirancang agar mudah dibersihkan, dan mengalirkan limbah ke luar kota. Ini adalah sistem sanitasi perkotaan paling canggih di dunia kuno — tidak ada yang menyamainya hingga era Romawi, seribu tahun kemudian.
              </p>
            </div>

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 400, color: TEXT, margin: "0 0 14px" }}>Ekonomi dan Perdagangan</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Masyarakat Indus adalah petani sekaligus pedagang ulung. Komoditas utama mereka mencakup gandum, kacang polong, kurma, kapas, dan wijen — dan mereka adalah salah satu peradaban pertama yang membudidayakan kapas secara massal untuk dijadikan tekstil. Sistem irigasi mereka memungkinkan pertanian intensif, dan segel-segel dagang khas Indus ditemukan hingga di situs-situs Mesopotamia.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 28px" }}>
              Sistem timbang dan ukur mereka sangat terstandarisasi — bobot dari batu dengan rasio yang presisten ditemukan di seluruh wilayah peradaban, menunjukkan adanya otoritas pusat yang mengatur standar perdagangan. Ini adalah metrologi — ilmu pengukuran — dalam bentuk paling awalnya.
            </p>

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 400, color: TEXT, margin: "0 0 14px" }}>Teknologi dan Inovasi</h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: 0 }}>
              Mereka membuat perhiasan dari emas, perak, tembaga, dan batu mulia dengan teknik yang sangat halus. Tembikar mereka memiliki pola artistik yang konsisten dan berkualitas tinggi. Senjata dan peralatan mereka terbuat dari perunggu. Mereka juga memiliki sistem tulisan tersendiri — tulisan piktografik dengan lebih dari 500 simbol berbeda yang hingga hari ini belum berhasil dipecahkan oleh para ahli linguistik. Ini menjadikan tulisan Indus sebagai salah satu misteri terbesar dalam sejarah kuno dunia.
            </p>
          </section>

          {/* ── BAB 4 — ILMU & INOVASI ── */}
          <section id="ilmu-inovasi" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>BAB 4 · ILMU &amp; INOVASI</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 18px", lineHeight: 1.15 }}>Seni, Sains, dan Kehidupan Sehari-hari</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: MUTED, lineHeight: 1.72, margin: "0 0 28px" }}>
              Peradaban Indus tidak meninggalkan teks-teks filsafat atau puisi epik seperti Mesopotamia atau Mesir — sebagian karena tulisan mereka belum terpecahkan. Namun dari artefak yang ditemukan, gambar yang muncul adalah sebuah masyarakat dengan apresiasi seni yang tinggi dan pemikiran teknologis yang maju.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
              {innovationItems.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", border: "0.5px solid #D4CFC8", borderTop: `4px solid ${T}`, borderRadius: "0 0 10px 10px", padding: "22px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <item.Icon size={18} color={T} />
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 600, color: TEXT, margin: 0 }}>{item.title}</p>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: MUTED, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── BAB 5 — AGAMA & SOSIAL ── */}
          <section id="agama-sosial" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>BAB 5 · AGAMA &amp; SOSIAL</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 28px", lineHeight: 1.15 }}>Republik Pedagang Tanpa Istana</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Bangsa Dravida menganut politeisme — kepercayaan pada banyak dewa. Dewa yang paling sering muncul dalam artefak adalah sosok bertanduk besar yang duduk dalam posisi meditasi seperti yoga, dikelilingi oleh hewan-hewan liar. Para ahli menduga ini adalah prototipe awal dari Dewa Siwa yang kemudian menjadi salah satu dewa terpenting dalam agama Hindu.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Dewa perempuan yang melambangkan kesuburan dan kemakmuran — yang kemudian dikenal sebagai <strong>Dewi Pertiwi atau Ibu Bumi</strong> — juga disembah secara luas. Sistem kepercayaan ini menekankan pada meditasi dan pertapaan, bukan pada pengorbanan besar atau pembangunan kuil-kuil megah yang memerlukan kerja paksa rakyat.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 32px" }}>
              Yang sangat menarik dari tatanan sosial Peradaban Indus adalah ketiadaan bukti hierarki ekstrem. Tidak ada istana raja, tidak ada makam mewah, dan kualitas rumah di berbagai bagian kota tidak terlalu berbeda jauh. Ini membuat beberapa sejarawan berspekulasi bahwa Peradaban Indus mungkin dijalankan lebih seperti <em>republik pedagang</em> atau konfederasi kota daripada monarki otoriter — sebuah konsep yang terasa sangat modern.
            </p>

            {/* Visual perbandingan egaliter */}
            <div style={{ backgroundColor: "#ffffff", border: "0.5px solid #D4CFC8", borderRadius: "12px", padding: "28px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.1em", color: T, textTransform: "uppercase", margin: "0 0 20px" }}>YANG TIDAK DITEMUKAN DI SINI</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                {[
                  { label: "Istana Raja",               note: "Tidak ditemukan"              },
                  { label: "Makam Mewah Penguasa",       note: "Tidak ditemukan"              },
                  { label: "Kuil Raksasa",               note: "Tidak ditemukan"              },
                  { label: "Senjata Perang Massal",      note: "Hampir tidak ada"             },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", backgroundColor: "#FAF9F7", borderRadius: "8px", border: "0.5px solid #EDEAE4" }}>
                    <Scale size={14} color={T} style={{ flexShrink: 0 }} />
                    <div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: TEXT, margin: 0 }}>{item.label}</p>
                      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: T, margin: 0 }}>{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── BAB 6 — KERUNTUHAN ── */}
          <section id="keruntuhan" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>BAB 6 · KERUNTUHAN</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 18px", lineHeight: 1.15 }}>Misteri yang Belum Terpecahkan</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 28px" }}>
              Salah satu pertanyaan terbesar dalam arkeologi dunia adalah: mengapa Peradaban Indus runtuh? Tidak ada satu jawaban tunggal yang diterima semua ilmuwan. Yang jelas adalah bahwa sekitar 1900 SM, kota-kota besar mulai ditinggalkan secara bertahap — bukan dalam satu bencana tunggal, melainkan melalui proses perlahan selama berabad-abad.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px", marginBottom: "28px" }}>
              {keruntuhTeori.map((item) => (
                <div key={item.title} style={{ backgroundColor: "#ffffff", border: "0.5px solid #D4CFC8", borderLeft: `4px solid ${T}`, borderRadius: "0 8px 8px 0", padding: "18px 20px" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>{item.title}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: MUTED, lineHeight: 1.65, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>

            {/* Box kesimpulan */}
            <div style={{ backgroundColor: T_LIGHT, borderLeft: `4px solid ${T}`, borderRadius: "0 8px 8px 0", padding: "20px 24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <span style={{ color: T }}>✦</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: T, textTransform: "uppercase" }}>KESIMPULAN</span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: MUTED, lineHeight: 1.65, fontStyle: "italic", margin: 0 }}>
                Kemungkinan besar, keruntuhan Peradaban Indus adalah hasil dari semua faktor di atas yang bekerja secara bersamaan — sebuah runtuhnya sistem kompleks yang saling bergantung, di mana kegagalan satu komponen memicu kegagalan berantai pada komponen lainnya.
              </p>
            </div>
          </section>

          {/* ── BAB 7 — TIMELINE ── */}
          <section id="timeline" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>BAB 7 · TIMELINE</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 32px", lineHeight: 1.15 }}>Garis Waktu Peradaban Sungai Indus</h2>
            <div style={{ border: "0.5px solid #D4CFC8", borderRadius: "10px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr 1fr", backgroundColor: T, padding: "12px 18px", gap: "16px" }}>
                {["Periode", "Peristiwa", "Fase"].map((h) => (
                  <span key={h} style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#fff", textTransform: "uppercase" }}>{h}</span>
                ))}
              </div>
              {timelineRows.map((row, i) => (
                <div key={row.periode} style={{ display: "grid", gridTemplateColumns: "1fr 3fr 1fr", padding: "13px 18px", gap: "16px", backgroundColor: i % 2 === 0 ? "#ffffff" : "#FAF9F7", borderTop: "0.5px solid #EDEAE4", alignItems: "start" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: T }}>{row.periode}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: TEXT, lineHeight: 1.5 }}>{row.peristiwa}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: MUTED }}>{row.fase}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── BAB 8 — WARISAN ── */}
          <section id="warisan" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>BAB 8 · WARISAN</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 18px", lineHeight: 1.15 }}>Peninggalan dan Warisan Dunia</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: MUTED, lineHeight: 1.72, margin: "0 0 28px" }}>
              Meskipun tulisan mereka belum terpecahkan dan nama-nama raja mereka tidak diketahui, Peradaban Indus meninggalkan warisan yang terpatri dalam fondasi peradaban Asia Selatan modern — dan dalam banyak hal, dalam cara kita merancang kota hari ini.
            </p>
            <div style={{ border: "0.5px solid #D4CFC8", borderRadius: "10px", overflow: "hidden", marginBottom: "28px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1.8fr 2fr", backgroundColor: T, padding: "12px 18px", gap: "16px" }}>
                {["Warisan", "Wujud", "Relevansi Modern"].map((h) => (
                  <span key={h} style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#fff", textTransform: "uppercase" }}>{h}</span>
                ))}
              </div>
              {warisanRows.map((row, i) => (
                <div key={row.warisan} style={{ display: "grid", gridTemplateColumns: "1.4fr 1.8fr 2fr", padding: "13px 18px", gap: "16px", backgroundColor: i % 2 === 0 ? "#ffffff" : "#FAF9F7", borderTop: "0.5px solid #EDEAE4", alignItems: "start" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: TEXT }}>{row.warisan}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: MUTED, lineHeight: 1.5 }}>{row.wujud}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: MUTED, lineHeight: 1.5 }}>{row.relevansi}</span>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: MUTED, lineHeight: 1.72 }}>
              Pada tahun 1980, UNESCO menetapkan situs Mohenjo-Daro sebagai Warisan Dunia — pengakuan resmi bahwa reruntuhan yang tersebar di padang Pakistan ini adalah milik seluruh umat manusia. Situs ini kini terancam oleh erosi air tanah dan wisatawan yang terus meningkat, menjadikan pelestariannya sebagai prioritas arkeologi global.
            </p>
          </section>

          {/* ── BAB 9 — HARI INI ── */}
          <section id="hari-ini" style={{ marginBottom: "64px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>BAB 9 · HARI INI</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 28px", lineHeight: 1.15 }}>Pelajaran dari Peradaban yang Terlupakan</h2>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Selama ribuan tahun, Peradaban Indus terlupakan begitu saja — terkubur di bawah tanah Pakistan dan India barat, sementara dunia mengagumi Mesir dan Romawi. Baru sejak penggalian tahun 1920-an, dunia mulai menyadari bahwa ada peradaban ketiga yang tidak kalah agungnya — bahkan dalam beberapa aspek, jauh lebih maju.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 40px" }}>
              Misteri tulisan yang belum terpecahkan, ketiadaan bukti perang besar, dan tatanan kota yang egaliter membuat Peradaban Indus terasa seperti eksperimen sosial yang belum pernah dicoba lagi dalam skala sebesar itu. Dan mungkin itulah yang membuatnya tetap menarik — sebuah pertanyaan besar yang masih menunggu jawaban, terkubur di bawah debu berabad-abad: siapakah sebenarnya mereka, dan apa yang sesungguhnya terjadi?
            </p>

            {/* Closing Reflection */}
            <div style={{ backgroundColor: "#0A1A30", borderRadius: "12px", padding: "44px 48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
                <span style={{ color: T_MID }}>✦</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.14em", color: T_MID, textTransform: "uppercase" }}>REFLEKSI</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", color: "#ffffff", lineHeight: 1.62, fontStyle: "italic", margin: "0 0 18px" }}>
                "Peradaban Indus membuktikan bahwa kemajuan tidak selalu datang dalam bentuk piramida raksasa atau tentara yang menaklukkan bangsa lain. Kadang, kemajuan paling sejati berwujud saluran air bawah tanah yang memastikan setiap warga kota — bukan hanya raja dan pendeta — hidup dalam sanitasi dan martabat yang layak."
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: MUTED, margin: 0 }}>— Seri 5 Peradaban Kuno Dunia · Sungai Indus · Selesai</p>
            </div>
          </section>

          {/* ── NAVIGATION FOOTER ── */}
          <div style={{ borderTop: "0.5px solid #D4CFC8", padding: "36px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link to="/detail-mesopotamia" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px", padding: "18px 22px", backgroundColor: "#ffffff", border: "0.5px solid #D4CFC8", borderRadius: "10px" }}>
              <ArrowLeft size={16} color={MUTED} />
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 3px" }}>Sebelumnya</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: TEXT, margin: 0 }}>Mesopotamia</p>
              </div>
            </Link>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", color: TEXT, margin: "0 0 3px" }}>PERADABAN KUNO</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: MUTED, margin: 0 }}>Menjelajahi Akar Peradaban Manusia</p>
            </div>
            <Link to="/detail-babylon" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px", padding: "18px 22px", backgroundColor: T, border: `0.5px solid ${T}`, borderRadius: "10px" }}>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: T_MID, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 3px" }}>Berikutnya</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#ffffff", margin: 0 }}>Babilonia</p>
              </div>
              <ArrowRight size={16} color="rgba(255,255,255,0.8)" />
            </Link>
          </div>
        </main>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#1A1A1A", padding: "44px 80px 28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "28px" }}>
          <div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", color: "#ffffff", margin: "0 0 6px" }}>PERADABAN KUNO</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: MUTED, margin: 0 }}>Seri 5 Peradaban Kuno Dunia — Konten Edukasi Bahasa Indonesia</p>
          </div>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "flex-end" }}>
            {["Mesir", "Mesopotamia", "Sungai Indus", "Babilonia", "Roma", "Timeline", "Warisan"].map((link) => (
              <span key={link} style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: MUTED, cursor: "pointer" }}>{link}</span>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.08)", paddingTop: "18px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: MUTED, margin: 0 }}>© 2024 Peradaban Kuno</p>
        </div>
      </footer>

    </div>
  );
}
