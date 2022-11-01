import logo from './logo.svg';
import './css/Normalize.css';
import './css/App.css';
import './css/Custom.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Main from './pages/Main';
import Contact from './pages/Contact';
import InformationDisclosures from './pages/InformationDisclosures';
import InformationDisclosuresItem from './pages/InformationDisclosuresItem';
import Filials from './pages/Filials';
import Filial from './pages/Filial';
import About from './pages/About';
import History from './pages/History';
import Goals from './pages/Goals';
import MainDirections from './pages/MainDirections';
import Recuisites from './pages/Recuisites';
import AntiCorruption from './pages/AntiCorruption';
import Certs from './pages/Certs';
import Gardeners from './pages/Gardeners';
import ContactForMedia from './pages/ContactForMedia';
import News from './pages/News';
import Consumers from './pages/Consumers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/informationDisclosures/:id' element={<InformationDisclosuresItem/>} />
            <Route path='/informationDisclosures' element={<InformationDisclosures/>} />
            <Route path='/filials' element={<Filials/>} />
            <Route path='/filials/:id' element={<Filial/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/history' element={<History/>} />
            <Route path='/goals' element={<Goals/>} />
            <Route path='/mainDirection' element={<MainDirections/>} />
            <Route path='/requisites' element={<Recuisites/>} />
            <Route path='/antiCorruption' element={<AntiCorruption/>} />
            <Route path='/certs' element={<Certs/>} />
            <Route path='/gardeners' element={<Gardeners/>} />
            <Route path='/contactForMedia' element={<ContactForMedia/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/consumers' element={<Consumers/>} />
          </Routes>        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
