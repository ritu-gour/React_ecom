import React from 'react'

import Footer from '../Footer'

import { IoMdCheckmark } from "react-icons/io";

import { Button, Card, Col, Container, Nav, Row, Stack } from 'react-bootstrap'

import './Offer.css'


const Offer = () => {
    return (
        <div>
            <div className="new-wrapper " >

                <div className="showcase3 " >

                    {/* <img src="./Component2.png" alt="Picture" /> */}

                    <div className="overlay" >
                        <Row className='displayb'>
                            <Col>
                            </Col>
                            <Col>
                            </Col>
                            <Col>
                                <Nav className="justify-content-end bn9" activeKey="" >

                                    <Nav.Item>
                                        <Nav.Link href="/"> <img src="./img/Ellipse.png" className='Ellipse' /></Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </Col>
                        </Row>
                        <h2 className='My_account mb-3'>Mon compte</h2>


                    </div>
                </div>
                <div >
                    <div className='dasbb'>
                        <Container >
                            <Row>
                                <Col sm={3}>
                                    <p className='table19' ><b>Données personnelles</b></p>

                                    <p className='table19'><b style={{ fontWeight: "800" }}>Mon offre</b> </p>
                                    <p className='table19'>Paramètres</p>


                                </Col>
                                <Col sm={9}>
                                    <h2 className='chiffre'>Mon offre</h2>
                                    <Card className='maathenabackb'>
                                        <img src='./image/maathenaback.jpeg' className='maathenaback' />

                                        <Stack direction="horizontal" gap={3} className='my-3'>

                                            <div className="mb-5" > <h2 className='chiffre'>Maathena Premium</h2>
                                            </div>
                                            <div className=" bn987atob">


                                                <h2 className='chiffre text-end'>229,99€ / mois</h2>
                                                <div ><p className='Abonnement text-end'>Abonnement 1 an<br></br>
                                                    Début abonnement : 21 janvier 2024<br></br>
                                                    Fin abonnement : 21 janvier 2025</p>
                                                </div>


                                            </div>

                                        </Stack>
                                        <p style={{ color: "#323334", fontSize: "18px" }}>Inclus dans mon offre :</p>
                                        <Stack direction="horizontal" gap={3} className='my-3'>
                                            <div>
                                                <IoMdCheckmark className='checkmark' />
                                            </div>
                                            <div>
                                                <p className='checkmark1'>Boutique en ligne Maathena</p>
                                                <p className='checkmark2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula ut sodales. Phasellus eleifend diam ut sem congue, in ultricies risus efficitur. Nam malesuada rhoncus congue. Vivamus malesuada justo vel tincidunt mattis. </p>
                                            </div>
                                        </Stack>

                                        <Stack direction="horizontal" gap={3} className='my-3'>
                                            <div>
                                                <IoMdCheckmark className='checkmark' />
                                            </div>
                                            <div>
                                                <p className='checkmark1'>Gestion des livraisons et des retours</p>
                                                <p className='checkmark2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula ut sodales. Phasellus eleifend diam ut sem congue, in ultricies risus efficitur. Nam malesuada rhoncus congue. Vivamus malesuada justo vel tincidunt mattis. </p>
                                            </div>
                                        </Stack>


                                        <Stack direction="horizontal" gap={3} className='my-3'>
                                            <div>
                                                <IoMdCheckmark className='checkmark' />
                                            </div>
                                            <div>
                                                <p className='checkmark1'>Mise en place du système de suivi des ventes</p>
                                                <p className='checkmark2'>Mise en place des outils pour le suivi de vos ventes en magasin et en ligne.<br></br>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula ut sodales. Phasellus eleifend diam.

                                                </p>
                                            </div>
                                        </Stack>
                                        <Stack direction="horizontal" gap={3} className='my-3'>
                                            <div>
                                                <IoMdCheckmark className='checkmark' />
                                            </div>
                                            <div>
                                                <p className='checkmark1'>Outils de pilotage de votre activité & recommandations</p>
                                                <p className='checkmark2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula ut sodales. Phasellus eleifend diam ut sem congue, in ultricies risus efficitur. Nam malesuada rhoncus congue. Vivamus malesuada justo vel tincidunt mattis.

                                                </p>
                                            </div>
                                        </Stack>
                                        <Button className='CHANGEROFFRE'>CHANGER D’OFFRE</Button>
                                        <p className='text-center my-4'>Pour annuler votre abonnement, <a href='#' className='cliquez'>cliquez ici.</a></p>
                                    </Card>
                                    <Card className='maathenabackbn'>

                                        <h2 className='chiffre'>Souscrire à des services additionnels</h2>
                                        <p style={{ color: "#323334" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula ut sodales. Phasellus eleifend diam ut sem congue.</p>

                                        <Row>
                                            <Col sm={6}>
                                                <Card className='tabcard'>
                                                    <img src='./image/tab1.jpeg' className='tab45908 mb-2'/>
                                                    <p className='text-center ' style={{fontWeight:"800"}}>Service 1</p>
                                                    <p className='text-center'  style={{fontWeight:"800"}}>15€99 / mois</p>
                                                    <p className='text-center mb-5'>Lorem ipsum dolor sit ameti consectetur <br></br> malor adipis.</p>
                                                   <Button className='CHANGEROFFRE1 mb-2'>DÉCOUVRIR</Button> 
                                                </Card>
                                            </Col>
                                            <Col sm={6}>
                                            <Card className='tabcard'>
                                                    <img src='./image/tab2.jpeg' className='tab45908 mb-2'/>
                                                    <p className='text-center ' style={{fontWeight:"800"}}>Service 2</p>
                                                    <p className='text-center'  style={{fontWeight:"800"}}>3€99 / mois</p>
                                                    <p className='text-center mb-5'>Lorem ipsum dolor sit ameti consectetur <br></br> malor adipis.</p>
                                                   <Button className='CHANGEROFFRE1 mb-2'>DÉCOUVRIR</Button> 
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>

                            </Row>
                        </Container>
                        <br></br> <br></br> <br></br>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Offer
