import React from 'react'
import Footer from '../Footer'
import { CiSearch } from "react-icons/ci";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { FaRegUser } from "react-icons/fa6";
import { BsBucket } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import './Fleurs.css'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button, Container, Form } from 'react-bootstrap';
import { CiFilter } from "react-icons/ci";
import Stack from 'react-bootstrap/Stack';
import { BsDot } from "react-icons/bs";
const Fleurs = () => {
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
                                <Nav className="justify-content-end bn88" activeKey="" >
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
                        <Container>
                            <Row>
                                <Col>
                                </Col>
                                <Col>
                                    <Stack direction="horizontal" gap={3}>
                                        <div className="p-2"> <img src='./image/avery1.png' className='averyy' /></div>
                                        <div className="p-2"><h2 className='recherche'>Fleurs & Co</h2></div>

                                    </Stack>
                                </Col>
                                <Col>
                                </Col>
                            </Row>

                            {/* <Row>
                                <Col></Col>
                                <Col >
                                    <img src='./avery.png' className='averyy' />
                                </Col>
                                <Col>
                                    <h2 className='recherche'>Fleurs & Co</h2>
                                </Col><Col></Col><Col></Col>
                            </Row> */}
                        </Container>
                    </div>
                </div>


                <div className='avecsection2' style={{
                    backgroundImage:
                        "url('./image/fleursbanner.png')", backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>

                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <img src='./image/fleurs.png' className='fleursimg' />
                                </div>
                            </Col>
                            <Col>
                                <div className='bonsection'>
                                    <p className='Bon'>BON PLAN</p>
                                    <h2 className='jusq'>JUSQU’A  <span className='jusq1'> -50%</span> <br></br>
                                        SUR LE LINGE DE MAISON</h2>
                                    <Button className='btnprodit'>J’EN PRODITE !</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div className='margfleur'>
                    <Container >
                        <h1 className='pres text-center mb'>Catégories </h1>
                        <p className='text-center mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis.</p>
                        <CardGroup>
                            <Card className="category4" style={{ margin: "20px" }} >
                                <img className="categoryimgfleur" variant="top" src="./image/categoryfleure1.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Catégorie</p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="category4" style={{ margin: "20px" }} >
                                <img className="categoryimgfleur" variant="top" src="./image/categoryfleure2.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Catégorie</p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="category4" style={{ margin: "20px" }} >
                                <img className="categoryimgfleur" variant="top" src="./image/categoryfleure.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Catégorie</p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                        </CardGroup>


                    </Container>
                </div>

                <div className='margfleur'>
                    <Container >
                        <h1 className='pres text-center mb'>Meilleures ventes</h1>
                        <CardGroup>
                            <Card className="categorycardfle" style={{ margin: "20px" }} >
                                <img className="meileimg" variant="top" src="./meile11.jpeg" />
                                <Card.Body>
                                    <Card.Title>
                                        <Row>
                                            <Col>
                                                <p className='title122 '>Produit</p>

                                            </Col>
                                            <Col>
                                                <p className='title122 ' style={{ float: "right" }}>5,99€</p>
                                            </Col>
                                        </Row>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="categorycardfle" style={{ margin: "20px" }} >
                                <img className="meileimg" variant="top" src="./meile11.jpeg" />
                                <Card.Body>
                                    <Card.Title>
                                        <Row>
                                            <Col>
                                                <p className='title122 '>Produit</p>

                                            </Col>
                                            <Col>
                                                <p className='title122 ' style={{ float: "right" }}>5,99€</p>
                                            </Col>
                                        </Row>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="categorycardfle" style={{ margin: "20px" }} >
                                <img className="meileimg" variant="top" src="./meile11.jpeg" />
                                <Card.Body>
                                    <Card.Title>
                                        <Row>
                                            <Col>
                                                <p className='title122 '>Produit</p>

                                            </Col>
                                            <Col>
                                                <p className='title122 ' style={{ float: "right" }}>5,99€</p>
                                            </Col>
                                        </Row>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="categorycardfle" style={{ margin: "20px" }} >
                                <img className="meileimg" variant="top" src="./meile11.jpeg" />
                                <Card.Body>
                                    <Card.Title>
                                        <Row>
                                            <Col>
                                                <p className='title122 '>Produit</p>

                                            </Col>
                                            <Col>
                                                <p className='title122 ' style={{ float: "right" }}>5,99€</p>
                                            </Col>
                                        </Row>

                                    </Card.Title>


                                </Card.Body>

                            </Card>

                        </CardGroup>

                        <CardGroup>
                            <Card className="categorycardfle" style={{ margin: "20px" }} >
                                <img className="meileimg" variant="top" src="./meile11.jpeg" />
                                <Card.Body>
                                    <Card.Title>
                                        <Row>
                                            <Col>
                                                <p className='title122 '>Produit</p>

                                            </Col>
                                            <Col>
                                                <p className='title122 ' style={{ float: "right" }}>5,99€</p>
                                            </Col>
                                        </Row>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="categorycardfle" style={{ margin: "20px" }} >
                                <img className="meileimg" variant="top" src="./meile11.jpeg" />
                                <Card.Body>
                                    <Card.Title>
                                        <Row>
                                            <Col>
                                                <p className='title122 '>Produit</p>

                                            </Col>
                                            <Col>
                                                <p className='title122 ' style={{ float: "right" }}>5,99€</p>
                                            </Col>
                                        </Row>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="categorycardfle" style={{ margin: "20px" }} >
                                <img className="meileimg" variant="top" src="./meile11.jpeg" />
                                <Card.Body>
                                    <Card.Title>
                                        <Row>
                                            <Col>
                                                <p className='title122 '>Produit</p>

                                            </Col>
                                            <Col>
                                                <p className='title122 ' style={{ float: "right" }}>5,99€</p>
                                            </Col>
                                        </Row>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="categorycardfle" style={{ margin: "20px" }} >
                                <img className="meileimg" variant="top" src="./meile11.jpeg" />
                                <Card.Body>
                                    <Card.Title>
                                        <Row>
                                            <Col>
                                                <p className='title122 '>Produit</p>

                                            </Col>
                                            <Col>
                                                <p className='title122 ' style={{ float: "right" }}>5,99€</p>
                                            </Col>
                                        </Row>

                                    </Card.Title>


                                </Card.Body>

                            </Card>

                        </CardGroup>
                        <a href='#' style={{ float: "right" }} className='fareg'><IoArrowForwardCircleOutline /></a>

                    </Container>
                </div>
                <div className='margfleur'>
                    <Container>
                        <div>

                            <Row>
                                <Col sm={4}>
                                    <div className='' style={{ margin: "140px 0px 0px 0px" }}>
                                        <p>Nouveautés</p>
                                        <p className='rideaux rid'>Rideaux</p>
                                        <p className='rideaux'>Linge de maison</p>
                                        <p className='rideaux'>Vêtements</p>
                                        <p>T-shirts</p>
                                        <Row>
                                            <Col sm={1}></Col>
                                            <Col sm={10}>
                                                <p className='rideaux1' >Manches longues</p>
                                                <p className='rideaux1'>manches courtes</p>
                                                <p className='rideaux1'>Lorem</p>
                                                <p className='rideaux1'>Lorem</p>
                                                <p className='rideaux1'>Lorem</p>
                                                <p className='rideaux1'>Lorem</p>

                                            </Col>
                                        </Row>
                                        <p className='rideaux1'>Vestes</p>
                                        <p className='rideaux1'>Pantalons</p>
                                        <p className='rideaux1'>Chemises</p>
                                        <p className='rideaux1'>Sous-vêtements</p>
                                        <p className='rideaux7'>Genre</p>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Homme" />
                                                <Form.Check type="checkbox" label="Femme" />
                                            </Form.Group>

                                        </Form>

                                        <div>
                                            <p className='rideaux7'>Label</p>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Eco-responsable" />
                                                    <Form.Check type="checkbox" label="Fabriqué en France" />
                                                    <Form.Check type="checkbox" label="Biologique" />
                                                </Form.Group>

                                            </Form>
                                            <div>
                                                <p className='rideaux7 mb-4'>Couleur</p>
                                                <Row>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "white", border: "1px solid black" }}></p>
                                                    </Col>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "#3069A2" }}></p>
                                                    </Col>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "#6A62C4" }}></p>
                                                    </Col>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "#D18DE2" }}></p>
                                                    </Col>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "#F34F76" }}></p>
                                                    </Col>
                                                    <Col></Col><Col></Col><Col></Col><Col></Col><Col></Col>
                                                </Row>
                                                <div className='my-2'> <Row>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "#F0AB84" }}></p>
                                                    </Col>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "#97634C" }}></p>
                                                    </Col>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "#FAE161" }}></p>
                                                    </Col>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "#ABD158" }}></p>
                                                    </Col>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "#479B45" }}></p>
                                                    </Col>
                                                    <Col></Col><Col></Col><Col></Col><Col></Col><Col></Col>
                                                </Row></div>
                                                <Row>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "#3FB28F" }}></p>
                                                    </Col>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "#93EFF4" }}></p>
                                                    </Col>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "#FFEECD" }}></p>
                                                    </Col>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "#C6C6C6" }}></p>
                                                    </Col>
                                                    <Col>
                                                        <p style={{ padding: "10px 14px 10px 14px", background: "#373737" }}></p>
                                                    </Col>
                                                    <Col></Col><Col></Col><Col></Col><Col></Col><Col></Col>
                                                </Row>

                                            </div>
                                        </div>
                                        <div>
                                            <p className='rideaux7'>Filtre bouton</p>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check type="radio" label="Option 1" />
                                                    <Form.Check type="radio" label="Option 2" />
                                                    <Form.Check type="radio" label="Option 3" />
                                                    <Form.Check type="radio" label="Option 4" />
                                                </Form.Group>

                                            </Form>
                                        </div>
                                        <div>
                                            <p className='rideaux7'>Prix</p>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="0€ – 40€" />
                                                    <Form.Check type="checkbox" label="40€ – 100€" />
                                                    <Form.Check type="checkbox" label="100€ – 150€" />
                                                    <Form.Check type="checkbox" label="150€ – 175€" />
                                                    <Form.Check type="checkbox" label="175€ – 250€" />
                                                    <Form.Check type="checkbox" label="250€ – 350€" />

                                                </Form.Group>
                                                <input type="range" />
                                               
                                            

                                       
                                    </Form>
                                </div>
                        </div>


                    </Col>
                    <Col sm={8}>

                        <h1 className='pres78 mb'>VêTEMENTS</h1>
                        <p style={{ fontSize: "16px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate<br></br> convallis ligula ut sodales. Phasellus eleifend diam ut</p>
                        <Row>
                            <Col className='form34'>

                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-"> <CiFilter style={{ fontSize: "28px" }} /></div>
                                    <div className="p-"><Form>
                                        <Form.Select aria-label="Default select example" className='slect2'>
                                            <option>TRIER</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form></div>

                                </Stack>


                            </Col>
                            <Col className='form34 my-5'>
                                <p style={{ float: "right" }}>produits</p>
                            </Col>
                        </Row>

                        <CardGroup>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='produitp'>Produit</p>
                                        <span style={{ color: "black", fontSize: "40px" }} className='bsdot'><BsDot /></span> <span className='bsdot1' style={{ color: "#dcdcdc", fontSize: "40px" }}> <BsDot /></span>
                                        <h4 style={{ fontSize: "20px", color: "black" }}>39€</h4>
                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='produitp'>Produit</p>
                                        <span style={{ color: "black", fontSize: "40px" }} className='bsdot'><BsDot /></span> <span className='bsdot1' style={{ color: "#dcdcdc", fontSize: "40px" }}> <BsDot /></span>
                                        <h4 style={{ fontSize: "20px", color: "black" }}>39€</h4>
                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='produitp'>Produit</p>
                                        <span style={{ color: "black", fontSize: "40px" }} className='bsdot'><BsDot /></span> <span className='bsdot1' style={{ color: "#dcdcdc", fontSize: "40px" }}> <BsDot /></span>
                                        <h4 style={{ fontSize: "20px", color: "black" }}>39€</h4>
                                    </Card.Title>


                                </Card.Body>

                            </Card>
                        </CardGroup>
                        <CardGroup>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='produitp'>Produit</p>
                                        <span style={{ color: "black", fontSize: "40px" }} className='bsdot'><BsDot /></span> <span className='bsdot1' style={{ color: "#dcdcdc", fontSize: "40px" }}> <BsDot /></span>
                                        <h4 style={{ fontSize: "20px", color: "black" }}>39€</h4>
                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='produitp'>Produit</p>
                                        <span style={{ color: "black", fontSize: "40px" }} className='bsdot'><BsDot /></span> <span className='bsdot1' style={{ color: "#dcdcdc", fontSize: "40px" }}> <BsDot /></span>
                                        <h4 style={{ fontSize: "20px", color: "black" }}>39€</h4>
                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='produitp'>Produit</p>
                                        <span style={{ color: "black", fontSize: "40px" }} className='bsdot'><BsDot /></span> <span className='bsdot1' style={{ color: "#dcdcdc", fontSize: "40px" }}> <BsDot /></span>
                                        <h4 style={{ fontSize: "20px", color: "black" }}>39€</h4>
                                    </Card.Title>


                                </Card.Body>

                            </Card>
                        </CardGroup>
                        <CardGroup>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='produitp'>Produit</p>
                                        <span style={{ color: "black", fontSize: "40px" }} className='bsdot'><BsDot /></span> <span className='bsdot1' style={{ color: "#dcdcdc", fontSize: "40px" }}> <BsDot /></span>
                                        <h4 style={{ fontSize: "20px", color: "black" }}>39€</h4>
                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='produitp'>Produit</p>
                                        <span style={{ color: "black", fontSize: "40px" }} className='bsdot'><BsDot /></span> <span className='bsdot1' style={{ color: "#dcdcdc", fontSize: "40px" }}> <BsDot /></span>
                                        <h4 style={{ fontSize: "20px", color: "black" }}>39€</h4>
                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="category" style={{ margin: "20px" }} >
                                <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='produitp'>Produit</p>
                                        <span style={{ color: "black", fontSize: "40px" }} className='bsdot'><BsDot /></span> <span className='bsdot1' style={{ color: "#dcdcdc", fontSize: "40px" }}> <BsDot /></span>
                                        <h4 style={{ fontSize: "20px", color: "black" }}>39€</h4>
                                    </Card.Title>


                                </Card.Body>

                            </Card>
                        </CardGroup>

                    </Col>

                </Row>
            </div>
        </Container>
                </div >
    <Footer />
            </div >
        </div >
    )
}


export default Fleurs
