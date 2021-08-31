import react from "react";
import styles from "../stylesheets/addProduct.css";

function NewUser(props){

    const {name,email} = props;

    return (
        <div className="row">
            <div className="col-9">
                <h6>{name}</h6>
                <p>{email}</p>
            </div>
            <div className="col-2">
                <button>More</button>
            </div>
            <hr />
        </div>
    );
}

export default NewUser;