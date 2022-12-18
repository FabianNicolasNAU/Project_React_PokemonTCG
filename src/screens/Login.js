import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import '../App.css';
import { Link, Redirect } from 'react-router-dom'

function Login({autorizado}) {
  const [show, setShow] = useState(false);

  const [user, setUser] = useState(null)

  const [pass, setPass] = useState(null)
  const handleSubmit = () => {
    const loginPass = {
      usuario: 'sus',
      password: 'sus123'
    }
  
    if(user === loginPass.usuario && pass === loginPass.password){
      const token  =  "5d2272df-24bd-4cdc-a681-4c8ae7722c85";
        localStorage.setItem("auth", token);
    }
    else{
      !show && setShow(true)
    }
  };
  if(autorizado){
    return <Redirect to="/"/>
  }
  return (
    <>
      <div className="bkgd-login" style={{paddingTop:'11vh'}} > 
        <Card style={{ width: '40rem' , minHeight: '18rem', maxHeight:'24rem', margin: '0 auto'}}>
          <Card.Body >
            <Form >
              <h1 className="text-center">Iniciar Sesión</h1>
              <br />
              <Row >
                <Form.Label className="text-start" column lg={4}>
                  Nombre de usuario
                </Form.Label>
                <Col column lg={5}>
                  <Form.Control type="text" placeholder="Username" onChange={(event) => setUser(event.target.value)} />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label className="text-start" column lg={4}>
                  Contraseña
                </Form.Label>
                <Col column lg={5}>
                  <Form.Control type="password" placeholder="Password" onChange={(event) => setPass(event.target.value)} />
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={{ span: 4, offset: 4 }}>
                  <Button type="submit" color="primary" className="px-4" onClick={()=>{handleSubmit()}}>Login<Link to="/"></Link>
                  </Button>
                </Col>
                <Col md={{ span: 1, offset: 2 }}>
                  <img src="https://media.tenor.com/fPy5h_wW5IQAAAAi/torchic-pokemon.gif" style={{width:'6vh'}}></img>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <br />
          <Row>
            <Col column lg={4}>
            </Col>
            <Col column lg={4}>
              <Alert show={show} variant="success" className="text-start">
                <Alert.Heading>Error en el Usuario o Contraseña</Alert.Heading>
                <div className="d-flex justify-content-end">
                  <Button onClick={() => setShow(false)} variant="outline-success">
                    Close
                  </Button>
                </div>
              </Alert>
            </Col>
          </Row>
          <div style={{paddingTop:'50.7vh'}} > </div>
      </div>
      
    </>
  );
}
export default Login