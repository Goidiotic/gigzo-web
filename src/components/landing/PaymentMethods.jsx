import React from "react";
import "../../css/landing/PaymentMethods.css";

import paymentMethodsImg from "../../img/payment-methods.png";

export default function PaymentMethods(){

    return(

        <div className="iox-payment-wrapper">

            <div className="iox-payment-container">

                {/* LEFT SECTION */}

                <div className="iox-payment-left">

                    <h2 className="iox-payment-title">
                        Supported Payment Methods
                    </h2>

                    <img
                        src={paymentMethodsImg}
                        alt="Payment Methods"
                        className="iox-payment-image"
                    />

                </div>


                {/* RIGHT SECTION */}

                <div className="iox-payment-right">

                    {/* UPI CARD */}

                    <div className="iox-payment-card">

                        <div className="iox-payment-heading">
                            UPI
                        </div>

                        <div className="iox-payment-list">

                            <span>PhonePe</span>
                            <span>Google Pay</span>
                            <span>Super Money</span>
                            <span>Navi</span>
                            <span>Paytm</span>
                            <span>Freo</span>
                            <span>BHIM UPI</span>
                            <span>MobiKwik</span>

                        </div>

                    </div>


                    {/* BANK CARD */}

                    <div className="iox-payment-card">

                        <div className="iox-payment-heading">
                            Bank
                        </div>

                        <div className="iox-payment-list">

                            <span>Bank Transfer</span>
                            <span>Deposit to Bank</span>
                            <span>CDM</span>
                            <span>Amazon Coupons</span>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}