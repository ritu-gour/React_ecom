import React, { useEffect, useState } from 'react';
import Footer from '../Footer'








import Card from 'react-bootstrap/Card';


import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
// import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

import 'react-circular-progressbar/dist/styles.css'


import 'react-international-phone/style.css';

import { Col, Container, Nav, Row, Stack } from 'react-bootstrap'
const Sales = () => {
    const columns = [

        {
            name: "Commande n°",
            selector: (row) => '#20462',

        },
        {
            name: "",
            selector: (row) => <img height={30} width={30} src='./img/product.jpeg' style={{ borderRadius: "50px" }} />,
        },
        {
            name: "Produit",
            selector: (row) => <p>Chapeau</p>,

        },

        {
            name: "Client",
            selector: (row) => 'Emilie Rat',
        },

        {
            name: "Date",
            selector: (row) => '13/05/2023',
        },
        {
            name: "Montant total",
            selector: (row) => '4.50 €',
        },
        {
            name: "Provenance",
            selector: (row) => "Magasin",
        },
        {
            name: "Statut",
            selector: (row) => <p style={{ borderRadius: "22px", background: "#B9E6C9", padding: "5px 14px 5px 14px" }}>Terminée</p>,
        },

        {
            name: "Action",
            cell: (row) => (
                <button className="btn btn-" onClick={() => handleDelete(row.id)}> <FaRegEdit /> <RiDeleteBin5Line style={{ marginLeft: "0px" }} /></button>

            )
        },


    ];
    const [data, setData] = useState([]);
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

    useEffect(() => {
        const result = data.filter((item) => {
            return item.title.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilter(result);
    }, [search]);

    const handleDelete = (val) => {
        const newdata = data.filter((item) => item.id !== val);
        setFilter(newdata);
    }

    const tableHeaderstyle = {
        headCells: {
            style: {
                fontWeight: "bold",
                color: "#084442",
                fontSize: "14px",
                backgroundColor: "white"

            },
        },
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
                        <h2 className='recherche27 mb-3'>Piloter mon activité</h2>
                        <p>Ventes</p>

                    </div>
                </div>
                <div className='bvgr'>
                    <div className='dasbb'>
                        <Container >
                            <Row>
                                <Col sm={2}>
                                    <p className='table19' ><b>Tableau de bord</b></p>
                                    <p className='table19'>Gérer ma boutique </p>
                                    <p className='table19' style={{ fontWeight: "800" }}><b>Ventes</b></p>




                                    <p className='table19'>Analyse</p>
                                    <p className='table19'>Mon commerce</p>
                                    <p className='table19'>Mon compte</p>

                                </Col>
                                <Col sm={10}>
                                    <Stack >
                                        <div style={{float:"right",margin:"20px"}}>
                                         
                                        <input type="text"
                                                        className="w-25 form-control ser"
                                                        placeholder="Search..." style={{float:"right" ,}}
                                                        value={search}
                                                        onChange={(e) => SetSearch(e.target.value)} />
                                        </div>
                                    </Stack>
                                    <Card className="cardchiffer229">
                                        <Card.Body>
                                           
                                            <DataTable
                                                customStyles={tableHeaderstyle}
                                                columns={columns}
                                                pagination
                                                selectableRows
                                                fixedHeader
                                                selectableRowsHighlight
                                                highlightOnHover
                                                subHeader
                                                data={filter}
                                                subHeaderComponent={
                                                    <input type="text"
                                                        className="w-25 form-control ser"
                                                        placeholder="Search..."
                                                        value={search}
                                                        onChange={(e) => SetSearch(e.target.value)} />
                                                }
                                                subHeaderAlign="right" />
                                        </Card.Body>
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

export default Sales
