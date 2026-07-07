
import CardSlider from "./Components/cardSlider/cardSlider"
// import { BrowserRouter as Router ,Routs ,Link, Routes } from "react-router-dom";


import MenCategory from "./Components/categorySection/category";
// import Heading from "./Components/"

import Heading from "./Components/heading/heading";
import SwiperSection from "./Components/swiper/swiper";
import Curated from "./Components/curated/curated";
// import Button from "./Components/button/button";
import Collection from "./Components/collectionMen/collectionMen";
// import SideBar from "./Components/sideBar/sidebar";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import { menCategory } from "./data/menProducts";
// import CartSideBar from "./Components/cartSideBar/cartSideBar";


import FeatureBar from "./Components/featureBar/featureBar";
import { menProducts } from "./data/menProducts";
import './App.css';
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import WomenPage from "./womenPage";


function MenPage({openCart,sidebarOpen ,setSidebarOpen}) {
  // const menproducts = [
  //   {
  //     image: "new-arrival-img-1.avif",
  //     title: "Black panther:Claws",
  //     category: "Oversized Full sleeve T-Shirts",
  //     price: "1499"
  //   },
  //   {
  //     image: "new-arrival-img-2.avif",
  //     title: "Looney Tunes:IT's Bugs",
  //     category: "Oversized T-Shirts",
  //     price: "1099",
  //   },
  //   {
  //     image: "new-arrival-img-3.avif",
  //     title: "Oversized T-shirt:Wan Blue",
  //     category: "Oversized T-Shirts",
  //     price: "1099"
  //   },
  //   {
  //     image: "new-arrival-img-4.avif",
  //     title: "Cotton Linen:Champagne",
  //     category: "Cotton Linen Shirt",
  //     price: "1799"
  //   },
  //   {
  //     image: "new-arrival-img-3.avif",
  //     title: "Oversized T-shirt:Wan Blue",
  //     category: "Oversized T-Shirts",
  //     price: "1099"
  //   },
  //   {
  //     image: "new-arrival-img-1.avif",
  //     title: "Black panther:Claws",
  //     category: "Oversized Full sleeve T-Shirts",
  //     price: "1499"
  //   },
  //   {
  //     image: "new-arrival-img-4.avif",
  //     title: "Cotton Linen:Champagne",
  //     category: "Cotton Linen Shirt",
  //     price: "1009"
  //   },
  //   {
  //     image: "new-arrival-img-1.avif",
  //     title: "Black panther:Claws",
  //     category: "Oversized Full sleeve T-Shirts",
  //     price: "1499"
  //   },



  // ]
  
  const menSlides1 = [
    { image: "../images/swiper-img-1.avif" },
    { image: "../images/swiper-img-2.avif" },
    { image: "../images/swiper-img-3.avif" },
    { image: "../images/swiper-img-4.avif" },
    { image: "../images/swiper-img-6.avif" },

  ]
  const menSlides2 = [
    { image: "../images/swiper-img-7.avif" },
    { image: "../images/swiper-img-8.avif" },
    { image: "../images/swiper-img-9.avif" },
    { image: "../images/swiper-img-10.avif" },
    { image: "../images/swiper-img-11.avif" },
    { image: "../images/swiper-img-12.avif" },

  ]
  const menSlides3 = [
    { image: "../images/swiper-img-13.avif" },
    { image: "../images/swiper-img-14.avif" },
    { image: "../images/swiper-img-1.avif" },
    { image: "../images/swiper-img-2.avif" },
    { image: "../images/swiper-img-3.avif" },

  ]
  const curatedImg = [
    { image: "../images/men-curated-img-1.avif" },
    { image: "../images/men-curated-img-2.avif" },

    { image: "../images/men-curated-img-3.avif" },
    { image: "../images/men-curated-img-4.avif" },



  ]

  // const images = [
  //   {
  //     default: "./images/men-category-img-1.avif",
  //     hover: "./images/men-category-img-2.avif",
  //     title: "Black panther:Claws",
  //     category: "Oversized Full sleeve T-Shirts",
  //     price: "1499"

  //   },
  //   {
  //     default: "./images/men-category-img-5.avif",
  //     hover: "./images/men-category-img-6.avif", title: "Black panther:Claws",
  //     category: "Oversized Full sleeve T-Shirts",
  //     price: "1499"
  //   },
  //   {
  //     default: "./images/men-category-img-6.avif",
  //     hover: "./images/men-category-img-1.avif", title: "Black panther:Claws",
  //     category: "Oversized Full sleeve T-Shirts",
  //     price: "1499"
  //   },
  //   {
  //     default: "./images/men-category-img-1.avif",
  //     hover: "./images/men-category-img-2.avif", title: "Black panther:Claws",
  //     category: "Oversized Full sleeve T-Shirts",
  //     price: "1499"
  //   },
  //   {
  //     default: "./images/men-category-img-5.avif",
  //     hover: "./images/men-category-img-6.avif", title: "Black panther:Claws",
  //     category: "Oversized Full sleeve T-Shirts",
  //     price: "1499"
  //   },
  //   {
  //     default: "./images/men-category-img-5.avif",
  //     hover: "./images/men-category-img-6.avif",
  //     title: "Black panther:Claws",
  //     category: "Oversized Full sleeve T-Shirts",
  //     price: "1499"
  //   },
  //   {
  //     default: "./images/men-category-img-6.avif",
  //     hover: "./images/men-category-img-1.avif", title: "Black panther:Claws",
  //     category: "Oversized Full sleeve T-Shirts",
  //     price: "1499"
  //   },
  //   {
  //     default: "./images/men-category-img-1.avif",
  //     hover: "./images/men-category-img-2.avif", title: "Black panther:Claws",
  //     category: "Oversized Full sleeve T-Shirts",
  //     price: "1499"
  //   },

  // ]
 
  const menCategories=[
    "Trending",
    "Oversized T-shirts",
    "Shirts",
    "Polos",
    "Hoodies",
    "Jackets",
    "Men Pants",
    "Men Joggers",
    "Men Jackets",
   
  ]
  // const [sideBar, setSideBar] = useState(false);
  // const [cartSideBar ,setCartSideBar]=useState(false);




  return (
    <>

      <div id="men-page">
        
        <Header />
      
        <SwiperSection className="slider1" slides={menSlides1} tag="men"/>
        <SwiperSection className="slider2 hidden" slides={menSlides2} tag="men" />

        <FeatureBar />
        <Heading>LATEST DROPS</Heading>

        <div className="">
          <SwiperSection className="slider" slides={menSlides3} tag="men"></SwiperSection>

        </div>
        <Heading>NEW ARRIVALS</Heading>


        {/* <Link to="/productPage"> */}

        <CardSlider products={menProducts} ></CardSlider>
        {/* </Link> */}
        <Heading>CATEGORIES</Heading>



        <MenCategory cards={menCategory} tag="men"></MenCategory>
        <Heading>CURATED FOR YOU</Heading>

        <Curated image={curatedImg}></Curated>
        <Collection products={menProducts} buttons={menCategories}>
         
        </Collection>

        <Footer></Footer>

      </div>


    </>
  );
}

export default MenPage;

