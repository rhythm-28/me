import react, { useEffect, useState } from "react";
import styles from "../stylesheets/productPage.css";

import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Admiration from "./admiration.js";
import ThirdNavbar from "./ThirdNavbar.js";
import ProductInfo from "./productInfo.js";
import axios from "axios";

function ProductPage(props){

    const [productData,setProductData] = useState(null);
    const [similarProducts,setSimilarProducts] = useState(null);

    useEffect(()=>{
        const id = props.match.params.productId;
        axios.get(`https://modcrew-dev.herokuapp.com/api/v1/products/${id}`)
            .then((response)=>{
                const fetchedProductData = response.data.data;
                setProductData(fetchedProductData);
            });
    },[productData]);

    useEffect(()=>{
        const category = productData?.category[0];
        console.log(category);
        axios.get(`https://modcrew-dev.herokuapp.com/api/v1/products/?category=${category}`)
            .then((response)=>{
                const similarCategoryProducts = response.data.data;
                console.log(similarCategoryProducts);
                setProductData(similarCategoryProducts);
            });
    });

    return (
        <div className="productPage">
            <Navbar />
            <ThirdNavbar />
            <div className="row ">
                <div className="col productPage-img-div">
                    <img className="product-image" src={productData?.images[0]}/>
                </div>
                <div className="col description-div">
                    <ProductInfo 
                        title={productData?.title}
                        sellingPrice={productData?.sellingPrice}
                        images={productData?.images}
                        description={productData?.description}
                        reviews={productData?.reviews}
                    />
                </div>
            </div>
            <hr />
            <h2 style={{textAlign:'center'}}>Similar Products</h2>

            <Admiration />
            <Footer />
        </div>
    );
}

export default ProductPage;