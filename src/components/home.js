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
import Carousel from "./carousel.js";

function Home(){
    
    const limit = 1;
    const [pageno,setPageno] = useState(1);
    const [featured,setFeatured] = useState(false);
    
    const [typeOfProducts,setTypeOfProducts] = useState(1);

    const [specificCategoryData,setSpecificCategoryData] = useState(null);

    const [categoryData,setCategoryData] = useState(null);
    const [data,setData] =  useState(null);
    const [selectedCategory,setSelectedCategory] = useState('all');

    const [clickedBtn,setClickedBtn] = useState(1);

    useEffect(()=>{
        axios.get("https://modcrew-dev.herokuapp.com/api/v1/products")
            .then((response)=>{
                setData(response.data.data);

                setCategoryData(response.data.data);
            });
    },[]);

    

    function handleClick1(e){
        setFeatured(false);
        setTypeOfProducts(1);
    }

    function handleClick2(){
        setFeatured(true);
        setTypeOfProducts(2);
    }

    function handleClick3(){
        setTypeOfProducts(3);
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
            return specificCategoryData?.map((product)=>{ 
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

    function handleCategoryClick(category){
        setPageno(1);
        setCategoryData([]);
        if(category==='all'){
            setSelectedCategory("all");
            axios.get(`https://modcrew-dev.herokuapp.com/api/v1/products`)
            .then((response)=>{
                setCategoryData(response.data.data);
            });
        }
        else{
            setSelectedCategory(category);
            axios.get(`https://modcrew-dev.herokuapp.com/api/v1/products?category=${category}`)
            .then((response)=>{
                setCategoryData(response.data.data);
            });
        }
    }

    useEffect(()=>{
        if(selectedCategory==='all'){
            axios.get(`https://modcrew-dev.herokuapp.com/api/v1/products?limit=${limit}&page=${pageno}`)
        .then((response)=>{
            setSpecificCategoryData(response.data.data);
        });
        }
        else{
            axios.get(`https://modcrew-dev.herokuapp.com/api/v1/products?category=${selectedCategory}&limit=${limit}&page=${pageno}`)
            .then((response)=>{
                setSpecificCategoryData(response.data.data);
            });
        }
    },[pageno,selectedCategory]);

    function makingPaginationButtons(){
        if(categoryData?.length>0){
            let noOfPages = 0;
            noOfPages = Math.ceil(categoryData.length/limit);

            var pagination = [];
            for(var i=1;i<=noOfPages;i++){
                pagination.push(
                    <button value={i} onClick={(e)=>{setPageno(parseInt(e.target.value))}}>{i}</button>
                );
            }
        }
        return pagination;
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
                <button id="landing-1" value={1} onClick={(e) => {handleClick1(e)}} className={typeOfProducts===1 ? "landing-page-button landing-page-red col" : "landing-page-button col"} >New Arrivals </button>
                <button id="landing-2" value={2} onClick={(e) => {handleClick2(e)}} className={typeOfProducts===2 ? "landing-page-button landing-page-red col" : "landing-page-button col"} > Featured Products</button>
                <button id="landing-3" value={3} onClick={(e) => {handleClick3(e)}} className={typeOfProducts===3 ? "landing-page-button landing-page-red col" : "landing-page-button col"} >Best Selling </button>
            </div>
            <div className="row product-div">
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
            <div className="row category-div">
                {renderCategoryData()}
            </div>
            <div className="pagination-btns" key={categoryData?.length}>
                {makingPaginationButtons()}
            </div>
            <div>
                <h3 className="top-selling" style={{textAlign:'center'}}>Top Selling of the Week</h3>
            </div>
            <Carousel />
            <div className="row admire-buttons">
                <button className="admiration-buttons col-3">
                    Safe and Secure Checkout
                </button>
                <button className="admiration-buttons col-3">
                    NO-HASSLE 
                    RETURNS AND EXCHANGES
                </button>
                <button className="admiration-buttons col-3">
                    100% SATISFACTION GUARANTEED
                </button>
            </div>
            
            
            <Footer />
        </div>
    );
}

export default Home;