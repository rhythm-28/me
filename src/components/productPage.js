import react, { useEffect, useState } from "react";
import styles from "../stylesheets/productPage.css";

import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Admiration from "./admiration.js";
import SecondNavbar from "./SecondNavbar.js";
import axios from "axios";

function ProductPage(props){

    const [productData,setProductData] = useState(null);

    useEffect(()=>{
        const id = props.match.params.productId;
        axios.get(`https://modcrew-dev.herokuapp.com/api/v1/products/${id}`)
            .then((response)=>{
                const fetchedProductData = response.data.data;
                // console.log(fetchedProductData);
                setProductData(fetchedProductData);
            });
    },[productData]);

    return (
        <div>
            <Navbar />
            <SecondNavbar />
            <h1>{productData?.title}</h1>
            <h1>{productData?.sellingPrice}</h1>
            <h1>{productData?.description}</h1>
            <img src={productData?.images[0]}/>
            <Admiration />
            <Footer />
        </div>
    );
}

export default ProductPage;