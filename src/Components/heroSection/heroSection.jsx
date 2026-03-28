import SwiperSection from "../swiper/swiper"
import "./herosection.css"


export default function HeroSection(){
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
    return(
        <>
        <div className=" w-full">
        <SwiperSection className="slider1" slides={menSlides1}/>
        <SwiperSection className="slider2 hidden" slides={menSlides2}/>

        </div>
        </>
    )
}