import react from "react";

import accessoriesActive from "../icons/accessories-active.svg";
import activewearActive from "../icons/activewear-active.svg";
import bottomwearActive from "../icons/bottomwear-active.svg";
import topwearActive from "../icons/topwear-active.svg";
import collectablesActive from "../icons/collectables-active.svg";

function ThirdNavbar(){
    return (
        <div className="third-navbar">
            <span className="third-navbar-spans">
                <img src={activewearActive}/> 
                Active Wear
            </span> 
            <span className="vertical"></span>
            <span className="third-navbar-spans"><img src={topwearActive}/> Top Wear</span><span className="vertical"></span>
            <span className="third-navbar-spans"><img src={bottomwearActive}/> Bottom Wear</span><span className="vertical"></span>
            <span className="third-navbar-spans"><img src={accessoriesActive}/> Accessories</span><span className="vertical"></span>
            <span className="third-navbar-spans"><img src={collectablesActive}/> Collectibles</span>
        </div>
    );
}

export default ThirdNavbar;