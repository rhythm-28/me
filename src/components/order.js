import react from "react";
import styles from "../stylesheets/order.css";

function Order(props){

    const {product,user,shipping,status} = props;

    return (
        <div>
            <h1>This is Order page</h1>
            <h2>product</h2>
            <h2>user</h2>
            <h2>shipping</h2>
            <h2>status</h2>
        </div>
    );
}

export default Order;