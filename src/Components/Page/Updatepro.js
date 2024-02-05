import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Update.css'
import Footer from '../Footer'

const Updatepro = () => {
  return (
    <div>
      <div className="new-wrapper" >



        <div className="showcase3 ">

          <img src="./Component2.png" alt="Picture" />

          <div className="overlay">

            <h2 className='recherche28 mb-3 '>Product Update</h2>

          </div>
        </div>
        <Container>
      
          <div >
            <Row >
              <Col sm={2}>

              </Col>
              <Col sm={8}>
                <Form className='form900'>
                  <h1 className='Updatepro text-center'>Update Produit</h1>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="Form2Label">Produit Photos</Form.Label>
                    <Form.Control className="FormControl2" type="file" />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="Form2Label">Nom du Produit</Form.Label>
                    <Form.Control className="FormControl2" type="text" maxLength={100} required />

                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="Form2Label">Catégorie</Form.Label>
                    <Form.Control className="FormControl2" type="text" maxLength={100} required />

                  </Form.Group>

                  <Form.Label className="Form2Label">Description</Form.Label>
                  <Form.Control className="FormControl2" as="textarea" rows={3} style={{ height: "100px" }}
                    maxLength={200} required />

                  <Button className='VOIR_LESPRODUITSbn'>Update</Button>
                </Form>
              </Col>
              <Col sm={2}>

              </Col>
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    </div>

  )
}

export default Updatepro

