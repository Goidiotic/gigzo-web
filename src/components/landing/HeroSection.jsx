import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/landing/HeroSection.css";
import iconUsdt from "../../icons/usdt.png";
import axios from "../../Axios2";

export default function HeroSection(){

    const navigate = useNavigate();

    const [sellers,setSellers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [amount, setAmount] = useState("");

    const fetchSellers = async ()=>{
        try{
            const res = await axios.post("web/public/get-sellers");

            if(res.data.statusCode === 1000){
                setSellers(res.data.data.sellers);
            }

        }catch(err){
            console.log("Unable to fetch sellers");
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchSellers();
    },[]);

    return(

        <div className="iox-hero-wrapper">

            <div className="iox-hero-container">

                {/* Header */}
                <div className="iox-hero-header">
                    <div className="iox-trade-box">

                        <div className="iox-hero-trade-tabs">
                            <button className="trade-tab trade-tab-active">
                                BUY
                            </button>

                            <button className="trade-tab">
                                SELL
                            </button>
                        </div>

                        <div className="iox-hero-coin">
                            <img src={iconUsdt} alt="USDT"/>
                            <span>USDT</span>
                        </div>

                    </div>
                </div>

                <div style={{width:'100%',border:'1px solid #1e293b',marginBottom:'20px'}}></div>

                {/* Global Amount Input */}
                <div className="iox-hero-input-row">

                    <div className="iox-amount-box">
                        <input 
                            type="number"
                            placeholder="Enter Amount"
                            value={amount}
                            onChange={(e)=>setAmount(e.target.value)}
                        />

                        <div className="iox-currency-box">
                            <div className="iox-rupee-icon">₹</div>
                            <div className="iox-currency-label">INR</div>
                        </div>
                    </div>

                    <div className="iox-sort-box">
                        Sort By: Price
                    </div>

                </div>


                {/* Seller List */}
                <div className="iox-seller-list">

                    {loading ? (

                        <div style={{padding:"20px"}}>
                            Loading sellers...
                        </div>

                    ) : (

                        sellers.map((seller,index)=>{

                            const isTopSeller = index === 0;

                            const usdtReceive = amount && seller.price 
                                ? (parseFloat(amount) / seller.price).toFixed(2)
                                : 0;

                            return(

                                isTopSeller ? (

                                    /* 🔥 TOP SELLER CARD */
                                    <div className="iox-top-seller-card" key={seller.sellerId || index}>

                                        {/* Header */}
                                        <div className="top-seller-header">

                                            <div className="top-avatar">
                                                {seller.sellerName.charAt(0)}
                                            </div>

                                            <div className="top-seller-details">
                                                <div className="top-seller-name">
                                                    {seller.sellerName}
                                                </div>

                                                <div className="top-verified">
                                                    ✓ Verified Seller
                                                </div>
                                            </div>

                                            <div className="top-price">
                                                ₹ {seller.price}
                                            </div>

                                        </div>


                                        {/* Input */}
                                        <div className="top-input-row">

                                            <div className="top-amount-box">

                                                <input
                                                    type="number"
                                                    placeholder="Enter Amount"
                                                    value={amount}
                                                    onChange={(e)=>setAmount(e.target.value)}
                                                />

                                                <div className="top-inr-tag">
                                                    <span className="circle">₹</span>
                                                    INR
                                                </div>

                                            </div>

                                        </div>


                                        {/* Conversion */}
                                        <div className="top-conversion">

                                            <div className="usdt-icon">
                                                <img src={iconUsdt} alt="usdt"/>
                                            </div>

                                            <div className="usdt-text">
                                                {usdtReceive} USDT Receive
                                            </div>

                                        </div>


                                        {/* Payment */}
                                        <div className="top-payment">
                                            ⚡ Lightning UPI
                                        </div>


                                        {/* Button */}
                                        <button
                                            className="top-buy-btn"
                                            onClick={()=>navigate("/p2p/buy-usdt",{state:seller})}
                                        >
                                            Buy
                                        </button>

                                    </div>

                                ) : (

                                    /* NORMAL SELLER */
                                    <div className="iox-seller-row" key={seller.sellerId || index}>

                                        <div className="iox-seller-header">

                                            <div className="iox-avatar">
                                                {seller.sellerName.charAt(0)}
                                            </div>

                                            <div className="iox-seller-info">

                                                <div className="iox-seller-name">
                                                    {seller.sellerName}
                                                </div>

                                                <span className="iox-seller-verified-desktop">
                                                    ✓ Verified Seller
                                                </span>

                                                <div className="iox-seller-meta-desktop">
                                                    {seller.orderCompleted} Orders | Completion {seller.completionRate}%
                                                </div>

                                                <div className="iox-seller-status">
                                                    <span className="iox-status-dot"></span>
                                                    <span className="iox-status-text">
                                                        Online
                                                    </span>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="iox-mobile-meta">
                                            ₹ {seller.price} | Available: {(seller.usdtAvailable).toFixed(2)} USDT
                                        </div>

                                        <div className="iox-mobile-limit">
                                            Limit: ₹ {seller.minOrderQuantity} - ₹ {Math.floor(seller.usdtAvailable * seller.price)}
                                        </div>

                                        <div className="iox-mobile-payments">
                                            ⚡ Lightning UPI
                                        </div>

                                        <button
                                            className="iox-seller-buy-btn"
                                            onClick={()=>navigate("/p2p/buy-usdt",{state:seller})}
                                        >
                                            Buy
                                        </button>

                                    </div>

                                )

                            )

                        })

                    )}

                </div>

            </div>

        </div>

    )

}