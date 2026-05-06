
import CardSlider from "./Components/cardSlider/cardSlider"
// import { BrowserRouter as Router ,Routs ,Link, Routes } from "react-router-dom";


import MenCategory from "./Components/categorySection/category";
// import Heading from "./Components/"

import Heading from "./Components/heading/heading";
import SwiperSection from "./Components/swiper/swiper";
import Curated from "./Components/curated/curated";
import Button from "./Components/button/button";
import Collection from "./Components/collectionMen/collectionMen";
import SideBar from "./Components/sideBar/sidebar";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";


import FeatureBar from "./Components/featureBar/featureBar";
import './App.css';
import { useState } from "react";
// import WomenPage from "./womenPage";


function SneakerPage() {
    const sneakerProducts = [
        {
            image: "sho-img-1.avif",
            title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },
        {
            image: "sho-img-2.avif",
            title: "Looney Tunes:IT's Bugs",
            category: "Oversized T-Shirts",
            price: "1099",
        },
        {
            image: "sho-img-3.avif",
            title: "Oversized T-shirt:Wan Blue",
            category: "Oversized T-Shirts",
            price: "1099"
        },
        {
            image: "sho-img-4.avif",
            title: "Cotton Linen:Champagne",
            category: "Cotton Linen Shirt",
            price: "1799"
        },
        {
            image: "sho-img-3.avif",
            title: "Oversized T-shirt:Wan Blue",
            category: "Oversized T-Shirts",
            price: "1099"
        },
        {
            image: "sho-img-1.avif",
            title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },
        {
            image: "sho-img-4.avif",
            title: "Cotton Linen:Champagne",
            category: "Cotton Linen Shirt",
            price: "1009"
        },
        {
            image: "sho-img-1.avif",
            title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },



    ]
    const sneakerCategory = [
        { image: "../images/category-sho-img-1.avif" },
        { image: "../images/category-sho-img-2.avif" },
        { image: "../images/category-sho-img-3.avif" },
        { image: "../images/category-sho-img-4.avif" },
        { image: "../images/category-sho-img-5.avif" },
        { image: "../images/category-sho-img-6.avif" },
         { image: "../images/category-sho-img-1.avif" },
        { image: "../images/category-sho-img-2.avif" },
        { image: "../images/category-sho-img-3.avif" },


      
    ]
    const sneakerSlides1 = [
        { image: "../images/sneaker-swiper-img-1.avif" },
        { image: "../images/sneaker-swiper-img-2.avif" },
        { image: "../images/sneaker-swiper-img-3.avif" },
        { image: "../images/sneaker-swiper-img-4.avif" },
        { image: "../images/sneaker-swiper-img-3.avif" },

    

    ]
    const menSlides2 = [
         { image: "../images/sneaker-swiper-img-3.avif" },
        { image: "../images/sneaker-swiper-img-4.avif" },
      { image: "../images/sneaker-swiper-img-1.avif" },
        { image: "../images/sneaker-swiper-img-2.avif" },
          { image: "../images/sneaker-swiper-img-1.avif" },
        

    ]
    const sneakerSlides3 = [
          { image: "../images/sneaker-swiper-img-3.avif" },
        { image: "../images/sneaker-swiper-img-4.avif" },
      { image: "../images/sneaker-swiper-img-1.avif" },
        { image: "../images/sneaker-swiper-img-2.avif" },
          { image: "../images/sneaker-swiper-img-1.avif" },
     

    ]
    const curatedImg = [
        { image: "../images/men-curated-img-1.avif" },
        { image: "../images/men-curated-img-2.avif" },

        { image: "../images/men-curated-img-3.avif" },
        { image: "../images/men-curated-img-4.avif" },

     

    ]

    const images = [
        {
            default: "./images/men-category-img-1.avif",
            hover: "./images/men-category-img-2.avif",
            title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"

        },
        {
            default: "./images/men-category-img-5.avif",
            hover: "./images/men-category-img-6.avif", title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },
        {
            default: "./images/men-category-img-6.avif",
            hover: "./images/men-category-img-1.avif", title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },
        {
            default: "./images/men-category-img-1.avif",
            hover: "./images/men-category-img-2.avif", title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },
        {
            default: "./images/men-category-img-5.avif",
            hover: "./images/men-category-img-6.avif", title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },
        {
            default: "./images/men-category-img-5.avif",
            hover: "./images/men-category-img-6.avif",
             title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },
        {
            default: "./images/men-category-img-6.avif",
            hover: "./images/men-category-img-1.avif", title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },
        {
            default: "./images/men-category-img-1.avif",
            hover: "./images/men-category-img-2.avif", title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },

    ]
    const sideBarImages = [
        {
            image: "sidebar-img-1.avif",
            title: "Summer Home",
    
        },
        {
            image: "sidebar-img-4.avif",
            title: "Hot Merch",
        
        },
        {
            image: "sidebar-img-3.avif",
            title: "collab Kicks",
         
        },
        {
            image: "sidebar-img-4.avif",
            title: "Culter Code",
   
        },
         {
            image: "sidebar-img-1.avif",
            title: "Summer Home",
    
        },
        {
            image: "sidebar-img-4.avif",
            title: "Hot Merch",
        
        },
        {
            image: "sidebar-img-3.avif",
            title: "collab Kicks",
         
        },
        {
            image: "sidebar-img-4.avif",
            title: "Culter Code",
   
        },
       



    ]
    const sneakersCategory=[
     'Trending',
      'Men High Top Sneakers',
      'Men Low Top Sneakers',
      'Men Mid Top Sneakers',
      'Women Mid Top Sneakers',
      'Women Low Top Sneakers',
      'Socks'
  ]
    const [sideBar ,setSideBar]=useState(false);

    return (
        <>
   
        <div id="men-page">
            {/* <Header></Header> */}
            {/* <Header/> */}
            <Header toggleSideBar={()=>setSideBar(true)} />

            <SideBar isOpen={sideBar} closeSideBar={()=>setSideBar(false)}>
                <CardSlider products={sideBarImages} ></CardSlider>
                
            <MenCategory cards={sneakerCategory}></MenCategory>
                <CardSlider products={sideBarImages} ></CardSlider>

                
            </SideBar>
            {/* <div className="max-w-[1500px] flex flex-col justify-center items-center"> */}
            {/* <HeroSection /> */}
            <SwiperSection className="slider1" slides={sneakerSlides1} />
            <SwiperSection className="slider2 hidden" slides={menSlides2} />

            <FeatureBar />
            <Heading> DROP ZONE</Heading>

            <div className="pagination">
                <SwiperSection slides={sneakerSlides3}></SwiperSection>

            </div>
            <Heading>FRESH OUT THE LAB</Heading>



            <CardSlider products={sneakerProducts} ></CardSlider>
            <Heading>CATEGORIES</Heading>



            <MenCategory cards={sneakerCategory}></MenCategory>
            <Heading>CURATED FOR YOU</Heading>

            <Curated image={curatedImg}></Curated>
            <Collection products={sneakerProducts} buttons={sneakersCategory}>
               
            </Collection>

            <Footer></Footer>

            </div>


        </>
    );
}

export default SneakerPage;
