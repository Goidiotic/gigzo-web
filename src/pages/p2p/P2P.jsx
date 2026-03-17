import React, { useEffect, useState } from "react";
import HeroSection from "../../components/landing/HeroSection";

import "../../css/p2p/p2p-merket.css";
import P2PMainWrapper from "./components/P2PMainWrapper";

export default function P2P(){

    return(
        <P2PMainWrapper>
        <div className="iox-p2p-page">
            

            {/* Main Content */}
            <HeroSection/>

        </div>
        </P2PMainWrapper>
    )

}