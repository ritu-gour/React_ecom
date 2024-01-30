import React from 'react';
import Footer from '../Footer';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Login.css'
import Form from 'react-bootstrap/Form';
import { RiGoogleFill } from "react-icons/ri";
const Login = () => {
    return (
        <div>
            <div className="new-wrapper">

                <div className="showcase">
                    {/* <div id="google_translate_element" style={{ float: 'right' }}></div> */}
                    <img src="./contact.jpg" alt="Picture" />
                    <div className="overlay">
                        <h2>Se connecter</h2>

                    </div>
                </div>
                <div>
                    <Container className='margin78'>
                        <div className='marg12'>
                            <Row>
                                <Col>
                                    <div className='bg67'>

                                        <h2 className='font01'>
                                            Déjà client
                                        </h2>
                                        <p className='font02 mb-4'>
                                        Vous avez un compte Maathena Pro ? Connectez-vous       </p>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Identifiant*</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Row>
                                                    <Col>
                                                    <Form.Label>Mot de passe*</Form.Label>
                                                    </Col>
                                                    <Col><Form.Label style={{float:"right"}}>Mot de passe oublié ?</Form.Label></Col>
                                                </Row>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                            <Row>
                                            <Col></Col>
                                            <Col xs={12}><Button variant="primary" className='btn51'>Se connecter</Button></Col>
                                            <Col></Col>
                                        </Row>
                                        </Form>
                                        <Row>
                                            <Col></Col>
                                            <Col xs={12}><Button variant="primary" className='btn53'><RiGoogleFill className='google2'/>  Se connecter avec Google</Button></Col>
                                            <Col></Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='bg687'>

                                        <h2 className='font03'>
                                        Nouveau client ?
                                        </h2>
                                        <p className='font04 my-'>
                                        Merci de remplir le formulaire de demande <br></br>d’inscription.    </p>
                                        <Row>
                                            <Col></Col>
                                            <Col xs={7}><Button variant="primary" className='btn54'>S’inscrire</Button></Col>
                                            <Col></Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>


                <Footer />
            </div>
        </div>
    )
}

export default Login
