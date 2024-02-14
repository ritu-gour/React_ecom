import React from 'react'
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import './Header.css'
const Head = () => {
    return (
        <div className="desktop">
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" style={{ marginTop: "0px" }}>
                        <Navbar.Text>
                            <div id="google_translate_element" style={{ float: 'right' }}></div>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="primary-nav">
                <Button to="/" className="hamburger open-panel nav-toggle">
                    <img src='./logo.png' className='img9' />

                </Button>

                <Nav className="me-auto menu" role="navigation" >

                    <NavLink to="/" className="logotype">
                        <img src='./logo_Maathena.png' className='img10' />
                    </NavLink>

                    <div className='overflow-container'>

                        <NavLink to="/dashboard" style={{ fontSize: "17px" }}>Dashboard</NavLink><span className="icon" > <i class="fa fa-bars" style={{ fontSize: "20px" }}>
                        </i></span>
                        <NavLink to="/InscriptionComme" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}> Inscription Comme</NavLink>



                        <NavLink to="/Search_result" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Résultat Recherche</NavLink>
                        <NavLink to="/Blog" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Blog</NavLink>
                        <NavLink to="/Delivery_n_returns" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Delivery and returns</NavLink>
                        <NavLink to="/Summary" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Mon compte</NavLink>
                        <NavLink to="/Order" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Order</NavLink>
                        <NavLink to="/Orders_client" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Orders_client</NavLink>
                        
                        
                        <NavLink to="/Recherches" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Recherches</NavLink>
                        <NavLink to="/Buy_product" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Buy_product</NavLink>
                        <NavLink to="/CGU" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>CGU</NavLink>
                        <NavLink to="/Legal_Notice" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Mentions légales</NavLink>
                        <NavLink to="/Privacy_policy" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Politique de <br></br>confidentitalité</NavLink>
                        <NavLink to='/Contact'  style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}> Contact</NavLink>
                        <NavLink to='/Item_Detail'  style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Item_Detail</NavLink>
                        <NavLink to='/Login_client'  style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Se connecter <br></br>client</NavLink>
                        <NavLink to='/Faqs'  style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>FAQs</NavLink>
                                 
                                 


                       
                        <NavLink to='/ItemStore' style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Articles Boutique</NavLink>


                        <NavLink to="/My_account" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Mon Compte</NavLink>

                        <NavLink to="/Offer" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>  Offer </NavLink>

                        <NavLink to="/Settings" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>  Settings</NavLink>

                        <NavLink to="/Register" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>S’inscrire </NavLink>


                        <NavLink to="/welcome" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Welcome</NavLink>
                        <NavLink to="/MerchantRegistration" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Merchant Registration</NavLink>
                        <NavLink to="/RegistrAlreadyCust" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Already Customer</NavLink>
                        <NavLink to="/Login" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Login</NavLink>
                        <NavLink to="/Carte" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Carte</NavLink>
                        <NavLink to="/Monpanier" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Mon Panir</NavLink>
                        <NavLink to="/Configure_your" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}> Configure your Maathena
                            <br></br> store
                        </NavLink>
                        <NavLink to="/Storeprofile" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}> Profil Boutique </NavLink>
                        <NavLink to="/Shopitem" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}> Articles Boutique </NavLink>
                        <NavLink to="/Add_an_item" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Ajouter un article</NavLink>
                        <NavLink to="/Sales" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Ventes</NavLink>
                        <NavLink to="/Recommendations" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Recommandations</NavLink>
                        <NavLink to="/Tradedata" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>  Tradedata</NavLink>
                        <NavLink to="/Recommandation" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>   Recommandation</NavLink>
                    </div>


                </Nav>

            </div>

        </div>


    )
}

export default Head
