import React from 'react'
import Footer from '../Footer'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MerchantRegistration.css';
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const MerchantRegistration = () => {
    return (
        <div>
            <div className="new-wrapper">

                <div className="showcase">
                    <div id="google_translate_element" style={{ float: 'right' }}></div>
                    <img src="./Component2.png" alt="Picture" />
                    <div className="overlay">
                        <h2>Formulaire d’inscription</h2>
                        <p>Ouvrez un compte professionnel et rejoignez la marketplace Maathena.</p>

                    </div>
                </div>

                <Container>
                    <div className=''>
                        <Row>
                            <Col></Col>
                            <Col xs={7}>
                                <div className='bg900'>
                                <h5 className='text-center dem1'>Demande d’inscription</h5>
                                <p className='text-center vous1'>Vous recevrez un retour de notre part sous 24h.</p>
                                <Form className='byn '>
                                    <h1 className='vos1 mb-4'>Vos informations personnelles </h1>
                                    <Row className="mb-4">
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

                                            <Form.Control style={{ fontSize: "15px" }} type="number" placeholder="Téléphone" />
                                        </Form.Group>
                                    </Row>

                                    <h1 className='vos1 mb-4'>Votre commerce </h1>
                                    <Form.Group className="mb-4" controlId="formGridAddress1">

                                        <Form.Control style={{ fontSize: "15px" }} type='text' placeholder="Adresse du commerce" />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formGridAddress2">

                                        <Form.Control style={{ fontSize: "15px" }} type='text' placeholder="Numéro de TVA" />
                                    </Form.Group>

                                    <Row className="mb-4">
                                        <Form.Group as={Col} controlId="formGridState">

                                            <Form.Select style={{ fontSize: "15px" }} defaultValue="Choose...">
                                                <option>Domaine d’activité</option>
                                                <option>text1</option>
                                                <option>text1</option>
                                                <option>text1</option>
                                            </Form.Select>
                                        </Form.Group>
                                       
                                        <Form.Group as={Col} className="mb-4" controlId="formGridAddress2">

                                        <Form.Control style={{ fontSize: "15px" }} type='number' placeholder="Numéro Siret" />
                                    </Form.Group>
                                    </Row>
                                    <FloatingLabel controlId="floatingTextarea2" label="Description de votre commerce">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Description de votre commerce"
                                            style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                    <Form.Group className="mb-4 my-4" id="formGridCheckbox">
                                        <Form.Check style={{ fontSize: "15px",color:"white" }} type="checkbox" label="En cochant cette case, vous consentez à notre politique de confidentialité" />
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

export default MerchantRegistration

