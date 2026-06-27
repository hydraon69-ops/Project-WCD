import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const figmaTimelineCSS = `
  :root {
    --bg-dark: #221F1E;
    --bg-light: #EFECE6;
    --text-dark: #2A2625;
    --text-muted: #7C766E;
    --accent-coral: #E07A5F;
    --font-serif: 'Playfair Display', serif;
    --font-sans: 'Plus Jakarta Sans', sans-serif;
  }

  .timeline-global-container {
    background-color: var(--bg-light);
    color: var(--text-dark);
    font-family: var(--font-sans);
    line-height: 1.7;
    width: 100%;
    min-height: 100vh;
  }

  .timeline-global-container * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .global-header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 80px;
    background-color: var(--bg-light);
    border-bottom: 1px solid rgba(42, 38, 37, 0.08);
  }

  .back-to-home-btn {
    background: none;
    border: none;
    font-family: var(--font-sans);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-dark);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.2s ease;
  }

  .back-to-home-btn:hover {
    color: var(--accent-coral);
  }

  .nav-links {
    display: flex;
    gap: 40px;
  }

  .nav-links button {
    background: none;
    border: none;
    font-family: var(--font-sans);
    font-size: 0.95rem;
    color: var(--text-muted);
    cursor: pointer;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .nav-links button:hover, .nav-links button.active {
    color: var(--text-dark);
    font-weight: 700;
  }

  .explore-btn {
    border: 1px solid var(--text-dark);
    padding: 10px 24px;
    border-radius: 20px;
    background: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .explore-btn:hover {
    background-color: var(--text-dark);
    color: var(--bg-light);
  }

  .timeline-hero-banner {
    background-color: var(--bg-dark);
    color: var(--bg-light);
    text-align: center;
    padding: 100px 20px;
  }

  .hero-tagline {
    font-size: 0.8rem;
    letter-spacing: 3px;
    color: var(--accent-coral);
    text-transform: uppercase;
    margin-bottom: 16px;
    font-weight: 600;
  }

  .timeline-hero-banner h1 {
    font-family: var(--font-serif);
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .hero-desc {
    font-size: 1.1rem;
    color: #9C968E;
  }

  .filter-bar-wrapper {
    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 40px 20px;
    background-color: var(--bg-light);
  }

  .filter-btn {
    background-color: transparent;
    border: 1px solid rgba(42, 38, 37, 0.15);
    padding: 8px 20px;
    border-radius: 20px;
    font-family: var(--font-sans);
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-dark);
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .filter-btn.active {
    background-color: var(--text-dark);
    color: var(--bg-light);
    border-color: var(--text-dark);
  }

  .dot-indicator {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    display: inline-block;
  }

  .view-tree-wrapper {
    position: relative;
    max-width: 1200px;
    margin: 60px auto;
    padding: 40px 20px;
  }

  .view-tree-wrapper::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: rgba(42, 38, 37, 0.15);
  }

  .tree-node-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    position: relative;
    width: 100%;
  }

  .center-axis-dot {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 10px;
    background-color: var(--bg-light);
    border: 2px solid var(--accent-coral);
    border-radius: 50%;
    z-index: 5;
  }

  .side-content-box {
    width: 45%;
    position: relative;
  }

  .side-meta-year {
    width: 45%;
    padding: 0 40px;
  }

  .tree-node-row.left-oriented .side-meta-year {
    text-align: left;
  }

  .tree-node-row.right-oriented .side-meta-year {
    text-align: right;
  }

  .node-display-card {
    background-color: rgba(42, 38, 37, 0.02);
    border-left: 3px solid var(--accent-coral);
    padding: 30px;
    border-radius: 0 8px 8px 0;
    border-top: 1px solid rgba(42, 38, 37, 0.04);
    border-right: 1px solid rgba(42, 38, 37, 0.04);
    border-bottom: 1px solid rgba(42, 38, 37, 0.04);
  }

  .year-stamp {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--accent-coral);
    margin-bottom: 4px;
  }

  .civ-stamp {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-muted);
    font-weight: 700;
  }

  .node-display-card h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 8px 0;
    color: var(--text-dark);
  }

  .node-display-card p {
    font-size: 0.95rem;
    color: #55504A;
  }

  @media (max-width: 900px) {
    .view-tree-wrapper::before {
      left: 30px;
    }
    .tree-node-row {
      flex-direction: column-reverse;
      align-items: flex-start;
      padding-left: 60px;
    }
    .center-axis-dot {
      left: 30px;
    }
    .side-content-box, .side-meta-year {
      width: 100%;
      text-align: left !important;
      padding: 0;
    }
    .side-meta-year {
      margin-bottom: 12px;
    }
    .global-header-nav {
      padding: 20px;
      flex-direction: column;
      gap: 15px;
    }
  }
`;

const TimelinePage = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const navigate = useNavigate();

  const fullTimelineDataset = [
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

  const filteredDataset = activeFilter === 'Semua' 
    ? fullTimelineDataset 
    : fullTimelineDataset.filter(item => item.category === activeFilter);

  return (
    <div className="timeline-global-container">
      <style dangerouslySetInnerHTML={{ __html: figmaTimelineCSS }} />

      <nav className="global-header-nav">
        <button className="back-to-home-btn" onClick={() => navigate('/home')}>
          ← Kembali ke Beranda
        </button>
        <div className="nav-links">
          <button onClick={() => navigate('/home')}>Beranda</button>
          <button onClick={() => navigate('/home')}>Peradaban</button>
          <button className="active" onClick={() => navigate('/timeline')}>Timeline</button>
          <button onClick={() => navigate('/warisan')}>Warisan</button>
        </div>
        <button className="explore-btn" onClick={() => navigate('/detail-mesir')}>Mulai Jelajah</button>
      </nav>

      <header className="timeline-hero-banner">
        <span className="hero-tagline">Lintas Peradaban</span>
        <h1>Timeline Global</h1>
        <p className="hero-desc">8.000 tahun sejarah dalam satu pandangan</p>
      </header>

      <div className="filter-bar-wrapper">
        {['Semua', 'Mesir', 'Mesopotamia', 'Indus', 'Babilonia', 'Roma'].map((cat) => (
          <button 
            key={cat} 
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat !== 'Semua' && <span className="dot-indicator" style={{ backgroundColor: cat === 'Mesir' ? '#D4A373' : cat === 'Mesopotamia' ? '#4EA8DE' : cat === 'Indus' ? '#48CAE4' : cat === 'Babilonia' ? '#B5E2FA' : '#E07A5F' }} />}
            {cat}
          </button>
        ))}
      </div>

      <div className="view-tree-wrapper">
        {filteredDataset.map((node, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className={`tree-node-row ${isLeft ? 'left-oriented' : 'right-oriented'}`}>
              <div className="center-axis-dot" style={{ borderColor: node.color }} />
              
              {isLeft ? (
                <>
                  <div className="side-content-box">
                    <div className="node-display-card" style={{ borderLeftColor: node.color }}>
                      <h3>{node.title}</h3>
                      <p>{node.desc}</p>
                    </div>
                  </div>
                  <div className="side-meta-year">
                    <div className="year-stamp" style={{ color: node.color }}>{node.year}</div>
                    <div className="civ-stamp">{node.civ}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="side-meta-year">
                    <div className="year-stamp" style={{ color: node.color }}>{node.year}</div>
                    <div className="civ-stamp">{node.civ}</div>
                  </div>
                  <div className="side-content-box">
                    <div className="node-display-card" style={{ borderLeftColor: node.color }}>
                      <h3>{node.title}</h3>
                      <p>{node.desc}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelinePage;