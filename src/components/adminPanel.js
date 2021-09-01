import react,{useState, useEffect} from "react";
import styles from "../stylesheets/adminPanel.css";
import { useCookies} from 'react-cookie';

import Navbar from "./navbar.js";
import NewUser from "./newUser.js";
import Order from "./order.js";

import home from "../icons/home.svg";
import customers from "../icons/customers.svg";
import orders from "../icons/orders2.svg";
import product from "../icons/product.svg";
import inventory from "../icons/inventory.svg";
import add from "../icons/add.svg";
import logout from "../icons/logout2.svg";

import arrowUp from "../icons/arrowUp.svg";
import axios from "axios";

function AdminPanel(){

    const [cookies, setCookie, removeCookie,get] = useCookies(['token']);
    const loggedInToken = cookies.token;

    const [current,setCurrent] = useState("dashboard");
    const [allUsers,setAllUsers] = useState(null);
    const [allOrders,setAllOrders] = useState(null);
    
    function Logout(){
        removeCookie("token");
        window.location.href="/";
    }

    useEffect(()=>{
        axios.get("https://modcrew-dev.herokuapp.com/api/v1/users",{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${loggedInToken}`,
              },
            },
            {
              withCredentials: true,
            })  
            .then((response)=>{
                //console.log(response.data.data);
                setAllUsers(response.data.data);
            });
        },[])
    
        useEffect(()=>{
            axios.get("https://modcrew-dev.herokuapp.com/api/v1/orders",{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${loggedInToken}`,
                  },
                },
                {
                  withCredentials: true,
                })  
                .then((response)=>{
                    //console.log(response.data.data);
                    setAllOrders(response.data.data);
                });
            },[])

    function renderUsers(){
        return (
            allUsers?.map((user,idx)=>{
                if(idx<5){
                    return (
                        <NewUser 
                            name={user.firstName}
                            email={user.email}
                        />
                    );
                }
            })  
        );
    }

    function renderAllOrders(){
        const orders = [];
        var i;
        var j;
        var k = 0;
        for(i=0;i<allOrders?.length;i++){
            for(j=0;j<allOrders[i]?.order_items?.length;j++){
                if(k<4){
                    orders.push(
                        {
                            idx : k+1,
                            product : allOrders[i]?.order_items[j]?.name,
                            user : allOrders[i]?.user,
                            shipping : allOrders[i]?.shipping_is_billing,
                            status : allOrders[i]?.status
                        }
                    );
                    k = k+1;
                }
            }
        }
        console.log("orders",orders);
        return (
            orders.map((particular)=>{
                return (
                    <Order 
                        idx = {particular.idx}
                        product = {particular.product}
                        user = {particular.user}
                        shipping = {particular.shipping}
                        status = {particular.status}
                    />
                )
            })
        );
    }

    function renderDashboard(){
        return (
            <div>
                <h5>Admin Dashboard</h5>
                <br/>
                <div className="row">
                    <div className="col-3 admin-top" style={{backgroundColor:'#0075FF'}}>
                        <p style={{color:'black'}}>New Orders</p>
                        <h6>₹2,34,567/-</h6>
                        <p>5.43%<img src={arrowUp} /></p>
                    </div>
                    <div className="col-3 admin-top" style={{backgroundColor:'#8862E0'}}>
                        <p style={{color:'black'}}>Total Income</p>
                        <h6>₹2,34,567/-</h6>
                        <p>5.43%<img src={arrowUp} /></p>
                    </div>
                    <div className="col-3 admin-top" style={{backgroundColor:'#2196F3'}}>
                        <p style={{color:'black'}}>Total Expense</p>
                        <h6>₹2,34,567/-</h6>
                        <p>5.43%<img src={arrowUp} /></p>
                    </div>
                    <div className="col-3 admin-top" style={{backgroundColor:'#FFAF00'}}>
                        <p style={{color:'black'}}>New Users</p>
                        <h6>₹2,34,567/-</h6>
                        <p>5.43%<img src={arrowUp} /></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 new-users-div">
                        <h5 className="new-users-heading">New Users Registered</h5>
                        <div className="new-users">
                            {renderUsers()}
                        </div>
                    </div>
                    <div className="col-8 latest-orders-div">
                        <h5 className="latest-users-heading">Order Overview</h5>
                        <div className="latest-orders">
                            <div className="row">
                                <div className="col-1" style={{fontWeight:'bold'}}>
                                    No.
                                </div>
                                <div className="col-3" style={{fontWeight:'bold'}}>
                                    User
                                </div>
                                <div className="col-3" style={{fontWeight:'bold'}}>
                                    Product
                                </div>
                                <div className="col-3" style={{fontWeight:'bold'}}>
                                    Status
                                </div>
                                <div className="col-2" style={{fontWeight:'bold'}}>
                                    Shipping
                                </div>
                            </div>
                            <hr />
                            {renderAllOrders()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function renderCustomers(){
        return (
            <div>
                2
            </div>
        );
    }

    function renderOrders(){
        return (
            <div>
                3
            </div>
        );
    }

    function renderProduct(){
        return (
            <div>
                4
            </div>
        );
    }

    function renderInventory(){
        return (
            <div>
                5
            </div>
        );
    }

    function renderAddProduct(){
        return (
            <div>
                6
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col-3 admin-menu">
                    <button className="admin-menu-btns" onClick={()=>{setCurrent("dashboard")}}><img src={home} /> &nbsp; &nbsp; &nbsp; Dashboard</button><br />
                    <button className="admin-menu-btns" onClick={()=>{setCurrent("customers")}}><img src={customers} /> &nbsp; &nbsp; &nbsp; Customers</button><br />
                    <button className="admin-menu-btns" onClick={()=>{setCurrent("orders")}}><img src={orders} /> &nbsp; &nbsp; &nbsp; Orders</button><br />
                    <button className="admin-menu-btns" onClick={()=>{setCurrent("product")}}><img src={product} /> &nbsp; &nbsp; &nbsp; Product</button><br />
                    <button className="admin-menu-btns" onClick={()=>{setCurrent("inventory")}}><img src={inventory} /> &nbsp; &nbsp; &nbsp; Inventory</button><br />
                    <button className="admin-menu-btns" onClick={()=>{setCurrent("addProduct")}}><img src={add} /> &nbsp; &nbsp; &nbsp; Add Product</button><br />
                    <button className="admin-menu-btns" onClick={Logout}><img src={logout} /> &nbsp; &nbsp; &nbsp; Logout</button>
                </div>
                <div className="col-9 admin-main">
                    {current==="dashboard" && renderDashboard()}
                    {current==="customers" && renderCustomers()}
                    {current==="orders" && renderOrders()}
                    {current==="product" && renderProduct()}
                    {current==="inventory" && renderInventory()}
                    {current==="addProduct" && renderAddProduct()}
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;