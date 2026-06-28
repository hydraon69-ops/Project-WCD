import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./page/login";
import Homepage from "./page/homepage";
import PageWarisan from "./page/PageWarisan";
import TimelinePage from "./page/timeline";

import MesirPage from "./page/mesir";
import RomawiPage from "./page/romawi";

import { DetailMesopotamia } from "./page/DetailMesopotamia";
import { DetailIndus } from "./page/DetailIndus";
import { DetailBabylon } from "./page/DetailBabylon";

// centralize dummy data imports
import * as mesoData from "./data/mesopotamiaData";
import * as indusData from "./data/indusData";
import * as babylonData from "./data/babylonData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route path="/home" element={<Homepage />} />
      <Route path="/warisan" element={<PageWarisan />} />
      <Route path="/timeline" element={<TimelinePage />} />

      <Route path="/detail-mesir" element={<MesirPage />} />
      <Route path="/detail-mesopotamia" element={<DetailMesopotamia {...mesoData} />} />
      <Route path="/detail-indus" element={<DetailIndus {...indusData} />} />
      <Route path="/detail-babylon" element={<DetailBabylon {...babylonData} />} />
      <Route path="/detail-rome" element={<RomawiPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;