import react from "react";
import styles from "../stylesheets/navbar.css";
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiOutlineTwitter } from 'react-icons/ai';
import { RiTwitterFill } from 'react-icons/ri';
import { RiInstagramFill } from 'react-icons/ri';
import { IoIosCall } from 'react-icons/io';

const availableCatagories = [
    'collectibles',
    'diary',
    'sticker',
    'badge',
    'key-chain',
    'poster',
    'fashion',
    'active-wear',
    'jogger',
    'jersey',
    'top-wear',
    'henley',
    'round-neck',
    'crop-top',
    'bottom-wear',
    'shorts',
    'accessories',
    'cap',
    'bandana',
    'bag'
]

function Navbar(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand logo" href="#"></a>
                        <div className="main-div">
                            <div className="row upper-navbar">
                                <ul className="navbar-nav col me-auto mb-2 mb-lg-0">
                                    <li className="nav-item upper-nav-list">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item upper-nav-list">
                                        <a className="nav-link" href="#">Winners List</a>
                                    </li>
                                    <li className="nav-item upper-nav-list">
                                        <a className="nav-link" href="#">Contact Us</a>
                                    </li>
                                    <li className="nav-item upper-nav-list">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item upper-nav-list">
                                        <a className="nav-link" href="#">Help</a>
                                    </li>
                                </ul>
                                <div className="col social-icons">
                                    <button><FaFacebookF size={25}className="white-color"/></button>
                                    <button><IoLogoWhatsapp size={25} className="white-color"/></button>
                                    <button><RiTwitterFill size={25} className="white-color"/></button>
                                    <button><RiInstagramFill size={25} className="white-color"/></button>
                                    <button><IoIosCall size={25} className="white-color"/></button>
                                    <button className="login-btn">Login/Signup</button>
                                </div>
                            </div>
                            <div className="navbar-search">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle navbar-dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        All Categories
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {availableCatagories.map((category)=>{
                                        return (<li><a class="dropdown-item" href="#">{category}</a></li>);
                                    })}
                                    </ul>
                                </div>
                                <form>
                                    <input type="search" placeholder="Search entire store here" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                                <div className="button-tray">
                                    <button className="navbar-buttons"><i class="far fa-heart"></i></button>
                                    <button className="navbar-buttons"><i class="fas fa-shopping-cart"></i> Cart(0)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="third-navbar">
                <span className="third-navbar-spans">Active Wear</span> <span className="vertical"></span>
                <span className="third-navbar-spans">Top Wear</span><span className="vertical"></span>
                <span className="third-navbar-spans">Bottom Wear</span><span className="vertical"></span>
                <span className="third-navbar-spans">Accessories</span><span className="vertical"></span>
                <span className="third-navbar-spans">Collectibles</span>
            </div>
        </div>
    );
}

export default Navbar;