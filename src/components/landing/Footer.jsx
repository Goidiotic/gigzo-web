import React from "react";
import "../../css/landing/Footer.css";
import logo from "../../icons/logo.png";

export default function Footer(){

    return(

        <div className="iox-footer-wrapper">

            <div className="iox-footer-container">

                {/* LEFT */}

                <div className="iox-footer-left">

                    <img
                        src={logo}
                        alt="IOX"
                        className="iox-footer-logo"
                    />

                    <p className="iox-footer-desc">
                        IOX is a secure P2P crypto trading platform where users
                        can buy and sell USDT using UPI and bank transfer with
                        zero trading fees.
                    </p>

                </div>


                {/* LINKS */}

                <div className="iox-footer-links">

                    <div className="iox-footer-col">

                        <div className="iox-footer-heading">
                            Platform
                        </div>

                        <span>P2P Trading</span>
                        <span>Quick Buy</span>
                        <span>Affiliate</span>
                        <span>Exchange</span>

                    </div>


                    <div className="iox-footer-col">

                        <div className="iox-footer-heading">
                            Support
                        </div>

                        <span>Help Center</span>
                        <span>Live Chat</span>
                        <span>Contact Us</span>
                        <span>Guide</span>

                    </div>


                    <div className="iox-footer-col">

                        <div className="iox-footer-heading">
                            Legal
                        </div>

                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                        <span>Risk Disclosure</span>

                    </div>

                </div>

            </div>


            {/* BOTTOM */}

            <div className="iox-footer-bottom">

                © {new Date().getFullYear()} IOX Exchange. All rights reserved.

            </div>

        </div>

    )

}