import React from 'react'
import './aboutus.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const Aboutus = () => {
  return (
    <section className='about' id='about us'>
        <Container>
                <p className='h1 text-center abouttext'>About Us</p>
                <Row className='justify-content-center'>
                <Col sm={8} md={4} lg={6}>
                <Image src={require('./aboutus.jpg')} fluid/>
                </Col>
                </Row>
                <p className='fs-6 pt-3'>They feature more than 200 brands with over 2000 products including makeup, 
                bath and body care products, beauty accessories and luxury products for men and women. 
                Their products are genuine and 100% authentic and have got even beauty experts obsessed with it.</p>
                <p className='fs-6'>You can find a wide range of national and international makeup, bath kits and beauty accessories on the website,
                 just everything you need to get that perfect beauty routine. 
                 It stores products from MUA, Accesorize, L’oreal, lakme, Calvin Klein and many other well known brands</p>
            
        </Container>
       
    </section>
  )
}

export default Aboutus