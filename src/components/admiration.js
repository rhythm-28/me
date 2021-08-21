import react from "react";

import safe from "../icons/safe.svg";
import satisfaction from "../icons/satisfaction.svg";
import exchange from "../icons/exchange.svg";

function Admiration(){
    return (
        <div className="row admire-buttons">
                <button className="admiration-buttons col-3">
                    <img src={safe}/><br/>
                    Safe and Secure <br/> Checkout
                </button>
                <button className="admiration-buttons col-3">
                    <img src={exchange}/><br/>
                    NO-HASSLE <br/>
                    RETURNS AND EXCHANGES
                </button>
                <button className="admiration-buttons col-3">
                    <img src={satisfaction}/><br/>
                    100% SATISFACTION <br/> GUARANTEED
                </button>
        </div>
    );
}

export default Admiration;