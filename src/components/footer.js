import react from "react";
import styles from "../stylesheets/footer.css";
import logo from "../stylesheets/images/logow.svg";

function Footer(){
    return (
        <div>
            <div className="row footer-div">
                <div className="col-4 footer-lists">
                    <img className="footer-logo" src={logo}/>
                    <p>Bangalore,Karnataka,INDIA</p>
                    <p>+91 012341567890</p>
                    <p>connect@modcrw.com</p>
                </div>
                <div className="col-2 footer-lists">
                    <h6> Browse by category</h6>
                    <ul>
                        <li>Home</li>
                        <li>Winners List</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                        <li>About</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="col-2 footer-lists">
                    <h6> Resources</h6>
                    <ul>
                        <li>Clothing</li>
                        <li>Accessories</li>
                        <li>Detailing</li>
                        <li>Car Parts</li>
                        <li>Clearance</li>
                        <li>Sweepstakes</li>
                    </ul>
                </div>
                <div className="col-2 footer-lists">
                    <h6> Support</h6>
                    <ul>
                        <li>Feedback</li>
                        <li>Browse Support</li>
                        <li>Detailing</li>
                        <li>Car Parts</li>
                        <li>Clearance</li>
                        <li>Sweepstakes</li>
                    </ul>
                </div>
                <div className="col-2 footer-lists">
                    <h6> Connect @</h6>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <div className="second-footer">
                <p>Copywright @ 2021,Tuner Cult.All rights reserved.</p>
                <p>Often Imitated. Never duplicated.</p>
            </div>
        </div>
    );
}

export default Footer;