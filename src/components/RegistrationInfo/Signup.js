import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import google from "../../assets/google.png";
import github from "../../assets/github.png";
import { AuthContext } from "../UserContext/UserContext";

const Signup = () => {
  const {
    user,
  
    signinGithub,
    signup,
   
    signIngoogle,
    updateUserProfile
  } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;
    // create user
    signup(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();

        // update user name and photoURL
        updateUserProfile(name,photoURL)
          .then(() => {})
          .catch((error) => error.message);
      })
      .catch((error) => error.message);
  };

  //   signIngoogle

  const handleSigninGoogle = () => {
    signIngoogle()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // gihub signin
  const handleSignGithub = () => {
    signinGithub().then(() => {});
  };
  
  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className="  border border-light m-auto shadow-lg p-2 "
        style={{ maxWidth: "480px" }}
      >
        <h3 className="text-center mb-5 pt-4">Please Register now! </h3>
        <Form.Group className="mb-3 " controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your full name"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicPhoto">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="text" name="photo" placeholder="PhotoURL"/>
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <p>
          already have an account ?
          <Link to="/login" className="ms-2">
            login
          </Link>
        </p>

        <div className='d-flex align-items-center justify-content-center'>
      <hr className='w-25  me-2'/>
       <p className='text-center fs-1'>or</p>
       <hr className='w-25 ms-2'/>
      </div>
        <div className="d-flex justify-content-evenly  align-items-center mt-5">
          <button onClick={handleSigninGoogle} className="border border-secondary rounded px-3">
            <img src={google} alt="" style={{ height: "40px" }} />
            Google
          </button>
          <button onClick={handleSignGithub} className="border border-secondary rounded px-3">
            <img src={github} style={{ height: "40px" }} alt="" />
            Github
          </button>
         
        </div>
        <Button
          variant="primary"
          type="submit"
          className=" w-50 p-2 mt-5"
          style={{ marginLeft: "120px" }}
        >
          SignUp
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
