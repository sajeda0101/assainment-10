import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import google from '../../assents/google.png'
import github from '../../assents/github.png'
import facebook from '../../assents/facebook.png'

const Signup = () => {
    return (
        <div>
             <Form className='  border border-light m-auto shadow-lg p-2 ' style={{maxWidth:'480px'}}>
            <h3 className='text-center mb-5 pt-4'>Please Register now! </h3>
        <Form.Group className="mb-3 " controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
         
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
       <p>already had a account ?<Link to='/login' className='ms-2'>login
       </Link> </p>
      
       <p className='text-center fs-4'>or</p>
       <hr className='w-50 m-auto'/>
       <div className='d-flex justify-content-evenly  align-items-center mt-5'>
       <p>
        <img src={google} alt="" style={{height:'40px'}}/>
       Google</p>
       <p>
        <img src={github} style={{height:'40px'}} alt="" />
        Github</p>
       <p>
        <img src={facebook} style={{height:'40px'}} alt="" />
        Facebook</p>

       </div>
        <Button variant="primary" type="submit" className=' w-50 p-2 mt-5' style={{marginLeft:'120px'}}>
          Login
        </Button>
      </Form>
        </div>
    );
};

export default Signup;