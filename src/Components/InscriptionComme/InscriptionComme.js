import React from 'react'
import Footer from '../Footer'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaRegUser , FaUser} from "react-icons/fa6";

import './InscriptionComme.css';

const InscriptionComme = () => {
  return (
    <div>
      <div className="new-wrapper">

        <div className="showcase">
          <div id="google_translate_element" style={{ float: 'right' }}></div>
          <img src="./Component2.png" alt="Picture" />
          <div className="overlay">
            <h2>Rejoindre la marketplace</h2>

          </div>
        </div>
        <div>
          <Container className='margin78'>
            <div className='marg12'>
            <Row>
              <Col>
                <div className='bg67'>
                  <FaRegUser className='falreguser text-center my-3' />
                  <h2 className='font01'>
                    Nouveau client
                  </h2>
                  <p className='font02 my-'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin, tortor sit amet feugiat faucibus, diam justo viverra nibh, vel rhoncus felis.
                  </p>
                  <Row>
                    <Col></Col>
                    <Col xs={7}><Button variant="primary" className='btn50'>REJOINDRE LA MARKETPLACE</Button></Col>
                    <Col></Col>
                  </Row>
                </div>
              </Col>
              <Col>
                <div className='bg687'>
                <FaUser className='falreguser text-center my-3' />
                  <h2 className='font03'>
                  Je suis déjà client Maathena
                  </h2>
                  <p className='font04 my-'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin, tortor sit amet feugiat faucibus, diam justo viverra nibh, vel rhoncus felis.
                  </p>
                  <Row>
                    <Col></Col>
                    <Col xs={7}><Button variant="primary" className='btn5189'>REJOINDRE LA MARKETPLACE</Button></Col>
                    <Col></Col>
                  </Row>
                </div>
              </Col>
            </Row>
            </div>
          </Container>
        </div>


        <Footer />
      </div>
    </div>
  )
}

export default InscriptionComme
