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
import Updatepro from './Components/Page/Updatepro'
import Shopitem from './Components/Page/Shopitem';
import Dashboard from './Components/Page/Dashboard';
import Storeprofile from './Components/Page/Storeprofile';
import Add_an_item from './Components/Page/Add_an_item';
import Sales from './Components/Page/Sales';
import Recommendations from './Components/Page/Recommendations'
import Tradedata from './Components/Page/Tradedata';
import Recommandation from './Components/Page/Recommandation'
import Testingtable from './Components/Page/Testingtable'
import My_account from './Components/Page/My_account'
import Offer from './Components/Page/Offer'
import Settings from './Components/Page/Settings'
import Register from './Components/Page/Register'
import ItemStore from './Components/Page/ItemStore';
import Search_result from './Components/Page/Search_result';
import Recherches from './Components/Recherche/Recherches';
import Buy_product from './Components/Page/Buy_product';
import CGU from './Components/Page/CGU';
import Legal_Notice from './Components/Page/Legal_Notice';
import Privacy_policy from './Components/Page/Privacy_policy';
import Contact from './Components/Page/Contact';
import Item_Detail from './Components/Page/Item_Detail';
import Login_client from './Components/Page/Login_client';
import Client_login from './Components/Page/Client_login';
import Checkout from './Components/Page/Checkout';
import Faqs from './Components/Page/Faqs';
import Blog from './Components/Page/Blog';
import Delivery_n_returns from './Components/Page/Delivery_n_returns';
import About from './Components/Page/About';
import Summary from './Components/Page/Summary';
import Orders from './Components/Page/Orders';
import Orders_client from './Components/Page/Orders_client';
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
        <Route path='/Recherche' element={<Recherche />} />
        <Route path='/fleurs' element={<Fleurs />} />
        <Route path='/carte' element={<Carte />} />
        <Route path='/Monpanier' element={<Monpanier />} />
        <Route path='/Configure_your' element={<Configure_your />} />
        <Route path='/Shopitem' element={<Shopitem />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Storeprofile' element={<Storeprofile />} />

        <Route path='/Updatepro' element={<Updatepro />} />
        <Route path='/Add_an_item' element={<Add_an_item />} />
        <Route path='/Sales' element={<Sales />} />
        <Route path='/Recommendations' element={<Recommendations />} />
        <Route path='/Tradedata' element={<Tradedata />} />
        <Route path='/Recommandation' element={<Recommandation />} />
        <Route path='/Testingtable' element={<Testingtable />} />
        <Route path='/My_account' element={<My_account />} />
        <Route path='/Offer' element={<Offer />} />
        <Route path='/Settings' element={<Settings />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/ItemStore' element={<ItemStore />} />
        <Route path='/Search_result' element={<Search_result />} />
        <Route path='/Recherches' element={<Recherches />} />
        <Route path='/Buy_product' element={<Buy_product />} />
        <Route path='/CGU' element={<CGU />} />
        <Route path='/Legal_Notice' element={<Legal_Notice />} />
        <Route path='/Privacy_policy' element={<Privacy_policy />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Item_Detail' element={<Item_Detail />} />
        <Route path='/Login_client' element={<Login_client />} />
        <Route path='/Client_login' element={<Client_login />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Faqs' element={<Faqs />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Delivery_n_returns' element={<Delivery_n_returns />} />
        <Route path='/About' element={<About />} />
        <Route path='/Summary' element={<Summary />} />
        <Route path='/Orders' element={<Orders />} />
        <Route path='/Orders_client' element={<Orders_client />} />
        
        

      </Routes>
      {/* <Footer /> */}


    </div>
  );
}

export default App;
