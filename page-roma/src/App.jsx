import React, { useState } from 'react';
import MesirPage from './page/mesir.jsx';
import RomawiPage from './page/romawi.jsx';
import TimelinePage from './page/timeline.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('mesir');

  return (
    <>
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#221F1E',
        padding: '10px 15px',
        borderRadius: '30px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: 9999,
        display: 'flex',
        gap: '10px'
      }}>
        <button 
          onClick={() => setCurrentPage('mesir')}
          style={{
            backgroundColor: currentPage === 'mesir' ? '#E07A5F' : 'transparent',
            color: '#EFECE6',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.85rem',
            transition: 'all 0.2s ease'
          }}
        >
          Mesir
        </button>
        <button 
          onClick={() => setCurrentPage('romawi')}
          style={{
            backgroundColor: currentPage === 'romawi' ? '#E07A5F' : 'transparent',
            color: '#EFECE6',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.85rem',
            transition: 'all 0.2s ease'
          }}
        >
          Romawi
        </button>
        <button 
          onClick={() => setCurrentPage('timeline')}
          style={{
            backgroundColor: currentPage === 'timeline' ? '#E07A5F' : 'transparent',
            color: '#EFECE6',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.85rem',
            transition: 'all 0.2s ease'
          }}
        >
          Timeline
        </button>
      </div>

      {currentPage === 'mesir' && <MesirPage onNavigate={setCurrentPage} />}
      {currentPage === 'romawi' && <RomawiPage />}
      {currentPage === 'timeline' && <TimelinePage />}
    </>
  );
}

export default App;