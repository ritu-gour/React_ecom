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

import './Buy_product.css'
import { Button, Card, Container } from 'react-bootstrap';
const Delivery_n_returns = () => {
    return (
        <div>
            <div className="new-wrapper">

                <div className="showcase3">

                    <img src="./image/Delivery_n_returns.jpeg" alt="Picture"
                        style={{ objectFit: "cover", backgroundPosition: "right 35% top 0%" }} />

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
                        <h2 className='recherche'>Livraison et retours</h2>
                    </div>
                </div>
                <div className='z-in' style={{
                    backgroundImage:
                        "url('./image/blog4.png')", backgroundSize: "contain", backgroundPosition: "right",
                    backgroundRepeat: "no-repeat", padding: "140px 0px 140px 0px" 
                }}>

                </div>
                <Container>
                   <div className='blog98'>
                   <Row>
                        <Col sm={4}>
                            <img src="./image/blog7.jpeg" className='blog8' />
                        </Col>
                        <Col sm={8} >
                           <div className='carddevel'>
                           <h5 className='Clientsb'>Livraison</h5>
                                <p>

                                    Contrairement aux marketplaces classiques, nous n’avons pas d’entrepôt de stockage, nous livrons directement depuis vos commerces de proximité.

                                    <br>
                                    </br> <br></br>
                                    Vous choisissez quand vous souhaitez être livrés : vous pouvez choisir le créneau exact de livraison (jour et heure). La livraison peut s’effectuer dès 2 heures après la commande (en fonction des disponibilités).
                                    <br></br> <br></br>
                                    Profitez de la livraison mutualisée ! Avec Maathena, faites vous livrer des produits provenants de plusieurs commerçants différentes en une seule fois sur un seul et même créneau de votre choix !

                                    <br></br>
                                    <br></br>
                                    Nos livraisons sont 100% sans plastique.
                                    <br></br> <br></br>
                                    Nous accordons une grande importance au respect de l’environement et souhaitons limiter au maximum notre impact carbone. C’est pourquoi nos livraisons sont effectuées avec des véhicules propres : vélos et voitures électriques.                                    </p>
                                <br></br>


                                Le coût de livraison peut varier en fonction de votre commande. Il vous sera indiqué au moment de valider votre panier.
                           
                           </div>
                              
                        </Col>
                    </Row>
                   </div>

                </Container>

                <br></br>
                <div className='z-in' style={{
                    backgroundImage:
                        "url('./image/blog9.png')", backgroundSize: "contain", backgroundPosition: "left",
                    backgroundRepeat: "no-repeat", padding: "140px 0px 140px 0px" 
                }}>

                </div>
                <Container>
                   <div className='blog98'>
                   <Row>
                       
                        <Col sm={8} >
                           <div className='carddevel'>
                           <h5 className='Clientsb'>Retours et échanges</h5>
                                <p>

                                Vous disposez de 30 jours pour retourner ou échanger vos articles

                                    <br>
                                    </br> <br></br>
                                    Pour retourner vos articles, rien de plus simple ! Rendez-vous dans votre espace client en ligne et indiquez-nous le ou les articles que vous souhaitez retourner dans l’onglet “retours”. Vous choisissez la date et l’heure de votre retour et nos livreurs s’occupent du reste. Une fois le produit arrivé chez le commerçant, vous recevrez un remboursement sur le compte bancaire avec lequel vous aviez réglé votre commande.   <br></br> <br></br>
                                    Profitez de la livraison mutualisée ! Avec Maathena, faites vous livrer des produits provenants de plusieurs commerçants différentes en une seule fois sur un seul et même créneau de votre choix !

                                    <br></br>
                                    <br></br>
                                    
Vos produits doivent être retournés dans le même état que vous les avez reçus, dans leur emballage d’origine.  Les produits périssables tels que les fleurs ou la nourriture ne peuvent être renvoyés
                                    <br></br> <br></br>
                                    Nous accordons une grande importance au respect de l’environement et souhaitons limiter au maximum notre impact carbone. C’est pourquoi nos livraisons sont effectuées avec des véhicules propres : vélos et voitures électriques.                                    </p>
                                <br></br>


                                Les cartes cadeaux, les produits d’hygiène et les sous-vêtements ne peuvent également pas être retournés.
                           
                           </div>
                              
                        </Col>
                        <Col sm={4}>
                            <img src="./image/blog10.jpeg" className='blog89' />
                        </Col>
                    </Row>
                   </div>

                </Container>
                <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
                <Footer />
            </div>
        </div>
    )
}

export default Delivery_n_returns
