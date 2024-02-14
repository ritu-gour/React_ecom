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
import { MdArrowForwardIos } from 'react-icons/md';
const Blog = () => {
    return (
        <div>
            <div className="new-wrapper">

                <div className="showcase3">

                    <img src="./image/blog.jpeg" alt="Picture"
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
                        <h2 className='recherche'>Blog</h2>
                    </div>
                </div>

                <Container>
                    <Row>
                        <Col sm={6}>
                            <div>
                                {/* <h5 className='Clients'>Clients</h5> */}
                                <Card className='cardblog'>
                                    <Card.Img variant="top" src="./image/blog1.jpeg"className='cardblog9' />
                                    <Card.Body>
                                        <p className=''>Catégorie</p>
                                        <Card.Title className='Lireplus1'>Titre de l’article </Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                                        </Card.Text>
                                        <Button className='Lireplus'>Lire plus</Button>
                                    </Card.Body>
                                </Card>

                            </div>
                        </Col>
                        <Col sm={6}>
                            <div>
                                {/* <h5 className='Clients'>Vendeurs</h5> */}
                                <Card className='cardblog'>
                                    <Row>
                                        <Col sm={6}>
                                        <Card.Img variant="top" src="./image/blog2.jpeg" className='lirepimg'/>
                                        </Col>
                                        <Col sm={6}>
                                        <Card.Body>
                                        <p>Catégorie</p>
                                        
                                        <Card.Title className='Lireplus1'>Titre de l’article </Card.Title>

                                        <Card.Text className='mb-3'>
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                                        </Card.Text>
                                       <a href='#' className='lireplusv '>Lire plus <MdArrowForwardIos /></a>
                                    </Card.Body>
                                        </Col>
                                    </Row>
                                   
                                   
                                </Card>
                                <Card className='cardblog cardblog8'>
                                    <Row>
                                        <Col sm={6}>
                                        <Card.Img variant="top" src="./image/blog3.jpeg" className='lirepimg'/>
                                        </Col>
                                        <Col sm={6}>
                                        <Card.Body>
                                        <p>Catégorie</p>
                                        
                                        <Card.Title className='Lireplus1'>Titre de l’article </Card.Title>

                                        <Card.Text className='mb-3'>
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                                        </Card.Text>
                                       <a href='#' className='lireplusv '>Lire plus <MdArrowForwardIos /></a>
                                    </Card.Body>
                                        </Col>
                                    </Row>
                                   
                                   
                                </Card>
                                
                            </div>
                        </Col>
                    </Row>
                    <br></br> <br></br>
<Row>
    <Col sm={10}>
    </Col>
    <Col sm={2} >

    <Button className='CONTACTEZ-NOUS'>VOIR PLUS</Button>
    </Col>
</Row>
                   
                   
                </Container>
                <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
                <Footer />
            </div>
        </div>
    )
}

export default Blog

