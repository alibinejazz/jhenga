import React, { useEffect, useState } from 'react';
import "./LoginForm.css";
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const LoginForm = () => {
    const [email, setEmail ] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(null); // State to hold error message
    const [value, setValue] = useState('');

    function logInSuccess(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
        .then((usercred)=> {
            console.log(usercred);
            setError(null); // Clear any previous errors
        })
        .catch((error)=> {
            console.log(error);
            setError("Wrong credentials. Please check your email and password."); // Set error message
        });
    }

   function getByGoogle(){
        signInWithPopup(auth,provider).then((data)=> {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(()=> {
        setValue(localStorage.getItem("email"))
    })

    return (
        <div className='myContainer'>
            <div className='LoginPage'>
                <form className='formm' onSubmit={logInSuccess}>
                    <h1>Login Here</h1>
                    <label htmlFor="email">Email</label>
                    <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} id='email'/>
                
                    <label htmlFor="password">Password</label>
                    <input type='password' value={pass} onChange={(e)=> setPass(e.target.value)} id='password'/>
                    <button type="submit">Login</button>

                    {error && <p className="error">{error}</p>} {/* Render error message if error state is not null */}
                    
                    <div> if you're not already signed up, <span><Link to="/signup"> Signup here! </Link></span></div>
                    <div className='GoogleSignInButton'>
                {/* This button should have the same styling as the login button */}
                <button type="button" className="google-signin-button" onClick={getByGoogle}>Sign in with Google</button>
            </div>
                </form>
            </div>
            
        </div>
    )
}

export default LoginForm;
