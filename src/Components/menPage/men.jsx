
export default function MenPage() {
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
    return (
        <>
                < Header />
            {/* <div className="max-w-[1500px] flex flex-col justify-center items-center"> */}
                <HeroSection />
                <FeatureBar/>
                <CardSlider products={menProducts } >NEW ARRIVAL</CardSlider>
                <MenCategory cards={menCategory}>CATEGORIES</MenCategory>
            {/* </div> */}
                <Footer />

        </>
    )
}