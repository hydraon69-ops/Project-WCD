import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Circle, Star, BookOpen, Scale, Library } from "lucide-react";

const T      = "#0D9488";
const T_LIGHT = "#F0FDFA";
const T_MID  = "#CCFBF1";
const TEXT   = "#1C1917";
const MUTED  = "#78716C";
const BG     = "#F4F2EE";

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
  { num: "7",      label: "Peradaban"         },
  { num: "4.000+", label: "Tahun"             },
  { num: "2",      label: "Sungai Utama"      },
  { num: "1",      label: "Warisan Tak Ternilai" },
];

const dynastyRows = [
  { bangsa: "Ubaid",          periode: "~5500–4000 SM", kontribusi: "Penghuni pertama, pertanian irigasi awal" },
  { bangsa: "Sumeria",        periode: "~4000–2350 SM", kontribusi: "Tulisan paku, roda, kota pertama (Ur, Uruk, Kish)" },
  { bangsa: "Akkadia",        periode: "~2350–2150 SM", kontribusi: "Imperium pertama dunia di bawah Sargon Agung" },
  { bangsa: "Babilonia Lama", periode: "~1900–1600 SM", kontribusi: "Codex Hammurabi, hukum tertulis pertama" },
  { bangsa: "Assyria",        periode: "~1200–612 SM",  kontribusi: "Perpustakaan Assurbanipal, jaringan jalan kekaisaran" },
  { bangsa: "Babilonia Baru", periode: "~626–539 SM",   kontribusi: "Taman Gantung, Menara Babel, Nebukadnezar II" },
  { bangsa: "Persia",         periode: "~539–330 SM",   kontribusi: "Penakluk terakhir, runtuh di tangan Alexander Agung" },
];

const figureCards = [
  { name: "Sargon Agung", period: "~2334–2279 SM", role: "Raja Akkadia",      desc: "Penguasa pertama yang menyatukan seluruh Mesopotamia. Membangun imperium pertama dalam sejarah manusia yang membentang dari Teluk Persia hingga Laut Mediterania." },
  { name: "Hammurabi",    period: "1792–1750 SM",  role: "Raja Babilonia",    desc: "Pembuat hukum tertulis pertama di dunia. Codex Hammurabi — 282 pasal hukum di obelisk batu 2,25 meter — meletakkan fondasi prinsip kesetaraan di hadapan hukum." },
  { name: "Nebukadnezar II", period: "605–562 SM", role: "Raja Babilonia Baru", desc: "Pembangun kota Babilon yang legendaris. Di bawah pemerintahannya lahir Taman Gantung Babilonia — salah satu dari Tujuh Keajaiban Dunia Kuno." },
];

const innovationCards = [
  { Icon: Clock,    title: "Sistem Waktu Basis 60",     desc: "Bangsa Sumeria menggunakan basis 60 (sexagesimal). Dari sistem ini lahir: 60 detik per menit, 60 menit per jam, 360 derajat dalam satu lingkaran — yang masih kita gunakan tanpa perubahan selama 5.000 tahun." },
  { Icon: Circle,   title: "Penemuan Roda",             desc: "Dikembangkan sekitar 3500 SM untuk gerobak dan meja putar keramik. Roda kemudian menjadi fondasi seluruh teknologi transportasi dan mekanik yang ada hingga hari ini." },
  { Icon: Star,     title: "Astronomi Presisi",          desc: "Pemetaan 12 rasi bintang zodiak, prediksi gerhana bulan dan matahari, serta pelacakan pergerakan planet. Catatan dalam ribuan lempengan tanah liat menjadi bahan studi para astronom modern." },
  { Icon: BookOpen, title: "Epik Gilgamesh",            desc: "Karya tulis naratif tertua yang diketahui (~2100 SM). Berisi pertanyaan tentang kematian, persahabatan, dan makna hidup — dan mempengaruhi mitologi Yunani, Ibrani, dan berbagai tradisi lain." },
  { Icon: Scale,    title: "Codex Hammurabi",           desc: "282 pasal hukum tertulis di atas obelisk batu. Untuk pertama kalinya hukum ditulis, dipajang di tengah kota, dan berlaku untuk semua orang tanpa kecuali." },
  { Icon: Library,  title: "Perpustakaan Assurbanipal", desc: "Perpustakaan pertama di dunia di Nineveh — 2.200 lempengan tanah liat berisi pengetahuan astronomi, matematika, kedokteran, sastra, dan sejarah. Konsep perpustakaan lahir di sini." },
];

const hierarchyLevels = [
  { label: "Raja & Kepala Pendeta",  width: "180px", bg: T,            textColor: "#fff" },
  { label: "Pejabat & Bangsawan",    width: "260px", bg: "#0F766E",    textColor: "#fff" },
  { label: "Pedagang & Pengrajin",   width: "340px", bg: "#14B8A6",    textColor: "#fff" },
  { label: "Petani & Peternak",      width: "420px", bg: T_MID,        textColor: TEXT   },
  { label: "Hamba & Budak",          width: "500px", bg: "#E0F7F5",    textColor: TEXT   },
];

const causeCards = [
  { title: "Perang Internal",     body: "Negara-kota Sumeria saling berkonflik berebut dominasi, menguras sumber daya dan melemahkan kohesi politik." },
  { title: "Invasi Bergelombang", body: "Setiap era dimulai dari invasi: Akkadia → Sumeria, Babilonia → Akkadia, Assyria → Babilonia, Persia → Babilonia Baru pada 539 SM." },
  { title: "Perubahan Iklim",     body: "Kekeringan panjang sekitar 2200 SM menghancurkan Kekaisaran Akkadia. Ketergantungan ekstrem pada irigasi membuat peradaban sangat rentan." },
  { title: "Salinasi Tanah",      body: "Irigasi intensif ribuan tahun menyebabkan akumulasi garam di tanah pertanian, perlahan menghancurkan produktivitas lahan." },
];

const timelineEvents = [
  { year: "~5500 SM", event: "Bangsa Ubaid: Penghuni pertama Mesopotamia, pertanian irigasi awal" },
  { year: "~4000 SM", event: "Bangsa Sumeria tiba, memulai era inovasi besar" },
  { year: "~3500 SM", event: "Penemuan Roda oleh bangsa Sumeria" },
  { year: "~3100 SM", event: "Tulisan Paku (Cuneiform) ditemukan — tulisan pertama di dunia" },
  { year: "~2350 SM", event: "Sargon Agung mendirikan Kekaisaran Akkadia — imperium pertama dunia" },
  { year: "~2100 SM", event: "Epik Gilgamesh ditulis — karya sastra tertua yang diketahui" },
  { year: "~1792 SM", event: "Hammurabi naik tahta di Babilon" },
  { year: "~1754 SM", event: "Codex Hammurabi diukir — hukum tertulis pertama di dunia" },
  { year: "~1200 SM", event: "Era Assyria dimulai, kekuatan militer dominan" },
  { year: "~668 SM",  event: "Perpustakaan Assurbanipal dibangun di Nineveh" },
  { year: "~605 SM",  event: "Nebukadnezar II berkuasa, membangun Babilon megah" },
  { year: "~575 SM",  event: "Taman Gantung Babilonia dibangun" },
  { year: "~539 SM",  event: "Persia di bawah Koresh Agung menaklukkan Babilon — akhir Mesopotamia" },
  { year: "~330 SM",  event: "Alexander Agung menaklukkan Persia — warisan beralih ke Barat" },
];

const warisanRows = [
  { warisan: "Tulisan Paku",             wujud: "600+ simbol di lempengan tanah liat",        relevansi: "Akar semua sistem tulisan alfabet modern" },
  { warisan: "Roda",                     wujud: "Dikembangkan ~3500 SM",                       relevansi: "Fondasi transportasi dan mesin modern" },
  { warisan: "Sistem Waktu 60",          wujud: "60 menit/jam, 360 derajat",                   relevansi: "Dipakai universal hingga hari ini" },
  { warisan: "Codex Hammurabi",          wujud: "282 pasal hukum di obelisk batu",             relevansi: "Fondasi hukum tertulis dan kesetaraan" },
  { warisan: "Sistem Irigasi",           wujud: "Kanal dan bendungan Eufrat-Tigris",            relevansi: "Model pertanian irigasi standar dunia" },
  { warisan: "Epik Gilgamesh",           wujud: "Karya sastra tertua, ~2100 SM",               relevansi: "Mempengaruhi mitologi Yunani dan Ibrani" },
  { warisan: "Perpustakaan Assurbanipal",wujud: "2.200 lempengan pengetahuan",                  relevansi: "Konsep perpustakaan sistematis pertama" },
  { warisan: "Astronomi & Zodiak",       wujud: "12 rasi bintang, prediksi gerhana",           relevansi: "Dasar astronomi modern dan sistem zodiak" },
];

export function DetailMesopotamia() {
  const [progress, setProgress]         = useState(0);
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
        {/* Left: breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", color: MUTED, textDecoration: "none" }}>
            <ArrowLeft size={16} />
          </Link>
          <Link to="/" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em", color: TEXT, textDecoration: "none" }}>
            PERADABAN KUNO
          </Link>
          <span style={{ color: "#D4CFC8", fontSize: "14px" }}>/</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: T, backgroundColor: T_MID, padding: "3px 12px", borderRadius: "9999px" }}>
            Mesopotamia
          </span>
        </div>

        {/* Right: chapter links */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {[{ label: "Bab 1", id: "latar-belakang" }, { label: "Bab 2", id: "geografi" }, { label: "Timeline", id: "timeline" }, { label: "Warisan", id: "warisan" }].map((item, i, arr) => (
            <span key={item.id} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <button onClick={() => scrollTo(item.id)} style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: MUTED, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                {item.label}
              </button>
              {i < arr.length - 1 && <span style={{ color: "#D4CFC8" }}>·</span>}
            </span>
          ))}
        </div>

        {/* Reading progress */}
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px", backgroundColor: "#E8E5DF" }}>
          <div style={{ height: "100%", width: `${progress}%`, backgroundColor: T, transition: "width 0.1s linear" }} />
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "520px", backgroundColor: T, position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 14px)", pointerEvents: "none" }} />

        {/* Ziggurat silhouette */}
        <svg viewBox="0 0 1440 140" preserveAspectRatio="xMidYMax slice"
          style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "140px", pointerEvents: "none" }}>
          <rect x="590" y="95"  width="260" height="45" fill="rgba(0,0,0,0.22)" />
          <rect x="620" y="68"  width="200" height="29" fill="rgba(0,0,0,0.22)" />
          <rect x="650" y="46"  width="140" height="24" fill="rgba(0,0,0,0.22)" />
          <rect x="678" y="28"  width="84"  height="20" fill="rgba(0,0,0,0.22)" />
          <rect x="700" y="14"  width="40"  height="16" fill="rgba(0,0,0,0.22)" />
          <rect x="420" y="108" width="120" height="32" fill="rgba(0,0,0,0.15)" />
          <rect x="438" y="88"  width="84"  height="22" fill="rgba(0,0,0,0.15)" />
          <rect x="456" y="72"  width="48"  height="18" fill="rgba(0,0,0,0.15)" />
          <rect x="900" y="108" width="120" height="32" fill="rgba(0,0,0,0.15)" />
          <rect x="918" y="88"  width="84"  height="22" fill="rgba(0,0,0,0.15)" />
          <rect x="936" y="72"  width="48"  height="18" fill="rgba(0,0,0,0.15)" />
          <rect x="0"   y="132" width="1440" height="8" fill="rgba(0,0,0,0.18)" />
        </svg>

        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 120px 110px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.14em", color: T_MID, textTransform: "uppercase", margin: 0 }}>SERI 5 PERADABAN KUNO DUNIA</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "76px", fontWeight: 400, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.0, margin: 0 }}>MESOPOTAMIA</h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.80)", margin: 0, maxWidth: "540px", lineHeight: 1.55 }}>Tanah di Antara Dua Sungai — Tempat Peradaban Manusia Dimulai</p>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: T_MID, margin: 0, letterSpacing: "0.06em" }}>~5000 SM – 539 SM</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.60)", margin: 0 }}>Lembah Sungai Eufrat &amp; Tigris · Irak &amp; Suriah Modern</p>
        </div>

        {/* Stat strip */}
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", backgroundColor: "rgba(0,0,0,0.22)", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 0", zIndex: 2 }}>
          {stats.map((s, i) => (
            <span key={s.label} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ textAlign: "center", padding: "0 44px" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "17px", color: "#ffffff", display: "block" }}>{s.num}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: T_MID, letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</span>
              </span>
              {i < stats.length - 1 && <span style={{ width: "1px", height: "26px", backgroundColor: "rgba(255,255,255,0.18)" }} />}
            </span>
          ))}
        </div>
      </section>

      {/* ── FACT BOX ── */}
      <div style={{ padding: "0 80px" }}>
        <div style={{ backgroundColor: T_LIGHT, borderLeft: `4px solid ${T}`, borderRadius: "0 8px 8px 0", padding: "26px 30px", margin: "44px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ color: T }}>✦</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.14em", color: T, textTransform: "uppercase" }}>FAKTA PEMBUKA</span>
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: TEXT, lineHeight: 1.65, fontStyle: "italic", margin: 0 }}>
            "Setiap kali Anda melihat jam dan ada angka 60 di sana — 60 detik, 60 menit — Anda sedang menggunakan sistem angka yang ditemukan oleh bangsa Sumeria di Mesopotamia lebih dari 5.000 tahun yang lalu. Setiap kali roda berputar di kendaraan apapun di dunia, Anda menyaksikan warisan Mesopotamia bekerja."
          </p>
        </div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>

        {/* SIDEBAR */}
        <aside style={{ width: "232px", flexShrink: 0, backgroundColor: BG, borderRight: "0.5px solid #D4CFC8", padding: "28px 0", position: "sticky", top: "64px", height: "calc(100vh - 64px)", overflowY: "auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.1em", color: "#A8A49C", textTransform: "uppercase", padding: "0 22px", margin: "0 0 10px" }}>ISI HALAMAN</p>
          {chapters.map((ch) => (
            <button key={ch.id} onClick={() => scrollTo(ch.id)}
              style={{ width: "100%", textAlign: "left", fontFamily: "'Inter', sans-serif", fontSize: "13px", padding: "9px 22px", cursor: "pointer", background: activeSection === ch.id ? T_LIGHT : "none", border: "none", borderLeft: activeSection === ch.id ? `2px solid ${T}` : "2px solid transparent", color: activeSection === ch.id ? TEXT : MUTED, display: "flex", alignItems: "center", gap: "10px", transition: "all 0.15s" }}>
              <span style={{ fontSize: "10px", color: "#A8A49C", minWidth: "14px", fontFamily: "'Inter', sans-serif" }}>{ch.bab}</span>
              {ch.label}
            </button>
          ))}
        </aside>

        {/* CONTENT */}
        <main style={{ flex: 1, padding: "48px 76px", minWidth: 0 }}>

          {/* ── BAB 1 — LATAR BELAKANG ── */}
          <section id="latar-belakang" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>01 · LATAR BELAKANG</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 28px", lineHeight: 1.15 }}>Tempat Segalanya Dimulai</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Ada alasan mengapa para sejarawan menyebut Mesopotamia sebagai <em>Cradle of Civilization</em> — Buaian Peradaban. Dari lembah di antara Sungai Eufrat dan Tigris inilah sejumlah inovasi paling fundamental dalam sejarah manusia pertama kali muncul: tulisan, roda, kota, sistem hukum tertulis, perpustakaan, aritmatika, kalender, dan sistem irigasi skala besar.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: 0 }}>
              Yang membuat Mesopotamia unik adalah sifatnya yang bukan satu peradaban tunggal, melainkan sebuah panggung besar tempat peradaban-peradaban silih berganti tampil. Sumeria, Akkadia, Babilonia, Assyria, Babilonia Baru, Persia — masing-masing mewarisi dan mengembangkan pencapaian pendahulunya selama lebih dari empat milenium.
            </p>
          </section>

          {/* ── BAB 2 — GEOGRAFI ── */}
          <section id="geografi" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>02 · GEOGRAFI</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 28px", lineHeight: 1.15 }}>Tanah di Antara Dua Sungai</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Mesopotamia terletak di kawasan yang para geograf menyebutnya <em>Bulan Sabit Subur</em> (Fertile Crescent) — sabuk tanah subur melengkung yang membentang dari Teluk Persia di selatan, naik melalui lembah Eufrat dan Tigris, lalu melengkung ke barat melalui Suriah hingga Mediterania Timur.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Tanah ini subur bukan karena curah hujannya tinggi, melainkan karena banjir tahunan kedua sungai membawa lumpur dari pegunungan Turki dan mengendapkannya di dataran rendah. Kesuburan luar biasa inilah yang menarik gelombang demi gelombang pendatang — dari bangsa Ubaid sekitar 5500 SM hingga bangsa Sumeria yang tiba sekitar 4000 SM dan mengubah segalanya.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 32px" }}>
              Posisi geografis Mesopotamia juga menjadikannya persimpangan perdagangan natural. Para pedagang dari India, Mesir, Asia Kecil, dan Arabia semua melewati kawasan ini — membawa tidak hanya barang dagangan tetapi juga ide dan teknologi.
            </p>

            {/* Stylized map */}
            <div style={{ backgroundColor: "#EDF6F4", border: `0.5px solid ${T}40`, borderRadius: "12px", padding: "28px", position: "relative", overflow: "hidden" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.1em", color: T, textTransform: "uppercase", margin: "0 0 16px" }}>PETA MESOPOTAMIA — FERTILE CRESCENT</p>
              <svg viewBox="0 0 640 300" style={{ width: "100%", height: "auto", display: "block" }}>
                {/* Sea / background */}
                <rect width="640" height="300" fill="#D4EDE9" rx="8" />
                {/* Land mass */}
                <ellipse cx="320" cy="150" rx="290" ry="120" fill="#E8E5D4" />
                {/* Fertile Crescent arc */}
                <path d="M 130 210 Q 200 100 340 80 Q 460 70 530 150" stroke={T} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.35" />
                {/* Eufrat river */}
                <path d="M 220 70 Q 260 120 300 160 Q 330 190 370 230" stroke="#60B3A8" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Tigris river */}
                <path d="M 260 65 Q 290 110 320 155 Q 345 185 390 225" stroke="#0D9488" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* Persian Gulf */}
                <ellipse cx="420" cy="245" rx="60" ry="22" fill="#B2D8D3" />
                {/* City dots */}
                {[
                  { x: 300, y: 185, name: "Ur" },
                  { x: 320, y: 165, name: "Uruk" },
                  { x: 285, y: 140, name: "Babilon" },
                  { x: 265, y: 100, name: "Nineveh" },
                ].map((city) => (
                  <g key={city.name}>
                    <circle cx={city.x} cy={city.y} r="5" fill={T} />
                    <text x={city.x + 8} y={city.y + 4} fontFamily="Inter, sans-serif" fontSize="11" fill={TEXT}>{city.name}</text>
                  </g>
                ))}
                {/* River labels */}
                <text x="224" y="115" fontFamily="Inter, sans-serif" fontSize="10" fill="#0F766E" transform="rotate(-55,224,115)">Eufrat</text>
                <text x="270" y="100" fontFamily="Inter, sans-serif" fontSize="10" fill="#0D9488" transform="rotate(-58,270,100)">Tigris</text>
                {/* Gulf label */}
                <text x="390" y="250" fontFamily="Inter, sans-serif" fontSize="10" fill="#0F766E">Teluk Persia</text>
                {/* Legend */}
                <rect x="20" y="20" width="130" height="56" fill="rgba(255,255,255,0.75)" rx="4" />
                <line x1="30" y1="36" x2="55" y2="36" stroke={T} strokeWidth="3" />
                <text x="60" y="40" fontFamily="Inter, sans-serif" fontSize="10" fill={TEXT}>Tigris</text>
                <line x1="30" y1="54" x2="55" y2="54" stroke="#60B3A8" strokeWidth="3" />
                <text x="60" y="58" fontFamily="Inter, sans-serif" fontSize="10" fill={TEXT}>Eufrat</text>
                <path d="M 28 68 Q 34 64 40 68" stroke={T} strokeWidth="4" fill="none" opacity="0.4" />
                <text x="48" y="73" fontFamily="Inter, sans-serif" fontSize="10" fill={TEXT}>Fertile Crescent</text>
              </svg>
            </div>
          </section>

          {/* ── BAB 3 — PUNCAK KEJAYAAN ── */}
          <section id="puncak-kejayaan" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>03 · PUNCAK KEJAYAAN</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 18px", lineHeight: 1.15 }}>Panggung Peradaban — Tujuh Bangsa, Satu Warisan</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: MUTED, lineHeight: 1.72, margin: "0 0 28px" }}>
              Tidak ada peradaban lain dalam seri ini yang memiliki dinamika seperti Mesopotamia: wilayah yang dikuasai bergantian oleh tujuh bangsa berbeda selama empat ribu tahun, namun dengan setiap pergantian kekuasaan, warisan budaya pendahulu tidak dihancurkan — melainkan diwariskan dan diperkaya.
            </p>

            {/* Dynasty table */}
            <div style={{ border: "0.5px solid #D4CFC8", borderRadius: "10px", overflow: "hidden", marginBottom: "32px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 2.5fr", backgroundColor: T, padding: "12px 18px", gap: "16px" }}>
                {["Bangsa", "Periode", "Kontribusi Utama"].map((h) => (
                  <span key={h} style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#fff", textTransform: "uppercase" }}>{h}</span>
                ))}
              </div>
              {dynastyRows.map((row, i) => (
                <div key={row.bangsa} style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 2.5fr", padding: "13px 18px", gap: "16px", backgroundColor: i % 2 === 0 ? "#ffffff" : "#FAF9F7", borderTop: "0.5px solid #EDEAE4", alignItems: "start" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: TEXT }}>{row.bangsa}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: T }}>{row.periode}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: MUTED, lineHeight: 1.5 }}>{row.kontribusi}</span>
                </div>
              ))}
            </div>

            {/* Figure cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
              {figureCards.map((card) => (
                <div key={card.name} style={{ backgroundColor: "#ffffff", border: "0.5px solid #D4CFC8", borderTop: `4px solid ${T}`, borderRadius: "0 0 10px 10px", padding: "22px 20px", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 500, color: TEXT, margin: "0 0 5px", lineHeight: 1.2 }}>{card.name}</p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: T, margin: "0 0 3px" }}>{card.period}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 12px" }}>{card.role}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: MUTED, lineHeight: 1.65, margin: 0 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── BAB 4 — ILMU & INOVASI ── */}
          <section id="ilmu-inovasi" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>04 · ILMU &amp; INOVASI</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 28px", lineHeight: 1.15 }}>Warisan Ilmu yang Kita Gunakan Setiap Hari</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
              {innovationCards.map((card) => (
                <div key={card.title} style={{ backgroundColor: "#ffffff", border: "0.5px solid #D4CFC8", borderTop: `4px solid ${T}`, borderRadius: "0 0 10px 10px", padding: "22px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <card.Icon size={18} color={T} />
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 600, color: TEXT, margin: 0 }}>{card.title}</p>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: MUTED, lineHeight: 1.65, margin: 0 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── BAB 5 — AGAMA & SOSIAL ── */}
          <section id="agama-sosial" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>05 · AGAMA &amp; SOSIAL</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 28px", lineHeight: 1.15 }}>Sistem Kepercayaan dan Tatanan Masyarakat</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Bangsa Mesopotamia menganut politeisme — ratusan dewa yang masing-masing menguasai aspek tertentu dari alam dan kehidupan. Tiga dewa kosmik tertinggi: <em>Anu</em> (dewa langit), <em>Enlil</em> (dewa udara dan badai), dan <em>Ea/Enki</em> (dewa air dan kebijaksanaan). Marduk — dewa pelindung Babilon — kemudian menjadi dewa tertinggi di era Hammurabi.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 36px" }}>
              Yang menarik dari teologi Mesopotamia adalah pandangan mereka tentang manusia: berbeda dari Mesir yang percaya jiwa menuju surga, bangsa Sumeria percaya bahwa setelah mati, manusia turun ke <em>Kur</em> — dunia bawah tanah yang gelap dan berdebu. Tidak ada surga yang dijanjikan. Ini menciptakan pragmatisme mengejutkan: karena tidak ada kehidupan setelah mati yang lebih baik, kehidupan sekarang harus dijalani sepenuhnya.
            </p>

            {/* Social hierarchy pyramid */}
            <div style={{ backgroundColor: "#ffffff", border: "0.5px solid #D4CFC8", borderRadius: "12px", padding: "32px 32px 24px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.1em", color: T, textTransform: "uppercase", margin: "0 0 24px" }}>HIERARKI SOSIAL</p>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                {hierarchyLevels.map((level) => (
                  <div key={level.label} style={{ width: level.width, backgroundColor: level.bg, color: level.textColor, padding: "10px 16px", textAlign: "center", borderRadius: "4px", fontFamily: "'Inter', sans-serif", fontSize: "13px", transition: "opacity 0.2s" }}>
                    {level.label}
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: MUTED, textAlign: "center", margin: "16px 0 0", fontStyle: "italic" }}>
                "Status bisa naik melalui perdagangan yang berhasil atau prestasi militer."
              </p>
            </div>
          </section>

          {/* ── BAB 6 — KERUNTUHAN ── */}
          <section id="keruntuhan" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>06 · KERUNTUHAN</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 18px", lineHeight: 1.15 }}>Empat Milenium yang Berakhir</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 28px" }}>
              Mesopotamia tidak pernah benar-benar runtuh dalam satu peristiwa tunggal — ia lebih tepat digambarkan sebagai panggung yang terus berganti pemeran.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px", marginBottom: "28px" }}>
              {causeCards.map((card) => (
                <div key={card.title} style={{ backgroundColor: "#ffffff", border: "0.5px solid #D4CFC8", borderLeft: `4px solid ${T}`, borderRadius: "0 8px 8px 0", padding: "18px 20px" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 600, color: TEXT, margin: "0 0 8px" }}>{card.title}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: MUTED, lineHeight: 1.65, margin: 0 }}>{card.body}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: MUTED, lineHeight: 1.72, fontStyle: "italic", margin: 0 }}>
              Titik akhir formal datang pada 539 SM ketika Raja Persia Koresh Agung memasuki Babilon hampir tanpa perlawanan. Namun warisan Mesopotamia jauh dari berakhir.
            </p>
          </section>

          {/* ── BAB 7 — TIMELINE ── */}
          <section id="timeline" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>07 · TIMELINE</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 36px", lineHeight: 1.15 }}>Kronologi Peradaban Mesopotamia</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {timelineEvents.map((event, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ width: "80px", flexShrink: 0, textAlign: "right", paddingTop: "2px" }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: T }}>{event.year}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: "12px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", border: `2px solid ${T}`, backgroundColor: "transparent", marginTop: "4px", flexShrink: 0 }} />
                    {i < timelineEvents.length - 1 && <div style={{ width: "1px", flex: 1, minHeight: "36px", backgroundColor: "#D4CFC8", margin: "5px 0" }} />}
                  </div>
                  <div style={{ flex: 1, paddingBottom: i < timelineEvents.length - 1 ? "4px" : 0 }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: TEXT, margin: "0 0 16px", lineHeight: 1.5 }}>{event.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── BAB 8 — WARISAN ── */}
          <section id="warisan" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>08 · WARISAN DUNIA</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 18px", lineHeight: 1.15 }}>Peninggalan yang Tak Terlihat, Namun Selalu Ada</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", color: MUTED, lineHeight: 1.72, fontStyle: "italic", margin: "0 0 28px" }}>
              "Dari semua peradaban dalam seri ini, Mesopotamia adalah yang paling tersembunyi dalam keseharian modern — bukan karena warisannya kecil, tetapi karena ia sudah menyatu begitu dalam dengan fondasi peradaban manusia sehingga terasa seperti sesuatu yang selalu ada."
            </p>
            <div style={{ border: "0.5px solid #D4CFC8", borderRadius: "10px", overflow: "hidden" }}>
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
          </section>

          {/* ── BAB 9 — HARI INI ── */}
          <section id="hari-ini" style={{ marginBottom: "64px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: T, textTransform: "uppercase", margin: "0 0 10px" }}>09 · HARI INI</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 400, color: TEXT, margin: "0 0 28px", lineHeight: 1.15 }}>Mesopotamia Hari Ini — Ketika Warisan Terkubur Konflik</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 20px" }}>
              Di bawah tanah Irak dan Suriah, para arkeolog terus menemukan hal-hal baru. Setiap lempengan tanah liat yang digali berpotensi mengandung teks yang belum pernah dibaca selama 4.000 tahun — resep masakan, catatan hutang piutang, surat cinta, atau teks sastra yang bisa mengubah pemahaman kita tentang sejarah awal manusia.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: TEXT, lineHeight: 1.78, margin: "0 0 40px" }}>
              Mesopotamia mengajarkan sesuatu yang tidak diajarkan peradaban manapun: bahwa kemajuan manusia bukan garis lurus ke atas, melainkan tongkat estafet yang dilempar dari generasi ke generasi, dari bangsa ke bangsa.
            </p>

            {/* Closing Reflection */}
            <div style={{ backgroundColor: TEXT, borderRadius: "12px", padding: "44px 48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
                <span style={{ color: T }}>✦</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.14em", color: T, textTransform: "uppercase" }}>REFLEKSI</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", color: "#ffffff", lineHeight: 1.62, fontStyle: "italic", margin: "0 0 18px" }}>
                "Ironi terbesar sejarah mungkin adalah ini: tempat manusia pertama kali menemukan cara untuk hidup bersama secara tertib — dengan hukum, kota, dan tulisan — kini menjadi salah satu kawasan paling tidak stabil di dunia. Irak modern, yang tanahnya menyimpan reruntuhan Ur, Uruk, dan Babilon, masih berjuang menemukan perdamaian yang pernah diwujudkan oleh nenek moyangnya ribuan tahun lalu."
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: MUTED, margin: 0 }}>— Seri 5 Peradaban Kuno Dunia · Mesopotamia</p>
            </div>
          </section>

          {/* ── NAVIGATION FOOTER ── */}
          <div style={{ borderTop: "0.5px solid #D4CFC8", padding: "36px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link to="/detail-mesir" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px", padding: "18px 22px", backgroundColor: "#ffffff", border: "0.5px solid #D4CFC8", borderRadius: "10px" }}>
              <ArrowLeft size={16} color={MUTED} />
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: MUTED, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 3px" }}>Sebelumnya</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: TEXT, margin: 0 }}>Mesir Kuno</p>
              </div>
            </Link>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", color: TEXT, margin: "0 0 3px" }}>PERADABAN KUNO</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: MUTED, margin: 0 }}>Menjelajahi Akar Peradaban Manusia</p>
            </div>
            <Link to="/detail-indus" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px", padding: "18px 22px", backgroundColor: T, border: `0.5px solid ${T}`, borderRadius: "10px" }}>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", color: T_MID, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 3px" }}>Berikutnya</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#ffffff", margin: 0 }}>Sungai Indus</p>
              </div>
              <ArrowRight size={16} color="rgba(255,255,255,0.8)" />
            </Link>
          </div>
        </main>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: TEXT, padding: "44px 80px 28px" }}>
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
