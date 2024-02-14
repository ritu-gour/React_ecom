import React from 'react'

import Footer from '../Footer'


import { CiSearch } from "react-icons/ci";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





import Nav from 'react-bootstrap/Nav';
import { FaRegUser } from "react-icons/fa6";
import { BsBucket } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import './Faq.css'

import './Buy_product.css'
import { Button, Container } from 'react-bootstrap';
const Faqs = () => {
    return (
        <div>
            <div className="new-wrapper">

                <div className="showcase3">

                    <img src="./image/faqs.jpeg" alt="Picture"
                        style={{ objectFit: "cover", backgroundPosition: "right 35% top 0%" }} />

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
                        <h2 className='recherche'>FAQ</h2>
                    </div>
                </div>

                <Container>
                    <Row>
                        <Col sm={6}>
                            <div>
                                <h5 className='Clients'>Clients</h5>

                                <div class="accordion">

                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion1" />
                                        <label for="accordion1" class="accordion-item-title"><span class="icon"></span>Question posée régulierement ?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion2" />
                                        <label for="accordion2" class="accordion-item-title"><span class="icon"></span>Question posée régulierement ?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion3" />
                                        <label for="accordion3" class="accordion-item-title"><span class="icon"></span>Question posée régulierement ?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion4" />
                                        <label for="accordion4" class="accordion-item-title"><span class="icon"></span>Question posée régulierement ?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion5" />
                                        <label for="accordion5" class="accordion-item-title"><span class="icon"></span>Question posée régulierement ?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion6" />
                                        <label for="accordion6" class="accordion-item-title"><span class="icon"></span>Question posée régulierement ?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion7" />
                                        <label for="accordion7" class="accordion-item-title"><span class="icon"></span>Question posée régulierement ?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div>
                                <h5 className='Clients'>Vendeurs</h5>
                                <div class="accordion">

                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion8" />
                                        <label for="accordion8" class="accordion-item-title"><span class="icon"></span>Question posée régulierement ?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion9" />
                                        <label for="accordion9" class="accordion-item-title"><span class="icon"></span>Question posée régulierement ?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion10" />
                                        <label for="accordion10" class="accordion-item-title"><span class="icon"></span>Question posée régulierement ?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion11" />
                                        <label for="accordion11" class="accordion-item-title"><span class="icon"></span>Question posée régulierement ?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion12" />
                                        <label for="accordion12" class="accordion-item-title"><span class="icon"></span>Question posée régulierement ?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion13" />
                                        <label for="accordion13" class="accordion-item-title"><span class="icon"></span>Question posée régulierement ?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>
                                    <div class="accordion-item">
                                        <input type="checkbox" id="accordion14" />
                                        <label for="accordion14" class="accordion-item-title"><span class="icon"></span>Question posée régulierement ?</label>
                                        <div class="accordion-item-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum auctor efficitur. Sed lacinia aliquet orci in mattis. Maecenas quis semper urna. In mattis lectus non velit convallis, at consequat metus elementum. Aenean sed vulputate velit. Praesent eu blandit erat. Cras id ante urna. Proin eleifend rhoncus ligula, sed hendrerit nisl tempus vehicula. Phasellus rutrum maximus mi, id luctus risus finibus at.
                                            Praesent porta metus eget sapien imperdiet eleifend.</div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>

                    <h2 className='text-center Clientsss'>Vous avez encore une question ?</h2>
                    <h5 className='Clientss'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
                    <Button className='CONTACTEZ-NOUS'>CONTACTEZ-NOUS</Button>
                </Container>
                <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
                <Footer />
            </div>
        </div>
    )
}

export default Faqs
