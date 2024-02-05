import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css'
import Footer from '../Footer'

import { CiSearch } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { BsBucket } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';

const Register = () => {
    return (
        <div>
            <div className="new-wrapper" >



                <div className="showcase3 ">
                <img src="./image/register.jpeg" alt="Picture" style={{objectFit:"cover"}}/>
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
                        <h2 className='recherchen'>S’inscrire</h2>
                    </div>
                </div>
                <Container>



                    <div >
                        <Row >
                            <Col sm={2}>

                            </Col>
                            <Col sm={8}>
                                <Form className='form910'>
                                    <h1 className='Updatepro '>Créer un compte Maathena</h1>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="text-white">Nom</Form.Label>
                                        <Form.Control className="FormControl2" type="text" />

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="text-white">Prénom</Form.Label>
                                        <Form.Control className="FormControl2" type="text" maxLength={50} required />

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="text-white">Email</Form.Label>
                                        <Form.Control className="FormControl2" type="email" maxLength={30} required />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="text-white">Mot de passe</Form.Label>
                                        <Form.Control className="FormControl2" type="password" required />

                                    </Form.Group>


                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="text-white">Date de naissance</Form.Label>
                                        <Form.Control className="FormControl2" type="date" id="myDate" min="1980-01-01" max="2015-12-31" required />

                                    </Form.Group>
                                    <Form.Label className="text-white">Je suis :</Form.Label>

                                    <Col className='radio2'>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3">
                                                <Form.Check
                                                    inline
                                                    label="Un homme"
                                                    name="group4"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                    className='radio3 radio9 text-white' required />
                                                <Form.Check
                                                    inline
                                                    label="Une femme"
                                                    name="group4"
                                                    type={type}
                                                    id={`inline-${type}-2`} className='radio3 radio9 text-white'
                                                    required />
                                                <Form.Check
                                                    inline
                                                    label="Je ne souhaite pas répondre "
                                                    name="group4"
                                                    type={type}
                                                    id={`inline-${type}-2`} className='radio3 radio9 text-white'
                                                    required />

                                            </div>
                                        ))}
                                    </Col>
                                    <br></br>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox"
                                            label="Oui, je veux recevoir par e-mail des infos sur 
                                         les nouveautés. Désinscription possible à tout moment. (facultatif)" className='text-white' />
                                    </Form.Group><br></br>
                                    <p className='text-white'>En vous enregistrant pour créer un compte, vous acceptez
                                        nos <a href='#' style={{ color: "#FFC309" }}>modalités d’utilisation</a>. Veuillez lire
                                        notre <br></br><a href='#' style={{ color: "#FFC309" }}>politique de confidentialité.</a></p><br></br>
                                    <p className='text-white'>* Champs obligatoires</p>
                                    <Button className='VOIR_LESPRODUITSbn'>S’INSCRIRE</Button>
                                </Form>
                            </Col>
                            <Col sm={2}>

                            </Col>
                        </Row>
                    </div>
                </Container>
                <br></br>  <br></br>  <br></br>  <br></br>
                <Footer />
            </div>
        </div>
    )
}
function myFunction() {
    let x = document.getElementById("myDate").min = "1999-01-01";
    document.getElementById("demo").innerHTML = "The value of the min attribute was changed from '1980-01-01' to '1999-01-01'.";
}
export default Register
