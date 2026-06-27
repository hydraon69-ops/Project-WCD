import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { DetailBabylon } from "./pages/DetailBabylon";
import { DetailIndus } from "./pages/DetailIndus";
import { DetailMesopotamia } from "./pages/DetailMesopotamia";

function Home() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#F4F2EE",
        minHeight: "100vh",
        padding: "80px 40px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "64px",
              fontWeight: 400,
              color: "#1A1815",
              margin: "0 0 24px",
            }}
          >
            PERADABAN KUNO
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              color: "#6B6860",
              margin: "0 0 20px",
              lineHeight: 1.6,
            }}
          >
            Menjelajahi Akar Peradaban Manusia
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "#A8A49C",
              margin: 0,
            }}
          >
            Seri 5 Peradaban Kuno Dunia · Konten Edukasi Bahasa Indonesia
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            marginBottom: "80px",
          }}
        >
          {[
            {
              title: "Babilonia",
              desc: "Hukum, Bintang, dan Taman Gantung",
              subtitle: "~1900 SM – 539 SM",
              path: "/detail-babylon",
              color: "#7A5090",
            },
            {
              title: "Sungai Indus",
              desc: "Kota Paling Canggih di Dunia",
              subtitle: "~3000 SM – 1500 SM",
              path: "/detail-indus",
              color: "#2563EB",
            },
            {
              title: "Mesopotamia",
              desc: "Tanah di Antara Dua Sungai",
              subtitle: "~5000 SM – 539 SM",
              path: "/detail-mesopotamia",
              color: "#0D9488",
            },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.path}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "28px 24px",
                backgroundColor: "#ffffff",
                border: "0.5px solid #D4CFC8",
                borderTop: `4px solid ${item.color}`,
                borderRadius: "0 0 12px 12px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0,0,0,0.08)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ width: "100%", marginBottom: "16px" }}>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "28px",
                    fontWeight: 400,
                    color: "#1A1815",
                    margin: "0 0 6px",
                  }}
                >
                  {item.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color: item.color,
                    margin: "0 0 12px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {item.subtitle}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    color: "#6B6860",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  color: item.color,
                  marginTop: "auto",
                  fontWeight: 500,
                }}
              >
                Baca Selengkapnya →
              </span>
            </Link>
          ))}
        </div>

        <div
          style={{
            paddingTop: "40px",
            borderTop: "0.5px solid #D4CFC8",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: "#A8A49C",
              margin: 0,
            }}
          >
            © 2024 Peradaban Kuno · Seri 5 Peradaban Kuno Dunia
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-babylon" element={<DetailBabylon />} />
        <Route path="/detail-indus" element={<DetailIndus />} />
        <Route path="/detail-mesopotamia" element={<DetailMesopotamia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;