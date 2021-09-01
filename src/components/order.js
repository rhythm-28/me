import react from "react";
import styles from "../stylesheets/adminPanel.css";

function Order(props){

    const {idx,product,user,shipping,status} = props;

    return (
        <div>
        <div className="row">
            <div className="col-1">
                {idx}
            </div>
            <div className="col-3">
                {user.substring(0,13)}
            </div>
            <div className="col-3">
                {product.substring(0,20)}
            </div>
            <div className="col-3">
                {status}
            </div>
             <div className="col-2">
                {shipping?"true":"false"}
            </div>
        </div>
        <hr />
        </div>
    );
}

export default Order;