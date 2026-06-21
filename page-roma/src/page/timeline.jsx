import React from 'react';

const customTimelineCSS = `
  :root {
    --bg-dark: #221F1E;
    --bg-light: #EFECE6;
    --text-dark: #2A2625;
    --text-muted: #8C877E;
    --accent-coral: #E07A5F;
    --font-serif: 'Playfair Display', serif;
    --font-sans: 'Plus Jakarta Sans', sans-serif;
  }

  .homepage-timeline-wrapper {
    background-color: var(--bg-light);
    color: var(--text-dark);
    font-family: var(--font-sans);
    line-height: 1.7;
    width: 100%;
    min-height: 100vh;
    padding: 80px 0;
  }

  .homepage-timeline-wrapper * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }

  .timeline-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 60px auto;
    padding: 0 20px;
  }

  .timeline-intro .meta-tag {
    font-size: 0.9rem;
    letter-spacing: 3px;
    color: var(--accent-coral);
    text-transform: uppercase;
    margin-bottom: 15px;
    font-weight: 600;
    display: block;
  }

  .timeline-intro h1 {
    font-family: var(--font-serif);
    font-size: 3.2rem;
    font-weight: 400;
    margin-bottom: 20px;
    line-height: 1.2;
    color: var(--text-dark);
  }

  .timeline-intro p {
    font-size: 1.1rem;
    color: #5C5750;
  }

  .timeline-container {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding-left: 150px;
    padding-right: 20px;
  }

  .timeline-container::before {
    content: '';
    position: absolute;
    left: 125px;
    top: 10px;
    bottom: 10px;
    width: 1px;
    background-color: #DDD9D1;
  }

  .timeline-node {
    position: relative;
    margin-bottom: 45px;
  }

  .node-year {
    position: absolute;
    left: -150px;
    top: 0;
    width: 110px;
    text-align: right;
    font-size: 0.95rem;
    color: var(--text-muted);
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .timeline-node::after {
    content: '';
    position: absolute;
    left: -29px;
    top: 7px;
    width: 8px;
    height: 8px;
    background-color: var(--bg-light);
    border: 2px solid #A8A49E;
    border-radius: 50%;
    z-index: 2;
  }

  .timeline-node.highlighted .node-year {
    color: var(--accent-coral);
  }

  .timeline-node.highlighted::after {
    border-color: var(--accent-coral);
    background-color: var(--accent-coral);
  }

  .node-text-content {
    padding-left: 10px;
  }

  .node-text-content .civ-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--text-muted);
    font-weight: 600;
    display: block;
    margin-bottom: 2px;
  }

  .node-text-content h4 {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 4px;
  }

  .node-text-content p {
    font-size: 1rem;
    color: #5C5750;
    margin-bottom: 2px;
  }

  .node-text-content .sub-info {
    font-size: 0.85rem;
    color: var(--text-muted);
    font-style: italic;
  }

  @media (max-width: 768px) {
    .timeline-container {
      padding-left: 40px;
    }
    .timeline-container::before {
      left: 20px;
    }
    .timeline-node::after {
      left: -24px;
    }
    .node-year {
      position: relative;
      left: 0;
      width: auto;
      text-align: left;
      margin-bottom: 4px;
      display: block;
    }
  }
`;

const TimelinePage = () => {
  const globalTimelineData = [
    {
      year: '~3500 SM',
      civilization: 'Peradaban Mesopotamia',
      title: 'Lahirnya Sistem Tulisan Pertama',
      desc: 'Penemuan tulisan Kuneiform dan pembentukan kota-kota awal di lembah Sungai Tigris dan Eufrat.',
      subText: 'Suku Sumeria'
    },
    {
      year: '~3100 SM',
      civilization: 'Peradaban Mesir Kuno',
      title: 'Penyatuan Mesir Hulu & Hilir',
      desc: 'Firaun Menes menyatukan kedua wilayah, memulai era kejayaan pembangunan Piramida raksasa dan Sphinx.',
      subText: 'Era Kerajaan Lama'
    },
    {
      year: '~1900 SM',
      civilization: 'Peradaban Babilonia',
      title: 'Penyusunan Hukum Kode Hammurabi',
      desc: 'Penyusunan salah satu undang-undang tertulis tertua di dunia yang menegakkan prinsip hukum universal.',
      subText: 'Raja Hammurabi'
    },
    {
      year: '~800 SM',
      civilization: 'Peradaban Yunani Kuno',
      title: 'Lahirnya Polis & Sistem Demokrasi',
      desc: 'Berkembangnya kota otonom seperti Athena dan Sparta, serta peletakan batu pertama ilmu filsafat barat.',
      subText: 'Zaman Arkaik'
    },
    {
      year: '753 SM',
      civilization: 'Peradaban Roma Kuno',
      title: 'Pendirian Roma oleh Romulus',
      desc: 'Awal mula sebuah desa agraris kecil di tepi Sungai Tiber yang kelak menjadi penguasa Mediterania.',
      subText: 'Romulus (Legendaris)',
      highlight: true
    },
    {
      year: '27 SM',
      civilization: 'Peradaban Roma Kuno',
      title: 'Augustus Menjadi Kaisar Pertama',
      desc: 'Runtuhnya era Republik dan dimulainya Pax Romana—dua abad kedamaian dan kestabilan hukum.',
      subText: 'Augustus Caesar',
      highlight: true
    },
    {
      year: '476 M',
      civilization: 'Peradaban Roma Kuno',
      title: 'Jatuhnya Kekaisaran Romawi Barat',
      desc: 'Runtuhnya supremasi barat di bawah invasi barbar, menandai akhir Zaman Kuno di Eropa.',
      subText: 'Romulus Augustulus',
      highlight: true
    }
  ];

  return (
    <div className="homepage-timeline-wrapper">
      <style dangerouslySetInnerHTML={{ __html: customTimelineCSS }} />

      <header className="timeline-intro">
        <span className="meta-tag">Kronologi Dunia</span>
        <h1>Lintas Zaman dalam Angka</h1>
        <p>Peta perjalanan waktu peradaban-peradaban besar manusia dari awal mula aksara hingga keruntuhan imperium dunia kuno.</p>
      </header>

      <div className="timeline-container">
        {globalTimelineData.map((node, index) => (
          <div key={index} className={`timeline-node ${node.highlight ? 'highlighted' : ''}`}>
            <div className="node-year">{node.year}</div>
            <div className="node-text-content">
              <span className="civ-label">{node.civilization}</span>
              <h4>{node.title}</h4>
              <p>{node.desc}</p>
              <span className="sub-info">{node.subText}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;