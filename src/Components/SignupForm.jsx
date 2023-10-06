import React, { useState } from "react";
import "./SignupForm.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function signUpSuccess(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((usercred) => {
        console.log(usercred);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="myContainer">
      <div className="signuptextarea">
        Come on in, there's so much fun waiting for you.
      </div>
      <div className="SignupPage">
        <form className="formm" onSubmit={signUpSuccess}>
          <h1>Signup Here</h1>
          <label htmlFor="email">Email</label>
          <input
            className="signup-inp"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />

          <label htmlFor="password">Password</label>
          <input
            className="signup-inp"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            id="password"
          />
          <button type="submit" className="signupbutt">
            Signup
          </button>
          <div>
            if you have already signed up,
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              Login here !
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
