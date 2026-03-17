import React, { useEffect, useState } from "react";
import "../../css/p2p/BuyUsdtP2P.css";
import TopMenu from "../../components/new/TopMenu";
import axios from "../../Axios2";
import { useNavigate, useLocation } from "react-router-dom";
import TopMenuLoggedIn from "./components/TopMenu";
import P2PInnerWrapper from "./components/P2PInnerWrapper";

export default function BuyUsdtP2P() {

  const navigate = useNavigate();
  const location = useLocation();
  const seller = location.state;

  const [amount,setAmount] = useState("");
  const [error,setError] = useState("");
  const [inrBalance,setInrBalance] = useState(0);
  const [usdtReceive,setUsdtReceive] = useState(0);
  const [maxBuy, setMaxBuy] = useState(0);

  const handleAmountChange = (value)=>{

    setAmount(value);
    setError("");

    if(!value){
      setUsdtReceive(0);
      return;
    }

    if(value < seller.minOrderQuantity){
      setError(`Minimum order is ₹${seller.minOrderQuantity}`);
    }

    if(value > maxBuy){
      setError("Amount exceeds then maximum limit.");
    }

    const usdt = value / seller.price;
    setUsdtReceive(usdt.toFixed(2));
  };

  const setMaxAmount = ()=>{
    setAmount(maxBuy);
    handleAmountChange(maxBuy);
  };

  const getWalletBalance = async()=>{

    try{

      const res = await axios.post("web/private/get-wallet-balance");

      if(res.data.statusCode === 1000){
        setInrBalance(res.data.data.inrBalance);
      }

    }catch(err){
      console.log(err.message);
    }

  };

  const handleBuy = async()=>{

    try{

      const res = await axios.post("web/private/p2p-buy-usdt",{
        sellerId:seller.sellerId,
        amount:amount
      });

      if(res.data.statusCode === 1000){

        const orderId = res.data.data.orderId;

        navigate("/p2p/order-details",{
          state:{orderId}
        });

      }

    }catch(err){
      console.log(err.message);
    }

  };

  useEffect(()=>{

    if(!seller){
      navigate(-1);
    }

    const maxLimit = (Math.min(30000, seller.usdtAvailable * seller.price));
    setMaxBuy(maxLimit);

    getWalletBalance();

  },[]);

  return(
    <>
    <P2PInnerWrapper>
    <div style={{color: '#fff'}}>

      <div className="buy-wrapper">

        <div className="buy-card">

          {/* HEADER */}

          <div className="buy-header">

            <h2>Buy USDT</h2>

            <button
              className="close-btn"
              onClick={()=>navigate(-1)}
            >
              ✕
            </button>

          </div>

          <div className="divider"></div>

          {/* SELLER */}

          <div className="seller-header">

            <div className="seller-left">

              <div className="seller-avatar">
                {seller.sellerName?.charAt(0).toUpperCase()}
              </div>

              <div>
                <div className="seller-name">
                  {seller.sellerName}
                </div>

                <div className="seller-sub">
                  Verified Seller
                </div>
              </div>

            </div>

            <div className="seller-price">
              ₹{seller.price}<span>/USDT</span>
            </div>
          </div>

          {/* INPUT */}
          <div className="amount-input">
            <input type="tel" placeholder="Enter Amount (INR)" value={amount} onChange={(e)=>handleAmountChange(Number(e.target.value))}/>
            <button className="max-btn" onClick={setMaxAmount}>MAX</button>
          </div>

          {/* INFO */}
          <div className="info-row">
            <span>Limit: ₹{(seller.minOrderQuantity).toFixed(0)}-₹{(maxBuy).toFixed(0)} </span>
          </div>

          {/* RECEIVE */}

          <div className="receive-card">

            <span>You will receive</span>

            <h3>{usdtReceive} USDT</h3>

          </div>

          {error && (
            <p className="error-text">
              ⚠ {error}
            </p>
          )}

          {/* PAYMENT */}

          <div className="payment-method">
            UPI Payment
          </div>

          {/* TERMS */}

          <div className="terms-box">
            {seller.message}
          </div>

          <button
            className="buy-btn"
            disabled={!amount || error}
            onClick={handleBuy}
          >
            Buy USDT
          </button>

          <p className="secure-note">
            🔒 Escrow protection enabled
          </p>

        </div>

      </div>

    </div>
    </P2PInnerWrapper>
    </>
  );

}