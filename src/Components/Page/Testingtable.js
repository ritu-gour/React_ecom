import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';


import { CiSearch } from "react-icons/ci";

import Dropdown from 'react-bootstrap/Dropdown';
import { FaRegEdit } from "react-icons/fa";

import Nav from 'react-bootstrap/Nav';

import { Col, Container, Row, Pagination, Button, Form } from 'react-bootstrap';

import Footer from '../Footer'
import Stack from 'react-bootstrap/Stack';
// import CardGroup from 'react-bootstrap/CardGroup';
import './Shopitem.css'
import { RiDeleteBin5Line } from 'react-icons/ri';
// import { getValue } from '@testing-library/user-event/dist/utils';


const Testingtable = () => {



    // const itemsPerPage = 8; // Change this to the desired number of items per page
    // const [currentPage, setCurrentPage] = useState(1);
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

    ///////morning  code
    // const filteredData = data.filter(value => value.category.toLowerCase().includes(searchTitle.toLowerCase()));

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    // Slice the data based on the calculated index range
    // const paginatedData = filteredData.slice(startIndex, endIndex);





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


            <div className="new-wrapper">



                <div className='bvgr'>
                    <div className='dasbb'>

                        <Container >
                            <Row className='mbnc'>

                                <Col sm={10}>




                                    <Stack direction="horizontal" gap={3} className='row56'>

                                        <div className="p-2 ms-auto">
                                            <div >


                                            </div>
                                        </div>
                                    </Stack>

                                    <Card className="profilecardmap">
                                        <Stack direction="horizontal" gap={3} className='row56'>
                                            <div> <Dropdown className="mb-2">
                                                <Dropdown.Toggle variant="info" id="dropdown-basic" className='filter45'>
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
                                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='filter45'>
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
                                            <div className="p-2"><Row>
                                                <Col> <Form.Control
                                                    type="text"
                                                    placeholder="Rechercher"
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)} className='reacherch56'
                                                /></Col>
                                                <Col>
                                                    <CiSearch className='reacherch561' />
                                                </Col>
                                            </Row></div>


                                        </Stack>





                                        {/* Filter dropdown */}


                                        <div style={{ overflowX: "auto" }}>
                                            <table className="table table-striped">
                                                <thead className='head56'>
                                                    <tr className='head56'>

                                                        <th className='th78'> Commande n°</th>
                                                        <th className='th78'>Produit</th>
                                                        <th className='th78'>Client</th>
                                                        <th className='th78'>Date</th>
                                                        <th className='th78'>Montant total</th>
                                                        <th className='th78'>Provenance</th>
                                                        <th className='th78'>Statut</th>
                                                        <th className='th78'>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {paginatedData.map((value) => {

                                                        return (

                                                            <tr key={value.id}>
                                                                <td>#20462</td>
                                                                <td  > <img height={30} width={30} src='./img/product.jpeg' style={{ borderRadius: "50px" }} /> Chapeau</td>
                                                                <td>Emilie Rat</td>
                                                                <td >13/05/2023</td>
                                                                <td>{value.price}</td>
                                                                <td >Magasin</td>
                                                                <td><span className='tbbgu'> En livraison</span></td>
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


                                    </Card>












                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>


                <Footer />
            </div>
        </div>
    );
}


export default Testingtable
