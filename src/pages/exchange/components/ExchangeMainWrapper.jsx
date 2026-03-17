import React from "react";

import TopMenuCommon from "../../../components/new/TopCommonMenu";
import P2PDesktopMenu from "./P2PDesktopMenu";
import WebMainMenu from "../../../components/WebMainMenu";

import "../../../css/p2p/P2PMainWrapper.css";
import MobileBottomMenu from "./MobileBottomMenu";

export default function ExchnageMainWrapper({children}){

  return (

    <div className="iox-p2p-wrapper">

      {/* TOP HEADER */}
      <TopMenuCommon />

      {/* DESKTOP P2P MENU */}
      <P2PDesktopMenu />

      <MobileBottomMenu/>

      {/* PAGE CONTENT */}
      <div className="iox-p2p-content">
        <WebMainMenu i={"exchange"}/>

        {children}

      </div>

    </div>

  );

}