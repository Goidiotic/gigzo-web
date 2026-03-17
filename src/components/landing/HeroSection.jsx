import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/landing/HeroSection.css";
import iconUsdt from "../../icons/usdt.png";
import axios from "../../Axios2";

export default function HeroSection(){

    const navigate = useNavigate();

    const [sellers,setSellers] = useState([]);
    const [loading,setLoading] = useState(true);

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

                {/* Buy Sell Header */}

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

                {/* Amount Input */}

                <div className="iox-hero-input-row">

                    <div className="iox-amount-box">

                        <input 
                        type="text"
                        placeholder="Enter Amount"
                        />

                        <div className="iox-currency-box">

                            <div className="iox-rupee-icon">
                                ₹
                            </div>

                            <div className="iox-currency-label">
                                INR
                            </div>

                        </div>

                    </div>

                    <div className="iox-sort-box">
                        Sort By: Price
                    </div>

                </div>


                <div className="iox-seller-list">

                    {loading ? (

                        <div style={{padding:"20px"}}>
                            Loading sellers...
                        </div>

                    ) : (

                    sellers.map((seller,index)=>{

                    return(

                    <div className="iox-seller-row" key={seller.sellerId || index}>

                        {/* Seller Header */}
                        <div className="iox-seller-header">

                            <div className="iox-avatar">
                                {seller.sellerName.charAt(0)}
                            </div>

                            <div className="iox-seller-info">
                                <div className="iox-seller-name">
                                    {seller.sellerName}&nbsp;
                                </div>

                                <span className="iox-seller-verified-desktop">
                                    ✓ Verified Seller
                                </span>

                                <div className="iox-seller-verified-mobile">
                                    ✓ Verified Seller
                                </div>

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


                        {/*Seller meta-mobile*/}

                        <div className="iox-seller-meta-mobile">
                            {seller.orderCompleted} Orders | {seller.completionRate}% Success | ⏱ 15 Min
                        </div>


                        {/* Price */}
                        <div className="iox-mobile-price">
                            ₹ {seller.price}
                        </div>


                        {/* Available */}
                        <div className="iox-mobile-available">

                            <div>
                                Available: {(seller.usdtAvailable).toFixed(2)} USDT
                            </div>

                            <div className="iox-limit">
                                Limit: ₹ {seller.minOrderQuantity} - ₹ {Math.floor(seller.usdtAvailable * seller.price)}
                            </div>

                        </div>


                        {/* Payment Methods */}
                        <div className="iox-mobile-payments">

                            <span className="payment-tag">
                            ⚡Lightning UPI
                            </span>

                        </div>


                        {/* Action */}
                        <div className="iox-mobile-action">

                            <button
                            className="iox-seller-buy-btn"
                            onClick={()=>navigate("/p2p/buy-usdt",{state:seller})}
                            >
                            Buy
                            </button>

                        </div>

                    </div>

                    )

                    })

                    )}

                </div>

            </div>

        </div>

    )

}