//import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';


function Login() {
  return (
    <div style={{paddingTop:'11rem'}} > 
      <Card style={{ width: '40rem' , minHeight: '18rem', maxHeight:'24rem' , margin: '0 auto'  }}>
        <Card.Body>
          <Form >
            <h1 className="text-center">Iniciar Sesión</h1>
            <br />
            <Row>
              <Form.Label className="text-start" column lg={4}>
                Nombre de usuario
              </Form.Label>
              <Col column lg={5}>
                <Form.Control type="text" placeholder="Username" />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label className="text-start" column lg={4}>
                Contraseña
              </Form.Label>
              <Col column lg={5}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
              </Col>
              <Col>
                <Button color="primary" className="px-4" onClick={() => window.location.href="http://localhost:3000/"}>
                  Login
                </Button>
              </Col>
              <Col>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Login