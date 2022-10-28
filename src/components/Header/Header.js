import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { toast } from "react-toastify";
import { AuthContext } from "../UserContext/UserContext";
import code from "../../assets/code.jpg";
import { Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // logout
  const handleLogout = () => {
    logOut()
      .then(toast.warning("user logged out"))
      .catch((error) => console.log(error));
  };

  //  toggle
  const [toggle, setToggle] = useState("light");
  const handleToggle = () => {
    if (toggle) {
      setToggle("dark");
    } else {
      setToggle(toggle);
    }
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="mx-auto mb-5"
      >
        <Container>
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={code}
              alt=""
              style={{
                width: "60px",
                marginRight: "5px",
                borderRadius: "100px",
              }}
            />
            <Navbar.Brand style={{ fontSize: "42px" }}>ProCode</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-5 pe-5">
              <Nav.Link href="/course">Courses</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="" onClick={handleToggle}>
                {toggle}
              </Nav.Link>

              {user?.email ? (
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
              <Nav.Link>
                {user?.photoURL ? (
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
