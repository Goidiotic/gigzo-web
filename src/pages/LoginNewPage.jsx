import React, { useEffect, useState } from 'react'
import '../css/Global.css';
import '../css/new/Login.new.css'
import logo from '../icons/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios2  from "../Axios2"
import Spinner from '../components/LoadingSpinner';
import PopupMessage from '../components/PopupMessage';

export default function Login() {

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [popupMessage, setPopupMessage] = useState("");

  const validateInputs = ()=>{

    //1. Mobile Number Check
    const mobileRegex = /^[0-9]{10}$/;
    if(!mobileRegex.test(mobile)){
      setPopupMessage("Please enter a valid mobile number.");
      return false;
    }

    return true;

  }

  const loginHandler = async ()=>{

    //Return if input validation false
    if(!validateInputs()){
      return;
    }

    try{
      setIsLoading(true);
      const payload = {mobile, password}

      //console.log(data);

      const res = await axios2.post('/web/public/login', payload);

      if(res.data.statusCode === 1000){
        setIsLoading(false);
        setMobile("");
        setPassword("");
        setPopupMessage("Login success.");

        setTimeout(() => {

          // Save token
          localStorage.setItem("token", res.data.data.auth.token);
          navigate("/wallet");
        }, 1000);

      }else {
        setIsLoading(false);
        setPassword("");
        setPopupMessage("We are unable to precess your request. 001");
      }

    }catch(err){
      setIsLoading(false);
      setPopupMessage("Sorry, we are unable to precess your request.");
    }

  }

  useEffect(()=>{
    
    const token = localStorage.getItem('token');

    if(token) {
      navigate("/p2p-market");
    }

  }, [navigate])

return (
  <>
    {(isLoading) && (
      <Spinner/>
    )}
    <PopupMessage message={popupMessage} onClose={()=>{setPopupMessage('')}} />
    <div className="exchange-login-wrapper">
      <div className="exchange-login-card">

        <div className="exchange-logo">
          <img src={logo} alt="ioxExchange" />
        </div>

        <h2 className="exchange-title">Welcome Back</h2>
        <p className="exchange-subtitle">
          Login to continue trading securely
        </p>

        <div className="exchange-form">
          <label>Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="exchange-btn-primary" onClick={loginHandler}>
            Login
          </button>
        </div>

        <div className="exchange-footer">
          <Link to="/forgot-password">Forgot password?</Link>

          <div className="divider">
            <span>OR</span>
          </div>

          <Link to="/register" className="exchange-btn-secondary">
            Create Account
          </Link>
        </div>

        <div className="exchange-security">
          🔒 Secured by blockchain-grade encryption
        </div>

      </div>
    </div>
    </>
  );
}
