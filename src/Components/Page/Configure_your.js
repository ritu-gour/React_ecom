import { useState } from "react";


import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import './Configure_your.css'
import Footer from '../Footer'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import { BiImageAdd } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
const Configure_your = () => {
    const [phone, setPhone] = useState('');

    let [num1, setNum1] = useState(8);
    let incNum1 = () => {
        if (num1 < 100) {
            setNum1(Number(num1) + 1);
        }
    };
    let decNum1 = () => {
        if (num1 > 0) {
            setNum1(num1 - 1);
        }
    }
    let handleChange1 = (e) => {
        setNum1(e.target.value);
    }

    // Two ----
    let [num2, setNum2] = useState(30);
    let incNum2 = () => {
        if (num2 < 100) {
            setNum2(Number(num2) + 1);
        }
    };
    let decNum2 = () => {
        if (num2 > 0) {
            setNum2(num2 - 1);
        }
    }
    let handleChange2 = (e) => {
        setNum2(e.target.value);
    }

    // three----
    let [num3, setNum3] = useState(8);
    let incNum3 = () => {
        if (num3 < 100) {
            setNum3(Number(num3) + 1);
        }
    };
    let decNum3 = () => {
        if (num3 > 0) {
            setNum3(num3 - 1);
        }
    }
    let handleChange3 = (e) => {
        setNum3(e.target.value);
    }


    // four ----
    let [num4, setNum4] = useState(30);
    let incNum4 = () => {
        if (num4 < 100) {
            setNum4(Number(num4) + 1);
        }
    };
    let decNum4 = () => {
        if (num4 > 0) {
            setNum4(num4 - 1);
        }
    }
    let handleChange4 = (e) => {
        setNum4(e.target.value);
    }


    // 5 ----
    let [num5, setNum5] = useState(8);
    let incNum5 = () => {
        if (num5 < 100) {
            setNum5(Number(num5) + 1);
        }
    };
    let decNum5 = () => {
        if (num5 > 0) {
            setNum5(num5 - 1);
        }
    }
    let handleChange5 = (e) => {
        setNum5(e.target.value);
    }
    // 6 ----
    let [num6, setNum6] = useState(30);
    let incNum6 = () => {
        if (num6 < 100) {
            setNum6(Number(num6) + 1);
        }
    };
    let decNum6 = () => {
        if (num6 > 0) {
            setNum6(num6 - 1);
        }
    }
    let handleChange6 = (e) => {
        setNum6(e.target.value);
    }
    // 7 ----
    let [num7, setNum7] = useState(8);
    let incNum7 = () => {
        if (num7 < 100) {
            setNum7(Number(num7) + 1);
        }
    };
    let decNum7 = () => {
        if (num7 > 0) {
            setNum7(num7 - 1);
        }
    }
    let handleChange7 = (e) => {
        setNum7(e.target.value);
    }

    // 8 ----
    let [num8, setNum8] = useState(30);
    let incNum8 = () => {
        if (num8 < 100) {
            setNum8(Number(num8) + 1);
        }
    };
    let decNum8 = () => {
        if (num8 > 0) {
            setNum8(num8 - 1);
        }
    }
    let handleChange8 = (e) => {
        setNum8(e.target.value);
    }
    // 9 ----
    let [num9, setNum9] = useState(8);
    let incNum9 = () => {
        if (num9 < 100) {
            setNum9(Number(num9) + 1);
        }
    };
    let decNum9 = () => {
        if (num9 > 0) {
            setNum9(num9 - 1);
        }
    }
    let handleChange9 = (e) => {
        setNum9(e.target.value);
    }
    // 10 ----
    let [num10, setNum10] = useState(30);
    let incNum10 = () => {
        if (num10 < 100) {
            setNum10(Number(num10) + 1);
        }
    };
    let decNum10 = () => {
        if (num10 > 0) {
            setNum10(num10 - 1);
        }
    }
    let handleChange10 = (e) => {
        setNum10(e.target.value);
    }
    // 11 ----
    let [num11, setNum11] = useState(8);
    let incNum11 = () => {
        if (num11 < 100) {
            setNum11(Number(num11) + 1);
        }
    };
    let decNum11 = () => {
        if (num11 > 0) {
            setNum11(num11 - 1);
        }
    }
    let handleChange11 = (e) => {
        setNum11(e.target.value);
    }
    // 12 ----
    let [num12, setNum12] = useState(30);
    let incNum12 = () => {
        if (num12 < 100) {
            setNum12(Number(num12) + 1);
        }
    };
    let decNum12 = () => {
        if (num12 > 0) {
            setNum12(num12 - 1);
        }
    }
    let handleChange12 = (e) => {
        setNum12(e.target.value);
    }
    // 13 ----
    let [num13, setNum13] = useState(8);
    let incNum13 = () => {
        if (num13 < 100) {
            setNum13(Number(num13) + 1);
        }
    };
    let decNum13 = () => {
        if (num13 > 0) {
            setNum13(num13 - 1);
        }
    }
    let handleChange13 = (e) => {
        setNum13(e.target.value);
    }
    // 14 ----
    let [num14, setNum14] = useState(30);
    let incNum14 = () => {
        if (num14 < 100) {
            setNum14(Number(num14) + 1);
        }
    };
    let decNum14 = () => {
        if (num14 > 0) {
            setNum14(num14 - 1);
        }
    }
    let handleChange14 = (e) => {
        setNum14(e.target.value);
    }
    // 15 ----
    let [num15, setNum15] = useState(8);
    let incNum15 = () => {
        if (num15 < 100) {
            setNum15(Number(num15) + 1);
        }
    };
    let decNum15 = () => {
        if (num15 > 0) {
            setNum15(num15 - 1);
        }
    }
    let handleChange15 = (e) => {
        setNum15(e.target.value);
    }
    // 16 ----
    let [num16, setNum16] = useState(30);
    let incNum16 = () => {
        if (num16 < 100) {
            setNum16(Number(num16) + 1);
        }
    };
    let decNum16 = () => {
        if (num16 > 0) {
            setNum16(num16 - 1);
        }
    }
    let handleChange16 = (e) => {
        setNum16(e.target.value);
    }
    // 17 ----
    let [num17, setNum17] = useState(8);
    let incNum17 = () => {
        if (num17 < 100) {
            setNum17(Number(num17) + 1);
        }
    };
    let decNum17 = () => {
        if (num17 > 0) {
            setNum17(num17 - 1);
        }
    }
    let handleChange17 = (e) => {
        setNum17(e.target.value);
    }
    // 18 ----
    let [num18, setNum18] = useState(30);
    let incNum18 = () => {
        if (num18 < 100) {
            setNum18(Number(num18) + 1);
        }
    };
    let decNum18 = () => {
        if (num18 > 0) {
            setNum18(num18 - 1);
        }
    }
    let handleChange18 = (e) => {
        setNum18(e.target.value);
    }
    // 19 ----
    let [num19, setNum19] = useState(8);
    let incNum19 = () => {
        if (num19 < 100) {
            setNum19(Number(num19) + 1);
        }
    };
    let decNum19 = () => {
        if (num19 > 0) {
            setNum19(num19 - 1);
        }
    }
    let handleChange19 = (e) => {
        setNum19(e.target.value);
    }
    // 20 ----
    let [num20, setNum20] = useState(30);
    let incNum20 = () => {
        if (num20 < 100) {
            setNum20(Number(num20) + 1);
        }
    };
    let decNum20 = () => {
        if (num20 > 0) {
            setNum20(num20 - 1);
        }
    }
    let handleChange20 = (e) => {
        setNum20(e.target.value);
    }


    // 21 ----
    let [num21, setNum21] = useState(8);
    let incNum21 = () => {
        if (num21 < 100) {
            setNum21(Number(num21) + 1);
        }
    };
    let decNum21 = () => {
        if (num21 > 0) {
            setNum21(num21 - 1);
        }
    }
    let handleChange21 = (e) => {
        setNum21(e.target.value);
    }
    // 22 ----
    let [num22, setNum22] = useState(30);
    let incNum22 = () => {
        if (num22 < 100) {
            setNum22(Number(num22) + 1);
        }
    };
    let decNum22 = () => {
        if (num22 > 0) {
            setNum22(num22 - 1);
        }
    }
    let handleChange22 = (e) => {
        setNum22(e.target.value);
    }
    // 23 ----
    let [num23, setNum23] = useState(8);
    let incNum23 = () => {
        if (num23 < 100) {
            setNum23(Number(num23) + 1);
        }
    };
    let decNum23 = () => {
        if (num23 > 0) {
            setNum23(num23 - 1);
        }
    }
    let handleChange23 = (e) => {
        setNum23(e.target.value);
    }
    // 24 ----
    let [num24, setNum24] = useState(30);
    let incNum24 = () => {
        if (num24 < 100) {
            setNum24(Number(num24) + 1);
        }
    };
    let decNum24 = () => {
        if (num24 > 0) {
            setNum24(num24 - 1);
        }
    }
    let handleChange24 = (e) => {
        setNum24(e.target.value);
    }
    // 25 ----
    let [num25, setNum25] = useState(8);
    let incNum25 = () => {
        if (num25 < 100) {
            setNum25(Number(num25) + 1);
        }
    };
    let decNum25 = () => {
        if (num25 > 0) {
            setNum25(num25 - 1);
        }
    }
    let handleChange25 = (e) => {
        setNum25(e.target.value);
    }
    // 26 ----
    let [num26, setNum26] = useState(30);
    let incNum26 = () => {
        if (num26 < 100) {
            setNum26(Number(num26) + 1);
        }
    };
    let decNum26 = () => {
        if (num26 > 0) {
            setNum26(num26 - 1);
        }
    }
    let handleChange26 = (e) => {
        setNum26(e.target.value);
    }
    // 27 ----
    let [num27, setNum27] = useState(8);
    let incNum27 = () => {
        if (num27 < 100) {
            setNum27(Number(num27) + 1);
        }
    };
    let decNum27 = () => {
        if (num27 > 0) {
            setNum27(num27 - 1);
        }
    }
    let handleChange27 = (e) => {
        setNum27(e.target.value);
    }
    // 28 ----
    let [num28, setNum28] = useState(30);
    let incNum28 = () => {
        if (num28 < 100) {
            setNum28(Number(num28) + 1);
        }
    };
    let decNum28 = () => {
        if (num28 > 0) {
            setNum28(num28 - 1);
        }
    }
    let handleChange28 = (e) => {
        setNum28(e.target.value);
    }


    const [showhide, setShowhide] = useState('');

    const handleshowhide = (event) => {
        const getuser = event.target.value;
        setShowhide(getuser);

    }

    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata)
    }
    const handleDelete = (i) => {
        const deletVal = [...val]
        deletVal.splice(i, 1)
        setVal(deletVal)
    }
    console.log(val, "data-")
    return (
        <div>
            <div className="new-wrapper">

                <div className="showcase">
                    {/* <div id="google_translate_element" style={{ float: 'right' }}></div> */}
                    <img src="./Component2.png" alt="Picture" />
                    <div className="overlay">
                        <h2>Configurez votre boutique Maathena</h2>
                        <p>Nous sommes ravis que vous rejoignez Maathena ! Merci de compléter les <br></br>
                            informations ci-dessous afin de configurer votre boutique en ligne.</p>

                    </div>
                </div>
                <div className='bg9' style={{
                    backgroundImage:
                        "url('./img/config_bg.png')", backgroundSize: "cover",
                    backgroundRepeat: "no-repeat", padding: "100px 0px 800px 0px"
                }}>
                </div>

                <Container className='cradconfig1 '>
                    <Card className="cardconfig">

                        <Card.Body>






                            <h2 className='Informationsgénérales'>Informations générales</h2>

                            <p>Logo</p>
                            <Form>

                                <Stack direction="horizontal" gap={3}>
                                    <div className="p">
                                        <Form.Group controlId="formBasicEmail" className="custom-file-drop-area ">

                                            <Form.Label for="filephotos">
                                                <BiImageAdd className='bigimg' />
                                                Téléchargez votre photo
                                            </Form.Label>

                                            <Form.Control type="file" placeholder="Enter photos" id="filephotos" required />

                                        </Form.Group></div>

                                </Stack>

                                <Row className='my-5'>
                                    <Col>
                                        <Form.Label> Nom du commerce </Form.Label>
                                        <Form.Control type="text" placeholder="Nom pré-rempli" className='form45' required />
                                    </Col>
                                    <Col>
                                        <Form.Label>Adresse du commerce </Form.Label>
                                        <Form.Control type="email" placeholder="adresse.pre.remplie@gmail.com" className='form45' required />
                                    </Col>
                                    <Col>
                                        <Form.Label>Téléphone </Form.Label>

                                        <PhoneInput
                                            defaultCountry="fr"
                                            value={phone}
                                            onChange={(phone) => setPhone(phone)}
                                        />

                                    </Col>
                                </Row>
                                <Row className='box900'>
                                    <Col>
                                        <Form.Label className='quelle'>Quelle est la date de création de votre entreprise ?  </Form.Label>
                                    </Col>
                                    <Col></Col><Col></Col>
                                    <Col>
                                        <Form.Control type="date" placeholder="date" className='form46' required />
                                    </Col>
                                </Row>
                                <Row className='box900'>
                                    <Col>
                                        <Form.Label className='quelle'>Travaillez-vous avec des entrepôts de stockage ?  </Form.Label>
                                    </Col>
                                    <Col></Col> <Col></Col>
                                    <Col className='radio2'>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3" onChange={(e) => (handleshowhide(e))}>
                                                <Form.Check
                                                    inline
                                                    label="Oui"
                                                    name="group1" value="1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                    className='radio3 radio9' required />
                                                <Form.Check
                                                    inline
                                                    label="Non"
                                                    name="group1" value="2"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                    required />

                                            </div>
                                        ))}




                                    </Col>
                                    {
                                        showhide === '1' && (
                                            <div className="col-md-10 form-group my-5">
                                                <Row>
                                                    <Col>
                                                        <p className="mb-3">Adresse entrepôt 1 : </p>
                                                    </Col>
                                                    <Col>
                                                        <Button onClick={() => handleAdd()} className="addbtn">+ Ajouter un entrepôt</Button>
                                                    </Col>

                                                </Row>



                                                <Form>
                                                    {val.map((data, i) => {
                                                        return (
                                                            <div>
                                                                <Stack direction="horizontal" gap={3}>
                                                                    <div className="p-2"> <Form.Group className="mb-3" controlId="formBasicEmail">

                                                                        <Form.Control type="text" placeholder="N° de voie et rue" className="rue" value={data} onChange={e => handleChange(e, i)} required />

                                                                    </Form.Group></div>
                                                                    <div className="p-2"> <Button onClick={() => handleDelete(i)} className="rembtn">Remove</Button></div>

                                                                </Stack>
                                                                <Stack direction="horizontal" gap={3}>
                                                                    <div className="p-2"> <Form.Group className="mb-3" controlId="formBasicEmail">

                                                                        <Form.Control type="text" placeholder="Code postal" className="rue" value={data} onChange={e => handleChange(e, i)} required />

                                                                    </Form.Group></div>
                                                                    <div className="p-2">  <Form.Group className="mb-3" controlId="formBasicEmail">

                                                                        <Form.Control type="text" placeholder="Ville" className="rue1" value={data} onChange={e => handleChange(e, i)} required />

                                                                    </Form.Group></div>

                                                                </Stack>


                                                            </div>
                                                        )
                                                    })}
                                                    <Stack direction="horizontal" gap={3}>
                                                        <div className="p-2"> <Form.Group className="mb-3" controlId="formBasicEmail">

                                                            <Form.Control type="text" placeholder="N° de voie et rue" className="rue" required />

                                                        </Form.Group></div>

                                                    </Stack>
                                                    <Stack direction="horizontal" gap={3}>
                                                        <div className="p-2">  <Form.Group className="mb-3" controlId="formBasicEmail">

                                                            <Form.Control type="text" placeholder="Code postal" className="rue" required />

                                                        </Form.Group></div>

                                                        <div className="p-2">   <Form.Group className="mb-3" controlId="formBasicEmail">

                                                            <Form.Control type="text" placeholder="Ville" className="rue1" required />

                                                        </Form.Group></div>

                                                    </Stack>


                                                    <Button variant="" type="submit" className="btngh">
                                                        Enregistrer l’adresse
                                                    </Button>
                                                </Form>
                                            </div>
                                        )}
                                    {/* {
             showhide==='2' && (
             <div className="col-md-10 form-group">
            <label className="mb-2">User Address 2</label>
            <textarea name="address2" className="form-control"></textarea>
               </div>
             ) } */}
                                </Row>

                                <Row className='box900'>
                                    <Col>
                                        <Form.Label className='quelle'>Livrez-vous à l’étranger ?</Form.Label>
                                    </Col>
                                    <Col></Col> <Col></Col>
                                    <Col className='radio2'>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3">
                                                <Form.Check
                                                    inline
                                                    label="Oui"
                                                    name="group4"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                    className='radio3 radio9' required />
                                                <Form.Check
                                                    inline
                                                    label="Non"
                                                    name="group4"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                    required />

                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                                <Row className='box900'>
                                    <Col>
                                        <Form.Label className='quelle'>Etes-vous franchisés ?</Form.Label>
                                    </Col>
                                    <Col></Col> <Col></Col>
                                    <Col className='radio2'>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3">
                                                <Form.Check
                                                    inline
                                                    label="Oui"
                                                    name="group6"
                                                    type={type}
                                                    id={`inline-${type}-3`}
                                                    className='radio3 radio9' required />
                                                <Form.Check
                                                    inline
                                                    label="Non"
                                                    name="group6"
                                                    type={type}
                                                    id={`inline-${type}-3`}
                                                    required />

                                            </div>
                                        ))}
                                    </Col>
                                </Row>
                                <Row className='box900'>
                                    <Col>
                                        <Form.Label className='quelle'>Quel est votre chiffre d’affaire annuel ?</Form.Label>
                                    </Col>
                                    <Col></Col><Col></Col>
                                    <Col>
                                        <Form.Control type="number" placeholder="€" className='form46' style={{ float: "right" }} required />
                                    </Col>
                                </Row>
                                <br></br>
                                <br></br>
                                <div className='box900n'>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Quelles sont vos horaires d’ouverture ?</Accordion.Header>
                                            <Accordion.Body>
                                                <Stack direction="horizontal" gap={3} className="eng11">
                                                    <div className="p"><Form.Label >Lundi </Form.Label></div>
                                                    <div className="p- ms-auto">
                                                        <Form.Label >Début </Form.Label>
                                                        <Stack direction="horizontal" gap={3} className="enq1">

                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum1}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442",
                                                                    background: "#FFF", color: "#084442", padding: "3px 2px 3px 2px"
                                                                }}
                                                                    className="form-control num text-center numbh" value={num1} onChange={handleChange1} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum1}><IoIosArrowDown /></Button>

                                                            </div>:
                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum2}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border:
                                                                        "0.941px solid #084442", background: "#FFF", color: "#084442", padding: "3px 2px 3px 2px"
                                                                }}
                                                                    className="form-control num text-center numbh" value={num2} onChange={handleChange2} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum2}><IoIosArrowDown /></Button>

                                                            </div>


                                                        </Stack></div>

                                                    <div className="p">
                                                        <Form.Label >Fin </Form.Label>
                                                        <Stack direction="horizontal" gap={3} className="enq1">

                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum3}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442", background: "#FFF", color: "#084442",
                                                                    padding: "3px 2px 3px 2px"
                                                                }} className="form-control num text-center numbh" value={num3} onChange={handleChange3} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum3}><IoIosArrowDown /></Button>

                                                            </div>:
                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum4}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442", background: "#FFF",
                                                                    color: "#084442", padding: "3px 2px 3px 2px"
                                                                }} className="form-control num text-center numbh" value={num4} onChange={handleChange4} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum4}><IoIosArrowDown /></Button>

                                                            </div>
                                                        </Stack>
                                                    </div>
                                                </Stack>





                                                <Stack direction="horizontal" gap={3} className="eng1">
                                                    <div className="p"><Form.Label >Mardi </Form.Label></div>
                                                    <div className="p- ms-auto">

                                                        <Stack direction="horizontal" gap={3} className="enq1">

                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum5}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442",
                                                                    background: "#FFF", color: "#084442", padding: "3px 2px 3px 2px"
                                                                }}
                                                                    className="form-control num text-center numbh" value={num5} onChange={handleChange5} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum5}><IoIosArrowDown /></Button>

                                                            </div>:
                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum6}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border:
                                                                        "0.941px solid #084442", background: "#FFF", color: "#084442", padding: "3px 2px 3px 2px"
                                                                }}
                                                                    className="form-control num text-center numbh" value={num6} onChange={handleChange6} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum6}><IoIosArrowDown /></Button>

                                                            </div>


                                                        </Stack></div>

                                                    <div className="p">

                                                        <Stack direction="horizontal" gap={3} className="enq1">

                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum7}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442", background: "#FFF", color: "#084442",
                                                                    padding: "3px 2px 3px 2px"
                                                                }} className="form-control num text-center numbh" value={num7} onChange={handleChange7} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum7}><IoIosArrowDown /></Button>

                                                            </div>:
                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum8}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442", background: "#FFF",
                                                                    color: "#084442", padding: "3px 2px 3px 2px"
                                                                }} className="form-control num text-center numbh" value={num8} onChange={handleChange8} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum8}><IoIosArrowDown /></Button>

                                                            </div>
                                                        </Stack>
                                                    </div>
                                                </Stack>
                                                <Stack direction="horizontal" gap={3} className="eng11">
                                                    <div className="p"><Form.Label >Mercredi</Form.Label></div>
                                                    <div className="p- ms-auto">

                                                        <Stack direction="horizontal" gap={3} className="enq1">

                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum9}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442",
                                                                    background: "#FFF", color: "#084442", padding: "3px 2px 3px 2px"
                                                                }}
                                                                    className="form-control num text-center numbh" value={num9} onChange={handleChange9} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum9}><IoIosArrowDown /></Button>

                                                            </div>:
                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum10}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border:
                                                                        "0.941px solid #084442", background: "#FFF", color: "#084442", padding: "3px 2px 3px 2px"
                                                                }}
                                                                    className="form-control num text-center numbh" value={num10} onChange={handleChange10} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum10}><IoIosArrowDown /></Button>

                                                            </div>


                                                        </Stack></div>

                                                    <div className="p">

                                                        <Stack direction="horizontal" gap={3} className="enq1">

                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum11}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442", background: "#FFF", color: "#084442",
                                                                    padding: "3px 2px 3px 2px"
                                                                }} className="form-control num text-center numbh" value={num11} onChange={handleChange11} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum11}><IoIosArrowDown /></Button>

                                                            </div>:
                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum12}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442", background: "#FFF",
                                                                    color: "#084442", padding: "3px 2px 3px 2px"
                                                                }} className="form-control num text-center numbh" value={num12} onChange={handleChange12} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum12}><IoIosArrowDown /></Button>

                                                            </div>
                                                        </Stack>
                                                    </div>
                                                </Stack>
                                                <Stack direction="horizontal" gap={3} className="eng1">
                                                    <div className="p"><Form.Label >Jeudi</Form.Label></div>
                                                    <div className="p- ms-auto">

                                                        <Stack direction="horizontal" gap={3} className="enq1">

                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum13}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442",
                                                                    background: "#FFF", color: "#084442", padding: "3px 2px 3px 2px"
                                                                }}
                                                                    className="form-control num text-center numbh" value={num13} onChange={handleChange13} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum13}><IoIosArrowDown /></Button>

                                                            </div>:
                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum14}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border:
                                                                        "0.941px solid #084442", background: "#FFF", color: "#084442", padding: "3px 2px 3px 2px"
                                                                }}
                                                                    className="form-control num text-center numbh" value={num14} onChange={handleChange14} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum14}><IoIosArrowDown /></Button>

                                                            </div>


                                                        </Stack></div>

                                                    <div className="p">

                                                        <Stack direction="horizontal" gap={3} className="enq1">

                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum15}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442", background: "#FFF", color: "#084442",
                                                                    padding: "3px 2px 3px 2px"
                                                                }} className="form-control num text-center numbh" value={num15} onChange={handleChange15} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum15}><IoIosArrowDown /></Button>

                                                            </div>:
                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum16}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442", background: "#FFF",
                                                                    color: "#084442", padding: "3px 2px 3px 2px"
                                                                }} className="form-control num text-center numbh" value={num16} onChange={handleChange16} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum16}><IoIosArrowDown /></Button>

                                                            </div>
                                                        </Stack>
                                                    </div>
                                                </Stack>

                                                <Stack direction="horizontal" gap={3} className="eng11">
                                                    <div className="p"><Form.Label >Vendredi </Form.Label></div>
                                                    <div className="p- ms-auto">

                                                        <Stack direction="horizontal" gap={3} className="enq1">

                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum17}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442",
                                                                    background: "#FFF", color: "#084442", padding: "3px 2px 3px 2px"
                                                                }}
                                                                    className="form-control num text-center numbh" value={num17} onChange={handleChange17} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum17}><IoIosArrowDown /></Button>

                                                            </div>:
                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum18}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border:
                                                                        "0.941px solid #084442", background: "#FFF", color: "#084442", padding: "3px 2px 3px 2px"
                                                                }}
                                                                    className="form-control num text-center numbh" value={num18} onChange={handleChange18} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum18}><IoIosArrowDown /></Button>

                                                            </div>


                                                        </Stack></div>

                                                    <div className="p">

                                                        <Stack direction="horizontal" gap={3} className="enq1">

                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum19}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442", background: "#FFF", color: "#084442",
                                                                    padding: "3px 2px 3px 2px"
                                                                }} className="form-control num text-center numbh" value={num19} onChange={handleChange19} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum19}><IoIosArrowDown /></Button>

                                                            </div>:
                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum20}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442", background: "#FFF",
                                                                    color: "#084442", padding: "3px 2px 3px 2px"
                                                                }} className="form-control num text-center numbh" value={num20} onChange={handleChange20} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum20}><IoIosArrowDown /></Button>

                                                            </div>
                                                        </Stack>
                                                    </div>
                                                </Stack>
                                                <Stack direction="horizontal" gap={3} className="eng1">
                                                    <div className="p"><Form.Label >Samedi</Form.Label></div>
                                                    <div className="p- ms-auto">

                                                        <Stack direction="horizontal" gap={3} className="enq1">

                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum21}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442",
                                                                    background: "#FFF", color: "#084442", padding: "3px 2px 3px 2px"
                                                                }}
                                                                    className="form-control num text-center numbh" value={num21} onChange={handleChange21} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum21}><IoIosArrowDown /></Button>

                                                            </div>:
                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum22}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border:
                                                                        "0.941px solid #084442", background: "#FFF", color: "#084442", padding: "3px 2px 3px 2px"
                                                                }}
                                                                    className="form-control num text-center numbh" value={num22} onChange={handleChange22} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum22}><IoIosArrowDown /></Button>

                                                            </div>


                                                        </Stack></div>

                                                    <div className="p">

                                                        <Stack direction="horizontal" gap={3} className="enq1">

                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum23}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442", background: "#FFF", color: "#084442",
                                                                    padding: "3px 2px 3px 2px"
                                                                }} className="form-control num text-center numbh" value={num23} onChange={handleChange23} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum23}><IoIosArrowDown /></Button>

                                                            </div>:
                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum24}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442", background: "#FFF",
                                                                    color: "#084442", padding: "3px 2px 3px 2px"
                                                                }} className="form-control num text-center numbh" value={num24} onChange={handleChange24} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum24}><IoIosArrowDown /></Button>

                                                            </div>
                                                        </Stack>
                                                    </div>
                                                </Stack>
                                                <Stack direction="horizontal" gap={3} className="eng11">
                                                    <div className="p"><Form.Label >Dimanche </Form.Label></div>
                                                    <div className="p- ms-auto">

                                                        <Stack direction="horizontal" gap={3} className="enq1">

                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum25}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442",
                                                                    background: "#FFF", color: "#084442", padding: "3px 2px 3px 2px"
                                                                }}
                                                                    className="form-control num text-center numbh" value={num25} onChange={handleChange25} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum25}><IoIosArrowDown /></Button>

                                                            </div>:
                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum26}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border:
                                                                        "0.941px solid #084442", background: "#FFF", color: "#084442", padding: "3px 2px 3px 2px"
                                                                }}
                                                                    className="form-control num text-center numbh" value={num26} onChange={handleChange26} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum26}><IoIosArrowDown /></Button>

                                                            </div>


                                                        </Stack></div>

                                                    <div className="p">

                                                        <Stack direction="horizontal" gap={3} className="enq1">

                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum27}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442", background: "#FFF", color: "#084442",
                                                                    padding: "3px 2px 3px 2px"
                                                                }} className="form-control num text-center numbh" value={num27} onChange={handleChange27} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum27}><IoIosArrowDown /></Button>

                                                            </div>:
                                                            <div className="p-">
                                                                <Button className="btn btn-outline-primary bna" type="button" onClick={decNum28}><IoIosArrowUp /></Button>
                                                                <input type="text" style={{
                                                                    fontSize: "16px", border: "0.941px solid #084442", background: "#FFF",
                                                                    color: "#084442", padding: "3px 2px 3px 2px"
                                                                }} className="form-control num text-center numbh" value={num28} onChange={handleChange28} />
                                                                <Button className="btn btn-outline-primary bna1" type="button" onClick={incNum28}><IoIosArrowDown /></Button>

                                                            </div>
                                                        </Stack>
                                                    </div>
                                                </Stack>



                                            </Accordion.Body>
                                        </Accordion.Item>

                                    </Accordion>

                                </div>

                                <h2 className='labels'>Labels</h2>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate convallis ligula ut sodales. Phasellus eleifend diam ut sem congue, in ultricies risus efficitur. </p>


                                <p>Choisir dans la liste (plusieurs choix possibles) :</p>

                                <Row className="checkbox7">
                                    <Col>
                                        <div >
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Fabriqué en France"
                                                        name="Fabriqué en France"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        className='radio3 radio9' required />

                                                </div>
                                            ))}

                                        </div>
                                        <div >
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Biologique"
                                                        name="Biologique"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        className='radio3 radio9' required />

                                                </div>
                                            ))}

                                        </div>
                                        <div >
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Commerce équitable"
                                                        name="Commerce équitable"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        className='radio3 radio9' required />

                                                </div>
                                            ))}

                                        </div>
                                        <div >
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Fait main"
                                                        name="Fait main"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        className='radio3 radio9' required />

                                                </div>
                                            ))}

                                        </div>
                                        <div >
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Recyclé"
                                                        name="Recyclé"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        className='radio3 radio9' required />

                                                </div>
                                            ))}

                                        </div>
                                        <div >
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Vegan"
                                                        name="Vegan"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        className='radio3 radio9' required />

                                                </div>
                                            ))}

                                        </div>

                                    </Col>
                                    <Col>
                                        <div >
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Fabriqué en France"
                                                        name="Fabriqué en France1"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        className='radio3 radio9' required />

                                                </div>
                                            ))}

                                        </div>
                                        <div >
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Biologique"
                                                        name="Biologique1"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        className='radio3 radio9' required />

                                                </div>
                                            ))}

                                        </div>
                                        <div >
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Commerce équitable"
                                                        name="Commerce équitable1"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        className='radio3 radio9' required />

                                                </div>
                                            ))}

                                        </div>
                                        <div >
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Fait main"
                                                        name="Fait main1"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        className='radio3 radio9' required />

                                                </div>
                                            ))}

                                        </div>
                                        <div >
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Recyclé"
                                                        name="Recyclé1"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        className='radio3 radio9' required />

                                                </div>
                                            ))}

                                        </div>
                                        <div >
                                            {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Vegan"
                                                        name="Vegan1"
                                                        type={type}
                                                        id={`inline-${type}-2`}
                                                        className='radio3 radio9' required />

                                                </div>
                                            ))}

                                        </div>
                                    </Col>

                                </Row>


                                <Button variant="primary" type="submit" className="VENDRESURMAATHENA">
                                    VENDRE SUR MAATHENA
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                </Container>






                <Footer />
            </div>
        </div>
    )
}

export default Configure_your
