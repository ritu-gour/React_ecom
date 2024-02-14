import React from 'react'

import Footer from '../Footer'


import { CiSearch } from "react-icons/ci";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import Nav from 'react-bootstrap/Nav';
import { FaRegUser } from "react-icons/fa6";
import { BsBucket } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import './Faq.css'
import './Summary.css'
import './Buy_product.css'
import { Button, Container, Stack } from 'react-bootstrap';

const Orders_client = () => {
    return (
        <div>
            <div className="new-wrapper">
                <div style={{ background: "#f7fcf9" }}>
                    <div className="showcase3" style={{ color: "#084442" }}>



                        <div className="overlay">
                            <Row className='displaybp'>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                    <Nav className="justify-content-end bn9" activeKey="">
                                        <Nav.Item>
                                            <Nav.Link href="/"><CiSearch className='icon99' style={{ color: "#084442" }} />
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href="/"><FaRegUser className='icon9' style={{ color: "#084442" }} /></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href="/"><BsBucket className='icon9' style={{ color: "#084442" }} />
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href="/"><IoMdHeartEmpty className='icon99' style={{ color: "#084442" }} /></Nav.Link>
                                        </Nav.Item>

                                    </Nav>
                                </Col>
                            </Row>
                            <h2 className='recherche mb-5'>Mon compte</h2>
                        </div>
                    </div>

                    <div className='b'>
                        <div className='d'>
                            <Container >
                                <Row>
                                    <Col sm={2}>
                                        <p className='table19' ><b >Résumé</b></p>
                                        <p className='table19' style={{ fontWeight: "800" }}>Commandes </p>




                                        <p className='table19'>Favoris</p>
                                        <p className='table19'>Renvoyer un article</p>
                                        <p className='table19'>Retours</p>
                                        <p className='table19'>Données personnelles</p>
                                    </Col>

                                    <Col sm={10}>
                                        <h3 style={{ color: "#084442" }}>Commande n°12345667</h3>
                                        <br></br>
                                        <div>
                                           <Row>
                                            <Col sm={8}>
                                            <p>Statut de la livraison : </p>
                                            </Col>
                                            <Col sm={4}>
                                                
                                            </Col>
                                           </Row>
                                        </div>
                                        <br></br>
                                        <div>
                                            <Row>
                                                <Col sm={10}>
                                                    <p className=''>Date de la commande : 03/11/2023<br></br>
                                                        Total : 45€<br></br>
                                                        Adresse de livraison : 3 rue de machin 75 001 Paris
                                                        <br></br>
                                                        Téléphone : 0600223344
                                                    </p>
                                                </Col>
                                                <Col sm={2}>
                                                    <p className='Orders_client1'>Voir la commande</p>
                                                </Col>
                                            </Row>
                                        </div>
                                        <br></br><br></br>
                                        <Row>

                                            <Col sm={4}>
                                                <img src='./image/monpani.jpeg' className='monpaniimg8nn' />

                                               
                                                <Row>
                                                <Col sm={9}>
                                                <p>Produit 1<br></br>
                                                Taille : 38

                                                </p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p className='Orders_client1'>20€</p>
                                                </Col>
                                                </Row>


                                            </Col>
                                            <Col sm={4}>
                                                <img src='./image/monpani.jpeg' className='monpaniimg8nn' />

                                                <Row>
                                                <Col sm={9}>
                                                <p>Produit 1<br></br>
                                                Taille : 38

                                                </p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p className='Orders_client1'>20€</p>
                                                </Col>
                                                </Row>

                                            </Col>
                                            <Col sm={4}>
                                                <img src='./image/monpani.jpeg' className='monpaniimg8nn' />

                                                <Row>
                                                <Col sm={9}>
                                                <p>Produit 1<br></br>
                                                Taille : 38

                                                </p>
                                                </Col>
                                                <Col sm={3}>
                                                    <p className='Orders_client1'>20€</p>
                                                </Col>
                                                </Row>

                                            </Col>
                                        </Row>
                                       
                                       


                                    </Col>

                                </Row>
                              
                            </Container>
                            <br></br> <br></br> <br></br>
                        </div>
                    </div>
                </div>




                <Footer />
            </div>
        </div>
    )
}

export default Orders_client

