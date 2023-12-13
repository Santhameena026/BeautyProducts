import React from 'react'
import './signup.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Signup = () => {
  return (
    <section className='sign' id='signup'>
    <Container>
    <Row className='justify-content-center align-items-center'>
        <Col md={4}>
         <Form className='my-5 p-4 signupform'>
             <h2 className='text-center pt-2'>Sign Up</h2>
             <Form.Group className="mb-3" controlId="formGroupEmail">
             <Form.Label>Name</Form.Label>
             <Form.Control type="text" placeholder="Name" className='input' />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formGroupEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Email" className='input'/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formGroupPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Password" className='input' />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formGroupPassword">
             <Form.Label> Confirm Password</Form.Label>
             <Form.Control type="password" placeholder="Confirm Password" className='input' />
             </Form.Group>
             <div className='text-center'><Button className='mb-3  px-3 mt-2 signbtn'>Sign Up</Button></div>
         </Form>
       </Col>
    </Row>
    </Container>
    </section>
  )
}

export default Signup