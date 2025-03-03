import './CSS/main.scss';

import Home from './Pages/Home';
import Experiences from './Pages/Experiences';
import Error404 from './Pages/Error404';

import MilosPanic from './Pages/Experiences/block_milos_panic';
import DanijelaBilandzic from './Pages/Experiences/block_danijela_bilandzic';

import{ BrowserRouter as Router, Routes, Route } from "react-router"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iskustva" element={<Experiences/>} />
        <Route path="*" element={<Error404/>} />

        <Route path="/blockisland/milos-panic" element={<MilosPanic/>} />
        <Route path="/blockisland/danijela-bilandzic" element={<DanijelaBilandzic/>} />
      </Routes>
    </Router>
  );
}

export default App;
