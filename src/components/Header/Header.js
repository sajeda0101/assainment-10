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
  const {user,logOut}=useContext(AuthContext);
  const [name,setName]=useState(false);
  const onHover=()=>{
    setName(!name)
  }
  
 const handleLogout=()=>{
  logOut()
  .then(toast.warning('user logged out'))
  .catch(error=>console.log(error))
 }
 const [toggle,setToggle]=useState(true)
const handleToggle=()=>{
  if(!true){
    setToggle("light")
  }
  
   
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
              <Nav.Link href="/course">Courses</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="" onClick={handleToggle}>dark</Nav.Link>

             
              {
                user?.email? <Nav.Link onClick={handleLogout}>Logout</Nav.Link>: <Nav.Link href="/login">Login</Nav.Link>
                

              }
           <Nav.Link>
            {
              user?.photoURL?
              <Image style={{height:'30px'}}
              roundedCircle
              src={user?.photoURL}
              >

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
