import React, { useState } from 'react';
import MesirPage from './page/mesir.jsx';
import RomawiPage from './page/romawi.jsx';
import TimelinePage from './page/timeline.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('mesir');

  return (
    <>
      {currentPage === 'mesir' && <MesirPage onNavigate={setCurrentPage} />}
      {currentPage === 'romawi' && <RomawiPage onNavigate={setCurrentPage} />}
      {currentPage === 'timeline' && <TimelinePage onNavigate={setCurrentPage} />}
    </>
  );
}

export default App;