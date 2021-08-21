import react from "react";

import clothing from "../icons/clothing.svg";
import accessoriesActive from "../icons/accessories-active.svg";
import activewearActive from "../icons/activewear-active.svg";
import bottomwearActive from "../icons/bottomwear-active.svg";
import topwearActive from "../icons/topwear-active.svg";
import collectablesActive from "../icons/collectables-active.svg";

function SecondNavbar(){
    return (
        <div className="third-navbar">
            <span className="third-navbar-spans"><img src={clothing}/> Clothing</span> <span className="vertical"></span>
            <span className="third-navbar-spans"><img src={accessoriesActive}/> Accessories</span><span className="vertical"></span>
            <span className="third-navbar-spans"><img src={bottomwearActive}/> Detailing</span><span className="vertical"></span>
            <span className="third-navbar-spans"><img src={accessoriesActive}/> Car Parts</span><span className="vertical"></span>
            <span className="third-navbar-spans"><img src={collectablesActive}/> Clearance</span><span className="vertical"></span>
            <span className="third-navbar-spans"><img src={collectablesActive}/> Sweepstakes</span>
        </div>
    );
}

export default SecondNavbar;