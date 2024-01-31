// import logo from './logo.svg';
import './App.css';
// import Footer from './Components/Home/Bottom1';
import Info_inscription_commerçants from './Components/Home/Info_inscription_commerçants';
import Header from './Components/Header';
import { Routes, Route } from "react-router-dom";
import InscriptionComme from './Components/InscriptionComme/InscriptionComme'; 
import MerchantRegistration from './Components/Page/MerchantRegistration'
import RegistrAlreadyCust from './Components/RegistrAlreadyCust/RegistrAlreadyCust'
import Login from './Components/InscriptionComme/Login' 
import Welcome from './Components/Welcome/Welcome';
import Recherche from './Components/Recherche/Recherche';
import Fleurs from './Components/Page/Fleurs';
import Carte from './Components/Page/Carte';
import Monpanier from './Components/Page/Monpanier';
import Configure_your from './Components/Page/Configure_your';

import Testings from './Components/Page/Testings';
import Dashboard from './Components/Page/Dashboard';
function App() {
  return (
    <div className="App">
      <Header />
     
      <Routes>
        <Route path='/' element={<Info_inscription_commerçants />} />
        <Route path='/InscriptionComme' element={<InscriptionComme />} />
        <Route path='/MerchantRegistration' element={<MerchantRegistration />} />
        <Route path='/RegistrAlreadyCust' element={<RegistrAlreadyCust />} />
        <Route path='/Login' element={<Login />} />   
        <Route path='/Welcome' element={<Welcome />} />
        <Route path='/Recherche' element={<Recherche />}/> 
        <Route path='/fleurs' element={<Fleurs />}/> 
        <Route path='/carte' element={<Carte />}/>
        <Route path='/Monpanier' element={<Monpanier />}/>
        <Route path='/Configure_your' element={<Configure_your />} />
        <Route path='/Testings' element={<Testings /> } />
        <Route path='/Dashboard' element={<Dashboard />}/>
        
      </Routes>
      {/* <Footer /> */}


    </div>
  );
}

export default App;
