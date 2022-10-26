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
          </Routes>        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
