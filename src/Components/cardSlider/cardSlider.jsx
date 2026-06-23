import Card from "../card/card"
import "./cardSlider.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation ,Pagination } from 'swiper/modules';



// import './swiper.css'
export default function CardSlider({products}) {
    return (
        <>
           
            <div className=" collections w-full flex justify-center items-center relative">
                <div className="w-[90%] swiper-width" >
                    <Swiper

                        navigation={{
                            nextEl: ".next-btn1",
                            prevEl: ".prev-btn1"
                        }}

                        loop={true}
                        spaceBetween={10}
                        slidesPerView={2}
                        slidesPerGroup={2}
                        centeredSlides={false}
                        // slidesPerGroupSkip={1}
                        grabCursor={true}
                        breakpoints={{
                            770: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                            },

                           
                        }}
                         pagination={{
          clickable: true,
        }}


                        // autoplay={{
                        //     delay: 2000,
                        //     disableOnInteraction: false,
                        // }}




                        modules={[Autoplay, Navigation ,Pagination]}
                    >
                        {
                            products.map((item) => (
                                <SwiperSlide key={item.product_id}><Card product={item} /></SwiperSlide>
                            ))
                        }

                    </Swiper>
                    <div className='prev-btn1 '><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="white"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg></div>
                    <div className='next-btn1 right-[70px]' ><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="white"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg></div>
                </div>
            </div>

        </>
    )
}