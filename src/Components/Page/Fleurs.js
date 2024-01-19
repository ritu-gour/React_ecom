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
                                <Nav className="justify-content-end bn" activeKey="" >
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
                        <Container><Row>
                            <Col></Col>
                            <Col >
                                <img src='./avery.png' className='averyy' />
                            </Col>
                            <Col>
                                <h2 className='recherche'>Fleurs & Co</h2>
                            </Col><Col></Col><Col></Col>
                        </Row></Container>
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
                            <Card className="category" style={{ margin: "20px" }} >
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
                                <Col sm={4}>sm=4</Col>
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
                                                   <span style={{color:"black",fontSize:"40px"}} className='bsdot'><BsDot/></span> <span className='bsdot1' style={{color:"#dcdcdc",fontSize:"40px"}}> <BsDot /></span>
                                                <h4 style={{fontSize:"20px",color:"black"}}>39€</h4>
                                                </Card.Title>


                                            </Card.Body>

                                        </Card>
                                        <Card className="category" style={{ margin: "20px" }} >
                                            <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                            <Card.Body>
                                                <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                                <p className='produitp'>Produit</p>
                                                <span style={{color:"black",fontSize:"40px"}} className='bsdot'><BsDot/></span> <span className='bsdot1' style={{color:"#dcdcdc",fontSize:"40px"}}> <BsDot /></span>
                                                <h4 style={{fontSize:"20px",color:"black"}}>39€</h4>
                                                </Card.Title>


                                            </Card.Body>

                                        </Card>
                                        <Card className="category" style={{ margin: "20px" }} >
                                            <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                            <Card.Body>
                                                <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                                <p className='produitp'>Produit</p>
                                                <span style={{color:"black",fontSize:"40px"}} className='bsdot'><BsDot/></span> <span className='bsdot1' style={{color:"#dcdcdc",fontSize:"40px"}}> <BsDot /></span>
                                                <h4 style={{fontSize:"20px",color:"black"}}>39€</h4>
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
                                                   <span style={{color:"black",fontSize:"40px"}} className='bsdot'><BsDot/></span> <span className='bsdot1' style={{color:"#dcdcdc",fontSize:"40px"}}> <BsDot /></span>
                                                <h4 style={{fontSize:"20px",color:"black"}}>39€</h4>
                                                </Card.Title>


                                            </Card.Body>

                                        </Card>
                                        <Card className="category" style={{ margin: "20px" }} >
                                            <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                            <Card.Body>
                                                <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                                <p className='produitp'>Produit</p>
                                                <span style={{color:"black",fontSize:"40px"}} className='bsdot'><BsDot/></span> <span className='bsdot1' style={{color:"#dcdcdc",fontSize:"40px"}}> <BsDot /></span>
                                                <h4 style={{fontSize:"20px",color:"black"}}>39€</h4>
                                                </Card.Title>


                                            </Card.Body>

                                        </Card>
                                        <Card className="category" style={{ margin: "20px" }} >
                                            <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                            <Card.Body>
                                                <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                                <p className='produitp'>Produit</p>
                                                <span style={{color:"black",fontSize:"40px"}} className='bsdot'><BsDot/></span> <span className='bsdot1' style={{color:"#dcdcdc",fontSize:"40px"}}> <BsDot /></span>
                                                <h4 style={{fontSize:"20px",color:"black"}}>39€</h4>
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
                                                   <span style={{color:"black",fontSize:"40px"}} className='bsdot'><BsDot/></span> <span className='bsdot1' style={{color:"#dcdcdc",fontSize:"40px"}}> <BsDot /></span>
                                                <h4 style={{fontSize:"20px",color:"black"}}>39€</h4>
                                                </Card.Title>


                                            </Card.Body>

                                        </Card>
                                        <Card className="category" style={{ margin: "20px" }} >
                                            <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                            <Card.Body>
                                                <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                                <p className='produitp'>Produit</p>
                                                <span style={{color:"black",fontSize:"40px"}} className='bsdot'><BsDot/></span> <span className='bsdot1' style={{color:"#dcdcdc",fontSize:"40px"}}> <BsDot /></span>
                                                <h4 style={{fontSize:"20px",color:"black"}}>39€</h4>
                                                </Card.Title>


                                            </Card.Body>

                                        </Card>
                                        <Card className="category" style={{ margin: "20px" }} >
                                            <img className="Productimg" variant="top" src="./image/product2.jpeg" />
                                            <Card.Body>
                                                <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                                <p className='produitp'>Produit</p>
                                                <span style={{color:"black",fontSize:"40px"}} className='bsdot'><BsDot/></span> <span className='bsdot1' style={{color:"#dcdcdc",fontSize:"40px"}}> <BsDot /></span>
                                                <h4 style={{fontSize:"20px",color:"black"}}>39€</h4>
                                                </Card.Title>


                                            </Card.Body>

                                        </Card>
                                    </CardGroup>

                                </Col>

                            </Row>
                        </div>
                    </Container>
                </div>
                <Footer />
            </div>
        </div>
    )
}


export default Fleurs
