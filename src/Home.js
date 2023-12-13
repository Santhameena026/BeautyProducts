import React from 'react'
import './Home.css';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
<section  id='home' >
  <Container fluid className='my-4'>
    <Row className='justify-content-center align-items-center '>
      <Col lg={10} className='my-4'>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img 
              className='d-block w-100 '
              src={require('./carone.webp')}
              alt="First Slide"
            />  
          </Carousel.Item>
         <Carousel.Item interval={1000}>
            <img 
              className='d-block w-100 '
              src={require('./cartwo.webp')}
              alt="First Slide"
            />
         </Carousel.Item>
         <Carousel.Item interval={1000}>
           <img 
              className='d-block w-100'
              src={require('./carothree.webp')}
              alt="First Slide"
            />  
          </Carousel.Item>
       </Carousel>   
     </Col>
  </Row>
      
 </Container>  
      
       
           
  </section>
  )
}

export default Home