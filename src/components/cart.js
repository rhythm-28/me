import react, { useEffect,useState } from "react";
import Navbar from "./navbar.js";
import ThirdNavbar from "./ThirdNavbar.js";
import CartProduct from "./cartProduct.js";

import styles from "../stylesheets/cart.css";
import axios from "axios";
import { useCookies} from 'react-cookie';

function Cart(){

    const [cookies, setCookie, removeCookie,get] = useCookies(['token']);
    const loggedInToken = cookies.token;
    const [items,setItems] = useState(null);
    const [subTotal,setSubTotal] = useState(null);

    useEffect(()=>{
        axios.get("https://modcrew-dev.herokuapp.com/api/v1/cart",{
            headers:{
                'Content-Type':'application/json',
                "Authorization" :`Bearer ${loggedInToken}`
            }
        },{
            withCredentials: true
        })
            .then((response)=>{
                console.log(response.data.data.items);
                setSubTotal(response.data.data.sub_total);
                setItems(response.data.data.items);
            });
    },[]);

    function goToHome(){
        window.location.href="/";
    }

    function removeAllProducts(){
        axios.post("https://modcrew-dev.herokuapp.com/api/v1/cart",
            {
              items: [],
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${loggedInToken}`,
              },
            },
            {
              withCredentials: true,
            }
          )
          .then((response) => {
            console.log("removed all products from cart");
          });
          window.location.href="/cart";
    }

    return (
        <div>
            <Navbar />
            <ThirdNavbar />
            <div className="row">
                <div className="col-8">

                    <div className="cart-main-div">
                        <div className="cart-heading-div">
                            <div><h3>Shopping Cart</h3></div>
                            <div><h3>{items?.length} items</h3></div>
                        </div>
                        <hr />
                        <button onClick={()=>{removeAllProducts()}} className="remove-all">Remove All</button>
                        <div>
                            <div className="row cart-headings">
                                <div className="col-6">
                                    <p>Product Details</p>
                                </div>
                                <div className="col-2">
                                    <p style={{textAlign:'right'}}> Quantity </p>
                                </div>
                                <div className="col-2">
                                    <p style={{textAlign:'right'}}>Price</p>
                                </div>
                                <div className="col-2">
                                    <p style={{textAlign:'right'}}>Total</p>
                                </div>
                            </div>
                            {items?.map((product)=>{
                                return (
                                    <CartProduct
                                        name={product.name}
                                        quantity={product.units}
                                        price={product.selling_price}
                                        total={product.total}
                                        image={product.image}
                                    />
                                );
                            })}
                        </div>
                        <button onClick={()=>{goToHome()}} className="add-new-item">Add New Item</button>
                        <br/>
                        <button onClick={()=>{goToHome()}} className="back-to-home">Back to Home</button>  
                    </div>        
                </div>
                <div className="col-4 cart-second-div">
                    <h3>Order Summary</h3>
                    <hr />
                    <div className="order-summary-heading">
                        <p>{items?.length} items</p>
                        <h6>₹{subTotal}/-</h6>
                    </div>
                    <h5>Shipping</h5>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle cart-dropdowns" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Delivery Type - ₹80
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Delivery Type - ₹80</a></li>
                        </ul>
                    </div>
                    <h5>Promo Code</h5>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle cart-dropdowns" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Enter Promo Code
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Promo Code-1</a></li>
                            <li><a class="dropdown-item" href="#">Promo Code-2</a></li>
                            <li><a class="dropdown-item" href="#">Promo Code-3</a></li>
                        </ul>
                    </div>
                    <button className="cart-coupon-code">Apply</button>
                    <hr />
                    <div className="order-summary-heading">
                        <p>Total Cost</p>
                        <h6>₹{subTotal !==0 ? subTotal+80 : 0}/-</h6>
                    </div>
                    <button className="checkout">Check Out</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;