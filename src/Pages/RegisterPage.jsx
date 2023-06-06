import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/ghujju-logo.png';
import jwt_decode from 'jwt-decode';
import '../CssFiles/RegisterPage.css';

const RegisterPage = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({})

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    navigate('/dashboard');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  }

  const handleSignin = (e) => {
    e.preventDefault();
    navigate('/');
  }

  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id: "736777987895-0eokhg661p84v5f59tk2fd7prs1fs1el.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signin-buttons2"),
      { theme: "outline", size: "large", }
    );
    google.accounts.id.prompt();

  }, []);


  return (
    <div className='main-div'>
      <div className='left-div'>
        <img src={Logo} alt='logo' />
      </div>

      <div className='right-div'>
        <div className='signin2'>
          <h1>Register</h1>
          <p>Create your new account</p>
        </div>

        <div id='signin-buttons2'>
        </div>

        <div className='form2'>
          <form onSubmit={handleSubmit}>
          <div className='form-details'>
            <div className='firstName'>
              <p>First Name</p>
              <input type='text' />
            </div>
            <div className='lastName'>
              <p>Last Name</p>
              <input type='text' />
            </div>
          </div>
          
          <div className='email-password'>
            <p>Email address</p>
            <input type='email' />
            <p>Password</p>
            <input type='password' />
          </div>
            
            <p><span>Forgot password?</span></p>

            <div className='button2'>
              <button type='submit'>Sign in</button>
            </div>
          </form>
        </div>

        <div className='register2'>
          <p>Already have an account? <span onClick={handleSignin}>Sign in</span></p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage