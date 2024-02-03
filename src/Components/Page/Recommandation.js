
import Footer from '../Footer'
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Recommendations.css'
import Dropdown from 'react-bootstrap/Dropdown';
import 'react-international-phone/style.css';
import { LuUser2 } from "react-icons/lu";
import { CardGroup, Form, Col, Container, Nav, Row, Stack, Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-circular-progressbar/dist/styles.css';
import Accordion from 'react-bootstrap/Accordion';
import { MdOutlineThumbUp } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaPlus ,FaMinus} from "react-icons/fa6";
import { MdOutlineStar, MdOutlineStarBorderPurple500 } from "react-icons/md";
import './Recommandation.css'
const Recommandation = () => {
    
    const [value, setValue] = React.useState(70);
    const [value1, setValue1] = React.useState(27);
    const [value2, setValue2] = React.useState(3);

    const itemsPerPage = 3; // Change this to the desired number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTitle, setSearchTitle] = useState('');

    const [data, setData] = useState([]);
    console.log('data1', data);
    const [search, SetSearch] = useState('');
    const [filter, setFilter] = useState([]);

    const getProduct = async () => {
        try {
            const req = await fetch("https://fakestoreapi.com/products");
            const res = await req.json();
            setData(res);
            setFilter(res);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProduct();
    }, []);

    ///////morning  code
    const filteredData = data.filter(value => value.category.toLowerCase().includes(searchTitle.toLowerCase()));

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    // Slice the data based on the calculated index range
    const paginatedData = filteredData.slice(startIndex, endIndex);





    const handleTitleChange = (value) => {
        setSearchTitle(value);
        setCurrentPage(1); // Reset to the first page when the title filter changes
    };

    useEffect(() => {
        const result = data.filter((item) => {
            return item.title.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilter(result);
    }, [search]);





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
                        <p>Analyse</p>

                    </div>
                </div>
                <div className='bvgr'>
                    <div className='dasbb'>
                        <Container >
                            <Row>
                                <Col sm={2}>
                                    <p className='table19' ><b>Tableau de bord</b></p>
                                    <p className='table19'>Gérer ma boutique</p>
                                    <p className='table19'>Ventes</p>
                                    <p className='table19'><b style={{ fontWeight: "800" }}>Analyse</b> </p>
                                    <Stack direction="horizontal" gap={3}>
                                        <div className="p-"></div>
                                        <div className="p mb-3">Ventes / retours
                                            <br></br>
                                            <b style={{ fontWeight: "800" }}>  Données client </b>
                                        </div>


                                    </Stack>



                                    <p className='table19'>Mon commerce</p>
                                    <p className='table19'>Mon compte</p>

                                </Col>
                                <Col sm={10}>

                                    <h2 className='chiffre'>Données clients / visiteurs</h2>

                                    <p style={{ color: "#084442", fontSize: "18px" }}>Profil des clients en ligne</p>

                                    <br></br>
                                    <Row>
                                        <Col sm={6} >
                                            <Card className='grap2'>
                                                <p style={{ color: "#084442", fontSize: "18px" }}>Age</p>

                                                <label for="18-25 ans">18-25 ans</label><span className="poll-bar-graph age" data-amount="2" data-total="3"></span>

                                                <label for="26-35 ans">26-35 ans</label><span className="poll-bar-graph age1" data-amount="3" data-total="4"></span>

                                                <label for="36-46 ans">36-46 ans</label><span className="poll-bar-graph age2"
                                                    data-amount="2" data-total="3"></span>

                                                <label for="47-60 ans">47-60 ans</label><span className="poll-bar-graph age3"
                                                    data-amount="2" data-total="3"></span>


                                                <label for="+ 60 ans">+ 60 ans</label><span className="poll-bar-graph age4"
                                                    data-amount="2" data-total="3"></span>
                                            </Card>

                                        </Col>
                                        <Col sm={6}>
                                            <Card className='grap1'>
                                                <p style={{ color: "#084442", fontSize: "18px" }}>Sexe</p>
                                                <br></br>
                                                <Form>
                                                    <Form.Group >
                                                        <Row>
                                                            <Col xs="9">
                                                                <p>Femmes</p>
                                                                <RangeSlider

                                                                    onChange={e => setValue(e.target.value)}
                                                                    className="rang5" />
                                                            </Col>
                                                            <Col xs="3">

                                                                <Form.Control value={value} className='rang7' />
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                </Form>
                                                <Form>
                                                    <Form.Group >
                                                        <Row>
                                                            <Col xs="9">
                                                                <p>Hommes</p>
                                                                <RangeSlider

                                                                    onChange={e => setValue1(e.target.value1)}
                                                                    className="rang5" />
                                                            </Col>
                                                            <Col xs="3">

                                                                <Form.Control value={value1} className='rang7' />
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>

                                                </Form>
                                                <Form>
                                                    <Form.Group >
                                                        <Row>
                                                            <Col xs="9">
                                                                <p>Autre / ne préfère pas dire</p>
                                                                <RangeSlider

                                                                    onChange={e => setValue2(e.target.value2)}
                                                                    className="rang5" />
                                                            </Col>
                                                            <Col xs="3">

                                                                <Form.Control value={value2} className='rang7' />
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                </Form>
                                            </Card>
                                        </Col>
                                    </Row>


                                    <Card className='number5'>
                                        <Row>
                                            <Col sm={4}>
                                                <p className='numbb'>Nombre de nouveaux clients (via la marketplace) </p>
                                            </Col>
                                            <Col sm={4}>
                                                <LuUser2 className='usert' />
                                                <p className='text-center uernum'>78</p>
                                            </Col>
                                            <Col sm={4}>
                                                <Dropdown className='drop7'>
                                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='filter45'>
                                                        Nov 2023
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>

                                                        <Dropdown.Item >1</Dropdown.Item>


                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Col>
                                        </Row>
                                    </Card>
                                    <h2 className='chiffre'>Parcours en ligne / traffic</h2>
                                    <Card className="bbbbbm">


                                        <Row className='mbnvc bnpro'>
                                            <Stack direction="horizontal" gap={3} className='row56'>
                                                <div className="p-2"><h3 className='Description '>Articles les plus vus </h3>
                                                    <p className='mb-5'>Pages articles les plus visitées sur votre boutique Maathena</p>
                                                </div>
                                                <div className="p-2 ms-auto"></div>
                                                <div className="p-2"><Dropdown>
                                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='filter45'>
                                                        Ce mois-ci
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        {data.map((value) => {
                                                            return (
                                                                <Dropdown.Item key={value.id} onClick={() => handleTitleChange(value.category)}>{value.category}</Dropdown.Item>
                                                            )
                                                        })

                                                        }


                                                    </Dropdown.Menu>
                                                </Dropdown></div>
                                            </Stack>
                                            {paginatedData.map((value) => {

                                                return (
                                                    <Col key={value.id} sm={3}>

                                                        <CardGroup>

                                                            <Card className='vbbcard'>
                                                                <h5 className='text-center'>{value.price}</h5>
                                                                <p className='text-center mb-5' style={{ fontSize: "30px" }}>ventes</p>
                                                                <Card.Body>
                                                                    <Stack direction="horizontal" gap={3}>
                                                                        <div>
                                                                            <p>Product</p>
                                                                        </div>
                                                                        <div className='ms-auto'>
                                                                            <p>{value.price}</p>
                                                                        </div>
                                                                    </Stack>

                                                                    <div >

                                                                        <br></br>
                                                                        <Card.Img variant="top" src={value.image} className='cardimgtop' />
                                                                    </div>

                                                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                                                </Card.Body>

                                                            </Card>
                                                        </CardGroup>

                                                    </Col>
                                                )
                                            })

                                            }



                                        </Row>



                                    </Card>

                                    <br></br>
                                    <Row>
                                        <Col sm={6} >
                                            <Card className='grap4'>
                                                <p style={{ color: "#084442", fontSize: "18px" }} className='text-center'>Taux de conversion</p>
                                                <p className='text-center'> Proportion d’achats par rapport au nombre de visiteurs uniques ayant parcouru la boutique.</p>

                                            </Card>

                                        </Col>
                                        <Col sm={6}>
                                            <Card className='grap4'>
                                                <p style={{ color: "#084442", fontSize: "18px" }} className='text-center'>Taux d’abandon panier</p>
                                                <p className='text-center'>Proportion de visiteurs qui mettent des articles dans leur panier mais ne commandent pas.</p>
                                                <br></br>

                                            </Card>
                                        </Col>


                                    </Row>
                                    <Card className='grap4'>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0" className='accord5'>
                                                <Accordion.Header className='accord5b'><MdOutlineThumbUp className='mdout' /> <b className='nosconsiel'>Nos conseils pour diminuer le nombre de retours d’articles</b> </Accordion.Header>
                                                <Accordion.Body>
                                                    <Stack direction="horizontal" gap={3}>
                                                        <div className="p-2"></div>
                                                        <div className="p-2">
                                                            <p className='encou'>

                                                                Encouragez le retour en offrant des incitatifs à vos clients (programme de fidélisation, code promotionnel après un premier achat, envoie d’offres personnalisées par e-mail, etc.).
                                                                Entretenez et fidélisez la relation en sollicitant régulièrement vos clients avec des messages ciblés. Mettez en place des campagnes de remarketing.</p>



                                                        </div>
                                                    </Stack>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>
                                    </Card><br></br>
                                    <h2 className='chiffre'>Fidélité</h2>
                                    <br>
                                    </br>
                                    <Row>
                                        <Col sm={6}>
                                            <Card className='grap4'>
                                                <p style={{ color: "#084442", fontSize: "18px" }} className='text-center'>Nouveaux abonnés <FaArrowUp className='faar' /></p>

                                                <Dropdown className='drop7 mb-3'>
                                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='filter45'>
                                                        Nov 2023
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>

                                                        <Dropdown.Item >1</Dropdown.Item>


                                                    </Dropdown.Menu>
                                                </Dropdown>

                                                <LuUser2 className='usert' />
                                                <p className='text-center uernum'>12</p>
                                            </Card>
                                        </Col>
                                        <Col sm={6}>
                                            <Card className='grap4'>

                                                <p style={{ color: "#084442", fontSize: "18px" }} className='text-center'>Désabonnements <FaArrowUp className='faar' />
                                                </p>
                                                <Dropdown className='drop7 mb-3'>
                                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='filter45'>
                                                        Nov 2023
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>

                                                        <Dropdown.Item >1</Dropdown.Item>


                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <LuUser2 className='usert' />
                                                <p className='text-center uernum'>4</p>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <h2 className='chiffre'>Satisfaction client</h2>
                                    <br>
                                    </br>
                                    <Card className='grap4'>

                                        <p style={{ color: "#084442", fontSize: "18px" }}
                                        >Sondage satisfaction
                                        </p>
                                        <p>Note globale</p>
                                        <Stack direction="horizontal" >
                                            <div className="p-"><MdOutlineStar className='star5' /></div>
                                            <div className="p-"><MdOutlineStar className='star5' /></div>
                                            <div className="p-"><MdOutlineStar className='star5' /></div>
                                            <div className="p"><MdOutlineStar className='star5' /></div>
                                            <div className="p-"><MdOutlineStar className='star5' /></div>
                                            <div className="p-2"> <span className="poll-bar-graph age6" style={{ margin: "8px 0px 0px 0px" }} data-amount="2" data-total="3"></span>
                                            </div>
                                        </Stack>

                                        <Stack direction="horizontal" >
                                            <div className="p-"><MdOutlineStar className='star5' /></div>
                                            <div className="p-"><MdOutlineStar className='star5' /></div>
                                            <div className="p-"><MdOutlineStar className='star5' /></div>
                                            <div className="p"><MdOutlineStar className='star5' /></div>
                                            <div className="p-"><MdOutlineStarBorderPurple500 className='star5' /></div>
                                            <div className="p-2"> <span className="poll-bar-graph age7" style={{ margin: "8px 0px 0px 0px" }} data-amount="2" data-total="3"></span>
                                            </div>
                                        </Stack>
                                        <Stack direction="horizontal" >
                                            <div className="p-"><MdOutlineStar className='star5' /></div>
                                            <div className="p-"><MdOutlineStar className='star5' /></div>
                                            <div className="p-"><MdOutlineStar className='star5' /></div>
                                            <div className="p"><MdOutlineStarBorderPurple500 className='star5' /></div>
                                            <div className="p-"><MdOutlineStarBorderPurple500 className='star5' /></div>
                                            <div className="p-2"> <span className="poll-bar-graph age8" style={{ margin: "8px 0px 0px 0px" }} data-amount="2" data-total="3"></span>
                                            </div>
                                        </Stack>
                                        <Stack direction="horizontal" >
                                            <div className="p-"><MdOutlineStar className='star5' /></div>
                                            <div className="p-"><MdOutlineStarBorderPurple500 className='star5' /></div>
                                            <div className="p-"><MdOutlineStarBorderPurple500 className='star5' /></div>
                                            <div className="p"><MdOutlineStarBorderPurple500 className='star5' /></div>
                                            <div className="p-"><MdOutlineStarBorderPurple500 className='star5' /></div>

                                        </Stack>

                                        <p style={{ color: "#084442", fontSize: "16px" }}>Commentaires clients</p>

                                        <p> <FaUserCircle className='fauser' />  Marie L</p>

                                        <p className='fausers'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula ut sodales. Phasellus eleifend diam ut sem congue, in ultricies risus efficitur. Nam malesuada rhoncus congue. Vivamus malesuada justo vel tincidunt mattis. Nam pharetra, urna sit amet volutpat vulputate, nisi elit tincidunt diam, at sagittis lacus ante eget tellus. </p>

                                        <br></br>


                                        <p> <FaUserCircle className='fauser' /> Lucas B</p>

                                        <p className='fausers'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula ut sodales. Phasellus eleifend diam ut sem congue ! </p>






                                    </Card>
                                    <Card className='grap40'>
                                        <p>Analyse des questionnaires satisfaction</p>
                                        <Row>
                                            <Col sm={6}>
                                                <p style={{fontWeight:"600"}} >Points forts : </p>
                                                <p> <FaPlus /> Emballage soigné</p>
                                                <p> <FaPlus /> Emballage soigné</p>
                                                <p> <FaPlus /> Emballage soigné</p>
                                            </Col>
                                            <Col sm={6}>
                                            <p style={{fontWeight:"600"}}>Motifs principaux de plaintes : </p>
                                                <p> <FaMinus /> Produits non conformes</p>
                                                <p> <FaMinus /> Produits non conformes</p>
                                                <p> <FaMinus /> Produits non conformes</p>
                                             
                                            </Col>
                                        </Row>
                                    </Card>



                                    <Card className='modifiee'>
                                        <p className='text-center pasexv'>Passez à la version Premium pour débloquer plus de données</p>
                                        <br></br>
                                        <Button className='modifie'> JE MODIFIE MON OFFRE</Button>
                                    </Card>
                                </Col>

                            </Row>
                        </Container>
                        <br></br> <br></br> <br></br>
                    </div>
                </div>
                <Footer />
            </div>
        </div >
    )
}

export default Recommandation
