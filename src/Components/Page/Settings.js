import React from 'react'

import Footer from '../Footer'

import { IoMdCheckmark } from "react-icons/io";

import { Button, Card, Col, Container, Form, Nav, Row, Stack } from 'react-bootstrap'

import './Offer.css'
import { FaRegEdit } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
const settings = () => {
    return (
        <div>
            <div className="new-wrapper " >

                <div className="showcase3 " >

                    {/* <img src="./Component2.png" alt="Picture" /> */}

                    <div className="overlay" >
                        <Row className='displayb'>
                            <Col>
                            </Col>
                            <Col>
                            </Col>
                            <Col>
                                <Nav className="justify-content-end bn9" activeKey="" >

                                    <Nav.Item>
                                        <Nav.Link href="/"> <img src="./img/Ellipse.png" className='Ellipse' /></Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </Col>
                        </Row>
                        <h2 className='My_account mb-3'>Mon compte</h2>


                    </div>
                </div>
                <div >
                    <div className='dasbb'>
                        <Container >
                            <Row>
                                <Col sm={3}>
                                    <p className='table19' ><b>Données personnelles</b></p>
                                    <p className='table19'>Mon offre</p>

                                    <p className='table19'><b style={{ fontWeight: "800" }}>Paramètres </b> </p>



                                </Col>
                                <Col sm={9}>
                                    <h2 className='chiffre'>Paramètres</h2>
                                    <Card className='maathenabackb'>




                                        <h2 className='chiffre'>Notifications</h2>
                                        <Form>
                                            <Stack direction="horizontal" className='griddis1' gap={3}>
                                                <div>
                                                    <p >Produit bientôt en rupture</p>
                                                </div>
                                                <div className='marlefth'>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"

                                                        id="custom-switch"

                                                    /></div>
                                            </Stack>
                                            <Stack direction="horizontal" className='griddis1' gap={3}>
                                                <div>
                                                    <p>Lorem ipsum dolor</p>
                                                </div>
                                               
                                                <div className='marlefth1'>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"

                                                        id="custom-switch"

                                                    /></div>
                                            </Stack>
                                            <Stack direction="horizontal" className='griddis1' gap={3}>
                                                <div>
                                                    <p>Lorem ipsum dolor</p>
                                                </div>
                                                <div  className='marlefth1'>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"

                                                        id="custom-switch"

                                                    /></div>
                                            </Stack>
                                            <Stack direction="horizontal" className='griddis1' gap={3}>
                                                <div>
                                                    <p>Lorem ipsum dolor</p>
                                                </div>
                                                <div  className='marlefth1'>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"

                                                        id="custom-switch"

                                                    /></div>
                                            </Stack>
                                            <Stack direction="horizontal" className='griddis1' gap={3}>
                                                <div>
                                                    <p>Lorem ipsum dolor</p>
                                                </div>
                                                <div  className='marlefth1'>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"

                                                        id="custom-switch"

                                                    /></div>
                                            </Stack>
                                            <Stack direction="horizontal" className='griddis1' gap={3}>
                                                <div>
                                                    <p>Lorem ipsum dolor</p>
                                                </div>
                                                <div  className='marlefth1'>
                                                    <Form.Check // prettier-ignore
                                                        type="switch"

                                                        id="custom-switch"

                                                    /></div>
                                            </Stack>

                                        </Form>




                                    </Card>
                                    <Card className='maathenabackbn'>

                                        <h2 className='chiffre'>Mot de passe</h2>

                                        <Stack direction="horizontal"  gap={3} className='lusers1'>
                                            <div className=""><RiLockPasswordLine className='luuser' /></div>
                                            <div className="p9088" ><p><b style={{ fontWeight: "800" }}>Mot de passe actuel : </b>  **************</p>

                                            </div>
                                            <div className="p-2 bn987ato">

                                                <Button className="bn9098 btnsco1" style={{ border: "none" }} href='/Updatepro'>
                                                    <FaRegEdit className='adit1 bnnnn btnsco' />
                                                </Button>

                                            </div>

                                        </Stack>
                                    </Card>
                                </Col>

                            </Row>
                        </Container>
                        <br></br> <br></br> <br></br>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default settings
