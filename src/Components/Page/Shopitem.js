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
// import { getValue } from '@testing-library/user-event/dist/utils';

const Shopitem = () => {


  // const itemsPerPage = 8; // Change this to the desired number of items per page
  // const [currentPage, setCurrentPage] = useState(1);
  const [searchTitle, setSearchTitle] = useState('');

  const [data, setData] = useState([]);
  console.log('data1', data);
  const [search, SetSearch] = useState('');
  const [filter, setFilter] = useState([]);





  //------------------------------------

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4); // Number of cards per page
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


  //-------------------------











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
            <h2 className='recherche27 mb-3'>Les articles de ma boutique</h2>
            <p>Gérez ici les article en vente sur votre boutique Maathena</p>
          </div>
        </div>

        <div className='bvgr'>
          <div className='dasbb'>

            <Container >
              <Row className='mbnc'>
                <Col sm={2}>
                  <p className='table19' ><b>Tableau de bord</b></p>
                  <p className='table19' style={{ fontWeight: "800" }}><b>Gérer ma boutique</b></p>
                  <Stack direction="horizontal" gap={3} className='row56'>
                    <div className="p-"></div>
                    <div className="p mb-3"><b style={{ fontWeight: "800" }}>Profil boutique</b>
                      <br></br>
                      Articles
                    </div>


                  </Stack>


                  <p className='table19'>Ventes</p>
                  <p className='table19'>Analyse</p>
                  <p className='table19'>Mon commerce</p>
                  <p className='table19'>Mon compte</p>

                </Col>
                <Col sm={10}>


                  <Card className="profilecardmapd">
                    <Stack direction="horizontal" gap={3} className='row56'>
                      <div className="p-2"><p style={{ color: "white" }}>Vous avez déjà une boutique en ligne (Prestashop ou autre) ? </p></div>
                      <div className="p-2 ms-auto b">
                        <Button className='CONNECTERMONSITE'>CONNECTER MON SITE</Button>
                      </div>

                    </Stack>
                  </Card>


                  <Stack direction="horizontal" gap={3} className='row56'>
                    <div className="p-2"> <Button className='CONNECTERMONSITE1'>+ AJOUTER UN ARTICLE</Button>   <Button onClick={onButtonClick} className='CONNECTERMONSITE'>TELECHARGER UN FICHIER CSV</Button></div>

                    <div className="p-2 ms-auto">
                      <div >

                        <Row>
                          <Col> <Form.Control
                            type="text"
                            placeholder="Search by title"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} className='reacherch56'
                          /></Col>
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
                      <div className="p-2">

















                        {/* <Form.Group controlId="filterDropdown">
                          <Form.Label> Filtrer par</Form.Label>
                          <Form.Control
                            as="select"
                            value={filterValue}
                            onChange={(e) => setFilterValue(e.target.value)}
                          >
                            <option value="">All Categories</option>
                            {uniqueCategories.map((category, index) => (
                              <option key={index} value={category}>
                                {category}
                              </option>
                            ))}
                          </Form.Control>
                        </Form.Group> */}
                        
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
                    </Stack>





                    {/* Filter dropdown */}


                    <Row className='mbnvc'>

                      {paginatedData.map((value) => {
                       
                        return (
                          <Col key={value.id} sm={3}>
                            <Card className='cardheigth'>
                              <Card.Img variant="top" src={value.image} className='cardimgtop' />
                              <Card.Body>
                                <Card.Title><h3 className='title98r'>{value.title}</h3></Card.Title>

                                <div >
                                  <Card.Text >
                                    <p >{value.category}</p>
                                    <p className='cardtitles2 mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>

                                  </Card.Text>
                                  <h5>{value.price}</h5>
                                </div>

                                {/* <Button variant="primary">Go somewhere</Button> */}
                              </Card.Body>
                              <div className="profilecardnmn " >
                                <Button className="bn9098" style={{ border: "none" }} href='/Updatepro'>
                                  <FaRegEdit className='adit1 bnnnn' />
                                </Button>

                              </div>
                            </Card>

                          </Col>
                        )
                      })

                      }



                    </Row>
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

export default Shopitem 
