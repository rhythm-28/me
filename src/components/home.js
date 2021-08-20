import react, { useEffect,useState } from "react";
import Navbar from "./navbar.js";
import styles from "../stylesheets/home.css";
import axios from "axios";
import coupon1 from "../stylesheets/images/coupon1.jpg";
import coupon2 from "../stylesheets/images/coupon2.jpg";
import cover from "../stylesheets/images/cover.jpg";
import Footer from "./footer.js";
import Product from "./product.js";
import offer from "../stylesheets/images/offer.jpg";

function Home(){
    
    // pagination
    const limit = 3;
    const [pageno,setPageno] = useState(1);
    const [noPages,setNoPages] = useState(1);

    const [featured,setFeatured] = useState(false);

    const [categoryData,setCategoryData] = useState(null);
    const [data,setData] =  useState(null);
    const [selectedCategory,setSelectedCategory] = useState('all');

    useEffect(()=>{
        axios.get("https://modcrew-dev.herokuapp.com/api/v1/products")
            .then((response)=>{
                setData(response.data.data);

                // setCategoryData(response.data.data);
                // console.log(response.data.data);
            });
        axios.get(`https://modcrew-dev.herokuapp.com/api/v1/products?limit=${limit}&page=${pageno}`)
        .then((response)=>{
            setCategoryData(response.data.data);
            console.log(response.data.data);
        });
    },[pageno,limit]);

    useEffect(() => {
        setNoPages(categoryData?.length/limit);
        
    },[categoryData,limit,pageno]);

    function handleClick1(){
        setFeatured(false);
    }

    function handleClick2(){
        setFeatured(true);
    }

    function renderLatest(){
        if(data!==null){
            return data.map((product)=>{ 
                return (
                    <Product 
                        avgRating={product.avgRating} 
                        title={product.title} 
                        sellingPrice={product.sellingPrice}
                        mrp={product.mrp}
                        img={product.images[0]}
                    /> 
                );
            })
        }
    }

    function renderFeatured(){
        if(data!==null){
            return data.map((product)=>{
                if(product.isFeatured===true){
                    return (
                        <Product 
                            avgRating={product.avgRating} 
                            title={product.title} 
                            sellingPrice={product.sellingPrice}
                            mrp={product.mrp}
                            img={product.images[0]}
                        /> 
                    );
                } 
            })
        }
    }

    function renderCategoryData(){
        if(categoryData!==null){
            return categoryData.map((product)=>{ 
                return (
                    <Product 
                        avgRating={product.avgRating} 
                        title={product.title} 
                        sellingPrice={product.sellingPrice}
                        mrp={product.mrp}
                        img={product.images[0]}
                    /> 
                );
            })
        }
    }

    function handlePageClick(){
        if(selectedCategory==='all'){
            axios.get(`https://modcrew-dev.herokuapp.com/api/v1/products?limit=${limit}&page=${pageno}`)
            .then((response)=>{
                setCategoryData(response.data.data);
                console.log(response.data.data);
            });
        }
        else{
            
            axios.get(`https://modcrew-dev.herokuapp.com/api/v1/products?category=${selectedCategory}&limit=${limit}&page=${pageno}`)
            .then((response)=>{
                setCategoryData(response.data.data);
                console.log(response.data.data);
            });
        }
    }

    function handleCategoryClick(category){
        setPageno(1);
        if(category==='all'){
            axios.get(`https://modcrew-dev.herokuapp.com/api/v1/products?limit=${limit}&page=${pageno}`)
            .then((response)=>{
                setCategoryData(response.data.data)
                console.log(response.data.data);
            });
        }
        else{
            setSelectedCategory(category);
            axios.get(`https://modcrew-dev.herokuapp.com/api/v1/products?category=${category}&limit=${limit}&page=${pageno}`)
            .then((response)=>{
                setCategoryData(response.data.data)
            });
        }
    }

    const availableCatagories = [
        'collectibles',
        'diary',
        'sticker',
        'badge',
        'key-chain',
        'poster',
        'fashion',
        'active-wear',
        'jogger',
        'jersey',
        'top-wear',
        'henley',
        'round-neck',
        'crop-top',
        'bottom-wear',
        'shorts',
        'accessories',
        'cap',
        'bandana',
        'bag'
    ]

    return (
        <div>
            <Navbar />
            <img className="cover-img" src={cover} />
            <div className="row">
                <img className="col-6 sale-img" src={coupon1} />
                <img className="col-6 sale-img" src={coupon2} />
            </div>
            <div className="row landing-buttons-tray">
                <button className="landing-page-button col" onClick={handleClick1}>New Arrivals </button>
                <button className="landing-page-button col" onClick={handleClick2}> Featured Products</button>
                <button className="landing-page-button col">Best Selling </button>
            </div>
            <div className="row">
                {featured ? renderFeatured(): renderLatest()}
            </div>
            <hr />
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle select-categories-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Categories
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><button onClick={()=>{handleCategoryClick("all")}} className="dropdown-item" >All products</button></li>
                    {availableCatagories.map((category)=>{
                        return (<li><button onClick={()=>{handleCategoryClick(category)}} className="dropdown-item" >{category}</button></li>);
                    })}
                </ul>
            </div>
            <div className="row">
                {renderCategoryData()}
                <button onClick={()=>{
                    setPageno(pageno+1);
                    handlePageClick();
                }}>Hello</button>
            </div>
            <div>
                <h3 className="top-selling" style={{textAlign:'center'}}>Top Selling of the Week</h3>
            </div>
            <img src={offer} className="offer-image" />
            {/* <div className="offer-image"></div> */}
            <button className="admiration-buttons">
                Safe and Secure Checkout
            </button>
            <button className="admiration-buttons">
                NO-HASSLE 
                RETURNS AND EXCHANGES
            </button>
            <button className="admiration-buttons">
                100% SATISFACTION GUARANTEED
            </button>
            
            <Footer />
        </div>
    );
}

export default Home;