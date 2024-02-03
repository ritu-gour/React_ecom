import React from 'react'
import { Card, Col, Container, Nav, Row, Stack } from 'react-bootstrap'
import './Tradedata.css'
import Footer from '../Footer'
const Tradedata = () => {
    return (
        <div>
            <div className="new-wrapper" >

                <div className="showcase3 ">

                    <img src="./Component2.png" alt="Picture" />

                    <div className="overlay">
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
                        <h2 className='recherche27 mb-3'>Piloter mon activité</h2>
                        <p>Mon commerce</p>

                    </div>
                </div>
                <div className='bvgr'>
                    <div className='dasbb'>
                        <Container >
                            <Row>
                                <Col sm={2}>
                                    <p className='table19' ><b>Tableau de bord</b></p>
                                    <p className='table19'><b>Gérer ma boutique</b></p>



                                    <p className='table19'>Ventes</p>
                                    <p className='table19'>Analyse</p>
                                    <p className='table19' style={{ fontWeight: "800" }}>Mon commerce</p>
                                    <p className='table19'>Mon compte</p>

                                </Col>
                                <Col sm={10}>
                                    <Card className='Tradedatab'>
                                        <Row>
                                            <Col sm={4}>

                                                <img src='./bgg.jpeg' className='Tradedataimg' />
                                            </Col>
                                            <Col sm={6}>
                                                <h5 style={{color:"#084442",fontSize:"25px"}}>Informations générales</h5><br></br>
                                                <p><b style={{ fontWeight: "800" }}>Nom du commerce :</b> Moncommerce</p>
                                                <Stack direction="horizontal" gap={3} style={{ marginTop: "-60px" }}>
                                                    <div className="p"><b style={{ fontWeight: "800" }}>Adresse :</b> </div>
                                                    <div className="p-2 " style={{ margin: "40px 0px 0px 0px" }}>6 rue de Blabla
                                                        <br></br> 75000 Paris<br></br>
                                                        FRANCE</div>

                                                </Stack>
                                                <p><b style={{ fontWeight: "800" }}>Téléphone </b> : 05 00 00 00 00</p>

                                                <p><b style={{ fontWeight: "800" }}>Numérot SIRET </b> : 23456789 </p>

                                                <p className='mb-2'><b style={{ fontWeight: "800" }} >Horaires d’ouverture : </b></p>
                                                Lundi : 9h00-20h00<br></br>
                                                Mardi : 9h00-20h00<br></br>
                                                Mercredi : 9h00-20h00<br></br>
                                                Jeudi : 9h00-20h00<br></br>
                                                Vendredi : 9h00-20h00<br></br>
                                                Samedi : 9h00-13h00<br></br>
                                                Dimanche : fermé
                                                <br></br>

                                                <hr className='hr5' ></hr>
                                                <Row >
                                                    <h3 className=' mb-4' style={{color:"#084442",fontSize:"25px"}}>Labels</h3>
                                                    <Col>
                                                        <img src="./img/Bia.png" className='pro22' />
                                                        <p className='text-center'>Biologique</p>
                                                    </Col>
                                                    <Col>  <img src="./img/Fait.png" className='pro22' />
                                                        <p className='text-center'>Fait main</p></Col>
                                                    <Col>  <img src="./img/Equitable.png" className='pro222' />
                                                        <p className='text-center'>Commerce
                                                            équitable</p></Col>
                                                    <Col>  <img src="./img/Vector.png" className='pro223' />
                                                        <p className='text-center'>Biologique</p></Col>
                                                </Row>
                                                <br></br>

                                                <hr className='hr5'></hr>
                                                <Row>
                                                    <Col sm={5}>
                                                        <p><b style={{ fontWeight: "600" }}>Entrepôts de stockage </b> :Oui </p>
                                                    </Col>
                                                    <Col sm={4}>
                                                        <p><b style={{ fontWeight: "800" }}>Entrepôt 1  </b></p>

                                                        8 rue de la paix<br></br>
                                                        75000 Paris<br></br>
                                                        FRANCE
                                                    </Col>
                                                    <Col sm={3}>
                                                        <p style={{ fontWeight: "800" }}>Entrepôt 2 </p>
                                                        
                                                        15 rue de la liberté<br></br>
                                                        75000 Paris<br></br>
                                                        FRANCE

                                                    </Col>
                                                </Row>
                                                <br></br>
                                                <hr className='hr5'></hr>
                                                <p><b style={{ fontWeight: "600" }}>Chiffre d’affaire :  </b> 100,000 euros </p>
                                               
                                            </Col>
                                           
                                        </Row>
                                    </Card>
                                </Col>

                            </Row>
                        </Container>
                        <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
                    </div>
                </div>
                <Footer />
            </div>


        </div>
    )
}

export default Tradedata
