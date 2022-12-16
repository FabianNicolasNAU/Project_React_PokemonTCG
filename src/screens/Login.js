//import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../App.css';

function Login() {
  return (
    <> 
      <Form style={{paddingTop:'12rem', margin: '0 auto' }}>
        <h1 className="text-center">Sus</h1>
        <br />
        <Row>
          <Form.Label className="text-end" column lg={4}>
            Nombre de usuario
          </Form.Label>
          <Col column lg={5}>
            <Form.Control type="text" placeholder="Username" />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label className="text-end" column lg={4}>
            Contraseña
          </Form.Label>
          <Col column lg={5}>
            <Form.Control type="text" placeholder="Password" />
          </Col>
        </Row>
      </Form>
    </>
  );
}
export default Login