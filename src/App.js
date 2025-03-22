import './CSS/main.scss';

import Home from './Pages/Home';
import Experiences from './Pages/Experiences';
import Error404 from './Pages/Error404';

import Blog from './Pages/Blog';
import ZastoWat from './Components/Blog/zastoWat';

import MilosPanic from './Pages/Experiences/block_milos_panic';
import DanijelaBilandzic from './Pages/Experiences/block_danijela_bilandzic';
import LucijaGrgic from './Pages/Experiences/block_lucija_grgic';
import AnjaMihajlovic from './Pages/Experiences/block_anja_mihajlovic';
import MilaKragic from './Pages/Experiences/block_mila_kragic';

import{ BrowserRouter as Router, Routes, Route } from "react-router"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iskustva" element={<Experiences/>} />
        <Route path="*" element={<Error404/>} />
        
        <Route path="/blog" element={<Blog/>} />
        <Route path="/zasto-work-and-travel" element={<ZastoWat/>} />
        

        <Route path="/blockisland/milos-panic" element={<MilosPanic/>} />
        <Route path="/blockisland/danijela-bilandzic" element={<DanijelaBilandzic/>} />
        <Route path="/blockisland/lucija-grgic" element={<LucijaGrgic/>} />
        <Route path="/blockisland/anja-mihajlovic" element={<AnjaMihajlovic/>} />
        <Route path="/blockisland/mila-kragic" element={<MilaKragic/>} />
      </Routes>
    </Router>
  );
}

export default App;
