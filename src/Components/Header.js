import React from 'react'
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
const Head = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" style={{marginTop:"0px"}}>
                        <Navbar.Text>
                        <div  id="google_translate_element" style={{ float: 'right' }}></div>
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
                        <NavLink to="/InscriptionComme" style={{ fontSize: "17px" }}>
                            Inscription Comme</NavLink> <span className="icon" >
                            <i class="fa fa-bars" style={{ fontSize: "20px" }}>
                            </i></span>
                        <NavLink to="/welcome" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Welcome</NavLink>
                        <NavLink to="/MerchantRegistration" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Merchant Registration</NavLink>
                        <NavLink to="/RegistrAlreadyCust" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Already Customer</NavLink>
                        <NavLink to="/Login" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Login</NavLink>
                        <NavLink to="/Carte" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Carte</NavLink>
                        <NavLink to="/Monpanier" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px" }}>Mon Panir</NavLink>
                        <NavLink to="/Configure_your" style={{ fontSize: "17px", margin: "-20px 0px 0px 0px"}}> Configure your Maathena
                        <br></br> store
 </NavLink>
                    </div>


                </Nav>

            </div>

        </div>


    )
}

export default Head
