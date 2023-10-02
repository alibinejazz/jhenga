import React from 'react';
import "./LoginForm.css";
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className='myContainer'>
        <div className='LoginPage'>
            <form className='formm'>
                <label htmlFor="email">Email</label>
                    <input type='text' value="a" id='email'/>
                
                <label htmlFor="password">Password</label>
                    <input type='password' value="p" id='password'/>
                <button type="submit">Login</button>
               <div> if you're not already signed up, <span><Link to="/signup"> Signup here! </Link></span></div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm
