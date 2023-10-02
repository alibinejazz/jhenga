import React from 'react';
import "./SignupForm.css";
import { Link } from 'react-router-dom';

const SignupForm = () => {
  return (
    <div className='myContainer'>
        <div className='SignupPage'>
            <form className='formm'>
                <label for="email"> Email</label>
                    <input type='text' value="a" id='email'/>
                
                <label for="password"> Password</label>
                    <input type='password' value="p" id='password'/>
                <button type="submit">Signup</button>
                <div>if you have already signed up, <span> <Link to='/'> Login here !</Link></span></div>
            </form>
        </div>
    </div>
  )
}

export default SignupForm
