import react from "react";
import styles from "../stylesheets/product.css";
import cover from "../stylesheets/images/cover.jpg";
import cart from "../icons/cart.svg";
import view from "../icons/view.svg";
import {Link} from "react-router-dom";
function Product(props){

    function mouseHoverEffect(id){
        const element = document.getElementById(`hover-${id}`);
        element.classList.remove("d-none");
    }

    function mouseOutEffect(id){
        const element = document.getElementById(`hover-${id}`);
        element.classList.add("d-none");
    }

    return (
            <div className="card product-card col-3">
                <div onMouseOver={()=>mouseHoverEffect(props.id)} onMouseOut={()=>mouseOutEffect(props.id)}>
                    <div className="hover-div-btns d-none" id={`hover-${props.id}`}>
                        <Link to={"/productPage"}><button className="landing-page-button"><img className="hover-btns view-btn" src={view} /></button></Link>
                        <Link to={"/cart"}><button className="landing-page-button"><img className="hover-btns cart-btn" src={cart} /></button></Link>
                        {/* <Link to={`/productPage/${props.id}`}><button className="landing-page-button"><img className="hover-btns" src={view} /></button></Link> */}
                        {/* <button className="landing-page-button"><img className="hover-btns" src={view} /></button>
                        <button className="landing-page-button"><img className="hover-btns" src={cart} /></button> */}
                    </div>
                <img src={props.img} className="card-img-top" alt={props.img}/>
                </div>

                <hr />
                <div className="card-body product-body">
                    <span className="star-icon"><i className="fas fa-star"></i> {props.avgRating}</span>
                    <button className="landing-page-button like-btn"> <i class="far fa-heart"></i> </button>
                    <p className="card-text product-name">{props.title}</p>
                    <span className="discnt-price">{props.sellingPrice}/-</span>
                    <span className="original-price">{props.mrp}/-</span>
                    <span className="sold-qty">900</span>
                    {/* <span className="sold">sold</span> */}
                </div>
            </div>
    );
}

export default Product;