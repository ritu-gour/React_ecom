import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Welcome.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Meilleures = () => {
    return (
        <div>
            <Container className='marg'>
            <h1 className='pres text-center mb-5'>Meilleures ventes </h1>
                <CardGroup>
                    <Card className="meile" style={{ margin: "20px" }} >
                        <img className="meileimg" variant="top" src="./meile11.jpeg" />
                        <Card.Body>
                            <Card.Title>
                            <Row>
                                <Col>
                                <p className='title122 '>Bougie</p>
                               
                                </Col>
                                <Col>
                                <p className='title122 ' style={{float:"right"}}>5,99€</p>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col></Col>
                                <Col xs={8}>

                                <img src='./avery.png' className='avery'/>
                                </Col>
                                <Col></Col>
                            </Row> */}
                            <img src='./avery.png' className='avery'/>
                            </Card.Title>

                          
                        </Card.Body>

                    </Card>
                    <Card className="meile" style={{ margin: "20px" }} >
                        <img className="meileimg" variant="top" src="./meile2.jpeg" />
                        <Card.Body>
                            <Card.Title>
                            <Row>
                                <Col>
                                <p className='title122 '>Crème</p>
                               
                                </Col>
                                <Col>
                                <p className='title122 ' style={{float:"right"}}>5,99€</p>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col></Col>
                                <Col xs={8}>

                                <img src='./avery.png' className='avery'/>
                                </Col>
                                <Col></Col>
                            </Row> */}
                            <img src='./avery.png' className='avery'/>
                            </Card.Title>

                          
                        </Card.Body>

                    </Card>
                    <Card className="meile" style={{ margin: "20px" }} >
                        <img className="meileimg" variant="top" src="./meile3.jpeg" />
                        <Card.Body>
                            <Card.Title>
                            <Row>
                                <Col>
                                <p className='title122 '>Carnet</p>
                               
                                </Col>
                                <Col>
                                <p className='title122 ' style={{float:"right"}}>5,99€</p>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col></Col>
                                <Col xs={8}>

                                <img src='./avery.png' className='avery'/>
                                </Col>
                                <Col></Col>
                            </Row> */}
                            <img src='./avery.png' className='avery'/>
                            </Card.Title>

                          
                        </Card.Body>

                    </Card>
                    <Card className="meile" style={{ margin: "20px" }} >
                        <img className="meileimg" variant="top" src="./meile1.jpeg" />
                        <Card.Body>
                            <Card.Title>
                            <Row>
                                <Col>
                                <p className='title122 '>Jeu bois</p>
                               
                                </Col>
                                <Col>
                                <p className='title122 ' style={{float:"right"}}>5,99€</p>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col></Col>
                                <Col xs={8}>

                                <img src='./avery.png' className='avery'/>
                                </Col>
                                <Col></Col>
                            </Row> */}
                            <img src='./avery.png' className='avery'/>
                            </Card.Title>

                          
                        </Card.Body>

                    </Card>
                </CardGroup>

              
            </Container>
        </div>
    )
}

export default Meilleures
