import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png'
import github from '../../assets/github.png'
import { AuthContext } from '../UserContext/UserContext';
import { toast } from 'react-toastify';

const Login = () => {
  const {user,signinGithub,signin,signIngoogle } = useContext(AuthContext);
  const [userEmail,setUserEmail]=useState('');
  const navigate=useNavigate();
  const location=useLocation()
  const from=location.state?.from?.pathname || '/'
  const [error,setError]=useState(false)
 
  
  const handleSubmit=(e)=>{

    e.preventDefault();
    const form=e.target;
    
    const email=form.email.value;
    const password=form.password.value;

   
      
       signin(email,password)
       .then(result=>{
        console.log(result.user)
        navigate(from,{replace:true})
        toast.success('Successfully Login')
        form.reset();
      
      
       })
       .catch(error=>toast.error("please create acount first"))
      }

//   signIngoogle

const handleSigninGoogle=()=>{
    signIngoogle()
    .then(()=>{})
    .catch(error=>console.log(error))
}

// gihub signin
const handleSignGithub=()=>{
    signinGithub()
    .then(()=>{})
}


    return (
        <Form onSubmit={handleSubmit} className='  border border-light m-auto shadow-lg p-2 ' style={{maxWidth:'480px'}}>
            <h3 className='text-center mb-5 pt-4'>Please Login! </h3>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
       <div className='d-flex justify-content-between mx-3'>
       <Link to='/signup'><p>Create a new acount </p>
       </Link>
        <p ><button className="border-0 bg-white underline">
          forget password?</button></p>
       </div>
       <div className='d-flex align-items-center justify-content-center'>
      <hr className='w-25  me-2'/>
       <p className='text-center fs-1'>or</p>
       <hr className='w-25 ms-2'/>
      </div>
       <div className='d-flex justify-content-evenly  align-items-center mt-5'>
       <button onClick={handleSigninGoogle} className="border border-secondary rounded px-3">
        <img src={google} alt="" style={{height:'40px'}}/>
       Google</button>
       
        <button onClick={handleSignGithub} className="border border-secondary rounded px-3">
            <img src={github} style={{ height: "40px" }} alt="" />
            Github
          </button>
         <p>{error}</p>

       </div>
        <Button variant="primary" type="submit" className=' w-50 p-2 mt-5' style={{marginLeft:'120px'}}>
          Login
        </Button>
       
      </Form>
    );
};

export default Login;