
import CardSlider from "./Components/cardSlider/cardSlider"

import MenCategory from "./Components/categorySection/category";
// import Heading from "./Components/"

import Heading from "./Components/heading/heading";
import SwiperSection from "./Components/swiper/swiper";
import Curated from "./Components/curated/curated";
import Button from "./Components/button/button";
import Collection from "./Components/collectionMen/collectionMen";

import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";


import FeatureBar from "./Components/featureBar/featureBar";
import './App.css';



function App() {
    const menProducts = [
        {
            image: "new-arrival-img-1.avif",
            title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },
        {
            image: "new-arrival-img-2.avif",
            title: "Looney Tunes:IT's Bugs",
            category: "Oversized T-Shirts",
            price: "1099",
        },
        {
            image: "new-arrival-img-3.avif",
            title: "Oversized T-shirt:Wan Blue",
            category: "Oversized T-Shirts",
            price: "1099"
        },
        {
            image: "new-arrival-img-4.avif",
            title: "Cotton Linen:Champagne",
            category: "Cotton Linen Shirt",
            price: "1799"
        },
         {
            image: "new-arrival-img-3.avif",
            title: "Oversized T-shirt:Wan Blue",
            category: "Oversized T-Shirts",
            price: "1099"
        },
            {
            image: "new-arrival-img-1.avif",
            title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },
          {
            image: "new-arrival-img-4.avif",
            title: "Cotton Linen:Champagne",
            category: "Cotton Linen Shirt",
            price:"1009"
          },
            {
            image: "new-arrival-img-1.avif",
            title: "Black panther:Claws",
            category: "Oversized Full sleeve T-Shirts",
            price: "1499"
        },



    ]
     const menCategory=[
        {image:"../images/men-category-img-1.avif"},
        {image:"../images/men-category-img-2.avif"},
        {image:"../images/men-category-img-3.avif"},
        {image:"../images/men-category-img-4.avif"},
        {image:"../images/men-category-img-5.avif"},
        {image:"../images/men-category-img-6.avif"},
        {image:"../images/men-category-img-1.avif"},
        {image:"../images/men-category-img-2.avif"},
        {image:"../images/men-category-img-3.avif"},
    ]
      const menSlides1=[
        {image:"../images/swiper-img-1.avif"},
         {image:"../images/swiper-img-2.avif"},
          {image:"../images/swiper-img-3.avif"},
           {image:"../images/swiper-img-4.avif"},
           {image:"../images/swiper-img-6.avif"},
          
    ]
    const menSlides2=[
        {image:"../images/swiper-img-7.avif"},
        {image:"../images/swiper-img-8.avif"},
        {image:"../images/swiper-img-9.avif"},
        {image:"../images/swiper-img-10.avif"},
        {image:"../images/swiper-img-11.avif"},
        {image:"../images/swiper-img-12.avif"},

    ]
    const menSlides3=[
        {image:"../images/swiper-img-13.avif"},
        {image:"../images/swiper-img-14.avif"},
             {image:"../images/swiper-img-1.avif"},
         {image:"../images/swiper-img-2.avif"},
          {image:"../images/swiper-img-3.avif"},

    ]
    const curatedImg=[
         {image:"../images/men-category-img-1.avif"},
        {image:"../images/men-category-img-2.avif"},
        {image:"../images/men-category-img-3.avif"},
        {image:"../images/men-category-img-4.avif"},

    ]

  return (
   <>
   {/* <Header></Header> */}
   {/* <Header/> */}
    <Header/>
            {/* <div className="max-w-[1500px] flex flex-col justify-center items-center"> */}
                {/* <HeroSection /> */}
                <SwiperSection className="slider1" slides={menSlides1}/>
                <SwiperSection className="slider2 hidden" slides={menSlides2}/>
                
                <FeatureBar/>
                <Heading>LATEST DROPS</Heading>
                
                <div className="pagination">
                <SwiperSection slides={menSlides3}></SwiperSection>

                </div>
                <Heading>NEW ARRIVALS</Heading>
                
                
                
                <CardSlider products={menProducts } ></CardSlider>
                <Heading>CATEGORIES</Heading>
             


                <MenCategory cards={menCategory}></MenCategory>
                <Heading>CURATED FOR YOU</Heading>
             
                <Curated image={curatedImg}></Curated>
                <Collection products={menProducts}>
                <Button>Trending</Button>
                <Button>Oversized T-Shirts</Button>
                <Button>Shirts</Button>
                <Button>Polos</Button>
                <Button>Hoodies</Button>
                <Button>Jackets</Button>
                <Button>Men Pents</Button>
                <Button>Men Jackets</Button>
                <Button>Men Jogers</Button>
                <Button>Men High Top Sneakers</Button>
                <Button>Men Low Top Sneakers</Button>
                </Collection>
                <Footer></Footer>

            {/* </div> */}
                

   </>
  );
}

export default App;
