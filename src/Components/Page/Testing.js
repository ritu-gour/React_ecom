import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';


import { CiSearch } from "react-icons/ci";



import Table from 'react-bootstrap/Table';

import { Col, Container, Row, Pagination } from 'react-bootstrap';

import Footer from '../Footer'
import Stack from 'react-bootstrap/Stack';
import './Shopitem.css'


const Testing = () => {



    const itemsPerPage = 8; // Change this to the desired number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTitle, setSearchTitle] = useState('');

    const [data, setData] = useState([]);
    // console.log('data1', data);
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


    const filteredData = data.filter(value => value.category.toLowerCase().includes(searchTitle.toLowerCase()));



    useEffect(() => {
        const result = data.filter((item) => {
            return item.title.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilter(result);
    }, [search]);



    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [currentPage1, setCurrentPage1] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const indexOfLastItem = currentPage1 * rowsPerPage;
    const indexOfFirstItem = indexOfLastItem - rowsPerPage;

    // Filter items based on the search term
    const filteredData1 = data.filter(value =>
        value.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        value.price.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        value.image.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentItems = filteredData1.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage1(pageNumber);
    const handleRowsPerPageChange = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setCurrentPage1(1);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to the first page when changing the search term
    };



























    
    return (
        <div>


            <div className="new-wrapper">


                <div className='bvgr'>
                    <div className='dasbb'>

                        <Container >
                           
                            <Row className='mbnc'>

                                <Col sm={12}>


                                    <label>
                                        Rows per page:
                                        <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
                                            <option value={5}>5</option>
                                            <option value={10}>10</option>
                                            <option value={20}>20</option>
                                            <option value={30}>30</option>
                                            <option value={40}>40</option>
                                            <option value={50}>50</option>
                                            <option value={60}>60</option>
                                            {/* Add more options as needed */}
                                        </select>
                                    </label>

                                   
                                    <Stack direction="horizontal" gap={3} className='row56'>

                                        <div className="p-2 ms-auto">
                                            <div >

                                                <Row>
                                                    <Col>                                         <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Recherche " className='reacherch56' />
                                                    </Col>
                                                    <Col>
                                                        <CiSearch className='reacherch561' />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Stack>

                                    <Card className="profilecardmap">
                                        <Stack direction="horizontal" gap={3} className='row56'>
                                            <div className="p-2"><h3 className='Description mb-4'>Mes articles</h3></div>
                                            <div className="p-2 ms-auto"></div>
                                            <div className="p-2"></div>
                                        </Stack>

                                        <Row className='mbnvc'>
                                            <Table striped="columns">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Username</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {currentItems.map((value) => {

                                                        return (





                                                            <tr key={value.id}>
                                                                <td>{value.title}</td>
                                                                <td>{value.price}</td>
                                                                <td>{value.image}</td>

                                                            </tr>













                                                        )
                                                    })

                                                    }


                                                </tbody>
                                            </Table>
                                            {/* Pagination */}
                                            <div>

                                            </div>
                                        </Row>

                                        <Stack direction="horizontal" gap={3} className='row56'>
                                            <div className="p-2"></div>
                                            <div className="p-2 ms-auto"></div>
                                            <div className="p-2">

                                                <Pagination className='pag5'>
                                                    {Array.from({ length: Math.ceil(filteredData.length / rowsPerPage) }).map((_, index) => (
                                                        <Pagination.Item className='pag4' key={index} onClick={() => paginate(index + 1)}>
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

export default Testing




