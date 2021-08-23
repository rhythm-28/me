import react,{useState } from "react";
import styles from "../stylesheets/productInfo.css";

import { TiAttachmentOutline } from 'react-icons/ti';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterFill } from 'react-icons/ri';
import { AiOutlineGoogle } from 'react-icons/ai';

function ProductInfo(props){
    const {title,sellingPrice,description,images,reviews} = props;
    const [quantity,setQuantity] = useState(1);

    function handleChange(event){
        const newQty = event.target.value;
        const newQtyInt = parseInt(newQty);
        setQuantity(newQtyInt);
    }

    return (
        <div className="product-info">
            <span className="title">
                {title}
            </span>
            <span className="selling-price">
                ₹{sellingPrice}/-
            </span>
            <div className="prodctInfoPage-btns">
                <span className="productsize-btns">
                    <button className="productsize-btn">
                        Size 01
                    </button>
                    <button className="productsize-btn">
                        Size 02
                    </button>
                    <button className="productsize-btn">
                        Size 03
                    </button>
                </span>
                <span className="productcolours">
                    <button className="productcolour-btn-1">
                        
                    </button>
                    <button className="productcolour-btn-2">
                        
                    </button>
                    <button className="productcolour-btn-3">
                        
                    </button>
                </span>
                <span className="qty-sold">900 sold</span>
            </div>
            <p className="product-description">{description}</p>
            <span>
                <button className="productInfo-qty-btns" onClick={()=>{
                    if(quantity>0)
                    setQuantity(quantity-1)
                }}>-</button>
                <input className="productInfo-product-qty" value={quantity} onChange={(e)=>{handleChange(e)}}></input>
                <button className="productInfo-qty-btns" onClick={()=>{setQuantity(quantity+1)}}>+</button>
                <button className="add-to-cart">Add to Cart</button>
            </span>
            <br />
            <span className="comment-review-social">
                <button className="comments">Comments({reviews?.length})</button>
                <button className="review">Post a review</button>
                <span className="productPage-social-tray">
                    Share this:
                    <button className="productPage-social-icons"><TiAttachmentOutline size={25} className="white-color"/></button>
                    <button className="productPage-social-icons"><AiOutlineGoogle size={25} className="white-color"/></button>
                    <button className="productPage-social-icons"><FaFacebookF size={25}className="white-color"/></button>
                    <button className="productPage-social-icons"><RiTwitterFill size={25} className="white-color"/></button>
                </span>
            </span>
            <hr />
        </div>
    );
}

export default ProductInfo;