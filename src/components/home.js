import react, { useEffect,useState } from "react";
import Navbar from "./navbar.js";
import styles from "../stylesheets/home.css";
import axios from "axios";
import coupon1 from "../stylesheets/images/coupon1.jpg";
import coupon2 from "../stylesheets/images/coupon2.jpg";
import cover from "../stylesheets/images/cover.jpg";

function Home(){

    // const [data,setData] =  useState(null);
    // useEffect(()=>{
    //     axios.get("https://modcrew-dev.herokuapp.com/api/v1/products")
    //         .then((response)=>{
    //             setData(response.data.count);
    //             console.log(response.data.count);
    //         });
    // },[]);
    return (
        <div>
            <Navbar />
            <img className="cover-img" src={cover} />
            {/* <div className="cover-image"></div> */}
            <div className="row">
                <img className="col-6 sale-img" src={coupon1} />
                <img className="col-6 sale-img" src={coupon2} />
                {/* <img src="C:\Users\Rhythm Bhatia\Desktop\me\src\stylesheets\images\coupon1.jpg" alt="sale"/>
                <div className="col-6 sale-img1"></div>
                <div className="col-6 sale-img2"></div> */}
            </div>
            <div className="row landing-buttons-tray">
                <button className="landing-page-button col">New Arrivals </button>
                <button className="landing-page-button col"> Featured Products</button>
                <button className="landing-page-button col">Best Selling </button>
            </div>
            <div className="offer-image"></div>
            <button className="admiration-buttons">
                Safe and Secure Checkout
            </button>
            <button className="admiration-buttons">
                NO-HASSLE 
                RETURNS AND EXCHANGES
            </button>
            <button className="admiration-buttons">
                100% SATISFACTION GUARANTEED
            </button>
            {/* <h1>{data}</h1> */}
        </div>
    );
}

export default Home;