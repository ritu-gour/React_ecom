import React, { useEffect, useState } from 'react';
import Footer from '../Footer'


import { CiSearch } from "react-icons/ci";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Card from 'react-bootstrap/Card';


import Nav from 'react-bootstrap/Nav';
import { FaRegUser } from "react-icons/fa6";
import { BsBucket } from "react-icons/bs";
import { IoIosClose, IoMdHeartEmpty } from "react-icons/io";
import { Button, Container, Dropdown, Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaMapMarkerAlt } from 'react-icons/fa';





const Search_result = () => {


    const [searchTitle, setSearchTitle] = useState('');

    const [data, setData] = useState([]);
    console.log('data1', data);
    const [search, SetSearch] = useState('');
    const [filter, setFilter] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4); // Number of cards per page
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
            <div className="new-wrapper">

                <div className="showcase3">

                    <img src="./image/search_result.jpeg" alt="Picture" style={{ objectFit: "cover" }} />

                    <div className="overlay56">
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
                        <h2 className='recherche'>Recherche</h2>
                    </div>
                </div>

                <Container >
                    <div className='recherchebg'>
                        <Row>
                            <Col>
                                <h3 className='text-white'>Recherche rapide</h3>
                                <p className='text-white' style={{ fontSize: "15px" }}>Je sais exactement ce que je veux !</p>
                            </Col>
                            <Col className='my-4'>
                                <Form >

                                    <div className="d-flex">
                                        <Form.Control type="text" className='form1' placeholder='Εx: Bougie Lys Monbougieshop' />

                                        <Button variant="" className='btn809' type="button">
                                            RECHERCHER
                                        </Button>

                                    </div>



                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Container>

                    <div className='marg97'>
                        <Stack direction="horizontal" gap={3} className='row56'>

                            <div className="p-2 connector">  <h2 className='commen mb-4'>Par commerçant</h2></div>
                            <div className="p-2 ">
                                <Button className='CONNECTERMONSITE1' href=''>NOUVELLE RECHERCHE</Button>
                            </div>

                        </Stack>

                        <Row>
                           
                            
                            <Col sm={4}>
                                <Stack direction="horizontal" gap={3} className='categ'>
                                    <div className=""><p>Catégorie : </p></div>
                                    <div className="">
                                        <Form.Control
                                        as="select"
                                        value={filterValue}
                                        onChange={(e) => setFilterValue(e.target.value)}
                                    className='selectfirl'>
                                        <option value=""> Epicerie fine </option>
                                        {uniqueCategories.map((category, index) => (
                                            <option key={index} value={category}>
                                                {category} 
                                            </option>
                                        ))}
                                    </Form.Control></div>
                                    
                                </Stack>
                                
                                   
                                    {/* <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='filter45 '>
                                        Catégorie
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => setFilterValue('')}>All Categories</Dropdown.Item>
                                        {uniqueCategories.map((category, index) => (
                                            <Dropdown.Item key={index} onClick={() => setFilterValue(category)}>
                                                {category}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown> */}

                              
                            </Col>
                            <Col sm={6} className='my-2'><p><b style={{fontWeight:"700"}}>Lieu :</b> Paris (tous arrondissements) <IoIosClose /></p></Col>
                            <Col sm={2}>
                                <Dropdown className="">
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className='filter45 nmnbv'>
                                        Filtrer par :  
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleItemsPerPageChange(4)}>4</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleItemsPerPageChange(8)}>8</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleItemsPerPageChange(12)}>12</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleItemsPerPageChange(16)}>16</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleItemsPerPageChange(20)}>20</Dropdown.Item>
                                        {/* Add more options as needed */}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>





                        <Row className='mbnvc my-5 row09'>

                            {paginatedData.map((value) => {

                                return (
                                    <Col key={value.id} sm={4} >
                                        <Card className='cardheig' style={{border:"none",borderRadius:"0px" ,marginBottom:"20px"}}>
                                            <Card.Img variant="top" src='./image/reasearch.jpeg' className='cardimgtop' />
                                            <Card.Body>
                                                <Card.Title><h3 className='title98r text-center'>Chez Jean et Louis</h3></Card.Title>

                                                <div >
                                                    <Card.Text >
                                                        <p className='text-center'><FaMapMarkerAlt style={{color:"#084442"}}/> Paris 13</p>
                                                        
                                                    </Card.Text>
                                                   
                                                </div>

                                                {/* <Button variant="primary">Go somewhere</Button> */}
                                            </Card.Body>

                                        </Card>

                                    </Col>
                                )
                            })

                            }



                        </Row>

                    </div>
                </Container>
                <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
                <Footer />
            </div>
        </div>
    )
}

export default Search_result
