import React from 'react'
import Footer from '../Footer'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './RegistrAlreadyCust.css';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
const RegistrAlreadyCust = () => {
    return (
        <div>
            <div className="new-wrapper">

                <div className="showcase">
                {/* <div id="google_translate_element" style={{ float: 'right' }}></div> */}
                    <img src="./Component2.png" alt="Picture" />
                    <div className="overlay">
                        <h2>Inscription</h2>
                        <p>Vous effectuez déjà vos livraisons avec nous ? Rejoignez la marketplace Maathena<br></br> pour encore plus de services !</p>

                    </div>
                </div>

                <Container>
                    <div className=''>
                        <Row>
                            <Col></Col>
                            <Col xs={7}>
                                <div className='bg900'>
                                    <h5 className='text-center dem1 mb-5'>Demande d’inscription</h5>

                                    <Form className='byn '>
                                        <h1 className='vos1 mb-4'>Vos informations personnelles </h1>
                                        <Row className="mb-4 ">
                                            <Form.Group as={Col} controlId="formGridEmail">

                                                <Form.Control style={{ fontSize: "15px" }} type="text" placeholder="Nom" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">

                                                <Form.Control style={{ fontSize: "15px" }} type="text" placeholder="Prénom" />
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-5">
                                            <Form.Group as={Col} controlId="formGridEmail">

                                                <Form.Control style={{ fontSize: "15px" }} type="email" placeholder="Email" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">

                                                <Form.Control style={{ fontSize: "15px" }} type="text" placeholder="Nom du commerce" />
                                            </Form.Group>
                                        </Row>


                                        <Form.Group className="mb-4 my-4" id="formGridCheckbox">
                                            <Form.Check style={{ fontSize: "15px", color: "white" }} type="checkbox" label="En cochant cette case, vous consentez à notre politique de confidentialité" />
                                        </Form.Group>
                                        <Row>
                                            <Col></Col>
                                            <Col xs={4}><Button variant="primary" className='btn504 mb-5' style={{ fontSize: "15px" }} type="submit">
                                                ENVOYER
                                            </Button></Col>
                                            <Col></Col>
                                        </Row>

                                    </Form>
                                </div>

                            </Col>
                            <Col></Col>
                        </Row>
                    </div>

                </Container>

                <Footer />
            </div>
        </div>
    )
}

export default RegistrAlreadyCust
