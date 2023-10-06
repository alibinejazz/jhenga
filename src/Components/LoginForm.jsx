import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");

  const nav = useNavigate();

  function logInSuccess(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then((usercred) => {
        console.log(usercred);
        localStorage.setItem("email", usercred.user.email);
        setError(null);
        nav("/blvk");
      })
      .catch((error) => {
        console.log(error);
        setError("Wrong credentials. Please check your email and password.");
      });
  }

  function getByGoogle() {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        nav("/blvk");
      })
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          console.log("Google sign-in popup was closed by the user.");
        } else {
          console.error(error);
        }
      });
  }

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div className="myContainer">
      <div className="logintextarea">
        Welcome to the world of jhenga, lets have some adventures.
      </div>
      <div className="LoginPage">
        <form className="formm" onSubmit={logInSuccess}>
          <h1>Login Here</h1>
          <label htmlFor="email">Email</label>
          <input
            className="login-inp"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />

          <label htmlFor="password">Password</label>
          <input
            className="login-inp"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            id="password"
          />
          <button type="submit" className="loginbutt">
            Login
          </button>

          {error && <p className="error">{error}</p>}

          <div>
            if you're not already signed up,
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              Signup here!{" "}
            </Link>
          </div>
          <div className="GoogleSignInButton">
            <button
              type="button"
              className="google-signin-button"
              onClick={getByGoogle}
            >
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
