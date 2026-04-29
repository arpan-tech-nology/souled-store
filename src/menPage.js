
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
import { Link } from "react-router-dom";
// import WomenPage from "./womenPage";


function MenPage() {
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
      price: "1009"
    },
    {
      image: "new-arrival-img-1.avif",
      title: "Black panther:Claws",
      category: "Oversized Full sleeve T-Shirts",
      price: "1499"
    },



  ]
  const menCategory = [
    { image: "../images/men-category-img-1.avif" },
    { image: "../images/men-category-img-2.avif" },
    { image: "../images/men-category-img-3.avif" },
    { image: "../images/men-category-img-4.avif" },
    { image: "../images/men-category-img-5.avif" },
    { image: "../images/men-category-img-6.avif" },
    { image: "../images/men-category-img-1.avif" },
    { image: "../images/men-category-img-2.avif" },
    { image: "../images/men-category-img-3.avif" },
  ]
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
  const [sideBar, setSideBar] = useState(false);





  return (
    <>

      <div id="men-page">
        {/* <Header></Header> */}
        {/* <Header/> */}
        <Header toggleSideBar={() => setSideBar(true)} />

        <SideBar isOpen={sideBar} closeSideBar={() => setSideBar(false)}>
          <CardSlider products={sideBarImages} ></CardSlider>

          <MenCategory cards={menCategory}></MenCategory>
          <CardSlider products={sideBarImages} ></CardSlider>


        </SideBar>
        {/* <div className="max-w-[1500px] flex flex-col justify-center items-center"> */}
        {/* <HeroSection /> */}
        <SwiperSection className="slider1" slides={menSlides1} />
        <SwiperSection className="slider2 hidden" slides={menSlides2} />

        <FeatureBar />
        <Heading>LATEST DROPS</Heading>

        <div className="pagination">
          <SwiperSection slides={menSlides3}></SwiperSection>

        </div>
        <Heading>NEW ARRIVALS</Heading>


        {/* <Link to="/productPage"> */}

        <CardSlider products={products} ></CardSlider>
        {/* </Link> */}
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

      </div>


    </>
  );
}
export const products = [
  {
    "product_id": "1",
    "title": "Peanuts:Works Out",
    "price_range": { "min": "700", "max": "900" },
    "stock": "100",
    "image_url": "new-arrival-img-1.avif",
    "number_of_variants": "3",
    "variant_options": ["size", "color"],
    "variant_values": [
      {
        "size": {
          "label": "Select Size",
          "values": [
            {
              "1": { "label": "S", "key": "small" },
              "2": { "label": "M", "key": "medium" },
              "3": { "label": "L", "key": "large" },
            }

          ]
        },
        "color": {
          "label": "Select Color",
          "values": [
            {
              "1": { "label": "Red", "key": "red", "color_code": "#ff0000" },
              "2": { "label": "Blue", "key": "blue", "color_code": "#0000ff" },
            }


          ]
        }
      }
    ],
    "variants": [
      { "id": "1b", "size": "small", "color": "blue", "price": "850", "image_url": "new-arrival-img-1.avif", "stock": "40" },
      { "id": "1a", "size": "medium", "color":"red", "price": "800", "image_url": "new-arrival-img-2.avif", "stock": "20" },
      { "id": "1c", "size": "large", "color": "blue", "price": "750", "image_url": "new-arrival-img-3.avif", "stock": "40" },

    ]
  },

  {
    "product_id": "2",
    "title": "Casual T-Shirt",
    "price_range": { "min": null, "max": "500" },
    "stock": "120", // 50 + 70
    "image_url": "new-arrival-img-2.avif",
    "number_of_variants": "2",
    "variant_options": ["size"],
    "variant_values": [
      {
        "size": {
          "label": "Select Size",
          "values": [
            {
              "1": { "label": "M", "key": "medium" },
              "2": { "label": "L", "key": "large" }
            }
          ]
        }
      }
    ],
    "variants": [
      { "id": "2a", "size": "medium", "price": "500", "stock": "50" },
      { "id": "2b", "size": "large", "price": "500", "stock": "70" }
    ]
  },

  {
    "product_id": "3",
    "title": "Sports Hoodie",
    "price_range": { "min": "1200", "max": "1500" },
    "stock": "50", // 20 + 30
    "image_url": "new-arrival-img-3.avif",
    "number_of_variants": "2",
    "variant_options": ["size", "color"],
    "variant_values": [
      {
        "size": {
          "label": "Select Size",
          "values": [
            {
              "1": { "label": "S", "key": "small" },
              "2": { "label": "M", "key": "medium" }
            }
          ]
        },
        "color": {
          "label": "Select Color",
          "values": [
            {
              "1": { "label": "Black", "key": "black", "color_code": "#000000" },
              "2": { "label": "Grey", "key": "grey", "color_code": "#808080" }
            }
          ]
        }
      }
    ],
    "variants": [
      { "id": "3a", "size": "small", "color": "black", "price": "1200", "image_url": "/hoodie-black.avif", "stock": "20" },
      { "id": "3b", "size": "medium", "color": "grey", "price": "1500", "image_url": "/hoodie-grey.avif", "stock": "30" }
    ]
  },

  {
    "product_id": "4",
    "title": "Denim Jeans",
    "price_range": { "min": "1000", "max": "1300" },
    "stock": "40", // 15 + 25
    "image_url": "new-arrival-img-4.avif",
    "number_of_variants": "2",
    "variant_options": ["size"],
    "variant_values": [
      {
        "size": {
          "label": "Select Size",
          "values": [
            {
              "1": { "label": "30", "key": "30" },
              "2": { "label": "32", "key": "32" }
            }
          ]
        }
      }
    ],
    "variants": [
      { "id": "4a", "size": "30", "price": "1000", "stock": "15" },
      { "id": "4b", "size": "32", "price": "1300", "stock": "25" }
    ]
  },

  {
    "product_id": "5",
    "title": "Summer Shirt",
    "price_range": { "min": null, "max": "750" },
    "stock": "50", // 20 + 30
    "image_url": "new-arrival-img-1.avif",
    "number_of_variants": "2",
    "variant_options": ["size", "color"],
    "variant_values": [
      {
        "size": {
          "label": "Select Size",
          "values": [
            {
              "1": { "label": "S", "key": "small" },
              "2": { "label": "M", "key": "medium" }
            }
          ]
        },
        "color": {
          "label": "Select Color",
          "values": [

            { "label": "Green", "key": "green", "color_code": "#00ff00" },
            { "label": "Yellow", "key": "yellow", "color_code": "#ffff00" }

          ]
        }
      }
    ],
    "variants": [
      { "id": "5a", "size": "small", "color": "green", "price": "750", "image_url": "shirt-green.avif", "stock": "20" },
      { "id": "5b", "size": "medium", "color": "yellow", "price": "750", "image_url": "shirt-yellow.avif", "stock": "30" }
    ]
  }
];

export default MenPage;

