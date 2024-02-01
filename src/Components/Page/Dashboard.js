import React, { useEffect, useState } from 'react';
import Footer from '../Footer'

import { GoDotFill } from "react-icons/go";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import CardGroup from 'react-bootstrap/CardGroup';


import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

import './Dashboard.css'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
// import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import { Container } from 'react-bootstrap';

import 'react-international-phone/style.css';
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, Title, Tooltip } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
const Dashboard = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentage < 70) {
                setPercentage(percentage + 1);
            }
        }, 25);
    }, [percentage]);


    const data2 = {
        labels: ["Janv", "Fev", "Mars", "Avr", "Mai", "Juin", "Juil", "Aout", "Sept", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "",
                data: [10, 20, 10, 12, 11, 15, 5, 19, 8, 11, 10, 10],
                backgroundColor: "#084442",

            },
            {
                label: '',
                data: [4, 15, 7, 4, 2, 5, 3, 15, 5, 5, 7, 3],
                backgroundColor: '#B9E6C9',

            },


        ],


    };



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
            <div className="new-wrapper">

                <div className="showcase3">
                    {/* <div id="google_translate_element" style={{ float: 'right' }}></div> */}
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
                        <p>Tableau de bord</p>
                    </div>
                </div>
                <div className='das'>
                    <Container >
                        <Row>
                            <Col sm={3}>
                                <p className='table19' style={{ fontWeight: "800" }}><b>Tableau de bord</b></p>
                                <p className='table19'>Gérer ma boutique</p>
                                <p className='table19'>Ventes</p>
                                <p className='table19'>Analyse</p>
                                <p className='table19'>Mon commerce</p>
                                <p className='table19'>Mon compte</p>
                            </Col>
                            <Col sm={9}>
                                <h2 className='chiffre'>Chiffre d’affaire</h2>
                                <Card className="cardchiffer" style={{ width: '16rem' }}>

                                    <Card.Body>
                                        <p className=' text-center'>Votre CA sur les 12 derniers mois</p>
                                        <h2 className='chiffer1 text-center'>36000 €</h2>

                                    </Card.Body>
                                </Card>

                                <br></br>
                                <h2 className='chiffre'>  Ce mois-ci </h2>
                                <CardGroup className="cardchiffer3">
                                    <Card className="cardchiffer1">

                                        <Card.Body>
                                            <Row>
                                                <Col sm={5}>


                                                    <CircularProgressbar value={percentage} text={`${percentage}%`} className='parce' />
                                                    {/* <GoDotFill className='godot'/> */}
                                                </Col>
                                                <Col sm={7}>
                                                    <p className='text-center vcx'>Vous avez atteint</p>
                                                    <h4 className='text-center' style={{ fontWeight: "600" }}>70 %</h4>
                                                    <p className='text-center'>de votre objectif mensuel</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>

                                    </Card>
                                    <Card className="cardchiffer22">

                                        <Card.Body>

                                            <h2 className='chiffer11 text-center'>124</h2>
                                            <h2 className=' text-center'>ventes</h2>

                                        </Card.Body>

                                    </Card>
                                    <Card className="cardchiffer33">

                                        <Card.Body>

                                            <h2 className='chiffer1 text-center'><span className='chiffer12'>+15 </span>ventes</h2>
                                            <p className=' text-center'>Par rapport au même mois l’année dernière</p>

                                        </Card.Body>

                                    </Card>
                                </CardGroup>



                                <Card className="cardchiffer229">

                                    <Card.Body>

                                        <h4 className='mb-5'>Total des ventes / mois</h4>
                                        <Row className='mb-3'>
                                            <Col sm={3}><GoDotFill style={{ color: "#084442", fontSize: "25px" }} /> 2023</Col>
                                            <Col sm={8}> <GoDotFill style={{ color: "#B9E6C9", fontSize: "25px" }} /> 2022</Col>

                                        </Row>
                                        <Bar data={data2} />
                                    </Card.Body>

                                </Card>

                                <Card className="cardchiffer229">

                                    <Card.Body>
                                    <h2 className='chiffre'>Dernières ventes</h2>
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
                                            onChange={(e) => SetSearch(e.target.value)}
                                        />
                                    }
                                    subHeaderAlign="right"
                                />
                                    </Card.Body>

                                </Card>
                               
                            </Col>

                        </Row>
                    </Container>
                </div>







                <Footer />
            </div>
        </div>
    )
}

export default Dashboard
