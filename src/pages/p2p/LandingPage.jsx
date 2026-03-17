import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/new/LandingPage.css";
import TopNav from "../../components/landing/TopNav";
import HeroSection from "../../components/landing/HeroSection";
import BuyGuide from "../../components/landing/BuyGuide";
import PaymentMethods from "../../components/landing/PaymentMethods";
import FAQ from "../../components/landing/FAQ";
import Footer from "../../components/landing/Footer";
import MarketRates from "../../components/landing/MarketRates";
import WebMainMenu from "../../components/WebMainMenu";


export default function LandingPage() {

  const navigate = useNavigate();

  return (
    
    <div className="iox-landing-page-wrapper">
        <TopNav/>
        <WebMainMenu/>
        {/*P2P Seller and Buyer section*/}
        {/* MARKET Price */}
        <MarketRates/>
        <HeroSection/>
        {/*How to Buy*/}
        <BuyGuide/>
        {/*Why to buy USDT on IOX*/}
        <PaymentMethods/>
        {/*FAQs*/}
        <FAQ/>
        {/*Footer*/}
        <Footer/>
    </div>

  );

}