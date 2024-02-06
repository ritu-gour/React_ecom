import React from 'react'

import Footer from '../Footer'
import { CiSearch } from "react-icons/ci";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { FaRegUser } from "react-icons/fa6";
import { BsBucket } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { Button, Card, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';





const Recherches = () => {
    return (
        <div>
            <div className="new-wrapper">

                <div className="showcase3">

                    <img src="./image/search_result.jpeg" alt="Picture" style={{ objectFit: "cover" }} />

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
                    <Row className='reasearc09765'>
                        <Col sm={6}>
                            <Card className='reaesrch6798'>
                                <h2 className='commen mb-4 text-center commm'>Par commerçant</h2>
                                <img src='./img/profilestor.png' className='reahcserch45' />
                                <Button className='RECHERCHER11'>RECHERCHER</Button>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card className='reaesrch6798' style={{background:"#EAEAEA"}}>
                                <h2 className='commen mb-4 text-center commm'>Par produit</h2>
                                <img src='./img/meile11.jpeg' className='reahcserch45' />
                                <Button className='RECHERCHER11'>RECHERCHER</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <div className='avecsection' style={{
                    backgroundImage:
                        "url('./bannerethic.png')", backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>

                    <Row>
                        <Col sm={6}>

                        </Col>
                        <Col sm={6}>
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
                </div>
                <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
                <Footer />
            </div>
        </div>
    )
}

export default Recherches
