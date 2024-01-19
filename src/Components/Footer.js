import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
    FaLinkedin,
} from "react-icons/fa";
import FormCheck from 'react-bootstrap/FormCheck'
import Form from 'react-bootstrap/Form';

const Footer = () => {
    return (
        <div>
            
            <footer className="footer-section">
                
                <div className="container">

                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="ccol-xl-5 col-lg-5 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-logo">

                                        <a href="index.html"><img src="./insigne-blanc.png" className="img-fluid1" alt="logo" /></a>
                                        <p style={{ padding: "0px 0px 0px 2px", color: "white", fontSize: "17px" }}>Rejoignez notre newsletter</p>
                                        <p > </p>

                                        <Form >

                                            <div className="d-flex">
                                                <Form.Control  type="text"  className='form1'/>

                                                <Button variant="primary" className='btn8' type="button">
                                                S’inscrire
                                                </Button>

                                            </div>


                                            {['checkbox'].map((type) => (
                                                <div key={`default-${type}`} className="mb-3 my-2" style={{ padding: "0px 0px 0px 2px", color: "white", fontSize: "14px" }}>
                                                    <Form.Check // prettier-ignore
                                                        type={type}

                                                        label={`En cochant cette case, vous
                                                        consentez à notre politique de confidentialité.`}
                                                    />


                                                </div>
                                            ))}
                                        </Form>
                                    </div>


                                </div>
                            </div>
                            <div className="ccol-xl-2 col-lg-2  mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Suivez-nous sur les réseaux</h3>
                                    </div>
                                    <ul>






                                        <li className='socialmediatext'><a
                                            href="#"
                                            target="_thapa">
                                            <FaFacebookSquare className="facebook" />
                                            &nbsp;&nbsp; Facebook</a></li>
                                        <li className='socialmediatext'><a
                                            href="#"
                                            target="_thapa">
                                            <FaInstagramSquare className="instagram" />
                                            &nbsp;&nbsp; Instagram</a></li>
                                        <li className='socialmediatext'><a
                                            href="#"
                                            target="_thapa">
                                            <FaLinkedin className="Linkedin" />
                                             &nbsp;&nbsp; Linkedin </a></li>
                                        <li className='socialmediatext'><a
                                            href="#"
                                            target="_thapa">
                                            <FaYoutubeSquare className="youtube" />
                                            &nbsp;&nbsp; Youtube </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ccol-xl-2 col-lg-2 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>A propos</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">Qui sommes-nous ? </a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Vendre sur Maathena</a></li>
                                        <li><a href="#">Livraison et retours</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="ccol-xl-3 col-lg-3 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Nous contacter</h3>
                                    </div>
                                    <ul>
                                        <li className='my-2'><a href="#">+ 3360368099</a></li>
                                        <li><a href="#">nouscontacter@e-maathena.com</a></li>
                                        <li> <Button variant=" bv1" className="formula4 my-3">
                                            <a href='./contact' target="_blank" style={{color:"black"}}>Formulaire de contact  →</a>
                                        </Button></li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='bor1' />
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-3 col-lg-3  text-lg-left">
                                <div className="copyright-text">
                                    <p>© 2023 MAATHENA Tous droits réservés</p>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 d-none d-lg-block text-right">

                            </div>
                            <div className="col-xl-1 col-lg-1 d-none d-lg-block text-right">

                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#" className='footerlink1'>Politique de confidentitalité</a></li>
                                        <li><a href="#" className='footerlink1'>Mentions légales </a></li>
                                        <li><a href="#" className='footerlink1'>Conditions générales d’utilisation</a></li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
