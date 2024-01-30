import React from 'react'
import Footer from '../Footer'
import './Carte.css'
import { CiSearch } from "react-icons/ci";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { FaRegUser } from "react-icons/fa6";
import { BsBucket } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import { Container, Form } from 'react-bootstrap';
import { CiHeart } from "react-icons/ci";
import './Monpanier.css'
import { IoMdClose } from "react-icons/io";


import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
const Monpanier = () => {
  return (
    <div>
      <div>
        <div className="new-wrapper">
          <div className="showcase3">
          {/* <div id="google_translate_element" style={{ float: 'right' }}></div> */}
            <img src="./image/monpanir.png" alt="Picture" />

            <div className="overlay89">
              <Row>
                <Col>
                </Col>
                <Col>
                </Col>
                <Col>
                  <Nav className="justify-content-end bn3" activeKey="" >
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
              <h2 className='recherchen'>Mon Panier</h2>
            </div>
          </div>

          <div>
            <Container>
              <Row>
                <Col sm={6} className='monpaniers'>




                  <Stack direction="horizontal" gap={3}>

                    <div className="p-"><img src='./image/monpani.jpeg' className='monpnanir' />
                    </div>

                    <div className="p-2"> <h3 className='pro1d'>Produit 1</h3>
                      <h4>40,00 €
                      </h4>
                      <Stack direction="horizontal" gap={3}>
                        <div className="p-">Art. No. :<br></br>
                          Couleur :
                        </div>
                        <div className="p-2">54637253 <br></br>
                          Violet</div>
                        <div className="p-2">Taille : 36 <br></br> <p style={{ color: "white" }}>.</p></div>
                      </Stack>
                      <Stack direction="horizontal" gap={3}>
                        <div className="p-"><p style={{ border: "2px solid black", padding: "4px 8px 4px 8px" }}><CiHeart /></p>
                          </div>
                        <div className="p-2">
                          <Form>
                            <Form.Select aria-label="Default select example" className='monpanier1'>
                              <option>1</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form></div>

                      </Stack>
                    </div>

                    <div className='p-2' style={{ float: "right", margin: "-190px 0px 0px 20px", fontSize: "25px" }}>
                      <IoMdClose />
                    </div>

                  </Stack>
                  <div className='my-5'>

                    <Stack direction="horizontal" gap={3}>

                      <div className="p-"><img src='./image/monpani.jpeg' className='monpnanir' />
                      </div>

                      <div className="p-2"> <h3 className='pro1d'>Produit 2</h3>
                        <h4>20,00 €
                        </h4>
                        <Stack direction="horizontal" gap={3}>
                          <div className="p-">Art. No. :<br></br>
                            Couleur :
                          </div>
                          <div className="p-2">54637253 <br></br>
                            Beige</div>
                          <div className="p-2">Taille : 38 <br></br> <p style={{ color: "white" }}>.</p></div>
                        </Stack>
                        <Stack direction="horizontal" gap={3}>
                        <div className="p-"><p style={{ border: "2px solid black", padding: "4px 8px 4px 8px" }}><CiHeart /></p>
                          </div>
                          <div className="p-2">
                            <Form>
                              <Form.Select aria-label="Default select example" className='monpanier1'>
                                <option>1</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Form></div>

                        </Stack>
                      </div>

                      <div className='p-2' style={{ float: "right", margin: "-190px 0px 0px 20px", fontSize: "25px" }}>
                        <IoMdClose />
                      </div>

                    </Stack>
                  </div>
                  <div>
                    <Stack direction="horizontal" gap={3}>

                      <div className="p-"><img src='./image/monpani.jpeg' className='monpnanir' />
                      </div>

                      <div className="p-2"> <h3 className='pro1d'>Produit 3</h3>
                        <h4>30,00 €
                        </h4>
                        <Stack direction="horizontal" gap={3}>
                          <div className="p-">Art. No. :<br></br>
                            Couleur :
                          </div>
                          <div className="p-2">54637253 <br></br>
                            Beige</div>
                          <div className="p-2">Taille : 36 <br></br> <p style={{ color: "white" }}>.</p></div>
                        </Stack>
                        <Stack direction="horizontal" gap={3}>
                          <div className="p-"><p style={{ border: "2px solid black", padding: "4px 8px 4px 8px" }}><CiHeart /></p>
                          </div>
                          <div className="p-2">
                            <Form>
                              <Form.Select aria-label="Default select example" className='monpanier1'>
                                <option>1</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Form></div>

                        </Stack>
                      </div>

                      <div className='p-2' style={{ margin: "-190px 0px 0px 20px", fontSize: "25px" }}>
                        <IoMdClose />
                      </div>

                    </Stack></div>
                    





                </Col>
                <Col sm={6}>
                  <div className='monspanir'>
                    <Container>
                      <Card className='cardwidth'>
                        <Card.Body>
                          <p className='apply mb-2 text-white'>Ajouter un code promo ou bon de réduction :</p>
                          <Form >

                            <div className="d-flex">
                              <Form.Control type="text" className='form100' placeholder='' />

                              <Button variant="" className='btn8009' type="button">
                                APPLIQUER
                              </Button>

                            </div>

                            <Row className='sous'>
                              <Col>
                                <p className='text-white'>Sous-total :</p>
                                <p className='text-white'>Livraison </p>
                                <p className='text-white'>Total</p>
                              </Col>
                              <Col>
                                <p className='text-white'>80,00 €</p>
                                <p className='text-white'>4,50 €</p>
                                <p className='text-white'>84,50 €</p>
                              </Col>
                            </Row>
                            <Row>
                              <Col>

                              </Col>
                              <Col xs={12}>
                                <Button className='COMMANDER'>COMMANDER</Button>
                              </Col>
                              <Col>

                              </Col>
                            </Row>
                          </Form>

                        </Card.Body>
                      </Card>
                    </Container>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div>
            <Container>
              <h3 className='Découvre'>Découvrez aussi...</h3>
              <CardGroup>
                <Card className="cardwelcome99" style={{ margin: "20px" }} >
                  <img className="Monpanier78" variant="top" src="./image/monpani.jpeg" />
                  <Card.Body>
                    <Card.Title >
                      <p className='title1209'>Lorem ipsum dolor sit amet consectetur adipis.</p>
                      <h4 className='monpri'>7€99</h4>
                    </Card.Title>

                  
                  </Card.Body>

                </Card>

                <Card className="cardwelcome99" style={{ margin: "20px" }} >
                  <img className="Monpanier78" variant="top" src="./image/monpani.jpeg" />
                  <Card.Body>
                    <Card.Title >
                      <p className='title1209'>Lorem ipsum dolor sit amet consectetur adipis.</p>
                      <h4 className='monpri'>7€99</h4>
                    </Card.Title>

                  
                  </Card.Body>

                </Card>
                <Card className="cardwelcome99" style={{ margin: "20px" }} >
                  <img className="Monpanier78" variant="top" src="./image/monpani.jpeg" />
                  <Card.Body>
                    <Card.Title >
                      <p className='title1209'>Lorem ipsum dolor sit amet consectetur adipis.</p>
                      <h4 className='monpri'>7€99</h4>
                    </Card.Title>

                  
                  </Card.Body>

                </Card>
                <Card className="cardwelcome99" style={{ margin: "20px" }} >
                  <img className="Monpanier78" variant="top" src="./image/monpani.jpeg" />
                  <Card.Body>
                    <Card.Title >
                      <p className='title1209'>Lorem ipsum dolor sit amet consectetur adipis.</p>
                      <h4 className='monpri'>7€99</h4>
                    </Card.Title>

                  
                  </Card.Body>

                </Card>
              </CardGroup>

            </Container>
          </div>
          <Footer />
        </div>



      </div>
    </div>
  )
}

export default Monpanier
