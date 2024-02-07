import { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Accordion from 'react-bootstrap/Accordion';
import Footer from '../Footer'
import './Item_Detail.css'
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaMinus } from "react-icons/fa6";
import Carousel from 'react-bootstrap/Carousel'
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPlus } from "react-icons/fa6";
import { Button, Card, Container, Nav } from 'react-bootstrap';
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { BsBucket } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

const Item_Detail = () => {
    var sett = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
      };  
      var sett2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }; 
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    return (
        <div>
            <div className="new-wrapper">
                <div className="showcase3">

                    <img src="./Component2.png" alt="Picture" style={{ objectFit: "cover" }} />

                    <div className="overlay">
                        <Row className='displaybp'>
                            <Col>
                            </Col>
                            <Col>
                            </Col>
                            <Col>
                                <Nav className="justify-content-end bn9" activeKey="" >
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
                        <h2 className='recherche'>Fleurs & Co</h2>
                    </div>
                </div>

                <div className="itemcart">
                    <Container>
                        <Row>

                            <Col sm={6}>
                                <Carousel data-bs-theme="dark" className='carousel'>
                                    <Carousel.Item>

                                        <img
                                            className="d-block w-100 r1 gift2"
                                            src="./image/product3.jpeg"
                                            alt="/" style={{ objectFit: "cover" }}
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>

                                        <img
                                            className="d-block w-100 r1 gift2 "
                                            src="./image/product3.jpeg"
                                            alt="/" style={{ objectFit: "cover" }}
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>

                                        <img
                                            className="d-block w-100 r1 gift2"
                                            src="./image/product3.jpeg"
                                            alt="/" style={{ objectFit: "cover" }}
                                        />

                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                            <Col sm={6}>
                                <h3 className='cartetitle'>Titre de l’article</h3>
                                <p>Adipiscing elit. Maecenas vulputate convallis ligula ut sodales. Phasellus eleifend diam ut sem congue, in ultricies risus efficitur. Nam malesuada rhoncus congue. Vivamus malesuada justo vel tincidunt mattis. </p>
                                <p ><b style={{ fontWeight: "700" }}>Catégorie : </b> Décoration</p>
                                <p className='mb-5'>Dimensions : <br></br>
                                    10.3 x 40 x 13 (cm)</p>
                                <p>Couleur</p>
                                <Stack direction="horizontal" gap={3} className="backcart4">
                                    <div className="p-">
                                        <p className='backgs'>Gris</p>
                                    </div>
                                    <div className="p-2">
                                        <p className='backgs1'>Beige</p>
                                    </div>
                                    <div className="p-2">
                                        <p className='backgs22'>Vert</p>
                                    </div>
                                </Stack>
                                <h2 className='price09'>20€</h2>
                                <Row>
                                    <Col>
                                        <div className="col-md-1">
                                            <div className="input-group">
                                                <Stack direction="horizontal" gap={3} className="enq">
                                                    <div className="p-"><div className="input-group-prepend">
                                                        <Button className="btn btn-outline-primary" type="button" onClick={decNum}><FaMinus /></Button>
                                                    </div></div>
                                                    <div className="p-"><input type="text" style={{ fontSize: "20px" }} className="form-control num" value={num} onChange={handleChange} /></div>
                                                    <div className="p-" > <div className="input-group-prepend">
                                                        <Button className="btn btn-outline-primary" type="button" onClick={incNum}><FaPlus /></Button>
                                                    </div></div>
                                                    <div className="p">

                                                    </div>
                                                </Stack>







                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <Button className="btnfav " ><CiHeart />
                                            Favoris</Button>
                                    </Col>
                                </Row>

                                <Button className=" addto" >
                                    <FaShoppingCart /> Ajouter au panier</Button>
                                <Button className=" addto1 mb-5" >
                                    Acheter maintenant</Button>
                                <hr className="borderw" />
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Details</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Composition du produit etc<br></br>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. </p>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <hr />
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Livraison</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <hr />
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Retours</Accordion.Header>
                                        <Accordion.Body>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>

                        </Row>
                        <h3 className='cartetitle my-5'>Découvrez aussi...</h3>
                        <Row>
                            <Col sm={3}>
                                <div>
                                    <Card className="carditem">
                                        <img src="./image/productimage.jpeg" />
                                        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipis.</p>
                                        <h5>7€99</h5>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div>
                                    <Card className="carditem">
                                        <img src="./image/productimage.jpeg" />
                                        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipis.</p>
                                        <h5>7€99</h5>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div>
                                    <Card className="carditem">
                                        <img src="./image/productimage.jpeg" />
                                        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipis.</p>
                                        <h5>7€99</h5>
                                    </Card>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div>
                                    <Card className="carditem">
                                        <img src="./image/productimage.jpeg" />
                                        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipis.</p>
                                        <h5>7€99</h5>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                        <h3 className='cartetitle my-5'>Continuez vos achats</h3>









                        <div className="desktop3">
     <Container> 
     <Slider {...sett}>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div> <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
    </Slider>
    </Container>
     </div>
    
     <div className="desktop4">
     <Container> 
     <Slider {...sett2}>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
      <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div> <div>
      <img className="cloth1 "  src="./image/cloth_category.jpeg"  alt="/" />
      <p className="text-center ">Categorie</p>                            
      </div>
    </Slider>
    </Container>
     </div>


                       


                    </Container>

                </div>



                <Footer />
            </div>



        </div>
    )
}
export default Item_Detail
