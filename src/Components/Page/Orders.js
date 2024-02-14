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

const Orders = () => {
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
                                                <Col sm={10}>
                                                    <p className=''>Date de la commande : 03/11/2023<br></br>
                                                        Total : 45€
                                                    </p>
                                                </Col>
                                                <Col sm={2}>
                                                    <p className='Orders1'>Voir la commande</p>
                                                </Col>
                                            </Row>
                                        </div>
                                        <br></br><br></br>
                                        <Row>

                                            <Col sm={4}>
                                                <img src='./image/monpani.jpeg' className='monpaniimg8nn' />

                                                <p>Produit 1</p>

                                            </Col>
                                            <Col sm={4}>
                                                <img src='./image/monpani.jpeg' className='monpaniimg8nn' />

                                                <p>Produit 1</p>

                                            </Col>
                                            <Col sm={4}>
                                                <img src='./image/monpani.jpeg' className='monpaniimg8nn' />

                                                <p>Produit 1</p>

                                            </Col>
                                        </Row>
                                        <br></br><br></br>
                                        <hr></hr>




                                        <h3 style={{ color: "#084442" }}>Commande n°12345667</h3>
                                        <br></br>
                                        <div>
                                            <Row>
                                                <Col sm={10}>
                                                    <p className=''>Date de la commande : 03/11/2023<br></br>
                                                        Total : 45€
                                                    </p>
                                                </Col>
                                                <Col sm={2}>
                                                    <p className='Orders1'>Voir la commande</p>
                                                </Col>
                                            </Row>
                                        </div>
                                        <br></br><br></br>
                                        <Row>
                                            <Col sm={8}>

                                            </Col>
                                            <Col sm={4}>
                                                <Stack direction="horizontal" gap={3}>
                                                    <div className="p-">
                                                        <img src='./image/monpani.jpeg' className='monpaniimg8n' />

                                                        <p>Produit 1</p>
                                                    </div>
                                                    <div className="p-">  <img src='./image/monpani.jpeg' className='monpaniimg8n' />

                                                        <p>Produit 2</p></div>

                                                </Stack>
                                            </Col>
                                        </Row>
                                        <br></br><br></br>
                                        <hr></hr>
                                        <h3 style={{ color: "#084442" }}>Commande n°12345667</h3>
                                        <br></br>
                                        <div>
                                            <Row>
                                                <Col sm={10}>
                                                    <p className=''>Date de la commande : 03/11/2023<br></br>
                                                        Total : 45€
                                                    </p>
                                                </Col>
                                                <Col sm={2}>
                                                    <p className='Orders1'>Voir la commande</p>
                                                </Col>
                                            </Row>
                                        </div>
                                        <br></br><br></br>
                                        <Row>

                                            <Col sm={4}>
                                                <img src='./image/monpani.jpeg' className='monpaniimg8nn' />

                                                <p>Produit 1</p>

                                            </Col>
                                            <Col sm={4}>
                                                <img src='./image/monpani.jpeg' className='monpaniimg8nn' />

                                                <p>Produit 1</p>

                                            </Col>
                                            <Col sm={4}>
                                                <img src='./image/monpani.jpeg' className='monpaniimg8nn' />

                                                <p>Produit 1</p>

                                            </Col>
                                        </Row>


                                    </Col>

                                </Row>
                                <Row>
                                    <Col sm={10}>
                                    </Col>
                                    <Col sm={2} >

                                        <Button className='CONTACTEZ-NOUS'>VOIR PLUS</Button>
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

export default Orders
