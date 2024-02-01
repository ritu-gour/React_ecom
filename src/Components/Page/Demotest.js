import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import CardGroup from 'react-bootstrap/CardGroup';

import { Button, Container } from 'react-bootstrap';

import { FaRegEdit } from "react-icons/fa";
const Demotest = () => {
    return (
        <div>
        <Container >
              <Row>
                <Col sm={2}>
                  <p className='table19' ><b>Tableau de bord</b></p>
                  <p className='table19' style={{ fontWeight: "800" }}><b>Gérer ma boutique</b></p>
                  <Stack direction="horizontal" gap={3}>
                    <div className="p-"></div>
                    <div className="p mb-3"><b style={{ fontWeight: "800" }}>Profil boutique</b>
                      <br></br>
                      Articles
                    </div>


                  </Stack>


                  <p className='table19'>Ventes</p>
                  <p className='table19'>Analyse</p>
                  <p className='table19'>Mon commerce</p>
                  <p className='table19'>Mon compte</p>

                </Col>
                <Col sm={10}>

                  <Card className="profilecarder">

                    <CardGroup className="profilecard9">
                      <Card className="profilecards">
                        <Card.Img variant="top" src="./img/meile11.jpeg" />
                        <Card.Body>
                          <Card.Title>Zoom produit</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula !
                          </Card.Text>
                          <Button className='Découvrir'>Découvrir</Button>
                          <button className="bn9098" style={{ float: "right", border: "none" }}>  <FaRegEdit style={{ float: "right" }} className='adit11' />

                          </button>
                        </Card.Body>

                      </Card>

                      <Card className="profilecardsb">
                        <Card.Img variant="top" src="./img/meile11.jpeg" />
                        <Card.Body>
                          <Card.Title>Zoom produit</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula !
                          </Card.Text>
                          <Button className='Découvrir'>Découvrir</Button>
                          <button className="bn9098" style={{ float: "right", border: "none" }}>    <FaRegEdit style={{ float: "right" }} className='adit11' />
                          </button>
                        </Card.Body>

                      </Card>
                      <Card className="profilecardsb">
                        <Card.Img variant="top" src="./img/meile11.jpeg" />
                        <Card.Body>
                          <Card.Title>Zoom produit</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula !
                          </Card.Text>
                          <Button className='Découvrir'>Découvrir</Button>
                          <button className="bn9098" style={{ float: "right", border: "none" }}>    <FaRegEdit style={{ float: "right" }} className='adit11' />
                          </button>
                        </Card.Body>

                      </Card>

                      <Card className="profilecards">
                        <Card.Img variant="top" src="./img/meile11.jpeg" />
                        <Card.Body>
                          <Card.Title>Zoom produit</Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula !
                          </Card.Text>
                          <Button className='Découvrir'>Découvrir</Button>
                          <button className="bn9098" style={{ float: "right", border: "none" }}>   <FaRegEdit style={{ float: "right" }} className='adit11' />
                          </button>
                        </Card.Body>

                      </Card>

                    </CardGroup>
                  </Card>

                  {/* {isOpen3 && (
                                <div>
                                    <Card className="profilecardp">

                                        <div>
                                            <Row>

                                                <Col></Col>
                                                <Col >

                                                    <div>
                                                        <Form>
                                                            <div className='fornlab'>
                                                                <Form.Group controlId="formBasicEmail" className="custom-file-drop-area ">

                                                                    <Form.Label for="filephotos">
                                                                        <BiImageAdd className='bigimg' />
                                                                        Téléchargez votre photo
                                                                    </Form.Label>

                                                                    <Form.Control type="file" placeholder="Enter photos" id="filephotos" required />

                                                                </Form.Group>

                                                            </div>
                                                            <br></br>
                                                            <Form.Control type="text" placeholder="Enter Title" required/><br></br>
                                                              <Form.Label>Description</Form.Label>
                                                                <Form.Control as="textarea" rows={3} style={{ height: "100px" }}
                                                                     maxLength={200}  required />
                                                            <Button className='VOIR_LESPRODUITS'>Update</Button>
                                                        </Form>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <button onClick={() => setIsOpen3(false)} className='onclick'>
                                                        <IoClose />
                                                    </button>
                                                </Col>
                                            </Row>
                                        </div>

                                    </Card>
                                </div>
                            )}
                            {isOpen4 && (
                                <div>
                                    <Card className="profilecardp">

                                        <div>
                                            <Row>

                                                <Col></Col>
                                                <Col >

                                                    <div>
                                                        <Form>
                                                            <div className='fornlab'>
                                                                <Form.Group controlId="formBasicEmail" className="custom-file-drop-area ">

                                                                    <Form.Label for="filephotos">
                                                                        <BiImageAdd className='bigimg' />
                                                                        Téléchargez votre photo
                                                                    </Form.Label>

                                                                    <Form.Control type="file" placeholder="Enter photos" id="filephotos" required />

                                                                </Form.Group>
                                                            </div>
                                                            <br></br>
                                                            <Form.Control type="text" placeholder="Enter Title" required/><br></br>
                                                            <Form.Control type="text" placeholder="Enter Description" required/>
                                                            <Button className='VOIR_LESPRODUITS'>Update</Button>
                                                        </Form>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <button onClick={() => setIsOpen4(false)} className='onclick'>
                                                        <IoClose />
                                                    </button>
                                                </Col>
                                            </Row>
                                        </div>

                                    </Card>
                                </div>
                            )}
                            {isOpen5 && (
                                <div>
                                    <Card className="profilecardp">

                                        <div>
                                            <Row>

                                                <Col></Col>
                                                <Col >

                                                    <div>
                                                        <Form>
                                                            <div className='fornlab'>
                                                                <Form.Group controlId="formBasicEmail" className="custom-file-drop-area ">

                                                                    <Form.Label for="filephotos">
                                                                        <BiImageAdd className='bigimg' />
                                                                        Téléchargez votre photo
                                                                    </Form.Label>

                                                                    <Form.Control type="file" placeholder="Enter photos" id="filephotos" required />

                                                                </Form.Group>
                                                            </div>
                                                            <br></br>
                                                            <Form.Control type="text" placeholder="Enter Title" required/><br></br>
                                                              <Form.Label>Description</Form.Label>
                                                                <Form.Control as="textarea" rows={3} style={{ height: "100px" }}
                                                                     maxLength={200}  required />
                                                            <Button className='VOIR_LESPRODUITS'>Update</Button>
                                                        </Form>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <button onClick={() => setIsOpen5(false)} className='onclick'>
                                                        <IoClose />
                                                    </button>
                                                </Col>
                                            </Row>
                                        </div>

                                    </Card>
                                </div>
                            )} */}





                </Col>

              </Row>
            </Container>
    </div>
    )
}


export default Demotest