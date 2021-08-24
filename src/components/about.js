import react from "react";
import styles from "../stylesheets/about.css";

import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Admiration from "./admiration.js";
import ThirdNavbar from "./ThirdNavbar.js";
import Carousel from "./carousel.js";

import offer from "../stylesheets/images/offer.jpg";
import coupon1 from "../stylesheets/images/coupon1.jpg";
import coupon2 from "../stylesheets/images/coupon2.jpg";

function About(){
    return (
        <div>
            <Navbar />
            <ThirdNavbar />
            <h1 style={{color:'red',marginLeft:'2%',marginTop:'4%'}}>About Us</h1>
            <hr className="rule"/>
            <p
                style={{textAlign:'center',marginTop:'2%'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <h2 
                className="top-selling" 
                style={{textAlign:'center'}}>
                Check us out on Social Media:
            </h2>
            <p 
                style={{textAlign:'center'}}>
                 Official Company Instagram: @Modcrew <br />
                 Official FaceBook Page: @Modcrew_FB</p>
            <hr className="rule"/>
            <h3 
                className="top-selling" 
                style={{textAlign:'center',marginTop:'2%'}}>
                Top Selling of the Week
            </h3>
            <Carousel 
                id={2}
                img1={offer}
                img2={coupon1}
                img3={coupon2}
            />
            <Admiration />
            <Footer />
        </div>
    );
}

export default About;