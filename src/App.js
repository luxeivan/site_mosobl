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
// import Reviews from './pages/Reviews';
import Gardeners from './pages/Gardeners';
import ContactForMedia from './pages/ContactForMedia';
import News from './pages/News';
import Consumers from './pages/Consumers';
import Territory from './pages/consumers/Territory';
import AdditionalServices from './pages/consumers/AdditionalServices';
import ServicePassports from './pages/consumers/ServicePassports';
import Page404 from './pages/Page404';
import TechnologicalConnection from './pages/consumers/TechnologicalConnection';
import ElectricityAccounting from './pages/consumers/ElectricityAccounting';
import PlannedOutages from './pages/consumers/PlannedOutages';
import CustomerService from './pages/consumers/CustomerService';
import RegulatoryLegalActs from './pages/consumers/RegulatoryLegalActs';
import ConsolidationOfElectric from './pages/consumers/ConsolidationOfElectric';
import ChargingStations from './pages/consumers/ChargingStations';
import SaleOfItems from './pages/consumers/SaleOfItems';
import AttentionFraud from './pages/consumers/AttentionFraud';
import Gosuslugi_banner from './components/Gosuslugi_banner';
import { useEffect } from 'react';
import CreditRating from './pages/СreditRating';

function App() {
  useEffect(() => {
    const event = new Event('rendered')
    document.dispatchEvent(event)
}, [])
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
            {/* <Route path='/reviews' element={<Reviews/>} /> */}
            <Route path='/gardeners' element={<Gardeners/>} />
            <Route path='/contactForMedia' element={<ContactForMedia/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/consumers' element={<Consumers/>} />

            <Route path='/additionalServices' element={<AdditionalServices/>} />
            <Route path='/servicePassports' element={<ServicePassports/>} />
            <Route path='/territory' element={<Territory/>} />
            <Route path='/technologicalConnection' element={<TechnologicalConnection/>} />
            <Route path='/electricityAccounting' element={<ElectricityAccounting/>} />
            <Route path='/regulatoryLegalActs' element={<RegulatoryLegalActs/>} />
            <Route path='/customerService' element={<CustomerService/>} />
            <Route path='/plannedOutages' element={<PlannedOutages/>} />
            <Route path='/consumer/planovye-raboty/planovye-otklyucheniya' element={<PlannedOutages/>} />
            <Route path='/consolidationOfElectric' element={<ConsolidationOfElectric/>} />
            <Route path='/chargingStations' element={<ChargingStations/>} />
            <Route path='/saleOfItems' element={<SaleOfItems/>} />
            <Route path='/attentionFraud' element={<AttentionFraud/>} />
            
            <Route path='/creditRating' element={<CreditRating/>} />

            <Route path='/*' element={<Page404/>} />

          </Routes>   
          <Gosuslugi_banner/>     
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
