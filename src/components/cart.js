import react, { useEffect } from "react";
import Navbar from "./navbar.js";
import ThirdNavbar from "./ThirdNavbar.js";

import styles from "../stylesheets/cart.css";
import axios from "axios";
import { useCookies} from 'react-cookie';

function Cart(){
    const [cookies, setCookie, removeCookie,get] = useCookies(['token']);
    const loggedInToken = cookies.token;
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
            });
    },[]);

    return (
        <div>
            <Navbar />
            <ThirdNavbar />
            <h1>This is Cart</h1>
            <div className="row">
                <div className="col-8">
                    <div>
                        <div className="cart-heading-div">
                            <div >
                                <h3>Shopping Cart</h3>
                            </div>
                            <div>
                                items
                            </div>
                        </div>
                        <hr />
                        <div className="">

                        </div>
                    </div>
                    first
                </div>
                <div className="col-4">
                    second
                </div>
            </div>
        </div>
    );
}

export default Cart;