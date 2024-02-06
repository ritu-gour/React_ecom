import React, { useEffect, useState } from 'react';
import Footer from '../Footer'
import { CiSearch } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import 'react-circular-progressbar/dist/styles.css'
import 'react-international-phone/style.css';
import './Sales.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Col, Container, Nav, Row, Stack, Pagination, Form, Button, Card } from 'react-bootstrap'
const ItemStore = () => {

    const [searchTitle, setSearchTitle] = useState('');

    const [data, setData] = useState([]);
    console.log('data1', data);
    const [search, SetSearch] = useState('');
    const [filter, setFilter] = useState([]);
    //------------------------------------

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10); // Number of cards per page
    const [searchTerm, setSearchTerm] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [priceFilter, setPriceFilter] = useState('');

    // Filter and search logic
    const filteredData = data.filter((value) =>
        value.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterValue === '' || value.category === filterValue)
    );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Unique categories for filter dropdown
    const uniqueCategories = [...new Set(data.map(item => item.category))];




    const handleItemsPerPageChange = (selectedValue) => {
        setItemsPerPage(selectedValue);
        setCurrentPage(1); // Reset current page when changing items per page
    };

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

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
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




    const onButtonClick = () => {
        const pdfUrl = "example.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "example.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                                    <p className='table19'><b style={{ fontWeight: "800" }}>Gérer ma boutique </b></p>
                                    <Stack direction="horizontal" gap={3}>
                                        <div className="p-"></div>
                                        <div className="p mb-3">Profil boutique
                                            <br></br>
                                            <b style={{ fontWeight: "800" }}> Articles </b>
                                        </div>


                                    </Stack>
                                    <p className='table19' style={{ fontWeight: "800" }}><b>Ventes</b></p>

                                    <p className='table19'>Analyse</p>
                                    <p className='table19'>Mon commerce</p>
                                    <p className='table19'>Mon compte</p>




                                </Col>

                                <Col sm={10}>



                                    <Card className="profilecardmapd">
                                        <Stack direction="horizontal" gap={3} className='row56'>
                                            <div className="p-2"><p style={{ color: "white", fontSize: "20px" }}>
                                                Vous avez déjà une boutique en ligne (Prestashop ou autre) ? </p>
                                                <p style={{ color: "white" }}>Téléchargez votre fichier CSV et ajoutez automatiquement vos<br></br> produits à votre boutique en ligne Maathena. </p></div>
                                            <div className="p-2 ms-auto b">
                                                <Button onClick={onButtonClick} className='CONNECTERMONSITE'>TELECHARGER UN FICHIER CSV</Button>
                                            </div>

                                        </Stack>
                                    </Card>


                                    <Stack direction="horizontal" gap={3} className='row56'>
                                        <div className="p-2">
                                        </div>

                                        <div className="p-2 ms-auto">
                                            <div >


                                            </div>
                                        </div>
                                    </Stack>

                                    <Stack direction="horizontal" gap={3} className='row56'>

                                        <div className="p-2 connector"><h3 className='Description mb-4'>Mes articles</h3></div>
                                        <div className="p-2 ">
                                            <Button className='CONNECTERMONSITE1' href='/Add_an_item'>+ AJOUTER UN ARTICLE</Button>
                                        </div>
                                        <div className="p-2 ">
                                            <Row>
                                                <Col> <Form.Control
                                                    type="text"
                                                    placeholder="Rechercher"
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)} className='reacherch56'
                                                /></Col>
                                                <Col>
                                                    <CiSearch className='reacherch561' style={{ color: "black" }} />
                                                </Col>
                                            </Row>

                                        </div>
                                    </Stack>


                                    <Stack direction="horizontal" gap={3} className='row56 bbrow'  >
                                        <div> <Dropdown className="">
                                            <Dropdown.Toggle variant="" id="dropdown-basic" className='filter45 text-white'>
                                                Montrer :  {itemsPerPage}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => handleItemsPerPageChange(5)}>5</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleItemsPerPageChange(10)}>10</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleItemsPerPageChange(15)}>15</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleItemsPerPageChange(20)}>20</Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleItemsPerPageChange(25)}>25</Dropdown.Item>
                                                {/* Add more options as needed */}
                                            </Dropdown.Menu>
                                        </Dropdown></div>
                                        <div className="p-2">


                                            <Dropdown>
                                                <Dropdown.Toggle variant="" id="dropdown-basic" className='filter45 text-white'>
                                                    Filtrer par
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() => setFilterValue('')}>All Categories</Dropdown.Item>
                                                    {uniqueCategories.map((category, index) => (
                                                        <Dropdown.Item key={index} onClick={() => setFilterValue(category)}>
                                                            {category}
                                                        </Dropdown.Item>
                                                    ))}
                                                </Dropdown.Menu>
                                            </Dropdown>

                                        </div>
                                        <div className="p-2"></div>


                                    </Stack>





                                    {/* Filter dropdown */}


                                    <div style={{ overflowX: "auto" }}>
                                        <table className="table table-striped">
                                            <thead className='head56'>
                                                <tr className='head56'>
                                                    <th className='th78'>ID</th>
                                                    <th className='th78'>Photo</th>
                                                    <th className='th78'>Nom de l’article</th>
                                                    <th className='th78'>Prix</th>
                                                    <th className='th78'>Quantité</th>
                                                    <th className='th78'>Catégorie</th>

                                                    <th className='th78'>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {paginatedData.map((value) => {

                                                    return (

                                                        <tr key={value.id}>
                                                            <td>{value.id}</td>

                                                            <td  > <img height={30} width={30} src='./img/product.jpeg' style={{ borderRadius: "50px" }} /></td>
                                                            <td>Chapeau</td>
                                                            <td>{value.price}</td>
                                                            <td >2</td>

                                                            <td >Accessoires mode</td>

                                                            <td ><button className="btn btn-" > <FaRegEdit />
                                                            </button> <button className="btn btn-" >
                                                                    <RiDeleteBin5Line /></button></td>


                                                        </tr>


                                                    )
                                                })

                                                }


                                            </tbody>
                                        </table>
                                    </div>

                                    <Stack direction="horizontal" gap={3} className='row56'>
                                        <div className="p-2"></div>
                                        <div className="p-2 ms-auto"></div>
                                        <div className="p-2">
                                            {/* Pagination */}
                                            <Pagination>
                                                {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
                                                    <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                                                        {index + 1}
                                                    </Pagination.Item>
                                                ))}
                                            </Pagination>
                                        </div>
                                    </Stack>
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

export default ItemStore
