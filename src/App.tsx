import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import MainLayout from './Layouts/Mainlayout';
import Home from './Pages/Home';
import AproposPage from './Pages/AproposPage';
import Missions from './components/Missions';
import Contact from './Pages/Contact';
import ExpertisesPage from './Pages/Expertises';
import Partenariats from './Pages/Partenariats';  
import Realisations from './Pages/Realisations';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>}/>
          <Route path="/apropos" element={<AproposPage/>}/>
          <Route path="/missions" element={<Missions/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/domaines" element={<ExpertisesPage/>}/>
          <Route path="/partenariats" element={<Partenariats/>}/>
          <Route path="/Realisations" element={<Realisations/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;