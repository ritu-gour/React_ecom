import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiImageAdd } from "react-icons/bi";


// import { Card, Col, Container, Form, Row, Stack } from 'react-bootstrap';

import { IoMdClose } from "react-icons/io";

import Nav from 'react-bootstrap/Nav';
// import { Container } from 'react-bootstrap'
import Footer from '../Footer'
import { Button, Card, Container, Form, Stack } from 'react-bootstrap';
import './Add_an_item.css'
const Add_an_item = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectFile = (event) => {
        const selectedFiles = event.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        const imagesArray = selectedFilesArray.map((file) => {
            return URL.createObjectURL(file);
        });

        setSelectedImages((previousImages) => previousImages.concat(imagesArray));

        // FOR BUG IN CHROME
        event.target.value = "";
    };

    function deleteHandler(image) {
        setSelectedImages(selectedImages.filter((e) => e !== image));
        URL.revokeObjectURL(image);
    }
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
                                    <Stack direction="horizontal" gap={3}>
                                        <div className='ms-auto nm'>
                                            <Button className='CONNECTERMONSITE'> CONNECTER MON SITE</Button>  <Button className='CONNECTERMONSITE'> TELECHARGER UN FICHIER CSV</Button>
                                        </div>
                                    </Stack>

                                    <Card className='cardpad'>
                                        <Form className=''>
                                            <Row>
                                                <Col sm={10}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label className="">Nom du produit</Form.Label>
                                                        <Form.Control className="FormControl22 bn0m" type="text" required/>

                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label className="">Référence</Form.Label>
                                                        <Form.Control className="FormControl22 bn0m" type="text"  required />

                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label className="">Marque</Form.Label>
                                                        <Form.Control className="FormControl22 bn0m" type="text"  required />

                                                    </Form.Group>
                                                </Col >
                                                <Col sm={2}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label className="">ID</Form.Label>
                                                        <Form.Control className="FormControl22" type="text"  required />

                                                    </Form.Group>
                                                </Col>

                                            </Row>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="">Résumé</Form.Label>
                                                <Form.Control className="FormControl22" type="text"  required />

                                            </Form.Group>

                                            <Form.Label className="">Description</Form.Label>
                                            <Form.Control className="FormControl22" as="textarea" rows={3} style={{ height: "100px" }}
                                                 required  maxLength={400} />

                                            <Row>
                                                <Col sm={6}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label className="">Prix de vente TTC</Form.Label>
                                                        <Form.Control className="FormControl22" type="number"  required />

                                                    </Form.Group>
                                                </Col>
                                                <Col sm={6}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label className="">Promotion</Form.Label>
                                                        <Form.Control className="FormControl22" type="text"  required />

                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={6}>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label className="">Quantité</Form.Label>
                                                        <Form.Control className="FormControl22" type="number"  required />

                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label className="">Catégorie</Form.Label>
                                                        <Form.Control className="FormControl22" type="text"  required />

                                                    </Form.Group>

                                                </Col>
                                                <Col sm={6}>

                                                </Col>
                                            </Row>

                                            <Form.Label >Photos</Form.Label>
                                            <Card className="magign">
                                                <Stack direction="horizontal" gap={3}>
                                                    <div className="p">

                                                        <Form.Group controlId="formBasicEmail" className="custom-file-drop-area1 ">

                                                            <Form.Label for="filephotos">
                                                                <BiImageAdd className='bigimg1' />

                                                            </Form.Label>

                                                            <Form.Control type="file"
                                                                name="images"
                                                                onChange={onSelectFile}
                                                                multiple
                                                                accept="image/png , image/jpeg, image/webp" placeholder="Enter photos" id="filephotos" required />

                                                        </Form.Group>
                                                        {selectedImages.length > 0 &&
                                                            (selectedImages.length > 10 ? (
                                                                <p className="error">
                                                                    You can't upload more than 10 images! <br />
                                                                    <span>
                                                                        please delete <b> {selectedImages.length - 10} </b> of them{" "}
                                                                    </span>
                                                                </p>
                                                            )
                                                                :
                                                                (
                                                                    <p

                                                                    >
                                                                        {/* UPLOAD {selectedImages.length} IMAGE
  {selectedImages.length === 1 ? "" : "S"} */}
                                                                    </p>
                                                                )
                                                            )
                                                        }</div>
                                                    <div className="p"><div className="images">
                                                        <Row>

                                                            {selectedImages &&
                                                                selectedImages.map((image, index) => {
                                                                    return (


                                                                        <Col key={image} className="image" >

                                                                            <Card className="acrdi ">
                                                                                <button onClick={() => deleteHandler(image)} className="delet " style={{ margin: "0px 0px 0px 0px" }}><IoMdClose />
                                                                                </button> <br></br>
                                                                                <img src={image} height="100" alt="upload" style={{ margin: "-20px 0px 0px 0px", width: "100px" }} />
                                                                            </Card>
                                                                        </Col>




                                                                    );
                                                                })}

                                                        </Row>
                                                    </div></div>

                                                </Stack>

                                            </Card>
                                            <br></br>
                                            <Form.Label>Photo miniature</Form.Label>
                                            <Stack direction="horizontal" gap={3}>
                                                <Card className="magign2">
                                                    <Form.Group controlId="formBasicEmail" className="custom-file-drop-area1 ">

                                                        <Form.Label for="filephotos">
                                                            <BiImageAdd className='bigimg1' />

                                                        </Form.Label>

                                                        <Form.Control type="file"
                                                            name="images"
                                                            onChange={onSelectFile}
                                                            multiple
                                                            accept="image/png , image/jpeg, image/webp" placeholder="Enter photos" id="filephotos" required />

                                                    </Form.Group>
                                                </Card>
                                            </Stack>


                                            <br></br>
                                            <Form.Label className="">Dimensions</Form.Label>
                                            <Stack direction="horizontal" gap={3}>

                                                <div className="">

                                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                                        <Form.Control className="FormControl22" type="number" placeholder="Longueur"  required />

                                                    </Form.Group></div>
                                                <div className=""> <Form.Group className="mb-3" controlId="formBasicEmail" >

                                                    <Form.Control className="FormControl22" type="number"  placeholder="Largeur" required />

                                                </Form.Group></div>
                                                <div className=""> <Form.Group className="mb-3" controlId="formBasicEmail">

                                                    <Form.Control className="FormControl22" type="number"  placeholder="Profondeur" required />

                                                </Form.Group></div>
                                            </Stack>






                                            <Stack direction="horizontal" gap={3}>

                                                <div className="">


                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label className="">Poids</Form.Label>
                                                        <Form.Control className="FormControl22" type="number"  required />

                                                    </Form.Group>
                                                </div>
                                            </Stack>
                                            <Stack direction="horizontal" gap={3} >

                                                <div className="">
                                                    <Form.Label className="">Labels</Form.Label>
                                                    <Form.Select aria-label="Default select example" className="FormControl22">
                                                        <option>Ajouter des labels</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </div>
                                            </Stack>

<br></br>
                                            <Form.Label className="">Variants</Form.Label>
                                            <Stack direction="horizontal" gap={3}>

                                                <div className="">

                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                   
                                                        <Form.Control className="FormControl22" type="text" placeholder="Couleurs"  required />

                                                    </Form.Group></div>
                                                <div className=""> 
                                                <Form.Group className="mb-3" controlId="formBasicEmail" >

                                                    <Form.Control className="FormControl22" type="number"  placeholder="Tailles" required />

                                                </Form.Group></div>
                                                <div className=""> <Form.Group className="mb-3" controlId="formBasicEmail">

                                                    <Form.Control className="FormControl22" type="text"  placeholder="H / F" required />

                                                </Form.Group></div>
                                            </Stack>




                                            <Button className='AJOUTER'>AJOUTER</Button>
                                        </Form>
                                    </Card>
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

export default Add_an_item
