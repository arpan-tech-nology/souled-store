import "./collectionMen.css"
import Card from "../card/card"
import { useState } from "react"
export default function Collection({buttons,products}){
    const [active,setActive]=useState("Trending");
   

    return(
        <>
        <div className="pb-4">

        
       
        <div className=" flex pt-4 pb-4 pl-8 gap-4 bg-white overflow-x-auto scroll-smooth scroll-hide whitespace-nowrap">
            {
                buttons.map((item,i)=>(

                    <button onClick={()=>setActive(item)} key={i} className={`${active===item?"bg-black text-white":"bg-white text-[#58595b]"} h-[35px] border border-[#ddd] pt-5 pb-5 pl-[14px] pr-[14px] text-[#58595b] rounded-[15px] text-[18px] flex justify-center items-center whitespace-nowrap `}>{item}</button>
                ))
            }

        </div>
        <div className="flex justify-center">
        <div className="collection w-[95%] grid grid-cols-4 gap-2">

        {
            products.map((item,index)=>(
                <Card key={index} product={item}/>
            ))
        }
        </div>
        </div>
        </div>
        </>
    )

}