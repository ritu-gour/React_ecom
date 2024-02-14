
import { useEffect, useState } from 'react';
// import { LoginOutlined } from '@ant-design/icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import './test.css'
import { Steps, Form, Input , Button} from "antd";
import { TiHomeOutline } from "react-icons/ti";
import { FaCheck, FaEdit } from "react-icons/fa";
import { Accordion, Container, Stack, Row, Col, Card } from 'react-bootstrap';

const Testing = () => {

  const [current, setCurrent] = useState(0);
  const [PersonalDetails, setPersonalDetails] = useState(null);
  const [AddressDetails, setAddressDetails] = useState(null);

  const [DeliveryDetails, setDeliveryDetails] = useState(null);
  const [PaymentDetails, setPaymentDetails] = useState(null);

  const onFinishPersonalForm = (values) => {
    setPersonalDetails(values);
    setCurrent(1);
  }
  const onFinishAddressForm = (values) => {
    setAddressDetails(values);
    setCurrent(2);
  }
  const onFinishDeliveryForm = (values) => {
    setDeliveryDetails(values);
    setCurrent(3);
  }
  const onFinishPaymentForm = (values) => {
    setPaymentDetails(values);
    setCurrent(4);
  }
 

  const forms = [
    <PersonalForm onFinish={onFinishPersonalForm} />,
    <AddressForm onFinish={onFinishAddressForm} />,

    <DeliveryForm onFinish={onFinishDeliveryForm} />,
    <PaymentForm onFinish={onFinishPaymentForm} />,

    <FinishForm />
  ];
  return (
    <div>
      <Steps style={{ padding: "32px 16px 32px 16px" }}
        onChange={setCurrent}
        current={current}
      >
        <Steps.Step title='Personal' icon={<FaCheck />} />
        <Steps.Step title='Address' icon={<FaCheck />} />
        <Steps.Step title='Delivery' icon={<FaCheck />} />
        <Steps.Step title='Payment' icon={<FaCheck />} />
        <Steps.Step title='Validation' icon={<FaCheck />} />
      </Steps>
      {forms[current]}
    </div>
  )
}

const PersonalForm = ({ onFinish }) => {
  return (
    <div>

      <Container>
        <Row>
          <Col sm={6}>

            <div className='formaidut'>
              <Form onFinish={onFinish} method='Post' >
                <h4 className='Informations'>Informations personnelles</h4>
                <Row>
                  <Col sm={6} >
                    <div className='marinput'>
                      <p className='lableinput'>Nom</p>

                      <Form.Item name={'name'} rules={[{
                        required: true, message: 'Please complete this required field.'
                      }]}>

                        <Input type='text' name='name' className='inputs' />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col sm={6} >
                    <div className='marinput'>
                      <p className='lableinput'>Prénom</p>
                      <Form.Item name={'password'} rules={[{
                        required: true, message: 'Please complete this required field.'
                      }]}>
                        <Input type='text' className='inputs' />
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} >
                    <div className='marinputs'>
                      <p className='lableinput'>Email</p>
                      <Form.Item name={'email'} rules={[{
                        required: true, type: 'email', message: 'Please complete this required field.'
                      }]}>
                        <Input className='inputs' />

                      </Form.Item>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className='marinputs'>
                      <p className='lableinput'>Numéro de téléphone*</p>
                      <Form.Item name={'number'} rules={[{
                        required: true, message: 'Please complete this required field.'
                      }]}>
                        <Input type='number' className='inputs' />

                      </Form.Item>
                    </div>
                  </Col>
                </Row>

                <Row>

                  <Col sm={12}>
                    <div className='marinputs'>
                      <p className='lableinputs'>*Votre numéro de téléphone est requis pour recevoir les informations de votre commande par SMS.</p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12}>
                    <div className='marinputs'>
                      <Button htmlType='submit' className='SUIVANT'>SUIVANT</Button>
                    </div>
                  </Col>
                </Row>



              </Form>
            </div>
          </Col>
          <Col sm={6}>
            <div className='finishcard'>
              <Stack direction="horizontal" gap={3} >
                <div className="p- mt-"> <img src='./image/monpani.jpeg' className='monpaniimg8n' /></div>
                <div className="p- ">
                  Produit 1
                  <p ><b style={{ fontWeight: "600" }}>40,00 €</b></p>
                  <Stack direction="horizontal" gap={3} className='maultipfelx my-4'>
                    <div className="p-">Art. No:<br></br>
                      Couleur :
                    </div>
                    <div className="p-">54637253 <br></br> Violet   </div>
                    <div className="p- mb-4">
                      Taille : 36 <br></br>

                    </div>
                  </Stack>
                  <p>Quantité : 1</p>
                </div>

              </Stack>
              <Stack direction="horizontal" gap={3} className='monpanigap'>
                <div className="p- mt-"> <img src='./image/monpani.jpeg' className='monpaniimg8n' /></div>
                <div className="p- ">
                  Produit 1
                  <p ><b style={{ fontWeight: "600" }}>40,00 €</b></p>
                  <Stack direction="horizontal" gap={3} className='maultipfelx my-4'>
                    <div className="p-">Art. No:<br></br>
                      Couleur :
                    </div>
                    <div className="p-">54637253 <br></br> Violet   </div>
                    <div className="p- mb-4">
                      Taille : 36 <br></br>

                    </div>
                  </Stack>
                  <p>Quantité : 1</p>
                </div>

              </Stack>
              <Stack direction="horizontal" gap={3} >
                <div className="p- mt-"> <img src='./image/monpani.jpeg' className='monpaniimg8n' /></div>
                <div className="p- ">
                  Produit 1
                  <p ><b style={{ fontWeight: "600" }}>40,00 €</b></p>
                  <Stack direction="horizontal" gap={3} className='maultipfelx my-4'>
                    <div className="p-">Art. No:<br></br>
                      Couleur :
                    </div>
                    <div className="p-">54637253 <br></br> Violet   </div>
                    <div className="p- mb-4">
                      Taille : 36 <br></br>

                    </div>
                  </Stack>
                  <p>Quantité : 1</p>
                </div>

              </Stack>
              <br></br>
              <hr></hr>
              <Row>
                <Col sm={6}>

                </Col>
                <Col sm={6}>
                  <Stack direction="horizontal" gap={3} className='maultipfelx my-4'>

                    <div className="p-2">Sous-total :<br></br>
                      Livraison :<br></br><br></br>
                      <b style={{ fontWeight: "600" }}>Total TTC : </b>
                    </div>
                    <div className="p-2">80,00 €<br></br>
                      4,50 €<br></br><br></br>
                      <b style={{ fontWeight: "600" }}>  84,50 € </b>
                    </div>
                  </Stack>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const AddressForm = ({ onFinish }) => {
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
      <Container>
        <Row>
          <Col sm={6}>

            <div className='formaidut'>
              <h4 className='Informations'>  Adresse de livraison</h4>

              <Form onFinish={onFinish} method='Post'>

                <Stack direction="horizontal" gap={3} className='maultipfelx mb-4'>
                  <div className="p-"> <Form.Item name={'name'} rules={[{
                    required: true, message: ''
                  }]}>

                    <Input type='radio' name='name' />
                  </Form.Item>
                  </div>

                  <div className="p- text9"><TiHomeOutline style={{ fontSize: "30px", margin: "0px 7px 0px 0px" }} />
                    Domicile<br>
                    </br>
                    3 rue de la paix
                    <br></br>
                    75000 Paris
                  </div>

                </Stack>

                <Stack direction="horizontal" gap={3} className='maultipfelx '>
                  <div className="p-"> <Form.Item name={'name'} rules={[{
                    required: true, message: ''
                  }]}>

                    <Input type='radio' name='name' checked />
                  </Form.Item>
                  </div>

                  <div className="p- text9 mb-4">Ajouter une nouvelle adresse
                  </div>



                </Stack>

                <div className="switches-container">
                  <input type="radio" id="switchMonthly" name="switchPlan" value="mme" checked="checked" className="switchYearly6" />
                  <input type="radio" id="switchYearly" name="switchPlan" value="m" className="switchYearly6" />
                  <label for="switchMonthly" className="switchYearly66">Mme / Mlle</label>
                  <label for="switchYearly" className="switchYearly66">M.</label>
                  <div className="switch-wrapper">
                    <div className="switch ">
                      <div>Mme / Mlle</div>
                      <div>M.</div>
                    </div>
                  </div>
                </div>
                <Row>
                  <Col sm={6} >
                    <div className='marinput'>
                      <p className='lableinput'>Nom</p>

                      <Form.Item name={'name'} rules={[{
                        required: true, message: 'Please complete this required field.'
                      }]}>

                        <Input type='text' name='name' className='inputs' />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col sm={6} >
                    <div className='marinput'>
                      <p className='lableinput'>Prénom</p>
                      <Form.Item name={'password'} rules={[{
                        required: true, message: 'Please complete this required field.'
                      }]}>
                        <Input type='text' className='inputs' />
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} >
                    <div className='marinputs'>
                      <p className='lableinput'>Adresse (numéro et rue)</p>
                      <Form.Item name={'Adresse'} rules={[{
                        required: true, message: 'Please complete this required field.'
                      }]}>
                        <Input type='text' className='inputs' />

                      </Form.Item>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <div className='marinputs'>
                      <p className='lableinput'>Complément d’adresse (facultatif)</p>
                      <Form.Item name={'Adresse1'} rules={[{
                        required: true, message: 'Please complete this required field.'
                      }]}>
                        <Input type='text' className='inputs' />

                      </Form.Item>
                    </div>
                  </Col>
                </Row>


                <Row>
                  <Col sm={6}>
                    <div className='marinputs'>
                      <p className='lableinput'>Code postal</p>
                      <Form.Item name={'code'} rules={[{
                        required: true, message: 'Please complete this required field.'
                      }]}>
                        <Input type='number' className='inputs' />

                      </Form.Item>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6}>
                    <div className='marinputs'>
                      <p className='lableinput'>Ville</p>
                      <Form.Item name={'city'} rules={[{
                        required: true, message: 'Please complete this required field.'
                      }]}>
                        <Input type='text' className='inputs' />

                      </Form.Item>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12}>
                    <Button onClick={() => handleAdd()} className="addbtnbb"> + Ajouter l’adresse</Button>

                    {val.map((data, i) => {
                      return (
                        <div>
                          <Row>
                            <Col sm={6}>
                              <div className='marinputs'>
                                <Form.Item name={'city'} rules={[{
                                  required: true, message: 'Please complete this required field.'
                                }]}>

                                  <Input type="text" className='inputs mt-2' value={data} onChange={e => handleChange(e, i)} />

                                </Form.Item>

                              </div>
                            </Col>
                            <Col sm={6}>
                              <div className='marinputs my-2'>
                                <Button onClick={() => handleDelete(i)} className="rembtnnm mb-3 ">Remove</Button>

                              </div>
                            </Col>
                          </Row>




                        </div>
                      )
                    })}


                  </Col>

                </Row>
                <Row>
                  <Col sm={12}>
                    <Card className='marinputs crfg mb-5' style={{ borderRadius: "0px" }}>
                      <Stack direction="horizontal" gap={3}>
                        <div className="p-2 ms-aut"> <p className="adreshb">Adresse de facturation</p>
                          <p className="adresh2b">Identique à l’adresse de livraison</p></div>

                        <div className="p-2 ms-aut"> <Button href='#' style={{ border: "none" }}><FaEdit className="faedity" /></Button></div>
                      </Stack>
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12}>
                    <div className='marinputs'>
                      <Button htmlType='submit' className='SUIVANT'>SUIVANT</Button>
                    </div>
                  </Col>
                </Row>



              </Form>
            </div>
          </Col>
          <Col sm={6}>
          <div className='finishcard'>
              <Stack direction="horizontal" gap={3}>
                <div className="p- mt-"> <img src='./image/monpani.jpeg' className='monpaniimg8n' /></div>
                <div className="p- ">
                  Produit 1
                  <p ><b style={{ fontWeight: "600" }}>40,00 €</b></p>
                  <Stack direction="horizontal" gap={3} className='maultipfelx my-4'>
                    <div className="p-">Art. No:<br></br>
                      Couleur :
                    </div>
                    <div className="p-">54637253 <br></br> Violet   </div>
                    <div className="p- mb-4">
                      Taille : 36 <br></br>

                    </div>
                  </Stack>
                  <p>Quantité : 1</p>
                </div>

              </Stack>
              <Stack direction="horizontal" gap={3} className='monpanigap'>
                <div className="p- mt-"> <img src='./image/monpani.jpeg' className='monpaniimg8n' /></div>
                <div className="p- ">
                  Produit 1
                  <p ><b style={{ fontWeight: "600" }}>40,00 €</b></p>
                  <Stack direction="horizontal" gap={3} className='maultipfelx my-4'>
                    <div className="p-">Art. No:<br></br>
                      Couleur :
                    </div>
                    <div className="p-">54637253 <br></br> Violet   </div>
                    <div className="p- mb-4">
                      Taille : 36 <br></br>

                    </div>
                  </Stack>
                  <p>Quantité : 1</p>
                </div>

              </Stack>
              <Stack direction="horizontal" gap={3} >
                <div className="p- mt-"> <img src='./image/monpani.jpeg' className='monpaniimg8n' /></div>
                <div className="p- ">
                  Produit 1
                  <p ><b style={{ fontWeight: "600" }}>40,00 €</b></p>
                  <Stack direction="horizontal" gap={3} className='maultipfelx my-4'>
                    <div className="p-">Art. No:<br></br>
                      Couleur :
                    </div>
                    <div className="p-">54637253 <br></br> Violet   </div>
                    <div className="p- mb-4">
                      Taille : 36 <br></br>

                    </div>
                  </Stack>
                  <p>Quantité : 1</p>
                </div>

              </Stack>
              <br></br>
              <hr></hr>
              <Row>
                <Col sm={6}>

                </Col>
                <Col sm={6}>
                  <Stack direction="horizontal" gap={3} className='maultipfelx my-4'>

                    <div className="p-2">Sous-total :<br></br>
                      Livraison :<br></br><br></br>
                      <b style={{ fontWeight: "600" }}>Total TTC : </b>
                    </div>
                    <div className="p-2">80,00 €<br></br>
                      4,50 €<br></br><br></br>
                      <b style={{ fontWeight: "600" }}>  84,50 € </b>
                    </div>
                  </Stack>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>   <br></br>   <br></br>   <br></br>
    </div>
  )
}
const DeliveryForm = ({ onFinish }) => {
  const [value1, setValue1] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue1(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const [value, onChange] = useState(new Date());
  const [showhide, setShowhide] = useState('');

  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setShowhide(getuser);

  }
  return (
    <div>
      <Container>
        <Row>
          <Col sm={6}>

            <div className='formaidut'>
              <h4 className='Informations'> Livraison</h4>
              <p className='veuill'>Veuillez choisir l’heure et la date de votre livraison. Vous devez être présent pour récupérer le colis.</p>

              <Form onFinish={onFinish} method='Post'>



                <Row>
                  <Col sm={9}>
                    <div className='marinputs'>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header > <span style={{ fontSize: "18px", fontWeight: "600" }}>Date de naissance</span></Accordion.Header>
                          <Accordion.Body>
                            <Form.Item name={'name'} >
                              {/* <Form.Label className="text-white"></Form.Label> */}
                              <Input className="FormControl2 bnm78" type="text" value={value.toDateString()} disable />
<br></br>
                              <Calendar onChange={onChange} value={value} />

                            </Form.Item>

                          </Accordion.Body>
                        </Accordion.Item>
                        <br></br>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header><span style={{ fontSize: "18px", fontWeight: "600" }}>Heure de la livraison</span></Accordion.Header>
                          <Accordion.Body>
                            <div className='getminuts'>
                              <Stack direction="horizontal" gap={1} className='clockhori'>
                                <div className="p-2"><Input value={value1.getHours()} className='gethour' disable /> </div>
                                <div className="p-"> <span className='mb-3' style={{ fontSize: "50px", marginLeft: "0px" }}> : </span></div>
                                <div className="p-2"> <Input value={value1.getMinutes()} className='gethour1' disable /></div>
                                <div className="p-2 "><span className='gethour9'>Matin </span><br></br><span className='gethour99'>Soir</span></div>

                              </Stack>


                              <br></br>
                              <Clock value={value1} />
                              <br></br>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </Col>
                  <Col sm={3}>
                  </Col>
                </Row>

                <p className='veuill'>Votre livraison aura lieu  <b> mardi 17 octobre 2023</b> à <b>7h00</b>.<br></br>
                  En cas d’absence, la seconde livraison sera à votre charge.</p>
                <Row>
                  <Col sm={12}>
                    <div className='marinputs'>
                      <Button htmlType='submit' className='SUIVANT'>SUIVANT</Button>
                    </div>
                  </Col>
                </Row>



              </Form>
            </div>
          </Col>
          <Col sm={6}>
          <div className='finishcard'>
              <Stack direction="horizontal" gap={3}>
                <div className="p- mt-"> <img src='./image/monpani.jpeg' className='monpaniimg8n' /></div>
                <div className="p- ">
                  Produit 1
                  <p ><b style={{ fontWeight: "600" }}>40,00 €</b></p>
                  <Stack direction="horizontal" gap={3} className='maultipfelx my-4'>
                    <div className="p-">Art. No:<br></br>
                      Couleur :
                    </div>
                    <div className="p-">54637253 <br></br> Violet   </div>
                    <div className="p- mb-4">
                      Taille : 36 <br></br>

                    </div>
                  </Stack>
                  <p>Quantité : 1</p>
                </div>

              </Stack>
              <Stack direction="horizontal" gap={3} className='monpanigap'>
                <div className="p- mt-"> <img src='./image/monpani.jpeg' className='monpaniimg8n' /></div>
                <div className="p- ">
                  Produit 1
                  <p ><b style={{ fontWeight: "600" }}>40,00 €</b></p>
                  <Stack direction="horizontal" gap={3} className='maultipfelx my-4'>
                    <div className="p-">Art. No:<br></br>
                      Couleur :
                    </div>
                    <div className="p-">54637253 <br></br> Violet   </div>
                    <div className="p- mb-4">
                      Taille : 36 <br></br>

                    </div>
                  </Stack>
                  <p>Quantité : 1</p>
                </div>

              </Stack>
              <Stack direction="horizontal" gap={3} >
                <div className="p- mt-"> <img src='./image/monpani.jpeg' className='monpaniimg8n' /></div>
                <div className="p- ">
                  Produit 1
                  <p ><b style={{ fontWeight: "600" }}>40,00 €</b></p>
                  <Stack direction="horizontal" gap={3} className='maultipfelx my-4'>
                    <div className="p-">Art. No:<br></br>
                      Couleur :
                    </div>
                    <div className="p-">54637253 <br></br> Violet   </div>
                    <div className="p- mb-4">
                      Taille : 36 <br></br>

                    </div>
                  </Stack>
                  <p>Quantité : 1</p>
                </div>

              </Stack>
              <br></br>
              <hr></hr>
              <Row>
                <Col sm={6}>

                </Col>
                <Col sm={6}>
                  <Stack direction="horizontal" gap={3} className='maultipfelx my-4'>

                    <div className="p-2">Sous-total :<br></br>
                      Livraison :<br></br><br></br>
                      <b style={{ fontWeight: "600" }}>Total TTC : </b>
                    </div>
                    <div className="p-2">80,00 €<br></br>
                      4,50 €<br></br><br></br>
                      <b style={{ fontWeight: "600" }}>  84,50 € </b>
                    </div>
                  </Stack>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
const PaymentForm = ({ onFinish }) => {
  return (
    <div>
      <Container>
        <Form onFinish={onFinish} method='Post'>
        <Row>
          <Col sm={6}>
        
            <div className='formaidut'>
              <Row>
             
                <Col sm={12}>
                  <div className='marinputs'>
                    <h4 className='Informationss'> your all set</h4>

                    <h4 className='Informationss'> Informations personnelles</h4>
                    <h4 className='Informationss'> Adresse</h4>
                    <h4 className='Informationss'> Livraison</h4>
                    <h4 className='Informationss'> Paiement</h4>
                  </div>
                

                    <div className='marinputs'>
                      <Button htmlType='submit' className='SUIVANT' >PROCÉDER AU PAIEMENT</Button>
                    </div>



           

                </Col>

              </Row>
            </div>
          </Col>
          <Col sm={6}>
          <div className='finishcard'>
              <Stack direction="horizontal" gap={3}>
                <div className="p- mt-"> <img src='./image/monpani.jpeg' className='monpaniimg8n' /></div>
                <div className="p- ">
                  Produit 1
                  <p ><b style={{ fontWeight: "600" }}>40,00 €</b></p>
                  <Stack direction="horizontal" gap={3} className='my-4'>
                    <div className="p-">Art. No:<br></br>
                      Couleur :
                    </div>
                    <div className="p-">54637253 <br></br> Violet   </div>
                    <div className="p- mb-4">
                      Taille : 36 <br></br>

                    </div>
                  </Stack>
                  <p>Quantité : 1</p>
                </div>

              </Stack>
              <Stack direction="horizontal" gap={3} className='monpanigap'>
                <div className="p- mt-"> <img src='./image/monpani.jpeg' className='monpaniimg8n' /></div>
                <div className="p- ">
                  Produit 1
                  <p ><b style={{ fontWeight: "600" }}>40,00 €</b></p>
                  <Stack direction="horizontal" gap={3} className='my-4'>
                    <div className="p-">Art. No:<br></br>
                      Couleur :
                    </div>
                    <div className="p-">54637253 <br></br> Violet   </div>
                    <div className="p- mb-4">
                      Taille : 36 <br></br>

                    </div>
                  </Stack>
                  <p>Quantité : 1</p>
                </div>

              </Stack>
              <Stack direction="horizontal" gap={3} >
                <div className="p- mt-"> <img src='./image/monpani.jpeg' className='monpaniimg8n' /></div>
                <div className="p- ">
                  Produit 1
                  <p ><b style={{ fontWeight: "600" }}>40,00 €</b></p>
                  <Stack direction="horizontal" gap={3} className='my-4'>
                    <div className="p-">Art. No:<br></br>
                      Couleur :
                    </div>
                    <div className="p-">54637253 <br></br> Violet   </div>
                    <div className="p- mb-4">
                      Taille : 36 <br></br>

                    </div>
                  </Stack>
                  <p>Quantité : 1</p>
                </div>

              </Stack>
              <br></br>
              <hr></hr>
              <Row>
                <Col sm={6}>

                </Col>
                <Col sm={6}>
                  <Stack direction="horizontal" gap={3}>

                    <div className="p-2">Sous-total :<br></br>
                      Livraison :<br></br><br></br>
                      <b style={{ fontWeight: "600" }}>Total TTC :</b>
                    </div>
                    <div className="p-2">80,00 €<br></br>
                      4,50 €<br></br><br></br>

                      <b style={{ fontWeight: "600" }}> 84,50 €</b>
                    </div>
                  </Stack>
                </Col>
              </Row>
            </div>
          </Col>
         
        </Row>
        </Form>
      </Container>
    </div>
  )
}
const FinishForm = () => {
  return (
    <div>
      <div className='finishform'>
        <Container>
          <Row>
            <Col sm={12}>
              <div className='marinputs'>
                <p className='text-center'><IoIosCheckmarkCircleOutline className='checkformg' /></p>
                <p className='text-center'>Commande n° 123456789</p>
                <p className='text-center mb-5'>Merci d’avoir choisi Maathena pour votre commande. <br></br>
                  Vous avez cumulé 80 points. Vous allez reçevoir un récapitulatif de votre commande par e-mail.  </p>

                <div className='rowmnk mb-5'>
                  <Row className='mnb'>
                    <Col sm={4}>
                      <div className='colsmj '>
                        <img src='./image/monpani.jpeg' className='monpaniimg8n' />
                        <Stack direction="horizontal" gap={3} className='product78'>
                          <div className="p-2">Produit 1</div>

                          <div className="p-2">40,00 €
                          </div>
                        </Stack>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <img src='./image/monpani.jpeg' className='monpaniimg8n' />
                      <Stack direction="horizontal" gap={3} className='product78'>
                        <div className="p-2">Produit 1</div>

                        <div className="p-2">40,00 €
                        </div>
                      </Stack>
                    </Col>
                    <Col sm={4}>
                      <img src='./image/monpani.jpeg' className='monpaniimg8n' />
                      <Stack direction="horizontal" gap={3} className='product78'>
                        <div className="p-2">Produit 1</div>

                        <div className="p-2">40,00 €
                        </div>
                      </Stack>
                    </Col>
                  </Row>
                </div>
                <Button className='CONTINUER mb-5'>
                  CONTINUER MES ACHATS
                </Button>
                <p className='text-center'><a href='#' style={{ textDecoration: "block", color: "white", fontSize: "20px" }}>Imprimer un reçu</a></p>
              </div>


            </Col>
         </Row>
        </Container>
      </div>
    </div>
  )
}
export default Testing
