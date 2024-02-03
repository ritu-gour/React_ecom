
import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';


import './Recommendations.css'
import Dropdown from 'react-bootstrap/Dropdown';


import Accordion from 'react-bootstrap/Accordion';



import 'react-international-phone/style.css';
import { MdOutlineThumbUp } from "react-icons/md";
import { CardGroup, Col, Row, Stack } from 'react-bootstrap'
const Retournes = () => {

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


            <Row className='mbnvc bnpro'>
                <Stack direction="horizontal" gap={3} className='row56'>
                    <div className="p-2"><h3 className='Description mb-4'>Produits les plus retournés </h3></div>
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
                        <Col key={value.id} sm={4}>

                            <CardGroup>

                                <Card className='vbbcard2'>
                                    <Card.Img variant="top" src={value.image} className='cardimgtop' />
                                    {/* <h5 className='text-center'>{value.price}</h5> */}

                                    <Card.Body>
                                        <Stack direction="horizontal" gap={3}>
                                            <div>
                                                <p>Product</p>
                                            </div>
                                            <div className='ms-auto'>
                                                <p>{value.price}</p>
                                            </div>
                                        </Stack>
                                        <br></br>
                                        <p className=' mb-5' style={{ fontSize: "15px" }}>23 RETOURS</p>

                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>

                                </Card>
                            </CardGroup>

                        </Col>
                    )
                })

                }
                <br></br>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className='accord5'>
                        <Accordion.Header className='accord5b'><MdOutlineThumbUp className='mdout' /> <b className='nosconsiel'>Nos conseils pour diminuer le nombre de retours d’articles</b> </Accordion.Header>
                        <Accordion.Body>
                            <Stack direction="horizontal" gap={3}>
                                <div className="p-2"></div>
                                <div className="p-2">  <ul>
                                <li>
                                    Modifier votre fiche produit (ajouter une photo de meilleure qualité, ajouter une description cohérente, vérifier que les éléments de description sont conformes au produit).
                                </li>
                                <li>Vérifier la qualité du produit en lui-même (est-il cassé ? etc)</li>
                            </ul></div>
                                
                            </Stack>
                          
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </Row>

        </div>
    )
}

export default Retournes
