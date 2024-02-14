import React from 'react'

import Footer from '../Footer'


import { CiSearch } from "react-icons/ci";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { PiPackageFill } from "react-icons/pi";

import { RxDividerVertical } from "react-icons/rx";

import Nav from 'react-bootstrap/Nav';
import { FaRegUser } from "react-icons/fa6";
import { BsBucket } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import './Faq.css'
import './About.css'
import './Buy_product.css'
import { Button, Card, Container, Stack } from 'react-bootstrap';
const About = () => {
    return (
        <div>
            <div className="new-wrapper">

                <div className="showcase3">

                    <img src="./Component2.png" alt="Picture"
                        style={{ objectFit: "cover", backgroundPosition: "right 35% top 0%" }} />

                    <div className="overlay">
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
                        <h2 className='recherche'>A propos</h2>
                    </div>
                </div>

                <Container>

                    <Card className='cardblog cardblog89'>
                        <Row>
                            <Col sm={4}>
                                <Card.Img variant="top" src="./image/about1.jpeg" style={{ borderRadius: "0px", height: "420px" }} className='about987'/>
                            </Col>
                            <Col sm={8}>
                                <Card.Body>


                                    <Card.Title style={{ fontSize: "30px" }} className='my-5'>Notre histoire </Card.Title>

                                    <Card.Text className='mb-3 my-'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                                        <br>
                                        </br><br>
                                        </br>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                                    </Card.Text>
                                    <Button className='DECODECOUVRIREQUIPE'>
                                        DECOUVRIR L’EQUIPE
                                    </Button>
                                </Card.Body>
                            </Col>
                        </Row>


                    </Card>



                    <h2 style={{ color: "#084442" }} className='text-center my-5'>C’est important pour nous</h2>
                    <div >
                        <Row >
                            <Col sm={4} >
                                <div className='row90m'>
                                    <h5 style={{ color: "#084442" }}>Consommer moins mais mieux</h5>
                                    <p className='pagingh'>Lorem ipsum dolor sit amet, consecte
                                        ipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut  diam.
                                        Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.</p>

                                </div>
                            </Col>
                            <Col sm={4} className='row90m'>
                                <h5 style={{ color: "#084442" }}>Mettre en avant l’artisanat </h5>
                                <p className='pagingh'>Lorem ipsum dolor sit amet, consecte
                                    ipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut  diam.
                                    Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.</p>
                            </Col>
                            <Col sm={4} className='row90m'>
                                <h5 style={{ color: "#084442" }}>Mettre en avant l’artisanat </h5>
                                <p className='pagingh'>Lorem ipsum dolor sit amet, consecte
                                    ipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut  diam.
                                    Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum.</p>
                            </Col>
                        </Row>
                    </div>


                </Container>
                <br></br>   <br></br>
                <div className='backblogh' style={{
                    backgroundImage:
                        "url('./image/blog11.png')", backgroundSize: "cover", backgroundPosition: "left",
                    backgroundRepeat: "no-repeat", padding: "140px 0px 140px 0px"
                }}>
                    <Row>
                        <Col sm={3}>

                        </Col>
                        <Col sm={9}>

                            <Row>
                                <Col sm={6}>
                                    <img src="./image/methu.png" alt="Picture" className='methu mb-4' />
                                    <h5 className='text-center '>Prénom Nom</h5>
                                    <p className='text-center '>CEO</p>
                                    <p className='text-center'>L'intérêt général a cette particularité qu'il ne<br></br> s'impose pas naturellement</p>
                                </Col>
                                <Col sm={6}>
                                    <img src="./image/kavin.png" alt="Picture" className='methu mb-4' />
                                    <h5 className='text-center '>Prénom Nom</h5>
                                    <p className='text-center '>COO</p>
                                    <p className='text-center'>Imaginons ensemble un futur où l'harmonie n'est plus un idéal <br></br>lointain, mais la fondation de notre quotidien.</p>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Container >
                    <div className='my-5 con7421'>
                        <Row>
                            <Col sm={7}>
                                <div className='pour'>
                                    <h2 style={{ color: "#084442" }}>Pourquoi Maathena ?</h2>
                                    <p className='pour1'>MAÂT est la déesse égyptienne de l’harmonie sociale et de l’équité, ATHENA est la déesse grecque protectrice de la ville et des artisans. MAATHENA veut rendre la ville plus accueillante, plus chaleureuse et plus vivante en valorisant le savoir-faire des commerçants et artisans indépendants.</p>

                                </div>
                            </Col>
                            <Col sm={5}>
                                <img src="./image/blog899.jpeg" alt="Picture" className='blog7887' />
                            </Col>
                        </Row>
                    </div>

                    <div>
                        <Card className='blog1238'>
                            <Row>
                                <Col sm={6}>
                                    <h2 style={{ color: "#084442", zIndex: "1" }} className='zInde'>Nos dates clées</h2>
                                    <div>
                                        <img src="./image/blog12.jpeg" alt="Picture" className='blog123' />
                                    </div>
                                </Col>
                                <Col sm={6} className='my-5'>
                                    <Stack direction="horizontal" gap={3} className='pack38'>
                                        <div className="p-2"> <PiPackageFill className='packages' /><br>
                                        </br>
                                            <p className='packagess' /></div>
                                        <div className="p- mb-5"><h3 style={{ color: "#FFC309" }}>Date et titre</h3><br></br>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br></br>varius enim in eros elementum tristique.
                                        </div>

                                    </Stack>
                                    <Stack direction="horizontal" gap={3} className='pack38'>
                                        <div className="p-2"> <PiPackageFill className='packages' /><br>
                                        </br>
                                            <p className='packagess' /></div>
                                        <div className="p- mb-5"><h3 style={{ color: "#FFC309" }}>Date et titre</h3><br></br>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br></br>varius enim in eros elementum tristique.
                                        </div>

                                    </Stack>
                                    <Stack direction="horizontal" gap={3} className='pack38'>
                                        <div className="p-2"> <PiPackageFill className='packages' /><br>
                                        </br>
                                            <p className='packagess' /></div>
                                        <div className="p- mb-5"><h3 style={{ color: "#FFC309" }}>Date et titre</h3><br></br>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br></br>varius enim in eros elementum tristique.
                                        </div>

                                    </Stack>
                                    <Stack direction="horizontal" gap={3} className='pack38'>
                                        <div className="p-2"> <PiPackageFill className='packages' /><br>
                                        </br>
                                            <p className='packagesss' />
                                        </div>
                                        <div className="p- mb-5"><h3 style={{ color: "#FFC309" }}>Date et titre</h3><br></br>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br></br>varius enim in eros elementum tristique.
                                        </div>

                                    </Stack>

                                </Col>
                            </Row>

                        </Card>
                    </div>

                    <h2 style={{ color: "#084442" }} className='text-center my-5'>Notre équipe</h2>
                    <Row className='col900'>
                        <Col sm={4} className='col90'>
                            <img src="./image/blog13.png" alt="Picture" className='methu mb-4' />
                            <h5 className='text-center '>Tiphaine</h5>
                            <p className='text-center '>Designer</p>
                            <p className='text-center'>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Suspendisse<br></br> varius enim in eros elementum
                                tristique.</p>
                        </Col>
                        <Col sm={4} className='col90'>
                            <img src="./image/blog14.png" alt="Picture" className='methu mb-4' />
                            <h5 className='text-center '>Lisa</h5>
                            <p className='text-center '>Commerciale</p>
                            <p className='text-center'>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Suspendisse<br></br> varius enim in eros elementum
                                tristique.</p>
                        </Col>
                        <Col sm={4} className='col90'>
                            <img src="./image/blog15.png" alt="Picture" className='methu mb-4' />
                            <h5 className='text-center '>Thanina</h5>
                            <p className='text-center '>Responsable communication</p>
                            <p className='text-center'>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Suspendisse<br></br> varius enim in eros elementum
                                tristique.</p>
                        </Col>
                    </Row>
                    
                    <div>
                        <Card className='bloag19019'> 
                        <Row>
                            <Col sm={6}>
                            <h5 className='my-3 shout'>Vous souhaitez en savoir plus ? Contactez-nous !</h5>
                            </Col>
                            <Col sm={6}>
                            <Button className='CONTACTEZ-NOUS nb'>NOUS CONTACTER</Button>
                            </Col>
                        </Row>
                        </Card>
                    </div>
                </Container>
                <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
                <Footer />
            </div>
        </div>
    )
}

export default About
