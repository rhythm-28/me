import react from "react";
import styles from "../stylesheets/productPage.css";

import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Admiration from "./admiration.js";
import SecondNavbar from "./SecondNavbar.js";

function ProductPage(){
    return (
        <div>
            <Navbar />
            <SecondNavbar />
            <h1>This is the specific product Page</h1>
            <Admiration />
            <Footer />
        </div>
    );
}

export default ProductPage;