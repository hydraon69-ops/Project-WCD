import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Pencil, Clock, Telescope } from "lucide-react";

const ACCENT = "#7A5090";
const ACCENT_BG = "rgba(122,80,144,0.06)";
const BADGE_BG = "#EDE0F5";
const BADGE_TEXT = "#5A3070";

const chapters = [
  { id: "latar-belakang", label: "Latar Belakang", bab: 1 },
  { id: "geografi", label: "Geografi", bab: 2 },
  { id: "puncak-kejayaan", label: "Puncak Kejayaan", bab: 3 },
  { id: "ilmu-inovasi", label: "Ilmu & Inovasi", bab: 4 },
  { id: "agama-sosial", label: "Agama & Sosial", bab: 5 },
  { id: "keruntuhan", label: "Keruntuhan", bab: 6 },
  { id: "timeline", label: "Timeline", bab: 7 },
  { id: "warisan", label: "Warisan", bab: 8 },
  { id: "hari-ini", label: "Hari Ini", bab: 9 },
];

const timelineEvents = [
  { year: "~1900 SM", event: "Dinasti Amorit mendirikan Babel sebagai kota kerajaan", who: "Raja-raja Amorit" },
  { year: "~1792 SM", event: "Hammurabi naik tahta, memulai era keemasan Babilonia", who: "Raja Hammurabi" },
  { year: "~1754 SM", event: "Kode Hammurabi dipahat — 282 pasal hukum tertulis pertama yang lengkap", who: "Raja Hammurabi" },
  { year: "~605 SM", event: "Nebukadnezar II membangun Taman Gantung dan memperluas kota Babel", who: "Nebukadnezar II" },
  { year: "~539 SM", event: "Koresh II dari Persia menaklukkan Babel tanpa pertumpahan darah", who: "Koresh II (Cyrus the Great)" },
];

const legacyItems = [
  {
    Icon: Pencil,
    title: "Kode Hammurabi",
    desc: "282 pasal hukum tertulis — prinsip 'hukum yang sama berlaku untuk semua orang' yang menjadi dasar sistem peradilan modern",
  },
  {
    Icon: Telescope,
    title: "Astronomi & Matematika Babilonia",
    desc: "Prediksi gerhana, tabel trigonometri, dan kalender lunar — kontribusi ilmiah yang mendahului Yunani selama berabad-abad",
  },
  {
    Icon: Clock,
    title: "Sistem Kalender Lunar",
    desc: "Kalender berbasis siklus bulan yang menjadi dasar kalender Yahudi, Islam, dan Hindu yang masih digunakan miliaran orang",
  },
];

const placeholderSections = [
  { id: "geografi", bab: 2, label: "Geografi", title: "Kota Babel di Tepi Sungai Efrat" },
  { id: "puncak-kejayaan", bab: 3, label: "Puncak Kejayaan", title: "Era Hammurabi — Hukum untuk Semua" },
  { id: "ilmu-inovasi", bab: 4, label: "Ilmu & Inovasi", title: "Bintang, Angka, dan Taman Gantung" },
  { id: "agama-sosial", bab: 5, label: "Agama & Sosial", title: "Marduk dan Ziggurat Etemenanki" },
  { id: "keruntuhan", bab: 6, label: "Keruntuhan", title: "Malam Terakhir di Babel" },
];

export function DetailBabylon() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("latar-belakang");

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    chapters.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#E8E5DF", width: "100%", overflowX: "hidden" }}>
      {/* NAVBAR */}
      <nav style={{ height: "64px", backgroundColor: "#F4F2EE", borderBottom: "0.5px solid #D4CFC8", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 120px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", color: "#6B6860", textDecoration: "none" }}>
            <ArrowLeft size={18} />
          </Link>
          <Link to="/" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.06em", color: "#1A1815", textDecoration: "none" }}>
            PERADABAN KUNO
          </Link>
          <span style={{ color: "#D4CFC8", fontSize: "13px" }}>/</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: BADGE_TEXT, backgroundColor: BADGE_BG, border: `0.5px solid ${ACCENT}40`, padding: "3px 10px", borderRadius: "9999px" }}>
            Babilonia
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {[{ label: "Bab 1", id: "latar-belakang" }, { label: "Bab 2", id: "geografi" }, { label: "Timeline", id: "timeline" }, { label: "Warisan", id: "warisan" }].map((item, i) => (
            <span key={item.label}>
              <button onClick={() => scrollTo(item.id)} style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#6B6860", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                {item.label}
              </button>
              {i < 3 && <span style={{ color: "#D4CFC8", margin: "0 16px" }}>·</span>}
            </span>
          ))}
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "3px", backgroundColor: "#D4CFC8" }}>
          <div style={{ height: "100%", width: `${progress}%`, backgroundColor: ACCENT, transition: "width 0.1s linear" }} />
        </div>
      </nav>

      {/* HERO */}
      <section style={{ height: "480px", backgroundColor: "#2A2925", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 12px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 120px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: ACCENT, textTransform: "uppercase", margin: 0 }}>
            BABILONIA · ~1900 SM – 539 SM
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "64px", fontWeight: 400, color: "#F4F2EE", letterSpacing: "-0.02em", lineHeight: 1.05, margin: 0 }}>
            Hukum, Bintang,
            <br />
            dan Taman Gantung
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#A8A49C", margin: 0 }}>
            Mesopotamia Selatan, Iraq Modern
          </p>
          <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginTop: "8px" }}>
            {chapters.slice(0, 8).map((ch) => (
              <button key={ch.id} onClick={() => scrollTo(ch.id)} style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", padding: "6px 14px", borderRadius: "9999px", cursor: "pointer", border: activeSection === ch.id ? `0.5px solid ${ACCENT}` : "0.5px solid rgba(212,207,200,0.5)", backgroundColor: activeSection === ch.id ? BADGE_BG : "transparent", color: activeSection === ch.id ? BADGE_TEXT : "#F4F2EE", transition: "all 0.2s" }}>
                {ch.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {/* SIDEBAR */}
        <aside style={{ width: "240px", flexShrink: 0, backgroundColor: "#F4F2EE", borderRight: "0.5px solid #D4CFC8", padding: "32px 0", position: "sticky", top: "67px", height: "calc(100vh - 67px)", overflowY: "auto" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.1em", color: "#A8A49C", textTransform: "uppercase", padding: "0 24px", margin: "0 0 12px" }}>
            ISI HALAMAN
          </p>
          {chapters.map((ch) => (
            <button key={ch.id} onClick={() => scrollTo(ch.id)} style={{ width: "100%", textAlign: "left", fontFamily: "'Inter', sans-serif", fontSize: "13px", padding: "10px 24px", cursor: "pointer", background: activeSection === ch.id ? BADGE_BG : "none", border: "none", borderLeft: activeSection === ch.id ? `2px solid ${ACCENT}` : "2px solid transparent", color: activeSection === ch.id ? "#1A1815" : "#6B6860", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "10px", color: "#A8A49C", minWidth: "14px", fontFamily: "'Inter', sans-serif" }}>{ch.bab}</span>
              {ch.label}
            </button>
          ))}
        </aside>

        {/* CONTENT */}
        <main style={{ flex: 1, padding: "48px 80px", backgroundColor: "#E8E5DF" }}>
          {/* BAB 1 */}
          <section id="latar-belakang" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: "#A8A49C", textTransform: "uppercase", margin: "0 0 12px" }}>
              BAB 1 · LATAR BELAKANG
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "40px", fontWeight: 400, color: "#1A1815", margin: "0 0 28px", lineHeight: 1.15 }}>
              Kota yang Membuat Dunia Tunduk pada Hukum
            </h2>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, backgroundColor: ACCENT_BG, borderRadius: "0 8px 8px 0", padding: "16px 20px", marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
                <Star size={12} color={ACCENT} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.1em", color: ACCENT, textTransform: "uppercase" }}>FAKTA PEMBUKA</span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#6B6860", lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>
                "Pada sekitar 1754 SM, Raja Hammurabi menuliskan 282 pasal hukum di atas tiang batu setinggi 2,25 meter dan meletakkannya di tempat umum agar semua orang bisa membacanya. Itu adalah pertama kalinya dalam sejarah manusia, hukum bukan hanya milik penguasa — melainkan sesuatu yang harus diketahui oleh rakyat."
              </p>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#1A1815", lineHeight: 1.75, margin: 0 }}>
              Babilonia adalah warisan terbesar dari peradaban Mesopotamia — sebuah kota yang pada masa kejayaannya di bawah Nebukadnezar II menjadi kota terbesar di dunia dengan populasi lebih dari 200.000 jiwa. Di sinilah konsep hukum yang adil, astronomi terstruktur, dan arsitektur monumental bertemu dalam satu peradaban yang mendefinisikan standar kebesaran dunia kuno.
            </p>
          </section>

          {/* PLACEHOLDER SECTIONS */}
          {placeholderSections.map((sec) => (
            <section key={sec.id} id={sec.id} style={{ marginBottom: "80px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: "#A8A49C", textTransform: "uppercase", margin: "0 0 12px" }}>
                BAB {sec.bab} · {sec.label.toUpperCase()}
              </p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "40px", fontWeight: 400, color: "#1A1815", margin: "0 0 24px", lineHeight: 1.15 }}>
                {sec.title}
              </h2>
              <div style={{ height: "120px", backgroundColor: `${ACCENT}08`, border: "0.5px dashed #D4CFC8", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#A8A49C" }}>Konten segera hadir</span>
              </div>
            </section>
          ))}

          {/* BAB 7 — TIMELINE */}
          <section id="timeline" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: "#A8A49C", textTransform: "uppercase", margin: "0 0 12px" }}>
              BAB 7 · TIMELINE
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "40px", fontWeight: 400, color: "#1A1815", margin: "0 0 40px", lineHeight: 1.15 }}>
              Lintas Zaman dalam Angka
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {timelineEvents.map((event, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ width: "88px", flexShrink: 0, textAlign: "right", paddingTop: "3px" }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: ACCENT }}>{event.year}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: "12px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", border: `2px solid ${ACCENT}`, backgroundColor: "transparent", marginTop: "5px", flexShrink: 0 }} />
                    {i < timelineEvents.length - 1 && <div style={{ width: "1px", flex: 1, minHeight: "44px", backgroundColor: "#D4CFC8", margin: "6px 0" }} />}
                  </div>
                  <div style={{ flex: 1, paddingTop: "1px" }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500, color: "#1A1815", margin: "0 0 4px", lineHeight: 1.4 }}>{event.event}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#6B6860", margin: i < timelineEvents.length - 1 ? "0 0 28px" : "0" }}>{event.who}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* BAB 8 — WARISAN */}
          <section id="warisan" style={{ marginBottom: "80px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: "#A8A49C", textTransform: "uppercase", margin: "0 0 12px" }}>
              BAB 8 · WARISAN
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "40px", fontWeight: 400, color: "#1A1815", margin: "0 0 32px", lineHeight: 1.15 }}>
              Yang Masih Hidup Hingga Kini
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {legacyItems.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", backgroundColor: "#F4F2EE", border: "0.5px solid #D4CFC8", borderRadius: "10px", padding: "20px 24px" }}>
                  <item.Icon size={20} color={ACCENT} style={{ flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500, color: "#1A1815", margin: "0 0 4px" }}>{item.title}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#6B6860", margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: BADGE_TEXT, backgroundColor: BADGE_BG, padding: "3px 10px", borderRadius: "9999px", flexShrink: 0, whiteSpace: "nowrap" }}>
                    Warisan
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* BAB 9 — HARI INI */}
          <section id="hari-ini" style={{ marginBottom: "64px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: "#A8A49C", textTransform: "uppercase", margin: "0 0 12px" }}>
              BAB 9 · HARI INI
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "40px", fontWeight: 400, color: "#1A1815", margin: "0 0 24px", lineHeight: 1.15 }}>
              Babilonia di Dunia Modern
            </h2>
            <div style={{ height: "120px", backgroundColor: `${ACCENT}08`, border: "0.5px dashed #D4CFC8", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#A8A49C" }}>Konten segera hadir</span>
            </div>
          </section>

          {/* PREV / NEXT */}
          <div style={{ borderTop: "0.5px solid #D4CFC8", padding: "32px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link to="/detail-indus" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px", textDecoration: "none" }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#A8A49C", textTransform: "uppercase", letterSpacing: "0.06em" }}>Sebelumnya</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#1A1815" }}>← Sungai Indus / ~3000 SM</span>
            </Link>
            <Link to="/detail-rome" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px", textDecoration: "none" }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "#A8A49C", textTransform: "uppercase", letterSpacing: "0.06em" }}>Berikutnya</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#1A1815" }}>Roma Kuno / ~753 SM →</span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
