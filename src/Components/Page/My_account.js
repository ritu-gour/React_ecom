import React from 'react'

import Footer from '../Footer'

import { FaRegEdit } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";
import { Button, Col, Container, Nav, Row, Stack } from 'react-bootstrap'
import { LuUser2 } from "react-icons/lu";
import './My_account.css'
import { CiLocationArrow1 } from "react-icons/ci";
import { MdCall } from 'react-icons/md';
const My_account = () => {
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
                                <Col sm={2}>
                                   
                                    <p className='table19'><b style={{ fontWeight: "800" }}>Données personnelles</b> </p>

                                    <p className='table19'>Mon offre</p>
                                    <p className='table19'>Paramètres</p>
                                    
                                </Col>
                                <Col sm={10}>
                                    <h2 className='chiffre'>Données personnelles</h2>
                                    <Stack direction="horizontal" gap={3} className='lusers'>
                                        <div className=""><LuUser2 className='luuser' /></div>
                                        <div className="p908" ><p><b style={{ fontWeight: "800" }}>Nom :</b> Martin<br></br>
                                            <b style={{ fontWeight: "800" }}>Prénom :</b> Jean<br></br>
                                            <b style={{ fontWeight: "800" }}> Date de naissance :</b> 01/01/1993<br></br>
                                            <b style={{ fontWeight: "800" }}>Sexe :</b> Homme</p>
                                        </div>
                                        <div className="p-2 bn987ato">

                                            <Button className="bn9098 btnsco" style={{ border: "none" }} href='/Updatepro'>
                                                <FaRegEdit className='adit1 bnnnn btnsco' />
                                            </Button>

                                        </div>

                                    </Stack>
                                    <hr className='hr5' style={{ color: "black" }}></hr>
                                    <Stack direction="horizontal" gap={3} className='lusers1'>
                                        <div className=""><SiMaildotru className='luuser' /></div>
                                        <div className="p9088" ><p><b style={{ fontWeight: "800" }}>Adresse email : </b> jeanmartin@gmail.com</p>

                                        </div>
                                        <div className="p-2 bn987ato bn987ato">

                                            <Button className="bn9098 btnsco1" style={{ border: "none" }} href='/Updatepro'>
                                                <FaRegEdit className='adit1 bnnnn btnsco' />
                                            </Button>

                                        </div>

                                    </Stack>
                                    <hr className='hr5' style={{ color: "black" }}></hr>
                                    <Stack direction="horizontal" gap={3} className='lusers1'>
                                        <div className=""><MdCall className='luuser' /></div>
                                        <div className="p9088" ><p><b style={{ fontWeight: "800" }}>Téléphone : </b>  0624670495</p>

                                        </div>
                                        <div className="p-2 bn987ato">

                                            <Button className="bn9098 btnsco1" style={{ border: "none" }} href='/Updatepro'>
                                                <FaRegEdit className='adit1 bnnnn btnsco' />
                                            </Button>

                                        </div>

                                    </Stack>
                                    <hr className='hr5' style={{ color: "black" }}></hr>


                                    <Stack direction="horizontal" gap={3} className='lusers'>
                                        <div className=""><CiLocationArrow1 className='luuser' /></div>
                                        <div className="p908" ><p><b style={{ fontWeight: "800" }}>Adresse de facturation</b></p> 
                                            6 rue du machin blabla<br></br>
                                            75000 Paris<br></br>
                                            FRANCE

                                        </div>
                                        <div className="p-2 bn987ato">

                                            <Button className="bn9098 btnsco" style={{ border: "none" }} href='/Updatepro'>
                                                <FaRegEdit className='adit1 bnnnn btnsco' />
                                            </Button>

                                        </div>

                                    </Stack>
                                    <hr className='hr5' style={{ color: "black" }}></hr>
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

export default My_account
