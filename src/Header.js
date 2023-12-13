import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
import { FaRegFaceSmileBeam} from "react-icons/fa6";


const Header = () => {
  return (
    
    <Navbar  className='fixed-top' expand="lg" style={{backgroundColor:" rgb(103, 94, 94)"}} >
      <Container>
        <Navbar.Brand className='text my-auto ' ><span className='logo'><FaRegFaceSmileBeam/></span>Beautifly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5 my-auto ">
            <Nav.Link className='text-light ms-5 fs-5 link ' href="#home">Home</Nav.Link>
            <Nav.Link className='text-light ms-5 fs-5 link' href="#about us">About Us</Nav.Link>
            <Nav.Link className='text-light ms-5 fs-5 link' href="#menu">Menu</Nav.Link>
            <Nav.Link className='text-light ms-5 fs-5 link' href="#contact us">Contact Us</Nav.Link>
            <Nav.Link className='text-light ms-5 fs-5 link signupbtn' href="#signup">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Header