import react from "react";
import styles from "../stylesheets/product.css";
import cover from "../stylesheets/images/cover.jpg";
function Product(props){
    return (
            <div className="card product-card col-3">
                <img src={props.img} className="card-img-top" alt="..." />
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