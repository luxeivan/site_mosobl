import logo from './logo.svg';
import './css/Normalize.css';
import './css/App.css';
import './css/Custom.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Main from './pages/Main';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>

        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
