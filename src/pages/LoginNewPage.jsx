import React, { useEffect, useState } from 'react'
import '../css/Login.new.css'
import logo from '../icons/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios  from "../Axios"
import Spinner from '../components/LoadingSpinner';

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

      const res = await axios.post('/web/public/login', payload);

      if(res.data.statusCode === 1000){
        setIsLoading(false);
        setMobile("");
        setPassword("");
        

        setTimeout(() => {

          // Save token
          localStorage.setItem("token", res.data.data.auth.token);
          navigate("/p2p-market");
        }, 1000);

      }else {
        setIsLoading(false);
        setPassword("");
        
      }

    }catch(err){
      setIsLoading(false);
      
    }

  }

  useEffect(()=>{
    
    const token = localStorage.getItem('token');

    if(token) {
      navigate("/");
    }

  }, [navigate])

return (
  <>
    {(isLoading) && (
      <Spinner/>
    )}
    
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
