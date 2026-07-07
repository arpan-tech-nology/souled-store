import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Navigation,Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import './swiper.css'
import { useRef } from 'react';

export default function SwiperSection({slides=[] , className ,tag}){
    const navigate=useNavigate();
    // const prevRef = useRef(null);
    // const nextRef = useRef(null); 
    const swiperRef = useRef(null); 
    return(
        <>
        
    
   <div className={className}>
    <Swiper
    onSwiper={(swiper) => {swiperRef.current = swiper;}} 
    navigation={{
        // nextEl:nextRef.current ,
        // prevEl:prevRef.current 
    }}
    loop={true}
      spaceBetween={50}
      slidesPerView={1}
    //   autoplay={{
    //     delay:2000,
    //     disableOnInteraction: false,
    //   }}
        pagination={{
          clickable: true,
        }}
        
        
         modules={[Autoplay ,Pagination,Navigation]}
    >
        {
            slides.map((item)=>(
                <SwiperSlide>
                    <img onClick={() => navigate(`/filter/${tag}`)} alt='' className='w-full image-padding' src={item.image}></img>
                </SwiperSlide>
            ))
        }
      
    </Swiper>
    <div   onClick={() => swiperRef.current.slideNext()}><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="white"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></div>
    <div  onClick={() => swiperRef.current.slidePrev()} ><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="white"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></div>
   </div>
        </>
    )
}