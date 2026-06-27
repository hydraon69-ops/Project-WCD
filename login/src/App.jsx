import { Routes, Route } from "react-router-dom";

import Login from "./page/login";
import Homepage from "./page/homepage";
import PageWarisan from "./page/PageWarisan";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/warisan" element={<PageWarisan />} />
    </Routes>
  );
}

export default App;