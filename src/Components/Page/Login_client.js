import React from 'react'
import Footer from '../Footer'
import { CiSearch } from "react-icons/ci";


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Button, Card, Container, Nav } from 'react-bootstrap';
import { FaRegUser } from "react-icons/fa";
import { BsBucket } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

import './Login_client.css'
import Form from 'react-bootstrap/Form';
import { RiGoogleFill } from "react-icons/ri";
const Login_client = () => {
    return (
        <div>
            <div className="new-wrapper">

                <div className="showcase3">

                    <img src="./image/clientlogin.jpeg" alt="Picture" style={{ objectFit: "cover" }} />

                    <div className="overlay56">
                        <Row className='displaybp'>
                            <Col>
                            </Col>
                            <Col>
                            </Col>
                            <Col>
                                <Nav className="justify-content-end bn9" activeKey="" >
                                    <Nav.Item>
                                        <Nav.Link href="/"><CiSearch className='icon99' />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/"><FaRegUser className='icon9' /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/"><BsBucket className='icon9' />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/"><IoMdHeartEmpty className='icon99' /></Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </Col>
                        </Row>
                        <h2 className='recherche'>Se connecter</h2>
                    </div>




                </div>


              
                        <div className='loginclient'>
                        <Container >
                            <Row>
                                <Col sm={6}>
                                    <div className='bg67'>

                                        <h2 className='font01'>
                                        Déjà client
                                        </h2>
                                        <p className='font02 mb-4'>
                                        Vous avez un compte Maathena ? Connectez-vous      </p>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Identifiant*</Form.Label>
                                                <Form.Control type="text" placeholder="" required minLength={20} maxLength={40}/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Row>
                                                    <Col>
                                                    <Form.Label>Mot de passe*</Form.Label>
                                                    </Col>
                                                    <Col><Form.Label style={{float:"right"}}>Mot de passe oublié ?</Form.Label></Col>
                                                </Row>
                                                <Form.Control type="password" placeholder=""  required />
                                            </Form.Group>
                                            <Row>
                                            <Col></Col>
                                            <Col xs={12}><Button className='btn51'>Se connecter</Button></Col>
                                            <Col></Col>
                                        </Row>
                                        </Form>
                                        <Row>
                                            <Col></Col>
                                            <Col xs={12}><Button  className='btn53'><RiGoogleFill className='google2'/>  Se connecter avec Google</Button></Col>
                                            <Col></Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className='bg687'>

                                        <h2 className='font03'>
                                        Nouveau client ?
                                        </h2>
                                        <p className='font04 my-'>
                                        Merci de remplir le formulaire de demande <br></br>d’inscription.    </p>
                                        <Row>
                                            <Col></Col>
                                            <Col xs={7}><Button  className='btn54'>S’inscrire</Button></Col>
                                            <Col></Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            </Container>
                        </div>
                   
                <Footer />
            </div>



        </div >
    )
}

export default Login_client
