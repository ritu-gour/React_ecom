import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const News = () => {
    return (
        <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <Row className='slider1'>

                        <Col>
                            <img
                                className="d-block w-100 r1 slider2"
                                src="./news.jpeg"
                                alt="/"
                            />
                        </Col>
                        <Col>
                            <h5 className="bb">Actu / mise en avant</h5>
                            <p className="bb1">Découvrez les créations de Lucie et Benoît !<br></br>
                                Fleuristes passionnées, ils préparent pour vous et vos proches les plus <br></br>belles compositions florales. Allez faire un tour sur leur boutique !</p>
                            <Button variant="primary" href='./fleurs' className='bthn90 my-4 btng'>VOIR LA BOUTIQUE</Button>
                        </Col>
                    </Row>

                </Carousel.Item>
                <Carousel.Item>
                    <Row className='slider1'>

                        <Col>
                            <img
                                className="d-block w-100 r1 slider2"
                                src="./news.jpeg"
                                alt="/"
                            />
                        </Col>
                        <Col>
                            <h5 className="bb">Actu / mise en avant</h5>
                            <p className="bb1">Découvrez les créations de Lucie et Benoît !<br></br>
                                Fleuristes passionnées, ils préparent pour vous et vos proches les plus <br></br>belles compositions florales. Allez faire un tour sur leur boutique !</p>
                            <Button variant="primary" className='bthn90 my-4 btng'>VOIR LA BOUTIQUE</Button>
                        </Col>
                    </Row>

                </Carousel.Item>
                <Carousel.Item>
                    <Row className='slider1'>

                        <Col>
                            <img
                                className="d-block w-100 r1 slider2"
                                src="./news.jpeg"
                                alt="/"
                            />
                        </Col>
                        <Col>
                            <h5 className="bb">Actu / mise en avant</h5>
                            <p className="bb1">Découvrez les créations de Lucie et Benoît !<br></br>
                                Fleuristes passionnées, ils préparent pour vous et vos proches les plus <br></br>belles compositions florales. Allez faire un tour sur leur boutique !</p>
                            <Button variant="primary" className='bthn90 my-4 btng'>VOIR LA BOUTIQUE</Button>
                        </Col>
                    </Row>

                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default News
