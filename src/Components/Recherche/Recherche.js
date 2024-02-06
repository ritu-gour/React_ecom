import React from 'react'
import Footer from '../Footer'


import { CiSearch } from "react-icons/ci";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Recherche.css'

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import Nav from 'react-bootstrap/Nav';
import { FaRegUser } from "react-icons/fa6";
import { BsBucket } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
const Recherche = () => {
    return (
        <div>
            <div className="new-wrapper">
                   
                <div className="showcase3">
                    {/* <div id="google_translate_element" style={{ float: 'right' }}></div> */}
                    <img src="./Component2.png" alt="Picture" />

                    <div className="overlay">
                        <Row>
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
                        <h2 className='recherche'>Recherche</h2>
                    </div>
                </div>

                <Container >
                    <div className='recherchebg'>
                        <Row>
                            <Col>
                                <h3 className='text-white'>Recherche rapide</h3>
                                <p className='text-white' style={{ fontSize: "15px" }}>Je sais exactement ce que je veux !</p>
                            </Col>
                            <Col className='my-4'>
                                <Form >

                                    <div className="d-flex">
                                        <Form.Control type="text" className='form1' placeholder='Εx: Bougie Lys Monbougieshop' />

                                        <Button variant="" className='btn809' type="button">
                                            RECHERCHER
                                        </Button>

                                    </div>



                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Container>
                    <div className='marg97'>
                        <h2 className='commen mb-4'>Par commerçant</h2>
                        <p className='  comment'>Catégories </p>
                        <CardGroup>

                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="categoryimg" variant="top" src="./category1.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Cavistes</p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="categoryimg" variant="top" src="./category2.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Cosmétique</p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="categoryimg" variant="top" src="./category3.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Décoration</p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                        </CardGroup>
                        <CardGroup>

                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="categoryimg" variant="top" src="./category4.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Epicerie
                                        </p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="categoryimg" variant="top" src="./category5.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Habillement</p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="categoryimg" variant="top" src="./category5.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Habillement
                                        </p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                        </CardGroup>
                        <CardGroup>

                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="categoryimg" variant="top" src="./category6.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Librairie</p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="categoryimg" variant="top" src="./category7.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Loisirs</p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="categoryimg" variant="top" src="./category8.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Maraichers</p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                        </CardGroup>

                        <h2 className='commen mb-4'>Lieu</h2>
                        <Form>
                            <Row>

                                <Col>

                                    <Form.Label>Ville:</Form.Label>

                                    <Form.Select aria-label="Default select example">
                                        <option></option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <p style={{ float: "right", fontSize: "14px", padding: "3px 30px 0px 0px" }}>Me géolocaliser</p>
                                </Col>
                                <Col className='form87'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Dans un rayon de:</Form.Label>
                                        <Row><Col>
                                            <Form.Control type="text" placeholder="" />
                                        </Col>
                                            <Col>
                                                Km
                                            </Col>
                                        </Row>


                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3 my-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Retrait en magasin disponible" />
                            </Form.Group>

                            <Button variant="my-5" type="submit" className='rechercher4'>
                                RECHERCHER
                            </Button>
                        </Form>
                    </div>
                </Container>
                <div className='avecsection' style={{
                    backgroundImage:
                        "url('./bannerethic.png')", backgroundSize: "cover",
                    backgroundRepeat: "no-repeat" 
                }}>
               
                 <Row>
                    <Col>
                    
                    </Col>
                    <Col>
                    <div className='avec1'>
                    <h3 className='avec'>Avec Maathena, je consomme...</h3>
                    <p className='local'>LOCAL</p>
                    <p className='local'>FRANCAIS</p>
                    <h3 className='local1'>ETHIQUE</h3>
                    <p className='local'>BIOLOGIQUE</p>
                    <p className='local'>EQUITABLE</p>
                    </div>
                    </Col>
                 </Row>
                </div><br></br><br></br>
                <br></br>
                <Footer />
            </div>
        </div>
    )
}

export default Recherche
