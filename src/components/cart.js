import react, { useEffect,useState } from "react";
import Navbar from "./navbar.js";
import ThirdNavbar from "./ThirdNavbar.js";
import CartProduct from "./cartProduct.js";
import OrderSummaryProduct from "./orderSummaryProduct.js";

import styles from "../stylesheets/cart.css";
import axios from "axios";
import { useCookies} from 'react-cookie';

function Cart(){

    const [cookies, setCookie, removeCookie,get] = useCookies(['token']);
    const loggedInToken = cookies.token;
    const [items,setItems] = useState(null);
    const [subTotal,setSubTotal] = useState(null);
    const [stage,setStage] = useState("Check Out");

    const [address,setAddress] = useState(null);
    const [city,setCity] = useState(null);
    const [state,setState] = useState(null);
    const [country,setCountry] = useState(null);
    const [pinCode,setPinCode] = useState(null);

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

    async function handleCheckOut(){
        if(stage==="Check Out"){
            setStage("Purchase");
        }
        else{
            console.log("lets razorpay now");

            // 1) get user data
            const response1 = await axios.get("https://modcrew-dev.herokuapp.com/api/v1/auth/me",{
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${loggedInToken}`,
                    },
                  },
                  {
                    withCredentials: true,
                  }
                );
            const data1 = response1.data.data;
            console.log("response1",data1);

            // 2) create order
            const response2 = await axios.post("https://modcrew-dev.herokuapp.com/api/v1/orders",{
                    "customer_name": data1.firstName,
                    "address": address,
                    "city": city,
                    "pincode": pinCode,
                    "state": state,
                    "country": country,
                    "email": data1.email,
                    "phone": data1.phone
                },{
                    headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${loggedInToken}`
                  }
                },
                {
                  withCredentials: true,
                }
            );
            console.log("response2",response2);
            const _id = response2.data.data._id;
            console.log("_id",_id);
            
            // 3) api/v1/_id/pay
            const response3 = await axios.post(`https://modcrew-dev.herokuapp.com/api/v1/orders/${_id}/pay`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${loggedInToken}`
                  }
            },{
                withCredentials: true,
            });

            console.log("response-3",response3.data.data);
            const id = response3.data.data.id;
            
            // 4) razorpay


            // 5) get order summary
            const response5 = await axios.get(`https://modcrew-dev.herokuapp.com/api/v1/orders/${_id}`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${loggedInToken}`
                  }
            },{
                withCredentials: true,
            });
            console.log("response5",response5.data.data);
        }
    }

    function handlePurchase(){
        setStage("Check Out");
    }

    function handleChange1(event) {
        const newQty = event.target.value;
        setAddress(newQty);
        // console.log(address);
    }
    function handleChange2(event) {
        const newQty = event.target.value;
        setCity(newQty);
        // console.log(city);
    }
    function handleChange3(event) {
        const newQty = event.target.value;
        setState(newQty);
        // console.log(state);
    }
    function handleChange4(event) {
        const newQty = event.target.value;
        setCountry(newQty);
        // console.log(newQty);
    }
    function handleChange5(event) {
        const newQty = event.target.value;
        setPinCode(newQty);
        // console.log(pinCode);
    }

    function renderCart(){
        return (
                        <div>
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
        );
    }

    function renderPurchaseSection(){
        return (
            <div>
                <button onClick={()=>{handlePurchase()}}>Back</button>
                <hr />
                <div>
                    <div className="cart-login-div">
                        <input type="radio" checked/>
                        <label> &nbsp; Login / Signup</label>
                    </div>
                    <div className="cart-login-div">
                            <input type="radio"/>
                            <label> &nbsp; Add Address</label>
                            <br />
                            <input className="cart-address" type="text" placeholder="address" name="address" value={address} onChange={(e)=>{handleChange1(e)}}/>
                            <input className="cart-other-address-details" type="text" placeholder="city" name="city" value={city} onChange={(e)=>{handleChange2(e)}}/>
                            <input className="cart-other-address-details" type="text" placeholder="state" name="state" value={state} onChange={(e)=>{handleChange3(e)}}/>
                            <input className="cart-other-address-details" type="text" placeholder="country" name="country" value={country} onChange={(e)=>{handleChange4(e)}}/>
                            <input className="cart-other-address-details" type="number" placeholder="pinCode" name="pinCode" value={pinCode} onChange={(e)=>{handleChange5(e)}}/>
                    </div>
                        <div className="cart-login-div">
                            <input type="radio"/>
                            <label> &nbsp; Payment</label>
                        </div>
                        <div className="cart-login-div">
                            <input type="radio"/>
                            <label> &nbsp; Confirmation</label>
                        </div>
                </div>
            </div>
        );
    }

    function renderShippingDetails(){
        return (
            <div>
                <div className="order-summary-heading">
                        <p>{items?.length} items</p>
                        <h6>₹{subTotal}/-</h6>
                    </div>
                    <h5>Shipping</h5>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle cart-dropdowns" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Delivery Type - ₹80
                        </button>
                        <ul class="dropdown-menu cart-li" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Delivery Type - ₹80</a></li>
                        </ul>
                    </div>
                    <h5>Promo Code</h5>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle cart-dropdowns" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Enter Promo Code
                        </button>
                        <ul class="dropdown-menu cart-li" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Promo Code-1</a></li>
                            <li><a class="dropdown-item" href="#">Promo Code-2</a></li>
                            <li><a class="dropdown-item" href="#">Promo Code-3</a></li>
                        </ul>
                    </div>
                    <button className="cart-coupon-code">Apply</button>
            </div>
        );
    }

    function renderCartProducts(){
        return (
            <div>
                {items?.map((product)=>{
                    return (
                        <OrderSummaryProduct
                            name={product.name}
                            quantity={product.units}
                            price={product.selling_price}
                            total={product.total}
                            image={product.image}
                        />
                    );
                })}
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <ThirdNavbar />
            <div className="row">
                <div className="col-8">
                    <div className="cart-main-div">
                        {stage==="Check Out" ? renderCart() : renderPurchaseSection()}
                    </div>        
                </div>
                <div className="col-4 cart-second-div">
                <h3>Order Summary</h3>
                    <hr />
                    {stage==="Check Out" ? renderShippingDetails() : renderCartProducts()}
                    
                    <hr />
                    <div className="order-summary-heading">
                        <p>Total Cost</p>
                        <h6>₹{subTotal !==0 ? subTotal+80 : 0}/-</h6>
                    </div>
                    <button onClick={()=>{handleCheckOut()}} className="checkout">{stage}</button>
                    {/* <CartSummary 
                        items={items}
                        subTotal={subTotal}
                    /> */}
                </div>
            </div>
        </div>
    );
}

export default Cart;