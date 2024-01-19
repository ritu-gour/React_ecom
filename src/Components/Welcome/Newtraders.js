import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { FaMapMarkerAlt } from "react-icons/fa";
import './Welcome.css'
const Newtraders = () => {
    return (
        <div>
            <div  className='newtrad'>
            <Container >
            <h1 className='pres text-center mb-5'>Nouveaux commerçants </h1>
           <CardGroup>
                <Card className="cardwelcome" style={{ margin: "20px" }} >
                    <img className="m89" variant="top" src="./new1.jpeg" />
                    <Card.Body>
                        <Card.Title >
                            <Row>
                                <Col>
                                <p className='title122 '>Sofa & co</p>
                                <p style={{fontSize:"16px"}}>Ameublement</p>
                                </Col>
                                <Col>
                                <p className='title122 ' style={{float:"right"}}><FaMapMarkerAlt style={{fontSize:"16px" ,margin:"-6px 0px 0px 0px"}}/> Paris 13</p>
                                </Col>
                            </Row>

                        </Card.Title>

                        <Card.Text style={{ fontSize: "16px" }}>
                            
                            <p className=' epi'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
                            <Row>
                                <Col></Col>
                                <Col xs={8}>

                                    <Button variant="primary" className='bth my-4 deco'>VOIR LA BOUTIQUE</Button>
                                </Col>
                                <Col></Col>
                            </Row>


                        </Card.Text>

                    </Card.Body>

                </Card>

                <Card className="cardwelcome" style={{ margin: "20px" }} >
                    <img className="m89" variant="top" src="./new2.jpeg" />
                    <Card.Body>
                        <Card.Title >
                            <Row>
                                <Col>
                                <p className='title122 '>La main verte</p>
                                <p style={{fontSize:"16px"}}>Fleuriste</p>
                                </Col>
                                <Col>
                                <p className='title122 ' style={{float:"right"}}><FaMapMarkerAlt style={{fontSize:"16px" ,margin:"-6px 0px 0px 0px"}}/> Paris 13</p>
                                </Col>
                            </Row>

                        </Card.Title>

                        <Card.Text style={{ fontSize: "16px" }}>
                            
                            <p className=' epi'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
                            <Row>
                                <Col></Col>
                                <Col xs={8}>

                                    <Button variant="primary" className='bth my-4 deco'>VOIR LA BOUTIQUE</Button>
                                </Col>
                                <Col></Col>
                            </Row>


                        </Card.Text>

                    </Card.Body>

                </Card>
                <Card className="cardwelcome" style={{ margin: "20px" }} >
                    <img className="m89" variant="top" src="./new3.jpeg" />
                    <Card.Body>
                        <Card.Title >
                            <Row>
                                <Col>
                                <p className='title122 '>Trouvailles</p>
                                <p style={{fontSize:"16px"}}>Vêtements</p>
                                </Col>
                                <Col>
                                <p className='title122 ' style={{float:"right"}}><FaMapMarkerAlt style={{fontSize:"16px" ,margin:"-6px 0px 0px 0px"}}/> Paris 13</p>
                                </Col>
                            </Row>

                        </Card.Title>

                        <Card.Text style={{ fontSize: "16px" }}>
                            
                            <p className=' epi'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
                            <Row>
                                <Col></Col>
                                <Col xs={8}>

                                    <Button variant="primary" className='bth my-4 deco'>VOIR LA BOUTIQUE</Button>
                                </Col>
                                <Col></Col>
                            </Row>


                        </Card.Text>

                    </Card.Body>

                </Card>
            </CardGroup>
           </Container>
            </div>
          
        </div>
    )
}

export default Newtraders
