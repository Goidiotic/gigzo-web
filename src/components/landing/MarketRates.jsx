import React from "react";
import MarketRateCard from "../MarketRateCard";
import "../../css/landing/MarketRates.css";

export default function MarketRates(){

    const rates = [
        {asset:"USDT/INR", price:"91.25"},
        {asset:"BTC/INR", price:"5240000"},
        {asset:"ETH/INR", price:"320000"}
    ];

    return(

        <div className="iox-market-wrapper">

            <div className="iox-market-container">

                <div className="iox-market-grid">

                    {rates.map((item,index)=>(
                        <MarketRateCard
                            key={index}
                            asset={item.asset}
                            price={item.price}
                        />
                    ))}

                </div>

            </div>

        </div>

    )

}