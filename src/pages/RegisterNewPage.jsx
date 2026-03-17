import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../Axios2";

import "../css/new/Register.new.css";
import logo from "../icons/logo.png";

import PopupMessage from "../components/PopupMessage";
import Spinner from "../components/LoadingSpinner";

export default function Register() {

  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referral, setReferral] = useState("");

  const [isOTPSent, setIsOTPSent] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [authState, setAuthState] = useState(0);
  const [sessionId, setSessionId] = useState("");

  const [popupMessage, setPopupMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [countdown, setCountdown] = useState(0);

  const mobileRegex = /^[0-9]{10}$/;

  /* SEND OTP */
  const handleSendOTP = async () => {

    if (!mobileRegex.test(mobile)) {
      setPopupMessage("❌ Enter valid 10 digit mobile number");
      return;
    }

    try {

      setIsLoading(true);

      const res = await axios.post("/web/public/register-otp", { mobile });

      setPopupMessage(res.data.message);

      // OTP sent successfully
      if (res.data.statusCode === 1000) {

        setIsOTPSent(true);
        setCountdown(60);
        setAuthState(1);
        setSessionId(res.data.data.sessionId);

        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

      }

    } catch (err) {

      setPopupMessage(
        err?.response?.data?.message || "Failed to send OTP"
      );

    } finally {
      setIsLoading(false);
    }
  };

  /* VERIFY OTP */
  const handleVerifyOTP = async () => {

    if (!otp) {
      setPopupMessage("❌ Enter OTP");
      return;
    }

    try {

      setIsLoading(true);

      const res = await axios.post("/web/public/verify-register-otp", {
        mobile,
        otp,
        sessionId
      });

      setPopupMessage(res.data.message);

      if (res.data.statusCode === 1000) {
        setMobileVerified(true);
        setIsOTPSent(true);
        setAuthState(2);
      }

    } catch (err) {

      setPopupMessage(
        err?.response?.data?.message || "OTP verification failed"
      );

    } finally {
      setIsLoading(false);
    }
  };

  /* REGISTER */
  const handleRegister = async () => {

    if (!mobileVerified) {
      setPopupMessage("❌ Please verify mobile first");
      return;
    }

    if (!password || password.length < 8) {
      setPopupMessage("❌ Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      setPopupMessage("❌ Passwords do not match");
      return;
    }

    try {

      setIsLoading(true);

      const res = await axios.post("/web/public/create-account", {
        mobile,
        password,
        sessionId
      });

      setPopupMessage(res.data.message);

      if (res.data.statusCode === 1000) {

        localStorage.setItem("token", res.data.data.auth.token);
        setTimeout(() => {
          navigate("/dashboard-new");
        }, 2000);

      }

    } catch (err) {

      setPopupMessage(
        err?.response?.data?.message || "Registration failed"
      );

    } finally {
      setIsLoading(false);
    }
  };

  const handleInit = async()=>{
    const res = await axios.post("/web/public/init", {abc: "A"});
  }

    useEffect(()=>{
      
      const token = localStorage.getItem('token');
  
      if(token) {
        navigate("/p2p-market");
      }
  
    }, [navigate])

  return (
    <div className="exchange-register-wrapper">

      {isLoading && <Spinner />}
      <PopupMessage
        message={popupMessage}
        onClose={() => setPopupMessage("")}
      />

      <div className="exchange-register-card">

        <div className="exchange-logo">
          <img src={logo} alt="ioxExchange" />
        </div>

        <h2 className="exchange-title">Create Account</h2>
        <p className="exchange-subtitle">
          Join ioxExchange & start trading securely
        </p>

        <div className="exchange-form">

          {/* MOBILE */}
          <label>Mobile Number</label>
          <input type="tel" placeholder="Enter mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} disabled={mobileVerified}/>
            {(authState === 1)&& (
            <div className="otp-resend-con">
              <div style={{width: '50%'}}></div>
              <div style={{width: '50%', display: 'flex', justifyContent: 'right'}}>
                {countdown > 0 && (
                <span style={{fontSize: '14px'}}>Resend in {countdown}</span>
                )}
                {countdown <= 0 && (
                <button className="resend-otp-button" onClick={handleSendOTP}>Resend</button>
                )}
              </div>
            </div>
            )}
            {(authState === 0) && (
              <button className="exchange-btn-primary" onClick={handleSendOTP}> Get OTP </button>
            )}

            {/* OTP */}
            {(authState === 1) && (
              <>
                <label>OTP</label>
                <input type="tel" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)}/>

                <button className="exchange-btn-primary" onClick={handleVerifyOTP} > Verify OTP </button>
              </>
            )}
          {(authState === 2) && (
            <>
          {/* PASSWORD */}
          <label>Password</label>
          <input type="password" placeholder="Create password" value={password} onChange={(e) => setPassword(e.target.value)} />

            {/* CONFIRM PASSWORD */}
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />

            {/* REFERRAL */}
            <label>Referral Code (Optional)</label>
            <input
              type="text"
              placeholder="Enter referral code"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
            />
            
              <button className="exchange-btn-primary" onClick={handleRegister}> Create Account </button>
              </>
            )}
        </div>

        <div className="exchange-footer">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="exchange-btn-secondary"
            >
              Back to Login
            </Link>
          </p>
        </div>

        <div className="exchange-security">
          🔐 Your data is encrypted & securely stored
        </div>

      </div>

    </div>
  );
}