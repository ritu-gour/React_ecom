import React from 'react'

import Container from 'react-bootstrap/Container';
// import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {NavLink} from "react-router-dom";



const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" className='sticky-top' style={{height:"70px",color:"white"}}> 
      <Container>
        <NavLink to="/" className="text-decoration-none text-light mx-3" style={{fontSize:"34px",fontFamily:"Italic"}}><b>KIT<span style={{ color: "blue" }}>CHEN</span></b></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav text-white" >
          <Nav className="me-auto ">
            <NavLink to="/" className="text-decoration-none  mx-3 n">Home</NavLink>
            <NavLink to="/about"className="text-decoration-none  mx-3 n">About</NavLink>
            <NavLink to="/cart" className="text-decoration-none  mx-3 n">Kitchen</NavLink>
            <NavLink to="/contact" className="text-decoration-none  mx-3 n">Contact</NavLink>
          </Nav>
         
          
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
    </div>
  )
}

export default Header
