import React, { useEffect, useState } from "react";
import "../../css/p2p/P2POrderDetails.css";
import "../../css/p2p/P2P.css";
import axios from "../../Axios2";
import { useLocation, useNavigate } from "react-router-dom";
import TopMenuLoggedIn from "./components/TopMenu";
import P2PInnerWrapper from "./components/P2PInnerWrapper";

export default function P2POrderDetails(){

  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId;

  const [order,setOrder] = useState(null);
  const [timeLeft,setTimeLeft] = useState("");

  const getOrderDetails = async ()=>{

    try{

      const res = await axios.post(
        "web/private/get-p2p-order-details",
        {orderId}
      );

      if(res.data.statusCode === 1000){
        setOrder(res.data.data.order);
      }

    }catch(err){
      console.log(err.message);
    }

  };

  useEffect(()=>{
    if(orderId){
      getOrderDetails();
    }
  },[]);

  // TIMER
  useEffect(()=>{

    if(!order?.expiresAt) return;

    const interval = setInterval(()=>{

      const now = new Date().getTime();
      const expiry = new Date(order.expiresAt).getTime();

      const diff = expiry - now;

      if(diff <= 0){
        setTimeLeft("Expired");
        clearInterval(interval);
        return;
      }

      const minutes = Math.floor(diff / (1000*60));
      const seconds = Math.floor((diff % (1000*60))/1000);

      setTimeLeft(`${minutes}:${seconds.toString().padStart(2,"0")}`);

    },1000);

    return ()=>clearInterval(interval);

  },[order]);

  if(!order){
    return null;
  }

  const sellerInitial = order.sellerName
    ? order.sellerName.charAt(0).toUpperCase()
    : "?";

  const isExpired = timeLeft === "Expired";

  const handleUploadProof = ()=>{
    navigate("/p2p/upload-payment-proof",{state:{orderId}});
  };

  const openChat = ()=>{
    navigate("../p2p/p2p-chat",{state:{orderId}});
  };

  const cancelOrder = async ()=>{

    try{

      const res = await axios.post(
        "web/private/cancel-p2p-order",
        {orderId}
      );

      if(res.data.statusCode === 1000){
        getOrderDetails();
      }

    }catch(err){
      console.log(err.message);
    }

  };

  const openPaymentDetails = ()=>{
    navigate("/p2p/payment-details",{state:{orderId, orderStatus: order.status}});
  };

  return(

<>
<P2PInnerWrapper>

<div className="p2p-order-page">

  <div className="p2p-order-container">

      <div style={{color: '#fff'}}>
        {/* HEADER */}
        <div className="order-header">
          <h3 className="recent-title">
            Order #{order.orderId}
          </h3>
          <button
            className="action-btn2 danger"
            onClick={()=>navigate("/p2p/order-list")}
          >
            Close
          </button>
        

        </div>

        {/* TIMER */}

        {order.status==="unpaid" && !isExpired && (
          <div className="order-timer">
            Payment expires in: <strong>{timeLeft}</strong>
          </div>
        )}

        <div className="order-date">
          {new Date(order.createdAt).toLocaleString("en-IN")}
        </div>

        <div className="order-layout">

          {/* LEFT PROGRESS */}

          <div className="order-progress-card">

            <div className="desktop-progress">
              <h4>Progress</h4>
              <div className="progress-steps">

                <div className="step completed">
                  <div className="circle">✔</div>
                  <span>Order Placed</span>
                </div>

                <div className="step completed">
                  <div className="circle">✔</div>
                  <span>Payment Details</span>
                </div>

                <div className={`step ${order.status==="paid" || order.status==="completed" ? "completed":""}`}>
                  <div className="circle">
                    {order.status==="paid" || order.status==="completed" ? "✔":"3"}
                  </div>
                  <span>Paid</span>
                </div>

                <div className={`step ${order.status==="completed" ? "completed":""}`}>
                  <div className="circle">
                    {order.status==="completed" ? "✔":"4"}
                  </div>
                  <span>Completed</span>
                </div>

              </div>
            </div>
            <div className="mobile-progress">
              Status: {order.status}
            </div>
          </div>

          {/* RIGHT SELLER CARD */}

          <div className="seller-card">

            <div className="seller-header">

              <div className="seller-avatar">
                {sellerInitial}
              </div>

              <div>
                <div className="seller-name">
                  {order.sellerName}
                </div>
                <div className="seller-sub">
                  Verified Seller
                </div>
              </div>

            </div>

            <div className="seller-divider"></div>

            <div className="order-info">

              <div className="info-row">
                <span>Order Amount</span>
                <strong>₹{order.amount}</strong>
              </div>

              <div className="info-row">
                <span>Price</span>
                <strong>₹{order.price}</strong>
              </div>

              <div className="info-row">
                <span>USDT</span>
                <strong>{order.usdtAmount}</strong>
              </div>

              <div className="info-row">
                <span>Status</span>
                <strong className={`tx-status ${order.status}`}>
                  {order.status}
                </strong>
              </div>

            </div>

            <div className="seller-divider"></div>

            {/* ACTION BUTTONS */}

            <div className="order-buttons">
              {!isExpired && (
                <button
                  className="action-btn2"
                  onClick={handleUploadProof}
                >
                  Upload Payment Proof
                </button>
              )}
              {(order.status === "unpaid" && !isExpired) && (
                <button
                  className="action-btn2"
                  onClick={openPaymentDetails}
                >
                  View Payment Details
                </button>
              )}

              {order.status==="unpaid" && !isExpired && (
                <button
                  className="action-btn2 danger"
                  onClick={cancelOrder}
                >
                  Cancel Order
                </button>
              )}

              {order.status==="unpaid" && isExpired && (
                <span style={{color: '#ffa200'}}>Order is Expired</span>
              )}

            </div>

          </div>

        </div>
      </div>

  </div>

</div>
</P2PInnerWrapper>
</>
  );

}