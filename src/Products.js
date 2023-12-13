import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { FaPaintBrush} from 'react-icons/fa';
import { BsFillCartPlusFill } from "react-icons/bs";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './products.css';
import { FaStar,FaStarHalfAlt } from "react-icons/fa";

const Products = () => {
  return (
   <section id="menu" style={{backgroundColor:"rgba(239, 39, 145,0.5)"}}>
      <Container className='my-4'>
         <div className='text-center  py-3'>
           <h3>Our Beauty Products <FaPaintBrush/></h3>
           
         </div>
         <div>
            <Row>
                <Col md={4} lg={4} style={{display:"flex",justifyContent:"center"}}>
                   <Card className='m-3 card' style={{width:"350px"}}>
                   <Card.Img variant="top" src={require('./brushes.webp')} />
                   <Card.Body>
                   <Card.Title>Face Pack Brushes<div className='star'><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></div></Card.Title>
                   <Card.Text>
                   Peach Professional Face And Eye Makeup Brushes Set With 6 Makeup Brushes and bleach brushes
                   </Card.Text>
                   <div className="text-center">
                   <Button className="btn addcart" variant="primary"><span className='brush'><BsFillCartPlusFill/></span>Add To Cart</Button>
                   </div>
                   </Card.Body>
                   </Card>
                </Col>

                <Col md={4} lg={4} style={{display:"flex",justifyContent:"center"}}>
                   <Card className='m-3 card'style={{width:"350px"}}>
                   <Card.Img variant="top" src={require('./lipstick.webp')} />
                   <Card.Body>
                   <Card.Title>Lipstick kit<div className='star'><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></div></Card.Title>
                   <Card.Text>
                   Just Herbs Ayurvedic Liquid Lipstick Kit Set Of 5 With Long Lasting, Hydrating & Lightweight
                   </Card.Text>
                   <div className="text-center">
                   <Button className="btn addcart" variant="primary"><span className='brush'><BsFillCartPlusFill/></span>Add To Cart</Button>
                   </div>
                   </Card.Body>
                   </Card>
                </Col>

                <Col md={4} lg={4} style={{display:"flex",justifyContent:"center"}}>
                   <Card className='m-3 card' style={{width:"350px"}}>
                   <Card.Img variant="top" src={require('./eyemakeup.png')} />
                   <Card.Body>
                   <Card.Title>Eye Makeup Kit<div className='star'><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></div></Card.Title>
                   <Card.Text>
                   SUGAR Cosmetics Festive Ready Makeup Kit | Lipstick, Mascara, Kajal, Face Palette | Gift Set 
                   </Card.Text>
                   <div className="text-center">
                   <Button className="btn addcart" variant="primary"><span className='brush'><BsFillCartPlusFill/></span>Add To Cart</Button>
                   </div>
                   </Card.Body>
                   </Card>
                </Col>
              </Row>


              <Row>
                <Col md={4} lg={4} style={{display:"flex",justifyContent:"center"}} >
                   <Card className='m-3 card' style={{width:"350px"}}>
                   <Card.Img variant="top" src={require('./eyeshadow.jpeg')} />
                   <Card.Body>
                   <Card.Title>Eye Shadow<div className='star'><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></div></Card.Title>
                   <Card.Text>
                   Pretty Duo Pastel Nude Eyeshadow Palette| Nude and Glitter Shades| Nude Eye Shadow For Women 
                   </Card.Text>
                   <div className="text-center">
                   <Button className="btn addcart" variant="primary"><span className='brush'><BsFillCartPlusFill/></span>Add To Cart</Button>
                   </div>
                   </Card.Body>
                   </Card>
                </Col>

                <Col md={4} lg={4} style={{display:"flex",justifyContent:"center"}}>
                   <Card className='m-3 card' style={{width:"350px"}}>
                   <Card.Img variant="top" src={require('./compactpow.webp')} />
                   <Card.Body>
                   <Card.Title>Compact<div className='star'><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></div></Card.Title>
                   <Card.Text>
                   Maybelline New York Oil Control Powder, With SPF to Protect Skin from Sun, Absorbs Oil, Fit Me
                   </Card.Text>
                   <div className="text-center">
                   <Button className="btn addcart" variant="primary"><span className='brush'><BsFillCartPlusFill/></span>Add To Cart</Button>
                   </div>
                   </Card.Body>
                   </Card>
                </Col>

                <Col md={4} lg={4} style={{display:"flex",justifyContent:"center"}}>
                   <Card className='m-3 card' style={{width:"350px"}}>
                   <Card.Img variant="top" src={require('./nailpolishes.jpg')} />
                   <Card.Body>
                   <Card.Title>Nail polish<div className='star'><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></div></Card.Title>
                   <Card.Text>
                   JUICE Quick-dry, 100% Veg & Cruelty Free Nail Paint I Long Lasting, Chip Resistant, Nail Polish
                   </Card.Text>
                   <div className="text-center">
                   <Button className="btn addcart" variant="primary"><span className='brush'><BsFillCartPlusFill/></span>Add To Cart</Button>
                   </div>
                   </Card.Body>
                   </Card>
                </Col>
              </Row>

         </div>
      </Container>
   </section>
  )
}

export default Products