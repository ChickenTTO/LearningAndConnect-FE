import React from "react";
import "./signUp.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="dashboard">
        <div className="content-dashboard">
          <h1>Sign-up</h1>

          <div className="input-login">
            <div className="input-login-user">
              <input type="text" className="user" placeholder="Username" />
              <FaUser></FaUser>
            </div>
            <div className="input-login-user">
              <input type="text" className="user" placeholder="Email Address" />
              <FaEnvelope></FaEnvelope>
            </div>

            <div className="input-login-pass">
              <input type="password" className="pass" placeholder="Password" />
              <FaLock></FaLock>
            </div>
            <div className="input-login-pass">
              <input
                type="password"
                className="pass"
                placeholder="Confirm Password"
              />
              <FaLock></FaLock>
            </div>
          </div>

          <div className="button-login">
            <button>Sign Up</button>
          </div>
          <div className="no-account">
            <p>
              Already have an account? <span onClick={() => navigate('/')}>Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
