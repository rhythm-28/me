import react from "react";
import styles from "../stylesheets/product.css";
import cover from "../stylesheets/images/cover.jpg";
import cart from "../icons/cart.svg";
import view from "../icons/view.svg";
import {Link} from "react-router-dom";

function Product(props){

    function mouseOverEffect(id){
        const element = document.getElementById(`hover-${id}`);
        element.classList.remove("d-none");
    }

    function mouseOutEffect(id){
        const element = document.getElementById(`hover-${id}`);
        element.classList.add("d-none");
    }

    function transparentOverEffect(id){
        const element = document.getElementById(`product-img-trnsprnt-${id}`);
        element.classList.add("card-img-trnsprnt");
    }

    function transparentOutEffect(id){
        const element = document.getElementById(`product-img-trnsprnt-${id}`);
        element.classList.remove("card-img-trnsprnt");
    }

    function handleEyeColourOver(id){
        // const element = document.getElementById("eye-btn");
        // element.classList.add("eye-colour");
        const element = document.getElementById(`product-img-trnsprnt-${id}`);
        element.classList.add("card-img-trnsprnt");
    }

    function handleEyeColourOut(id){
        // const element = document.getElementById("eye-btn");
        // element.classList.remove("eye-colour");
        const element = document.getElementById(`product-img-trnsprnt-${id}`);
        element.classList.remove("card-img-trnsprnt");
    }

    return (
            <div className="card product-card col-3">
                <div onMouseOver={()=>mouseOverEffect(props.id)} onMouseOut={()=>mouseOutEffect(props.id)}>
                    <div 
                        className="hover-div-btns d-none" 
                        id={`hover-${props.id}`}
                        onMouseOver={()=>{handleEyeColourOver(props.id)}} 
                        onMouseOut={()=>{handleEyeColourOut(props.id)}}
                    >
                    {/* <img className="hover-btns cart-btn" src={cart} /> */}
                        <Link to={`/productPage/${props.productId}`}><button 
                        id="eye-btn" 

                        className="landing-page-button" ><img className="hover-btns view-btn" src={view} /></button></Link>
                        <Link to={"/cart"}>
                            <button className="landing-page-button">
                                <img className="hover-btns view-btn" src={cart} />
                                {/* <svg className="hover-btns cart-btn" width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.02587 21.9414C8.62575 21.9414 9.11205 21.4551 9.11205 20.8552C9.11205 20.2553 8.62575 19.769 8.02587 19.769C7.42599 19.769 6.9397 20.2553 6.9397 20.8552C6.9397 21.4551 7.42599 21.9414 8.02587 21.9414Z" stroke="white" stroke-width="2.52273" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M19.9734 21.9414C20.5733 21.9414 21.0596 21.4551 21.0596 20.8552C21.0596 20.2553 20.5733 19.769 19.9734 19.769C19.3735 19.769 18.8872 20.2553 18.8872 20.8552C18.8872 21.4551 19.3735 21.9414 19.9734 21.9414Z" stroke="white" stroke-width="2.52273" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1.61353 1.40918H5.13005L7.48613 13.4193C7.56652 13.8323 7.78671 14.2032 8.10815 14.4672C8.4296 14.7312 8.83181 14.8715 9.24439 14.8634H17.7896C18.2021 14.8715 18.6044 14.7312 18.9258 14.4672C19.2472 14.2032 19.4674 13.8323 19.5478 13.4193L20.9544 5.89392H6.00919" stroke="white" stroke-width="2.52273" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> */}
                            </button>
                        </Link>
                    </div>
                    <img 
                        id={`product-img-trnsprnt-${props.id}`} 
                        onMouseOver={()=>{transparentOverEffect(props.id)}} 
                        onMouseOut={()=>{transparentOutEffect(props.id)}}
                        className="card-img-product" 
                        src={props.img} 
                        alt={props.img}
                    />
                </div>

                <hr />
                <div className="card-body product-body row">
                    <div className="col-10">
                        <span className="star-icon"><i className="fas fa-star"></i> {props.avgRating}</span>
                        <p className="card-text product-name">{props.title}</p>
                        <span className="discnt-price">₹{props.sellingPrice}/-</span>
                        <span className="original-price">₹{props.mrp}/-</span>
                    </div>
                    <div className="col-2">
                        <button className="landing-page-button like-btn"> <i class="far fa-heart"></i> </button>
                        <span className="sold-qty-div">
                            <span className="sold-qty">900</span>
                            <span className="sold">Sold</span>
                        </span>
                    </div>
                </div>
            </div>
    );
}

export default Product;