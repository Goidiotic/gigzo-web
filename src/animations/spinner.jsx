import Lottie from "lottie-react";
import freechargeSpinner from "./freecharge-spinner.json";
export default function Spinner () {
    return(
        <>
            <div style={{width: '100%', height: '100%', background: '#ffffff', position: 'fixed', top: '0', bottom: '0', zIndex: '1000'}}></div>
            <div style={{display: 'flex', position: 'fixed', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', zIndex: '10000'}}>
                <div style={{ width: 120, height: 120}}>
                    <Lottie animationData={freechargeSpinner} loop={true} />
                </div>
            </div>
            
        </>
    );
}