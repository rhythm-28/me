import react,{useState, useEffect } from "react";
import styles from "../stylesheets/productInfo.css";

import axios from "axios";

import { TiAttachmentOutline } from 'react-icons/ti';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterFill } from 'react-icons/ri';
import { AiOutlineGoogle } from 'react-icons/ai';

import { useCookies} from 'react-cookie';

function ProductInfo(props){

    const [cookies, setCookie, removeCookie,get] = useCookies(['token']);
    const {title,sellingPrice,description,images,reviews,id,variations} = props;
    const [quantity,setQuantity] = useState(1);
    const [currentCartQty,setCurrentCartQty] = useState(null);
    const [rating,setRating] = useState(null);
    const [reviewTitle,setReviewTitle] = useState(null);
    const [reviewBody,setReviewBody]= useState(null);

    let defaultItems = [];
    if(localStorage.getItem("items")){
        defaultItems = [...JSON.parse(localStorage.getItem("items"))];
    }

    const [items,setItems] = useState(localStorage.getItem("items") ? [...JSON.parse(localStorage.getItem("items"))] :[]);
    const loggedInToken = cookies.token;
    
    // useEffect(()=>{
    //     if(loggedInToken){
    //         axios.get("https://modcrew-dev.herokuapp.com/api/v1/cart",{
    //             headers:{
    //                 'Content-Type':'application/json',
    //                 "Authorization" :`Bearer ${loggedInToken}`
    //             }
    //         },{
    //             withCredentials: true
    //             })
    //         .then((response)=>{
    //             setQuantity(response.data.data.items[0].units);
    //             //console.log("current",response.data.data);
    //         });
    //     }else{
    //         const itemsData = JSON.parse(localStorage.getItem("items"));
    //         const requiredItem = itemsData?.filter((itemsInsides)=>{
    //             return itemsInsides.productId === id;
    //         });
    //         if(requiredItem){
    //             setQuantity(requiredItem.units);
    //         }
    //     }
    // },[])

    // useEffect(()=>{
    //     localStorage.setItem("items",JSON.stringify(items));
    // },[items]);

    function handleChange(event){
        const newQty = event.target.value;
        const newQtyInt = parseInt(newQty);
        setQuantity(newQtyInt);
    }

    function handleReviewSubmit(e){
        e.preventDefault();
        axios.post(`https://modcrew-dev.herokuapp.com/api/v1/products/${id}/reviews`,{
                "rating": rating,
                "title": reviewTitle,
                "body": reviewBody
            }
        )
            .then((response)=>{
                console.log(response);
            })
        const element = document.getElementById("post-review");
        element.classList.add("d-none");
    }

    function handlePostReviewVisisble(){
        const element = document.getElementById("post-review");
        element.classList.remove("d-none");
    }

    function handlePostReviewHidden(){
        const element = document.getElementById("post-review");
        element.classList.add("d-none");
    }

    function handleAddToCartBtn(){
        if(loggedInToken){
            axios.post("https://modcrew-dev.herokuapp.com/api/v1/cart",{
            "items": [
                {
                    "productId": id,
                    "sku": variations[0].sku,
                    "units": quantity
                }
            ]
        },
        {
            headers:{
                'Content-Type':'application/json',
                "Authorization" :`Bearer ${loggedInToken}`
            }
        },{
            withCredentials: true
        })
        .then((response)=>{
            console.log(response.data.data);
        });
        }else{
            window.location.href="../login";
        }   

        // }
        // else{
        //     console.log("items array",items);
        //     let requiredIndex=-1;
        //     items?.forEach((itemsInside,index)=>{
        //         if(itemsInside.productId === id){
        //             requiredIndex = index;
        //         }
        //     });

        //     if(requiredIndex!==-1){
        //         let x = items;
        //         x[requiredIndex] = {
        //             productId: id,
        //             sku: variations[0].sku,
        //             units: quantity
        //         };
        //         console.log("quantity",quantity);
        //         setItems(x);
        //         console.log("here",items);
        //     }else{
        //         setItems([...items,{
        //             productId: id,
        //             sku: variations[0].sku,
        //             units: quantity
        //         }]);
        //     }
        //     console.log("something");
        // }
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
                    <button className="productsize-btn default-size">
                        Size 01
                    </button>
                    <button className="productsize-btn" onClick={()=>{console.log("in div",items)}}>
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
                <button className="productInfo-qty-btns" onClick={()=>{
                    if(quantity<10)
                    setQuantity(quantity+1)
                    }}>+</button>
                <button onClick={()=>{handleAddToCartBtn()}} className="add-to-cart">Add to Cart</button>
            </span>
            <br />
            <span className="comment-review-social">
                <button onClick={()=>{handlePostReviewHidden()}} className="comments">Comments({reviews?.length})</button>
                <button onClick={()=>{handlePostReviewVisisble()}} className="review">Post a review</button>
                <span className="productPage-social-tray">
                    Share this:
                    <button className="productPage-social-icons"><TiAttachmentOutline size={25} className="white-color"/></button>
                    <button className="productPage-social-icons"><AiOutlineGoogle size={25} className="white-color"/></button>
                    <button className="productPage-social-icons"><FaFacebookF size={25}className="white-color"/></button>
                    <button className="productPage-social-icons"><RiTwitterFill size={25} className="white-color"/></button>
                </span>
            </span>
            <hr />
            <div className="d-none" id="post-review">
                <form>
                    <input onChange={(e)=>{setRating(e.target.value)}} type="number" placeholder="Rating"></input>
                    <input onChange={(e)=>{setReviewTitle(e.target.value)}} type="text" placeholder="Title"></input>
                    <input onChange={(e)=>{setReviewBody(e.target.value)}} type="text" placeholder="Write your review here"></input>
                    <button onClick={(e)=>{handleReviewSubmit(e)}} type="submit">Submit Review</button>
                </form>
            </div>
        </div>
    );
}

export default ProductInfo;