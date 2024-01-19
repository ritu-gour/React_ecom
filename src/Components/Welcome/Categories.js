import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Welcome.css'
const Categories = () => {
    return (
        <div>
            <Container className='marg'>
            <h1 className='pres text-center mb-5'>Catégories </h1>
                <CardGroup>
                    <Card className="category" style={{ margin: "20px" }} >
                        <img className="categoryimg" variant="top" src="./category1.jpeg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                <p className='categorytitle text-center'>Cavistes</p>

                            </Card.Title>


                        </Card.Body>

                    </Card>
                    <Card className="category" style={{ margin: "20px" }} >
                        <img className="categoryimg" variant="top" src="./category2.jpeg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                <p className='categorytitle text-center'>Cosmétique</p>

                            </Card.Title>


                        </Card.Body>

                    </Card>
                    <Card className="category" style={{ margin: "20px" }} >
                        <img className="categoryimg" variant="top" src="./category3.jpeg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                <p className='categorytitle text-center'>Décoration</p>

                            </Card.Title>


                        </Card.Body>

                    </Card>
                    <Card className="category" style={{ margin: "20px" }} >
                        <img className="categoryimg" variant="top" src="./category4.jpeg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                <p className='categorytitle text-center'>Epicerie</p>

                            </Card.Title>


                        </Card.Body>

                    </Card>
                </CardGroup>

                <CardGroup>
                    <Card className="category" style={{ margin: "20px" }} >
                        <img className="categoryimg" variant="top" src="./category5.jpeg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                <p className='categorytitle text-center'>Habillement</p>

                            </Card.Title>


                        </Card.Body>

                    </Card>
                    <Card className="category" style={{ margin: "20px" }} >
                        <img className="categoryimg" variant="top" src="./category6.jpeg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                <p className='categorytitle text-center'>Librairie</p>

                            </Card.Title>


                        </Card.Body>

                    </Card>
                    <Card className="category" style={{ margin: "20px" }} >
                        <img className="categoryimg" variant="top" src="./category7.jpeg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                <p className='categorytitle text-center'>Loisirs</p>

                            </Card.Title>


                        </Card.Body>

                    </Card>
                    <Card className="category" style={{ margin: "20px" }} >
                        <img className="categoryimg" variant="top" src="./category8.jpeg" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "26px", color: "blue" }}>
                                <p className='categorytitle text-center'>Maraichers</p>

                            </Card.Title>


                        </Card.Body>

                    </Card>
                </CardGroup>
            </Container>
        </div>
    )
}

export default Categories
