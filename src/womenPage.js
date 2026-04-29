
import CardSlider from "./Components/cardSlider/cardSlider"

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



function WomenPage() {
    const womenProducts = [
        {
            image: "women-new-arrival-img-1.avif",
            title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },
        {
            image: "women-new-arrival-img-2.avif",
            title: "Looney Tunes:IT's Bugs",
            category: "Oversized T-Shirts",
            price: "1099",
        },
        {
            image: "women-new-arrival-img-3.avif",
            title: "Oversized T-shirt:Wan Blue",
            category: "Oversized T-Shirts",
            price: "1099"
        },
        {
            image: "women-new-arrival-img-4.avif",
            title: "Cotton Linen:Champagne",
            category: "Cotton Linen Shirt",
            price: "1799"
        },
        
           {
            image: "women-new-arrival-img-1.avif",
            title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },
        {
            image: "women-new-arrival-img-2.avif",
            title: "Looney Tunes:IT's Bugs",
            category: "Oversized T-Shirts",
            price: "1099",
        },
        {
            image: "women-new-arrival-img-3.avif",
            title: "Oversized T-shirt:Wan Blue",
            category: "Oversized T-Shirts",
            price: "1099"
        },
        {
            image: "women-new-arrival-img-4.avif",
            title: "Cotton Linen:Champagne",
            category: "Cotton Linen Shirt",
            price: "1799"
        },



    ]
    const womenCategory = [
        { image: "../images/category-img-1.avif" },
        { image: "../images/category-img-2.avif" },
        { image: "../images/category-img-3.avif" },
        { image: "../images/category-img-4.avif" },
           { image: "../images/category-img-1.avif" },
        { image: "../images/category-img-2.avif" },
        
    ]
    const womenSlides1 = [
        { image: "../images/women-swiper-img-1.avif" },
        { image: "../images/women-swiper-img-2.avif" },
        { image: "../images/women-swiper-img-1.avif" },
        { image: "../images/women-swiper-img-2.avif" },
        { image: "../images/women-swiper-img-1.avif" },
        { image: "../images/women-swiper-img-2.avif" },
   

    ]
    const womenSlides2 = [
        { image: "../images/women-swiper-img-3.avif" },
        { image: "../images/women-swiper-img-4.avif" },
         { image: "../images/women-swiper-img-3.avif" },
        { image: "../images/women-swiper-img-4.avif" },
         { image: "../images/women-swiper-img-3.avif" },
        { image: "../images/women-swiper-img-4.avif" },
         { image: "../images/women-swiper-img-3.avif" },
        { image: "../images/women-swiper-img-4.avif" },

    ]
    const womenSlides3 = [
        { image: "../images/women-swiper-img-5.avif" },
        { image: "../images/women-swiper-img-6.avif" },
           { image: "../images/women-swiper-img-5.avif" },
        { image: "../images/women-swiper-img-6.avif" },
           { image: "../images/women-swiper-img-5.avif" },
        { image: "../images/women-swiper-img-6.avif" },

        

    ]
    const curatedImg = [
        { image: "../images/women-curated-img-1.avif" },
        { image: "../images/women-curated-img-2.avif" },
        { image: "../images/women-curated-img-3.avif" },
        { image: "../images/women-curated-img-4.avif" },

     

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
            image: "sidebar-img-5.avif",
            title: "Summer Home",
    
        },
        {
            image: "sidebar-img-6.avif",
            title: "Hot Merch",
        
        },
        {
            image: "sidebar-img-7.avif",
            title: "collab Kicks",
         
        },
        {
            image: "sidebar-img-8.avif",
            title: "Culter Code",
   
        },
         {
            image: "sidebar-img-5.avif",
            title: "Summer Home",
    
        },
        {
            image: "sidebar-img-6.avif",
            title: "Hot Merch",
        
        },
        {
            image: "sidebar-img-7.avif",
            title: "collab Kicks",
         
        },
        {
            image: "sidebar-img-8.avif",
            title: "Culter Code",
   
        },
       



    ]
    const [sideBar ,setSideBar]=useState(false);

    return (
        <>
        <div id="women-page">

     
            {/* <Header></Header> */}
            {/* <Header/> */}
            <Header toggleSideBar={()=>setSideBar(true)} />

            <SideBar isOpen={sideBar} closeSideBar={()=>setSideBar(false)}>
                <CardSlider products={sideBarImages} ></CardSlider>
                
            <MenCategory cards={womenCategory}></MenCategory>
                <CardSlider products={sideBarImages} ></CardSlider>

                
            </SideBar>
            {/* <div className="max-w-[1500px] flex flex-col justify-center items-center"> */}
            {/* <HeroSection /> */}
            <SwiperSection className="slider1" slides={womenSlides1} />
            <SwiperSection className="slider2 hidden" slides={womenSlides2} />

            <FeatureBar />
            <Heading>MEN IN:COLLECTIONS</Heading>

            <div className="pagination">
                <SwiperSection slides={womenSlides3}></SwiperSection>

            </div>
            <Heading>NEW ARRIVALS</Heading>



            <CardSlider products={womenProducts} ></CardSlider>
            <Heading>CATEGORIES</Heading>



            <MenCategory cards={womenCategory}></MenCategory>
            <Heading>CURATED FOR YOU</Heading>

            <Curated image={curatedImg}></Curated>
            <Collection products={womenProducts}>
                <Button>Trending</Button>
                <Button>Women T-Shirts</Button>
                <Button>Women Shirts</Button>
                <Button>Women Jeans</Button>
                <Button>Women Pants</Button>
                <Button>Women Cropped Tops</Button>
                <Button>Women Shorts</Button>
                <Button>Women Low Top Sneakers</Button>
                <Button>Women Dresses</Button>
                <Button>Women Winter Wear</Button>
             
            </Collection>

            <Footer></Footer>

            </div>


        </>
    );
}

export default WomenPage;
