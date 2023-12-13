import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contact.css';
import { FaPhoneAlt} from 'react-icons/fa';
import { FiMail} from 'react-icons/fi';

const Contact = () => {
  return (
    <section className='contact' id='contact us'>
    <Container fluid>
        <Row>
            <h3 className='text-center pb-4'>Contact Us</h3>
            <Col sm={12} lg={4} md={4}>
             <p className='h5 text-center'>HOURS OF OPERATION</p>
             <p className='text-center'>9.00 to 17.00, Mon-Fri(Excluding Holidays)</p>
            </Col>
            <Col sm={12} lg={4} md={4}>
             <p className='h5 text-center'>PHONE</p>
             <p className='text-center'><u><span className='fontphone'><FaPhoneAlt/></span>+91 XXXXXXXXXX</u></p>
            </Col>
            <Col sm={12} lg={4} md={4}>
             <p className='h5 text-center'>GENERAL INQUIRIES</p>
             <p className='text-center'><span className='fontmail'><FiMail/></span>beautifly@gmail.com</p>
            </Col>

        </Row>
        <Row>
            
            <p className='text-center pt-3'>Our customer service team is waiting to assist you</p>
            <p className='text-center'>Please allow up to 2-Business days response time in order for
                us to fully address your inquiries.
            </p>
            <p className='text-center'>You can also check your <span style={{color:"blue", textDecoration:"underline",fontSize:"17px"}} className='order'>order status </span>through our website</p>
        </Row>
    </Container>
    </section> 
  )
}

export default Contact