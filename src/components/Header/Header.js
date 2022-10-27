import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { toast } from "react-toastify";
import { AuthContext } from "../UserContext/UserContext";
import code from '../../assets/code.jpg'
import { Image } from "react-bootstrap";
import {FaUser} from 'react-icons/fa';

const Header = () => {
  const {user,logOut}=useContext(AuthContext)
  // const [photo,setPhoto,]=useState(user.photoURL)
   // signout
 const handleLogout=()=>{
  logOut()
  .then(toast.warning('user logged out'))
  .catch(error=>console.log(error))
 }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="">
        <Container>
        <div className="d-flex justify-content-center align-items-center">
        <img src={code} alt="" style={{width:'60px',marginRight:'5px', borderRadius:'100px'}} />
          <Navbar.Brand style={{fontSize:'45px'}}>ProCode</Navbar.Brand>
        </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/course">Courses</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>

              <NavDropdown title="Toggle Theme" id="collasible-nav-dropdown">
                <NavDropdown.Item>light</NavDropdown.Item>
                <NavDropdown.Item>dark</NavDropdown.Item>
              </NavDropdown>
              {
                user?.email? <Nav.Link onClick={handleLogout}>Logout</Nav.Link>: <Nav.Link href="/login">Login</Nav.Link>
                

              }
           <Nav.Link>
            {
              user?
              <Image style={{height:'30px'}}
              roundedCircle
              src={user?.photoURL}>

              </Image>:<FaUser></FaUser>
            }
           </Nav.Link>
            </Nav>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
