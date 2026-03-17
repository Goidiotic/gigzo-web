import React, { useEffect, useState } from "react";
import "../../css/p2p/PaymentDetails.css";
import axios from "../../Axios2";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../components/LoadingSpinner";
import P2PInnerWrapper from "./components/P2PInnerWrapper";

export default function PaymentDetails(){

  const location = useLocation();
  const navigate = useNavigate();

  const {orderId, orderStatus} = location.state;

  const [payment,setPayment] = useState(null);
  const [timer, setTimer] = useState(120); // 2 minutes

  const [loading,setLoading] = useState(true);
  const [copied,setCopied] = useState(false);
  const [changeRequested,setChangeRequested] = useState(false);

  /* -----------------------------
     Fetch Payment Details
  ----------------------------- */

  const getPaymentDetails = async ()=>{

    try{

      const res = await axios.post(
        "web/private/get-payment-details",
        {orderId}
      );

      if(res.data.statusCode === 1000){
        setPayment(res.data.data.payment);
      }

    }catch(err){
      console.log(err.message);
    }finally{
      setLoading(false);
    }

  };

  const formatTime = (seconds) => {

    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;

  };

  useEffect(()=>{

    if(!orderId) return;

    getPaymentDetails();

    const interval = setInterval(()=>{
      getPaymentDetails();
    },5000);

    return ()=>clearInterval(interval);

  },[]);

  useEffect(() => {

  const countdown = setInterval(() => {

    setTimer((prev) => {

      if (prev <= 1) {
        clearInterval(countdown);
        return 0;
      }

      return prev - 1;

    });

  }, 1000);

  return () => clearInterval(countdown);

}, []);


  /* -----------------------------
     Copy UPI
  ----------------------------- */

  const copyUpi = ()=>{

    if(!payment?.upiId) return;

    navigator.clipboard.writeText(payment.upiId);

    setCopied(true);

    setTimeout(()=>{
      setCopied(false);
    },2000);

  };


  /* -----------------------------
     Request Change QR
  ----------------------------- */

  const requestChangeQR = async ()=>{

    try{

      const confirmRequest = window.confirm(
        "Are you sure you want to request payment details change?"
      );

      if(!confirmRequest) return;

      const res = await axios.post(
        "web/private/request-change-payment-details",
        {orderId}
      );

      if(res.data.statusCode === 1000){

        alert("Payment details change request submitted.");
        setChangeRequested(true);
      }

    }catch(err){

      if(err.response?.data?.message){
        alert(err.response.data.message);
      }else{
        console.log(err.message);
      }

    }

  };


  /* -----------------------------
     Upload Proof
  ----------------------------- */

  const goUploadProof = ()=>{

    navigate("/p2p/upload-payment-proof",{
      state:{orderId}
    });

  };


  /* -----------------------------
     Open Chat
  ----------------------------- */

  const openChat = ()=>{

    navigate("/p2p/p2p-chat",{
      state:{orderId}
    });

  };


  return(
<P2PInnerWrapper>
    <div className="payment-wrapper">

      <div className="payment-card2">

        {/* HEADER */}

        <div className="payment-header">

          <h2>Payment Details</h2>

          <button
            className="close-btn"
            onClick={()=>navigate(-1)}
          >
            ✕
          </button>

        </div>

        <div className="payment-divider"></div>


        {/* LOADING */}

        {loading && (

          <div className="payment-loading">
            <Spinner/>
          </div>

        )}


        {/* WAITING */}

        {!loading && !payment && (

          <div className="payment-waiting">

            <div>
              Waiting for payment details.
            </div>

            <div className="payment-timer">
              Time remaining: {formatTime(timer)}
            </div>

          </div>

        )}


        {/* PAYMENT DETAILS */}

        {payment && (

          <>

            {/* AMOUNT */}

            <div className="payment-amount">
              ₹{payment.amountToBePaid}
            </div>


            {/* RECEIVER */}

            <div className="payment-row">
              <span>Receiver Name</span>
              <strong>{payment.receiverName}</strong>
            </div>


            {/* ORDER ID */}

            <div className="payment-row">
              <span>Order ID</span>
              <strong>{orderId}</strong>
            </div>


            {/* QR */}

            <div className="qr-section">

              <img
                src={payment.qrCodeUrl}
                alt="QR Code"
                className="qr-image"
              />

            </div>


            {/* UPI BOX */}

            <div className="upi-section">

              <div className="upi-id">
                {payment.upiId}
              </div>

              <button
                className="copy-btn"
                onClick={copyUpi}
              >
                {copied ? "Copied" : "Copy"}
              </button>

            </div>


            {/* INSTRUCTION */}

            <div className="payment-instruction">

              Send exactly <strong>₹{payment.amountToBePaid}&nbsp;</strong>
              using the above UPI ID or QR code.

            </div>


            {/* ACTION BUTTONS */}

            <div className="payment-actions">
              {orderStatus === "unpaid" && (
                <>
                <button
                  className="action-btn change-btn"
                  onClick={requestChangeQR}
                  disabled={changeRequested}
                >
                  {changeRequested ? "Request Sent" : "Change Payment Details"}
                </button>

                <button
                  className="action-btn proof-btn"
                  onClick={goUploadProof}
                >
                  Upload Proof
                </button>
                </>
              )}
              <button
                className="action-btn chat-btn"
                onClick={openChat}
              >
                Live Chat
              </button>

            </div>

          </>

        )}

      </div>

    </div>
</P2PInnerWrapper>
  );

}