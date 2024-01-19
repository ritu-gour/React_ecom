import React from 'react'
import './Info_inscription_commerçants.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
// import '../style.css'
import Footer from '../../Components/Footer';

const Info_inscription_commerçants = () => {
    return (
        <div >


            <div className="new-wrapper">
              
                <div className="showcase">
                    <div id="google_translate_element" style={{ float: 'right' }}></div>
                    <img src="./Component2.png" alt="Picture" />
                    <div className="overlay">
                        <h2>Ouvrir une boutique Maathena</h2>

                    </div>
                </div>


                <Container  >


                    <Row >
                        <Col xs={12} md={8} className='marg1'>
                            <h2 className='font2 my-3'>Boostez vos ventes en ligne avec <br />   Maathena, marketplace éthique</h2>
                            <p className='my- bv' style={{ fontSize: "16px", padding: "0px 0px 0px 0px" }}>lorem Some quick example text to build on the Lorem Ipsum and make
                                up In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                                \the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may
                                be used as a placeholder before final copy is available.In publishing and graphic design,
                            </p>
                            <Button variant=" bv1 my-3" className="bv1">
                                <a href='./contact' target="_blank" style={{ color: "white" }}>S’INSCRIRE SUR NOTRE MARKETPLACE</a>
                            </Button>

                        </Col>
                        <Col xs={6} md={4}>
                            <img src='./about1.png' alt='' width={400} height={400} className='my-5 m45' />

                        </Col>
                    </Row>

                </Container>
                <div className='bg3' style={{
                    backgroundImage:
                        "url('./img3.png')", backgroundSize: "cover",
                    backgroundRepeat: "no-repeat", padding: "60px 0px 60px 0px"
                }}>
                    <Container>

                        <Row>
                            <Col sm={4}></Col>
                            <Col sm={8}>

                                <Row>
                                    <Col sm>
                                        <img src='./icon1.png' width={50} style={{ width: "50%", padding: " 0px 30px 0px 30px" }} />

                                        <p className='my-3 bv' style={{ fontSize: "19px", color: "white" }}>Plateforme éthique
                                        </p>
                                    </Col>
                                    <Col sm>
                                        <img src='./icon2.png' width={50} style={{ width: "50%", padding: " 0px 30px 0px 30px" }} />

                                        <p className='my-3 bv' style={{ fontSize: "19px", color: "white" }}>1542 commerces
                                        </p>
                                    </Col>
                                    <Col sm>
                                        <img src='./icon3.png' width={50} style={{ width: "50%", padding: " 0px 30px 0px 30px" }} />

                                        <p className='my-3 bv' style={{ fontSize: "19px", color: "white" }}>Services pro
                                        </p>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </Container>


                </div>

                <Container  >


                    <Row >
                        <Col xs={6} md={4}>
                            <img src='./Développez.png' alt='' width={300} height={400} className='my-5 m46 ' />

                        </Col>
                        <Col xs={12} md={8} className='marg1'>
                            <img src='./Rectangle414.png' alt='' width={40} className='my-4 img76 ' />
                            <h2 className='font3 '>Développez votre activité en ligne</h2>
                            <p className='my- bh89' style={{ fontSize: "16px" }}>lorem Some quick example text to build on the Lorem Ipsum and make
                                up In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
                                \the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may

                            </p>

                            <h4 className='font4 my- '>Sous-titre</h4>
                            <p className='my- bh8' style={{ fontSize: "16px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                            </p>

                            {/* <Button variant=" bv1 my-3" className="bv1">
                                <a href='./contact' target="_blank" style={{ color: "white" }}>S’INSCRIRE SUR NOTRE MARKETPLACE</a>
                            </Button> */}

                        </Col>

                    </Row>

                </Container>
                <Container  >


                    <Row >
                        <Col xs={12} md={8} className='marg2'>
                            <div className='p7'>
                                <img src='./Rectangle_413.png' alt='' width={40} className=' img78 ' />
                                <h2 className='font5 '>Expédiez vos colis facilement</h2>
                                <p className='my- bv' style={{ fontSize: "16px", padding: "0px 0px 0px 0px", justifyContent: " center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                                </p>
                                <Row >
                                    <Col>

                                        <h4 className='font6 '>Sous-titre</h4>
                                        <p className='my- bv' style={{ fontSize: "16px", padding: "0px 70px 0px 0px", justifyContent: " center" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius </p>
                                    </Col>
                                    <Col>
                                        <h4 className='font6 '>Sous-titre </h4>
                                        <p className='my- bv' style={{ fontSize: "16px", padding: "0px 70px 0px 0px", justifyContent: " center" }}>

                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                                        </p>

                                    </Col>
                                </Row>
                            </div>


                        </Col>
                        <Col xs={6} md={4}>
                            <img src='./imge2.png' alt='' width={300} height={400} className='my-5 m45' />

                        </Col>
                    </Row>

                </Container>
                <Container  >


                    <Row >
                        <Col xs={6} md={4}>
                            <img src='./Image1.png' alt='' width={300} height={400} className='my-5 m46 ' />

                        </Col>
                        <Col xs={12} md={8} className='marg1'>
                            <img src='./ic_outline-query-stats.png' alt='' width={40} className='my-4 img76 ' />
                            <h2 className='font3 '>Pilotez votre activité simplement</h2>
                            <p className='my- bh89' style={{ fontSize: "16px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            </p>

                            <h4 className='font4 my- '>Sous-titre</h4>
                            <p className='my- bh8' style={{ fontSize: "16px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                            </p>

                            {/* <Button variant=" bv1 my-3" className="bv1">
            <a href='./contact' target="_blank" style={{ color: "white" }}>S’INSCRIRE SUR NOTRE MARKETPLACE</a>
        </Button> */}

                        </Col>

                    </Row>

                </Container>

                <div className='bg3' style={{
                    backgroundImage:
                        "url('./img67.png')", backgroundSize: "cover",
                    backgroundRepeat: "no-repeat", padding: "80px 0px 80px 0px"
                }}>
                    <Container>
                        <h2 className='font33 text-center'>Témoignage commerçant</h2>
                        <p className='my- bh899 text-center' style={{ fontSize: "17px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>
                        <img src='./Lightbox.png' className='img787' />

                    </Container>


                </div>
                <Container>
                    <h2 className='font334 text-center'>Tarifs</h2>
                    <div className='tb12'>
                        <Table responsive="sm" className='table1 '>
                            <thead>
                                <tr>


                                    <th style={{ backgroundColor: "#F9F9F9" }}></th>
                                    <th style={{ background: "#B9E6C9", padding: "15px 0px 15px 0px ", textAlign: "center" }}>BASIQUE</th>
                                    <th style={{ background: "#084442", padding: "15px 0px 15px 0px", textAlign: "center" }}>PLUS</th>
                                    <th style={{ background: "#FFC309", padding: "15px 0px 15px 0px", textAlign: "center" }}>Table heading</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td >Boutique en ligne sur <br></br> la marketplace</td>
                                    <td className='vb' style={{ textAlign: "center" }}><RxCross2 className="rx1" /></td>
                                    <td style={{ textAlign: "center" }}><TiTick className="titick1" />
                                    </td>
                                    <td style={{ textAlign: "center" }}><TiTick className="titick1" />
                                    </td>
                                </tr>
                                <tr>

                                    <td style={{ backgroundColor: "#F9F9F9" }}>Aide à la création de<br></br> la boutique en ligne </td>
                                    <td style={{ backgroundColor: "#F9F9F9", textAlign: "center" }}><RxCross2 className="rx1" /></td>
                                    <td style={{ backgroundColor: "#F9F9F9", textAlign: "center" }}><TiTick className="titick1" />
                                    </td>
                                    <td style={{ backgroundColor: "#F9F9F9", textAlign: "center" }}><TiTick className="titick1" />
                                    </td>
                                </tr>
                                <tr>

                                    <td >Support 5j/7</td>
                                    <td style={{ textAlign: "center" }}><RxCross2 className="rx1" /></td>
                                    <td style={{ textAlign: "center" }} ><RxCross2 className="rx1" /></td>
                                    <td style={{ textAlign: "center" }}><TiTick className="titick1" /></td>
                                </tr>
                                <tr>

                                    <td style={{ backgroundColor: "#F9F9F9" }}>Tarifs (à partir de)*</td>
                                    <td style={{ backgroundColor: "#F9F9F9", textAlign: "center" }}>50€ / mois</td>
                                    <td style={{ backgroundColor: "#F9F9F9", textAlign: "center" }}>150€ / mois</td>
                                    <td style={{ backgroundColor: "#F9F9F9", textAlign: "center" }}>300€ / mois</td>
                                </tr>
                                <tr>

                                    <td ></td>
                                    <td ></td>
                                    <td ></td>
                                    <td ><br></br></td>
                                </tr>
                                <tr>

                                    <td style={{ backgroundColor: "#F9F9F9" }}></td>
                                    <td style={{ backgroundColor: "#F9F9F9" }}></td>
                                    <td style={{ backgroundColor: "#F9F9F9" }}></td>
                                    <td style={{ backgroundColor: "#F9F9F9" }}><br></br></td>
                                </tr>
                                <tr>

                                    <td ></td>
                                    <td ></td>
                                    <td ></td>
                                    <td ><br></br></td>
                                </tr>
                            </tbody>
                        </Table>
                        <p style={{
                            fontFamily: "Work Sans",
                            fontSize: "16px", marginTop: "30px"
                        }}>* Les tarifs sont calculés en fonction de votre chiffre d’affaire. Veuillez nous contacter <br></br>pour un devis sur-mesure.</p>

                    </div>
                </Container>

                <Container>
                    <h2 className='font334 text-center'>Comment ça marche ?</h2>

                    <div>
                        <Row >
                            <Col></Col>
                            <Col>
                                <img src='./image.png' className='im' />
                                <p className='text-center round1 my-3'>1</p>
                                <p className='text-center t12' style={{ fontSize: "15px" }}>Je fais une demande d’ouverture de compte professionnel.</p>
                            </Col>
                            <Col>
                                <img src='./image.png' className='im' />
                                <p className='text-center round1 my-3'>2</p>
                                <p className='text-center t12' style={{ fontSize: "15px" }}>Inscription validée. Je renseigne les informations sur mon commerce.</p>
                            </Col>
                            <Col>
                                <img src='./image.png' className='im' />
                                <p className='text-center round1 my-3'>3</p>
                                <p className='text-center t12' style={{ fontSize: "15px" }}>J’intègre mon catalogue de produits et je commence à vendre.</p>
                            </Col>
                            <Col>
                                <img src='./image.png' className='im' />
                                <p className='text-center round1 my-3'>4</p>
                                <p className='text-center t12' style={{ fontSize: "15px" }}>Je booste mes ventes grâce à l’IA de Maathena. </p>
                            </Col>
                            <Col></Col>
                        </Row>
                    </div>
                </Container>

              <div className='section90'>
              <Container className='bg13'>
                    <Row >
                        <Col xs={6} md={5}>
                            <img src='./img568.jpeg' alt='' width={400} height={300} className='my-5 m ' />

                        </Col>
                        <Col xs={12} md={7} className='marg1'>

                            <h2 className='font900'>Créez votre boutique sur Maathena</h2>
                            <p className='my- bh898' style={{ fontSize: "16px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                            </p>

                            <Button variant=" bv1" className="formula my-3">
                                <a href='./contact' target="_blank" style={{ color: "black", fontSize: "14px", fontWeight: "700", color: "#084442" }}>VENDRE SUR MAATHENA</a>
                            </Button>

                            

                        </Col>

                    </Row>
                </Container>

              </div>
                <Footer />
            </div>



        </div>

    )
}

export default Info_inscription_commerçants
