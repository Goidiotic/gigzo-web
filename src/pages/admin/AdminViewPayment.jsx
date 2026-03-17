import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../Axios2";

import "../../css/admin/AdminViewPayment.css";
import TopNavMenu from "../../components/admin2/TopNavMenu";

export default function AdminViewPayment(){

  const location = useLocation();
  const navigate = useNavigate();

  const orderId = location.state?.orderId;

  const [paymentDetails,setPaymentDetails] = useState(null);
  const [paymentProof,setPaymentProof] = useState(null);
  const [loading,setLoading] = useState(true);
  const [copied,setCopied] = useState(false);

  const fetchData = async ()=>{

    try{

      const res = await axios.post(
        "web/private/admin/get-payment-view",
        {orderId}
      );

      if(res.data.statusCode === 1000){
        setPaymentDetails(res.data.data.paymentDetails);
        setPaymentProof(res.data.data.paymentProof);
      }

    }catch(err){
      console.log(err.message);
    }finally{
      setLoading(false);
    }

  };

  useEffect(()=>{
    if(orderId){
      fetchData();

      const interval = setInterval(()=>{
        fetchData();
      },5000);

      return ()=>clearInterval(interval);

    }
  },[]);


  const copyUTR = ()=>{
    navigator.clipboard.writeText(paymentProof.utrNumber);
    setCopied(true);
    setTimeout(()=>setCopied(false),2000);
  };

  const viewImage = (url)=>{
    window.open(url,"_blank");
  };

  const goUploadPayment = ()=>{
    navigate("/a/c/upload-payment-details",{state:{orderId}});
  };

  return(
    <>
    <TopNavMenu/>

    <div className="admin-payment-wrapper">

      <h2 className="page-title">
        Payment Overview
      </h2>


      {/* PAYMENT DETAILS */}

      <div className="payment-card">

        <h3>Payment Details</h3>

        {loading && <p>Loading...</p>}

        {!loading && !paymentDetails && (

          <div className="empty-box">

            <p>Payment details not uploaded yet.</p>

            <button
              className="btn-primary"
              onClick={goUploadPayment}
            >
              Upload Payment Details
            </button>

          </div>

        )}

        {paymentDetails && (

          <div className="payment-info">

            <div className="info-block">
              <label>Payment Provider</label>
              <p>{paymentDetails.providerName}</p>
            </div>

            <div className="info-block">
              <label>UPI ID</label>
              <p>{paymentDetails.upiId}</p>
            </div>

            <div className="info-block">
              <label>Amount</label>
              <p>₹{paymentDetails.amountToBePaid}</p>
            </div>

            <button
              className="btn-secondary"
              onClick={()=>viewImage(paymentDetails.qrCodeUrl)}
            >
              View QR
            </button>

          </div>

        )}

      </div>


      {/* PAYMENT PROOF */}

      <div className="payment-card">

        <h3>Payment Proof</h3>

        {loading && <p>Loading...</p>}

        {!loading && !paymentProof && (

          <div className="empty-box">
            <p>No payment proof uploaded by Buyer yet.</p>
          </div>

        )}

        {paymentProof && (

          <div className="payment-info">

            <div className="info-block">

              <label>UTR Number</label>

              <div className="utr-box">

                <p>{paymentProof.utrNumber}</p>

                <button
                  className="btn-copy"
                  onClick={copyUTR}
                >
                  {copied ? "Copied" : "Copy"}
                </button>

              </div>

            </div>

            <button
              className="btn-secondary"
              onClick={()=>viewImage(paymentProof.paymentProofUrl)}
            >
              View Screenshot
            </button>

          </div>

        )}

      </div>

    </div>
    </>
  );

}