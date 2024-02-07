import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../Footer'
import './Carte.css'
import { CiHeart } from "react-icons/ci";
import { FaMinus } from "react-icons/fa6";
import Carousel from 'react-bootstrap/Carousel'
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPlus } from "react-icons/fa6";
import { Button, Container } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
const Carte = () => {
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    return (
        <div>
            <div className="new-wrapper">
                <div className="showcase">
                    <div id="google_translate_element" style={{ float: 'right' }}></div>
                    <img src="./image/Cartecadeau.png" alt="Picture" />
                    <div className="overlay7">
                        <h2>Carte cadeau</h2>

                    </div>
                </div>

                <div className="itemcart">
                    <Container>
                        <Row>

                            <Col>
                                <Carousel data-bs-theme="dark" className='carousel'>
                                    <Carousel.Item>

                                        <img
                                            className="d-block w-100 r1 gift2"
                                            src="./image/gift.png"
                                            alt="/"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>

                                        <img
                                            className="d-block w-100 r1 gift2 "
                                            src="./image/gift.png"
                                            alt="/"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>

                                        <img
                                            className="d-block w-100 r1 gift2"
                                            src="./image/gift.png"
                                            alt="/"
                                        />

                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                            <Col>
                                <h3 className='cartetitle'>Carte cadeau Maathena</h3>
                                <p>Envie de faire plaisir à vos proches ? Avec la carte cadeau Maathena, offrez la liberté de choisir parmis des produits locaux et éthiques de différents commerces.</p>
                                <p className='mb-5'>Emballage et carte 100% carton recyclé.</p>
                                <p >Montant de la carte :</p>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-">
                                        <p className='backg'>20</p>
                                    </div>
                                    <div className="p-2">
                                        <p className='backg1'>50</p>
                                    </div>
                                    <div className="p-2">
                                        <p className='backg1'>100</p>
                                    </div>
                                </Stack>
                                <h2 className='price09'>20€</h2>
                                <Row>
                                    <Col>
                                        <div className="col-md-1">
                                            <div className="input-group">
                                                <Stack direction="horizontal" gap={3} className="enq">
                                                    <div className="p-"><div className="input-group-prepend">
                                                        <Button className="btn btn-outline-primary" type="button" onClick={decNum}><FaMinus /></Button>
                                                    </div></div>
                                                    <div className="p-"><input type="text" style={{ fontSize: "20px" }} className="form-control num" value={num} onChange={handleChange} /></div>
                                                    <div className="p-" > <div className="input-group-prepend">
                                                        <Button className="btn btn-outline-primary" type="button" onClick={incNum}><FaPlus /></Button>
                                                    </div></div>
                                                    <div className="p">

                                                    </div>
                                                </Stack>







                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <Button className="btnfav " ><CiHeart />
                                            Favoris</Button>
                                    </Col>
                                </Row>

                                <Button className=" addto" >
                                    <FaShoppingCart /> Ajouter au panier</Button>
                                <Button className=" addto1 mb-5" >
                                    Acheter maintenant</Button>
                                <hr className="borderw"/>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Fonctionnement</Accordion.Header>
                                        <Accordion.Body>
                                            <Stack direction="horizontal" gap={3}>
                                                <div className="p-">1.</div>
                                                <div className="p-">Choisissez le montant de votre carte et passez la commande.</div>

                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <div className="p-">2.</div>
                                                <div className="p-">Choisissez l’adresse de livraison : directement chez le destinataire ou chez vous. </div>

                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <div className="p-">3.</div>
                                                <div className="p-">Le destinataire de la carte choisit ses produits et rentre son code carte cadeau au moment du paiement.</div>

                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <div className="p-">4.</div>
                                                <div className="p-">Le montant de la carte est déduit automatiquement de son panier.</div>

                                            </Stack>
                                            <Stack direction="horizontal" gap={3}>
                                                <div className="p-">5.</div>
                                                <div className="p-">Si le montant de la carte n'est pas suffisant pour couvrir tous ses achats, il peut compléter le reste avec un autre moyen de paiement.</div>

                                            </Stack>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <hr />
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Livraison</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Vous choisissez quand vous souhaitez être livrés : vous pouvez choisir le créneau exact de livraison (jour et heure). La livraison peut s’effectuer dès 2 heures après la commande (en fonction des disponibilités).
                                                Le coût de livraison peut varier en fonction de votre commande. Il vous sera indiqué au moment de valider votre panier.
                                                Pour en savoir plus sur les modalités de livraison, consultez notre page Livraisons et retours.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <hr />
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Retours</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Nous n’acceptons pas les retours de cartes cadeau.
                                                Pour en savoir plus sur les conditions de retour, consultez notre page Livraisons et retours.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>

                        </Row>

                    </Container>
                </div>



                <Footer />
            </div>



        </div>
    )
}

export default Carte
