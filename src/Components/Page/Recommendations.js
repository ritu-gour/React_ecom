import Footer from '../Footer'
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Recommendations.css'
import Dropdown from 'react-bootstrap/Dropdown';
import 'react-international-phone/style.css';
import { BsMinecartLoaded } from "react-icons/bs";
import { Button, CardGroup, Col, Container, Nav, Row, Stack } from 'react-bootstrap'
import Product1 from './Product1';
import Retournes from './Retournes';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Recommendations = () => {
    const percentage1 = 45;
    const percentage2 = 70;
    const percentage3 = 57;
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
                                        <div className="p mb-3"><b style={{ fontWeight: "800" }}>Ventes / retours</b>
                                            <br></br>
                                            Données client
                                        </div>


                                    </Stack>



                                    <p className='table19'>Mon commerce</p>
                                    <p className='table19'>Mon compte</p>

                                </Col>
                                <Col sm={10}>
                                    <h2 className='chiffre'>Ventes / retours</h2>




                                    <Card className="bbbbbm">
                                        {/* <Stack direction="horizontal" gap={3} className='row56'>
                                            <div className="p-2"><h3 className='Description mb-4'>Articles les plus vendus </h3></div>
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
                                        </Stack> */}

                                        <Row className='mbnvc bnpro'>
                                            <Stack direction="horizontal" gap={3} className='row56'>
                                                <div className="p-2"><h3 className='Description mb-4'>Articles les plus vendus </h3></div>
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

                                    <Card className="bbbbbm mb-5">
                                        <Product1 />


                                    </Card>

                                    <Card style={{ width: '18rem' }} className='cardbsmin'>

                                        <Card.Body>
                                            <Card.Title style={{ color: "#084442", fontSize: "18px" }} className='text-center'>Panier moyen</Card.Title>
                                            <p style={{ color: "#084442", fontSize: "14px" }} className='text-center'>VMC (valeur moyenne de commande)</p>
                                            <BsMinecartLoaded className='bsmin' />
                                            <h5 style={{ color: "#084442", fontSize: "20px" }} className='text-center'>35.50€</h5>
                                        </Card.Body>
                                    </Card>


                                    <br></br>

                                    <Card className="bbbbbm mb-5">
                                        <Retournes />


                                    </Card>


                                    <Card className="bbbbbm mb-5">
                                        <h3 className='Description mb-4'>Type de vente </h3>
                                        <p>Indique le pourcentage de ventes réalisées en magasin et en ligne. </p>
                                        <br></br>
                                        <Card style={{ width: '30rem', border: "0px", background: "#eaeaea", padding: "30px" }}>
                                            <Stack direction="horizontal" gap={3}>

                                                <div className="p-2 ms-auto"><Dropdown>
                                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='filter45'>
                                                        Nov 2023
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>

                                                        <Dropdown.Item >1</Dropdown.Item>
                                                        <Dropdown.Item >2</Dropdown.Item>


                                                    </Dropdown.Menu>
                                                </Dropdown></div>
                                            </Stack>
                                            <Row>
                                                <Col sm={6}>

                                                    <div >
                                                        <Stack direction="horizontal" gap={3}>
                                                            <div className="p-2"></div>
                                                            <div className="p-2"></div>
                                                            <div className="p-2"><div class="counter1" > %</div></div>
                                                        </Stack>


                                                    </div>
                                                    <div style={{ height: "200px", width: "200px" }} className='marg89'>
                                                        <CircularProgressbar value={percentage2} />
                                                    </div>

                                                    <div >
                                                        <Stack direction="horizontal" gap={3}>
                                                            <div className="p-2"><div class="counter2" > %</div></div>
                                                            <div className="p-2"></div>
                                                            <div className="p-2"></div>

                                                        </Stack>

                                                    </div>
                                                </Col>
                                                <Col sm={6} >
                                                    <div className='mou'>


                                                        <p> <b style={{ background: "#084442", padding: "0px 20px 0px 20px", borderRadius: "10px", margin: "0px 10px 0px 8px" }}></b> En ligne</p>
                                                        <p> <b style={{ background: "#B9E6C9", padding: "0px 20px 0px 20px", borderRadius: "10px", margin: "10px 10px 0px 8px" }}></b>En magasin</p>

                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Card>
                                    <Card className='modifiee'>
                                        <p className='text-center pasexv'>Passez à la version Premium pour débloquer plus de données et fonctionalités</p>
                                        <br></br>
                                        <Button className='modifie'>JE MODIFIE MON OFFRE</Button>
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

export default Recommendations
