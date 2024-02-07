import React, { useState } from 'react'

import Footer from '../Footer'

import 'react-circular-progressbar/dist/styles.css'
import 'react-international-phone/style.css';
import './Sales.css'

import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap'
import { BsBucket } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { FaDownload, FaRegUser } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import './Contact.css'
const Contact = () => {

    const [num, setNum] = useState('');

    const handleNumChange = event => {
      const limit = 10;
      setNum(event.target.value.slice(0, limit));
    };

    const [values, setValues] = React.useState({
        name: '',
        email: '',
        number: '',
        msg: ''
    })

    const [validations, setValidations] = React.useState({
        name: '',
        email: '',
        number: '',
        object: '',
        msg: '',
    })

    const validateAll = () => {
        const { name, email, number, object,msg } = values
        const validations = { name: '', email: '', number: '', object: '',msg:'' }
        let isValid = true

        if (!name) {
            validations.name = '*Please enter your Name ' 

            isValid = false
        }else if (name && !/^[a-zA-Z ]*$/.test(name)) {
            validations.name = 'Only letters are allowed'
            isValid = false
        }

       


        if (name && name.length < 3 || name.length > 50) {
            validations.name = 'Name must contain between 3 and 50 characters'
            isValid = false
        }

        if (!email) {
            validations.email = '*Please enter your Email '
            isValid = false
        }

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            validations.email = 'Email format must be as example@mail.com'
            isValid = false
        }

        if (!number) {
            validations.number = '*Please enter your Mobile No. '
            isValid = false
        }

        if (!object) {
            validations.object = '*Please enter your Object'
            isValid = false
        }
        if (!msg) {
            validations.msg = '*Please enter your Message'
            isValid = false
        }
        

        if (!isValid) {
            setValidations(validations)
        }

        return isValid
    }

    const validateOne = (e) => {
        const { name } = e.target
        const value = values[name]
        let message = ''

        if (!value) {
            message = `${name} `
        }

        if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
            message = 'Name must contain between 3 and 50 characters'
        } 

        if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            message = 'Email format must be as example@mail.com'
        }

        setValidations({ ...validations, [name]: message })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isValid = validateAll()

        if (!isValid) {
            return false
        }

        // alert(JSON.stringify(values))
    }

    const { name, email, number, object,msg } = values

    const {
        name: nameVal,
        email: emailVal,
        number: numberVal,
        object: objectVal,
        msg: msgVal,

    } = validations

    return (
        <div>
            <div className="new-wrapper">

                <div className="showcase3">

                    <img src="./image/contact.jpeg" alt="Picture" style={{ objectFit: "cover" }} />

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
                        <h2 className='recherche'>Nous contacter</h2>
                    </div>
                </div>

                <Container >
                    <div className='contactcon'>
                        <Row>
                            <Col sm={6}>
                                <p>Vous souhaitez devenir livreur ou commerçant pour Maathena ?<br></br>
                                    Vous êtes journaliste, publicitaire, investisseur ou encoresouhaitez faire partie de l’équipe Maathena ? <br></br>
                                    N’hésitez plus et prenez contact avec nous à l’aide du formulaire.</p>
                                <p className='cgu2'>Où nous retrouver ?</p>
                                <p>Nos bureaux se situent à Bordeaux, Strasbourg et Paris (maison-mère).</p>

                                <img src='./img/map901.png' className='contactimg' />
                            </Col>
                            <Col sm={6}>
                                <Form className='form9180' onSubmit={handleSubmit}>

                                    <Row>
                                        <Col sm={6}>
                                            <Form.Group className="mb-4" controlId="formBasicEmail">

                                                <Form.Control className="FormControl2" type="text" placeholder='Nom' maxLength={20}
                                                    name="name" value={name}
                                                    onChange={handleChange}
                                                    onBlur={validateOne} />
                                                <div style={{color:"red"}} >{nameVal} </div>
                                            </Form.Group>
                                            
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Group className="mb-4" controlId="formBasicEmail">

                                                <Form.Control className="FormControl2" type="number" placeholder='Téléphone'
                                                    id="num"
                                                    name="num"
                                                    value={num}
                                                    onChange={handleNumChange}
                                                    />
                                                
                                            </Form.Group>
                                            
                                        </Col>
                                    </Row>


                                    <Form.Group className="mb-4" controlId="formBasicEmail">

                                        <Form.Control className="FormControl2" type="email" placeholder='E-mail' maxLength={20} name="email"
                                            value={email}
                                            onChange={handleChange}
                                            onBlur={validateOne} />
                                        <div  style={{color:"red"}}>{emailVal}</div>
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formBasicEmail">

                                        <Form.Control className="FormControl2" type="text" placeholder='Objet' name="object" value={object}
                                            onChange={handleChange}
                                            onBlur={validateOne} />
                                        <div  style={{color:"red"}}>{objectVal}</div>
                                    </Form.Group>



                                    <Form.Control className="FormControl2" as="textarea" placeholder='Message'
                                     rows={3} style={{ height: "150px" }}

                                        maxLength={200} name="msg" value={msg}
                                        onChange={handleChange}
                                        onBlur={validateOne} />
                                    <div  style={{color:"red"}}>{msgVal}</div>

                                    <Button className='VOIR_LESPRODUITSbn89 my-4 mb-3' href='#'><FaDownload /> Pièce-jointe</Button>
                                    <br></br>
                                    <Form.Group className="mb-1 my-5" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox"
                                            label="En cochant cette case, vous consentez à notre "  className='text-white' />
                                        <p style={{ color: "#FFC309", margin: "0px 0px 0px 25px" }}> politique de confidentialité.</p>
                                    </Form.Group><br></br>

                                    <Button className='VOIR_LESPRODUITSbn8' type="submit">ENVOYER</Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Container>

                <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
                <Footer />
            </div>
        </div>
    )
}

export default Contact
