import React from 'react'
import Footer from '../Footer'
import './Welcome.css'
import Categories from './Categories';
import { CiSearch } from "react-icons/ci";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Nav from 'react-bootstrap/Nav';
import { FaRegUser } from "react-icons/fa6";
import { BsBucket } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";



import { Container, Form } from 'react-bootstrap';
import News from './News';
import Newtraders from './Newtraders';
import Meilleures from './Meilleures';
import { SiDatabricks } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiPlant } from "react-icons/pi";
const Welcome = () => {
    return (
        <div>
            <div className="new-wrapper">

                <div className="showcase1">
                    {/* <div id="google_translate_element" style={{ float: 'right' }}></div> */}
                    <img src="./banner-top.jpeg" alt="Picture" />

                    <div className="overlay2">
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
                        <Row>
                            <Col></Col>
                            <Col>


                            </Col>
                            <Col>
                                <Card className='cardwel'>
                                    <Card.Body>
                                        <p className='auto1 '>Autorisez-vous <b style={{ fontWeight: "600" }}>Maathena</b> à accéder <br></br>à votre position ? </p>
                                        <p className='auto1 mb-2 atuo2'>Maathena utilise votre position pour vous<br></br> proposer des commerçants dans votre secteur.</p>
                                        <Row>
                                            <Col>
                                                <Button variant="primary" className='bthn990 my-4'>Autoriser</Button>
                                            </Col>
                                            <Col>
                                                <Button variant="primary" className='bthn910 my-4'>Refuser</Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card></Col>
                        </Row>
                        <h5 style={{ fontFamily: 'Work Sans' }} className='math'>


                            MAATHENA</h5>
                        <h2>Consommer autrement.</h2>

                        <p>Pratique et éthique, Maathena propose une nouvelle façon de consommer. Faites un pas <br></br> pour la planète en achetantlocal !</p>
                        <Row>
                            <Col></Col>
                            <Col xs={6}>

                                <Button variant="primary" href='./recherche' className='bthn90 my-4'>TROUVER UN COMMERCANT</Button>
                            </Col>
                            <Col></Col>
                        </Row>
                    </div>
                </div>

                <div>
                    <Container>
                        <div className='pres1'>

                            <Row>



                                <Col>
                                    <h1 className='pres ' style={{ float: "right" }}>Près de chez vous à </h1>
                                </Col>
                                <Col>
                               <Form>
                               <Form.Select aria-label="Default select example" className='sectpar'>
                                        <option>PARIS</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                               </Form>
                                   
                                </Col>

                            </Row>
                        </div>
                        <CardGroup>
                            <Card className="cardwelcome" style={{ margin: "20px" }} >
                                <img className="m89" variant="top" src="./ChezJeanetLouis.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='title12 text-center'>Chez Jean et Louis</p>

                                    </Card.Title>

                                    <Card.Text style={{ fontSize: "16px" }}>
                                        <p className='text-center epi'>Epicerie</p>
                                        <Row>
                                            <Col></Col>
                                            <Col xs={8}>

                                                <Button variant="primary" className='bth my-4 deco'>Découvrir</Button>
                                            </Col>
                                            <Col></Col>
                                        </Row>


                                    </Card.Text>

                                </Card.Body>

                            </Card>

                            <Card className="cardwelcome" style={{ margin: "20px" }} >
                                <img className="m89" variant="top" src="./ChezJeanetLouis2.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='title12 text-center'>Chez Jean et Louis</p>

                                    </Card.Title>

                                    <Card.Text style={{ fontSize: "16px" }}>
                                        <p className='text-center epi'>Epicerie</p>
                                        <Row>
                                            <Col></Col>
                                            <Col xs={8}>

                                                <Button variant="primary" className='bth my-4 deco'>Découvrir</Button>
                                            </Col>
                                            <Col></Col>
                                        </Row>


                                    </Card.Text>

                                </Card.Body>

                            </Card>
                            <Card className="cardwelcome" style={{ margin: "20px" }} >
                                <img className="m89" variant="top" src="./ChezJeanetLouis3.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='title12 text-center'>Chez Jean et Louis</p>

                                    </Card.Title>

                                    <Card.Text style={{ fontSize: "16px" }}>
                                        <p className='text-center epi'>Epicerie</p>
                                        <Row>
                                            <Col></Col>
                                            <Col xs={8}>

                                                <Button variant="primary" className='bth my-4 deco'>Découvrir</Button>
                                            </Col>
                                            <Col></Col>
                                        </Row>


                                    </Card.Text>

                                </Card.Body>

                            </Card>
                            <Card className="cardwelcome" style={{ margin: "20px" }} >
                                <img className="m89" variant="top" src="./ChezJeanetLouis4.jpeg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='title12 text-center'>Chez Jean et Louis</p>

                                    </Card.Title>

                                    <Card.Text style={{ fontSize: "16px" }}>
                                        <p className='text-center epi'>Epicerie</p>
                                        <Row>
                                            <Col></Col>
                                            <Col xs={8}>

                                                <Button variant="primary" className='bth my-4 deco'>Découvrir</Button>
                                            </Col>
                                            <Col></Col>
                                        </Row>


                                    </Card.Text>

                                </Card.Body>

                            </Card>
                        </CardGroup>

                        <Row>
                            <Col></Col>
                            <Col xs={6}>


                            </Col>
                            <Col>  <Button variant="primary" href='./recherche' className='bthn9099 my-4'>PLUS DE COMMERCES</Button></Col>
                        </Row>
                    </Container >
                    <div className='bg9' style={{
                        backgroundImage:
                            "url('./banner2.png')", backgroundSize: "cover",
                        backgroundRepeat: "no-repeat", padding: "100px 0px 100px 0px"
                    }}>


                        <News />

                    </div>

                </div>
                <div>
                    <Categories />
                </div>
                <div className='bg9' style={{
                    backgroundImage:
                        "url('./banner3.png')", backgroundSize: "cover",
                    backgroundRepeat: "no-repeat", padding: "50px 0px 50px 0px"
                }}>

                    <Newtraders />

                </div>
                <div>
                    <Meilleures />
                </div>
                <div className='backbanner'>


                    <Container className=''>
                        <h1 className='cons text-center mb-4'>Je consomme...</h1>
                        <CardGroup>
                            <Card className="consomme2" style={{ margin: "20px" }} >
                                <img className="consomme4" variant="top" src="./Français.png" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Français<IoIosArrowForward /></p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="consomme2" style={{ margin: "20px" }} >
                                <img className="consomme" variant="top" src="./Bia.png" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Bia <IoIosArrowForward /></p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                           
                            <Card className="consomme2" style={{ margin: "20px" }} >
                                <img className="consomme1" variant="top" src="./Equitable.png" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center' style={{marginTop:"-18px"}}>Equitable  <IoIosArrowForward /></p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                           
                            <Card className="consomme2" style={{ margin: "20px" }} >
                                <img className="consomme22" variant="top" src="./Fait.png" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Fait main <IoIosArrowForward /></p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                            <Card className="consomme2" style={{ margin: "20px" }} >
                                <img className="consomme3" variant="top" src="./Recycle.png" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                        <p className='categorytitle text-center'>Recycle  <IoIosArrowForward /></p>

                                    </Card.Title>


                                </Card.Body>

                            </Card>
                           
                        </CardGroup>

                        
                    </Container>
                </div>
                <div>

                    <Container className='marg76'>
                        <Row>
                            <Col>
                            <h2 className='Livraison'>Livraison mutualisée</h2>
                            <p className='my-2 faites' >Faites-vous livrer des produits provenant de différentes boutiques en une seule fois sur le créneau horaire de votre choix!</p>
                            <div className='my-3'>
                            <Row>
                                
                                <Col>
                                <p style={{color:"#084442;",fontSize:"20px"}}><MdOutlineWatchLater /> Rapide</p>
                                </Col>
                                <Col>
                              <p style={{color:"#084442;",fontSize:"20px"}}>  <SiDatabricks /> Economique</p>
                                </Col>
                                <Col>
                               <p style={{color:"#084442;",fontSize:"20px"}}> <PiPlant />  Ecologique</p>
                                </Col>
                             </Row>
                            </div>

                            </Col>

                            <Col>
                            
                           <div>
                           <img src='./map.png' className='map1'/>
                           </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='reata'>
                    <Container className='reats'>
                        <h3 className='text-cente parlent'>Ils parlent de nous</h3>
                    <CardGroup className='cardgroup1'>
                            <Card className="Rectangle3477" style={{ margin: "20px" }} >
                                <img className="Rectangle347" variant="top" src="./Rectangle347.png" />
                                
                            </Card>
                            <Card className="Rectangle3477" style={{ margin: "20px" }} >

                                <img className="Rectangle347" variant="top" src="./Rectangle347.png" />
                                
                            </Card>
                           <Card className="Rectangle3477" style={{ margin: "20px" }} >
                                <img className="Rectangle347" variant="top" src="./Rectangle347.png" />
                                
                            </Card>
                           
                            <Card className="Rectangle3477" style={{ margin: "20px" }} >
                                <img className="Rectangle347" variant="top" src="./Rectangle347.png" />
                                
                            </Card>
                           
                         
                           
                           
                        </CardGroup>

                    </Container>
                </div>
                <Container>
                    <div className='group2'>
                        <Row>
                            <Col>
                            <img src='./Group.png' className='group1'/>
                            <h2 className='satis'>Satisfait ou remboursé</h2>
                            <p className='satis1'>14 jours pour vous décider</p>
                            </Col>
                            <Col>
                            <img src='./Group2.png' className='group1'/>
                            <h2 className='satis'>Palement sécurisé</h2>
                            <p className='satis1'>Commandez en toute sécurité <br></br>par carte bleue ou via Paypal</p>
                            </Col>
                            <Col>
                            <img src='./Group3.png' className='group1 my-2'/>
                            <h2 className='satis'>Service client</h2>
                            <p className='satis1'>Disponible 7/7</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Footer />
            </div>
        </div>
    )
}

export default Welcome
