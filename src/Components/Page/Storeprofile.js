import React, { useState } from 'react';
import Footer from '../Footer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiImageAdd } from "react-icons/bi";
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import CardGroup from 'react-bootstrap/CardGroup';
import { IoClose } from "react-icons/io5";
import { Button, Container } from 'react-bootstrap';
import './Storeprofile.css';
import { FiMapPin } from "react-icons/fi";
import Form from 'react-bootstrap/Form';
import { FaRegEdit } from "react-icons/fa";
const Storeprofile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);
    const [isOpen7, setIsOpen7] = useState(false);
    const [isOpen8, setIsOpen8] = useState(false);
    const [isOpen9, setIsOpen9] = useState(false);
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
                        <h2 className='recherche27 mb-3'>Profil de ma boutique en ligne</h2>

                    </div>
                </div>

                <div className='bvgr'>
                    <div className='dasbb'>
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

                                    <Card className="profilecard">

                                        <img src='./img/profilestor.png' className='profileimg' />
                                        <div className="profilecardnm">


                                            <button className="bn9098" onClick={() => setIsOpen(true)} style={{ float: "right", border: "none" }}> <FaRegEdit
                                                className='adit' /> </button>
                                        </div>

                                    </Card>

                                    {isOpen && (
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
                                                                    <Button className='VOIR_LESPRODUITS'>Update</Button>
                                                                </Form>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <button onClick={() => setIsOpen(false)} className='onclick'>
                                                                <IoClose />
                                                            </button>
                                                        </Col>
                                                    </Row>
                                                </div>

                                            </Card>
                                        </div>
                                    )}

                                    <Card className="profilecard1">

                                        <h3 className='Description mb-4'>Description</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula ut sodales. Phasellus eleifend diam ut sem congue, in ultricies risus efficitur. Nam malesuada rhoncus congue. Vivamus malesuada justo vel tincidunt mattis. Nam pharetra, urna sit amet volutpat vulputate, nisi elit tincidunt diam, at sagittis lacus ante eget tellus. Etiam condimentum justo ligula, in mattis tellus vulputate id. Integer nulla felis, interdum in bibendum ut, vulputate sed magna. Mauris interdum sapien eu urna tempus, non mattis ligula ultricies. Nam pellentesque erat purus, vel malesuada lacus rhoncus eu.
                                            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer id iaculis mauris, ornare dignissim risus.</p>
                                        <Button className='VOIR_LESPRODUITS'>VOIR LES PRODUITS</Button>
                                        <div className="profilecardnmn">
                                            <button className="bn9098" onClick={() => setIsOpen1(true)} style={{ float: "right", border: "none" }}>
                                                <FaRegEdit style={{ float: "right" }} className='adit1' />
                                            </button>

                                        </div>
                                    </Card>
                                    {isOpen1 && (
                                        <div>
                                            <Card className="profilecardp">

                                                <div>
                                                    <Row>

                                                        <Col>
                                                            <Stack direction="horizontal" gap={3}>
                                                                <div className="p-2"></div>
                                                                <div className="p-2 ms-auto"></div>
                                                                <div className="p-2"> <button onClick={() => setIsOpen1(false)} className='onclick'>
                                                                    <IoClose />
                                                                </button></div>
                                                            </Stack>

                                                        </Col>


                                                        <div>
                                                            <Form>
                                                                <div className='fornlab'>
                                                                    <Form.Group controlId="formBasicEmail" >


                                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                                            <Form.Label>Description</Form.Label>
                                                                            <Form.Control as="textarea" rows={3} style={{ height: "400px" }}
                                                                             maxLength={200}  required />
                                                                        </Form.Group>
                                                                      
                                                                    </Form.Group>
                                                                </div>
                                                                <Button className='VOIR_LESPRODUITS'>Update</Button>
                                                            </Form>
                                                        </div>


                                                    </Row>
                                                </div>

                                            </Card>
                                        </div>
                                    )}

                                    <Card className="profilecard1">



                                        <Row >
                                            <h3 className='Descriptionb mb-4'>Labels</h3>
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

                                        <div className="profilecardnmn">
                                            <button className="bn9098" onClick={() => setIsOpen2(true)} style={{ float: "right", border: "none" }}>  <FaRegEdit style={{ float: "right" }} className='adit1' />

                                            </button>
                                        </div>
                                    </Card>

                                    {isOpen2 && (
                                        <div>
                                            <Card className="profilecardp">

                                                <div>
                                                    <Row>
                                                        <Col>
                                                            <Stack direction="horizontal" gap={3}>
                                                                <div className="p-2"></div>
                                                                <div className="p-2 ms-auto"></div>
                                                                <div className="p-2">  <button onClick={() => setIsOpen2(false)} className='onclick'>
                                                                    <IoClose />
                                                                </button></div>
                                                            </Stack>

                                                        </Col>
                                                    </Row >

                                                    <div>
                                                        <Form>
                                                        <Row className="">
                                                            <Col>
                                                                <div >
                                                                    {['checkbox'].map((type) => (
                                                                        <div key={`inline-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="Fabriqué en France"
                                                                                name="Fabriqué en France"
                                                                                type={type}
                                                                                id={`inline-${type}-2`}
                                                                                className='radio3 radio9' required />

                                                                        </div>
                                                                    ))}

                                                                </div>
                                                                <div >
                                                                    {['checkbox'].map((type) => (
                                                                        <div key={`inline-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="Biologique"
                                                                                name="Biologique"
                                                                                type={type}
                                                                                id={`inline-${type}-2`}
                                                                                className='radio3 radio9' required />

                                                                        </div>
                                                                    ))}

                                                                </div>
                                                                <div >
                                                                    {['checkbox'].map((type) => (
                                                                        <div key={`inline-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="Commerce équitable"
                                                                                name="Commerce équitable"
                                                                                type={type}
                                                                                id={`inline-${type}-2`}
                                                                                className='radio3 radio9' required />

                                                                        </div>
                                                                    ))}

                                                                </div>
                                                                <div >
                                                                    {['checkbox'].map((type) => (
                                                                        <div key={`inline-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="Fait main"
                                                                                name="Fait main"
                                                                                type={type}
                                                                                id={`inline-${type}-2`}
                                                                                className='radio3 radio9' required />

                                                                        </div>
                                                                    ))}

                                                                </div>
                                                                <div >
                                                                    {['checkbox'].map((type) => (
                                                                        <div key={`inline-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="Recyclé"
                                                                                name="Recyclé"
                                                                                type={type}
                                                                                id={`inline-${type}-2`}
                                                                                className='radio3 radio9' required />

                                                                        </div>
                                                                    ))}

                                                                </div>
                                                                <div >
                                                                    {['checkbox'].map((type) => (
                                                                        <div key={`inline-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="Vegan"
                                                                                name="Vegan"
                                                                                type={type}
                                                                                id={`inline-${type}-2`}
                                                                                className='radio3 radio9' required />

                                                                        </div>
                                                                    ))}

                                                                </div>

                                                            </Col>
                                                            <Col>
                                                                <div >
                                                                    {['checkbox'].map((type) => (
                                                                        <div key={`inline-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="Fabriqué en France"
                                                                                name="Fabriqué en France1"
                                                                                type={type}
                                                                                id={`inline-${type}-2`}
                                                                                className='radio3 radio9' required />

                                                                        </div>
                                                                    ))}

                                                                </div>
                                                                <div >
                                                                    {['checkbox'].map((type) => (
                                                                        <div key={`inline-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="Biologique"
                                                                                name="Biologique1"
                                                                                type={type}
                                                                                id={`inline-${type}-2`}
                                                                                className='radio3 radio9' required />

                                                                        </div>
                                                                    ))}

                                                                </div>
                                                                <div >
                                                                    {['checkbox'].map((type) => (
                                                                        <div key={`inline-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="Commerce équitable"
                                                                                name="Commerce équitable1"
                                                                                type={type}
                                                                                id={`inline-${type}-2`}
                                                                                className='radio3 radio9' required />

                                                                        </div>
                                                                    ))}

                                                                </div>
                                                                <div >
                                                                    {['checkbox'].map((type) => (
                                                                        <div key={`inline-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="Fait main"
                                                                                name="Fait main1"
                                                                                type={type}
                                                                                id={`inline-${type}-2`}
                                                                                className='radio3 radio9' required />

                                                                        </div>
                                                                    ))}

                                                                </div>
                                                                <div >
                                                                    {['checkbox'].map((type) => (
                                                                        <div key={`inline-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="Recyclé"
                                                                                name="Recyclé1"
                                                                                type={type}
                                                                                id={`inline-${type}-2`}
                                                                                className='radio3 radio9' required />

                                                                        </div>
                                                                    ))}

                                                                </div>
                                                                <div >
                                                                    {['checkbox'].map((type) => (
                                                                        <div key={`inline-${type}`} className="mb-3">
                                                                            <Form.Check
                                                                                inline
                                                                                label="Vegan"
                                                                                name="Vegan1"
                                                                                type={type}
                                                                                id={`inline-${type}-2`}
                                                                                className='radio3 radio9' required />

                                                                        </div>
                                                                    ))}

                                                                </div>

                                                            </Col>

                                                        </Row>
                                                        <Button className='VOIR_LESPRODUITS b'>Update</Button>
                                                        </Form>
                                                    </div>



                                                </div>

                                            </Card>
                                        </div>
                                    )}
                                    <CardGroup className="profilecard9">
                                        <Card className="profilecards">
                                            <Card.Img variant="top" src="./img/meile11.jpeg" />
                                            <Card.Body>
                                                <Card.Title>Zoom produit</Card.Title>
                                                <Card.Text>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula !
                                                </Card.Text>
                                                <Button className='Découvrir'>Découvrir</Button>
                                                <button className="bn9098" onClick={() => setIsOpen3(true)} style={{ float: "right", border: "none" }}>  <FaRegEdit style={{ float: "right" }} className='adit11' />

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
                                                <button className="bn9098" onClick={() => setIsOpen4(true)} style={{ float: "right", border: "none" }}>    <FaRegEdit style={{ float: "right" }} className='adit11' />
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
                                                <button className="bn9098" onClick={() => setIsOpen5(true)} style={{ float: "right", border: "none" }}>   <FaRegEdit style={{ float: "right" }} className='adit11' />
                                                </button>
                                            </Card.Body>

                                        </Card>

                                    </CardGroup>
                                    {isOpen3 && (
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
                                    )}




                                    <Card className="profilecard1">

                                        <h3 className='Description mb-5 text-center'>Qui se cache derriere ce commerce ?</h3>
                                        <Row>
                                            <Col>
                                                <img src="./img/card.png" className='cardimgsu mb-3' />
                                                <h3 className='Description0 text-center'>Prénom Nom</h3>
                                                <p className='text-center'>Profession</p>
                                                <p className='text-center styley'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
                                            </Col>
                                            <Col>
                                                <img src="./img/card23.png" className='cardimgsu mb-3' />
                                                <h3 className='Description0 text-center'>Prénom Nom</h3>
                                                <p className='text-center'>Profession</p>
                                                <p className='text-center styley'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros. </p>
                                            </Col>
                                        </Row>
                                        <div className="profilecardnmn">
                                            <button className="bn9098" onClick={() => setIsOpen6(true)} style={{ float: "right", border: "none" }}>
                                                <FaRegEdit style={{ float: "right" }} className='adit1' />
                                            </button>

                                        </div>

                                    </Card>
                                    {isOpen6 && (
                                        <div>
                                            <Card className="profilecardp">

                                                <div>

                                                    <Stack direction="horizontal" gap={3}>
                                                        <div className="p-2"></div>
                                                        <div className="p-2 ms-auto"></div>
                                                        <div className="p-2">  <button onClick={() => setIsOpen6(false)} className='onclick'>
                                                            <IoClose />
                                                        </button></div>
                                                    </Stack>


                                                    <Row>


                                                        <Col >

                                                            <div>
                                                                <Row>
                                                                    <Col>
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
                                                                            <Form.Control type="text" placeholder="Enter Name" required/><br></br>

                                                                            <Form.Control type="text" placeholder="Enter name" required/><br></br>
                                                                              <Form.Label>Description</Form.Label>
                                                                        <Form.Control as="textarea" rows={3} style={{ height: "100px" }}
                                                                             maxLength={200}  required />
                                                                            <Button className='VOIR_LESPRODUITS'>Update</Button>
                                                                        </Form>
                                                                    </Col>
                                                                    <Col>
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
                                                                            <Form.Control type="text" placeholder="Enter Name" /><br></br>

                                                                            <Form.Control type="text" placeholder="Enter name" /><br></br>
                                                                            <Form.Label>Description</Form.Label>
                                                                        <Form.Control as="textarea" rows={3} style={{ height: "100px" }}
                                                                             maxLength={200}  required />
                                                                            <Button className='VOIR_LESPRODUITS'>Update</Button>
                                                                        </Form>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Col>

                                                    </Row>
                                                </div>

                                            </Card>
                                        </div>
                                    )}
                                    <Card className="profilecard1">
                                        <img src='./img/Images.png' className='profileimgs' />
                                        <Button className='VOIR_LESPRODUITS'>VOIR LA BOUTIQUE</Button>
                                        <div className="profilecardnmn">
                                            <button className="bn9098" onClick={() => setIsOpen7(true)}
                                                style={{ float: "right", border: "none" }}>
                                                <FaRegEdit style={{ float: "right" }} className='adit1' />

                                            </button>
                                        </div>
                                    </Card>

                                    {isOpen7 && (
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
                                                                    <Button className='VOIR_LESPRODUITS'>Update</Button>
                                                                </Form>
                                                            </div>
                                                        </Col>
                                                        <Col>
                                                            <button onClick={() => setIsOpen7(false)} className='onclick'>
                                                                <IoClose />
                                                            </button>
                                                        </Col>
                                                    </Row>
                                                </div>

                                            </Card>
                                        </div>
                                    )}
                                    <Card className="profilecard1">


                                        <h3 className='Description mb-4'>Avis des clients</h3>
                                        <Row className='row34'>
                                            <Col>
                                                <Card className="avisdes">
                                                    <div className='avisdas'>
                                                        <img src='./img/Vector (1).png' className='profi mb-3' width={20} />
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula ut sodales. Phasellus eleifend diam.</p>

                                                    </div>
                                                    <div className='backgr'>
                                                        <img src='./img/Ellipse_255.png' className='profie' />
                                                        <p className='text-center'>Florian M</p>
                                                    </div>
                                                </Card>
                                            </Col>
                                            <Col>
                                                <Card className="avisdes">
                                                    <div className='avisdas'>
                                                        <img src='./img/Vector (1).png' className='profi mb-3' width={20} />
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula ut sodales. Phasellus eleifend diam.</p>

                                                    </div>
                                                    <div className='backgr'>
                                                        <img src='./img/Ellipse_255.png' className='profie' />
                                                        <p className='text-center'>Florian M</p>
                                                    </div>
                                                </Card>
                                            </Col>
                                            <Col>
                                                <Card className="avisdes">
                                                    <div className='avisdas'>
                                                        <img src='./img/Vector (1).png' className='profi mb-3' width={20} />
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula ut sodales. Phasellus eleifend diam.</p>

                                                    </div>
                                                    <div className='backgr'>
                                                        <img src='./img/Ellipse_255.png' className='profie' />
                                                        <p className='text-center'>Florian M</p>
                                                    </div>
                                                </Card>
                                            </Col>

                                        </Row>
                                        <div className="profilecardnmn">
                                            <button className="bn9098" onClick={() => setIsOpen8(true)} style={{ float: "right", border: "none" }}>   <FaRegEdit style={{ float: "right" }} className='adit1' />
                                            </button>

                                        </div>
                                    </Card>
                                    {isOpen8 && (
                                        <div>
                                            <Card className="profilecardp">

                                                <div>
                                                    <Stack direction="horizontal" gap={3}>
                                                        <div className="p-2"></div>
                                                        <div className="p-2 ms-auto"></div>
                                                        <div className="p-2">  <button onClick={() => setIsOpen8(false)} className='onclick'>
                                                            <IoClose />
                                                        </button></div>
                                                    </Stack>
                                                    <Row>


                                                        <Col >

                                                            <div>
                                                                <Row>
                                                                    <Col>
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
                                                                            <Form.Control type="text" placeholder="Enter Name" required /><br></br>

                                                                            <Form.Control type="text" placeholder="Enter name" required /><br></br>
                                                                              <Form.Label>Description</Form.Label>
                                                                        <Form.Control as="textarea" rows={3} style={{ height: "100px" }}
                                                                             maxLength={200}  required />
                                                                            <Button className='VOIR_LESPRODUITS'>Update</Button>
                                                                        </Form>
                                                                    </Col>
                                                                    <Col>
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
                                                                            <Form.Control type="text" placeholder="Enter Name" required/><br></br>

                                                                            <Form.Control type="text" placeholder="Enter name" required/><br></br>
                                                                              <Form.Label>Description</Form.Label>
                                                                        <Form.Control as="textarea" rows={3} style={{ height: "100px" }}
                                                                             maxLength={200}  required />
                                                                            <Button className='VOIR_LESPRODUITS'>Update</Button>
                                                                        </Form>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Col>

                                                    </Row>
                                                </div>

                                            </Card>
                                        </div>
                                    )}
                                    <Card className="profilecard1">

                                        <h3 className='Description mb-4'>Où nous trouver ? </h3>
                                        <Row>
                                            <Col>
                                                <Stack direction="horizontal" gap={3} className='mb-4'>
                                                    <div className="p" style={{ marginTop: "-39px" }}> <FiMapPin className='Description08 ' /></div>
                                                    <div className="p"> <p className='Description08 '> Adresse</p>
                                                        <p style={{ marginTop: "-15px" }}>13 rue de Machin truc<br></br>
                                                            75000 Paris</p>
                                                    </div>

                                                </Stack>
                                                <Stack direction="horizontal" gap={3} className='mb-4'>
                                                    <div className="p" style={{ marginTop: "-39px" }}> <FiMapPin className='Description08 ' /></div>
                                                    <div className="p"> <p className='Description08 '> Téléphone</p>
                                                        <p style={{ marginTop: "-15px" }}>+33 6 23 45 67 89<br></br>
                                                            75000 Paris</p>
                                                    </div>

                                                </Stack>
                                                <Stack direction="horizontal" gap={3}>
                                                    <div className="p" style={{ marginTop: "-39px" }}> <FiMapPin className='Description08 ' /></div>
                                                    <div className="p"> <p className='Description08 '> Horaires d’ouverture</p>
                                                        <p style={{ marginTop: "-15px" }}>Du lundi au samedi de 9h à 20h<br></br>
                                                            Le dimanche de 9h à 12h</p>
                                                    </div>

                                                </Stack>
                                            </Col>
                                            <Col>
                                                <img src="./img/map901.png" className='map901' />
                                                <img src="./img/Group133712.png" className='map902' />
                                            </Col>
                                        </Row>

                                        <div className="profilecardnmn">
                                            <button className="bn9098" onClick={() => setIsOpen9(true)} style={{ float: "right", border: "none" }}> <FaRegEdit style={{ float: "right" }} className='adit1' />

                                            </button>
                                        </div>
                                    </Card>
                                    {isOpen9 && (
                                        <div>
                                            <Card className="profilecardp">

                                                <div>
                                                    <Stack direction="horizontal" gap={3}>
                                                        <div className="p-2"></div>
                                                        <div className="p-2 ms-auto"></div>
                                                        <div className="p-2"> <button onClick={() => setIsOpen9(false)} className='onclick'>
                                                            <IoClose />
                                                        </button></div>
                                                    </Stack>







                                                    <div>
                                                        <Form>
                                                            <Row>

                                                                <Col>

                                                                    <div className='fornlab'>
                                                                        <Form.Group controlId="formBasicEmail" className="custom-file-drop-area ">

                                                                            <Form.Label for="filephotos">
                                                                                <BiImageAdd className='bigimg' />
                                                                                Téléchargez votre photo
                                                                            </Form.Label>

                                                                            <Form.Control type="file" placeholder="Enter photos" id="filephotos" required />

                                                                        </Form.Group>
                                                                    </div>

                                                                </Col>
                                                                <Col>

                                                                    <div className='fornlab'>
                                                                        <Form.Group controlId="formBasicEmail" className="custom-file-drop-area ">

                                                                            <Form.Label for="filephotos">
                                                                                <BiImageAdd className='bigimg' />
                                                                                Téléchargez votre photo
                                                                            </Form.Label>

                                                                            <Form.Control type="file" placeholder="Enter photos" id="filephotos" required />

                                                                        </Form.Group>
                                                                    </div>

                                                                </Col>

                                                            </Row>
                                                            <br></br>
                                                            <Form.Control type="text" placeholder="Enter Adresse"  required/><br></br>

                                                            <Form.Control type="number" placeholder="Enter Téléphone"  maxLength={10} required/><br></br>
                                                            <Form.Control type="text" placeholder="Enter Horaires d’ouverture" required/>


                                                            <Button className='VOIR_LESPRODUITS'>Update</Button>
                                                        </Form>
                                                    </div>




                                                </div>

                                            </Card>
                                        </div>
                                    )}
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>







                <Footer />
            </div>
        </div>
    )
}

export default Storeprofile
