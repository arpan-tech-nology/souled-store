import "./collectionMen.css"
import Card from "../card/card"
import { useState } from "react"
// import Card from "../card/card";
export default function Collection({buttons,products}){
    const [active, setActive] = useState("Trending");
    const [selectedCategory, setSelectedCategory] = useState(buttons[0]);

    const filteredProducts =
        selectedCategory === "Trending"
            ? products.filter(product =>
                product.categories.includes("Trending")
            )
            : products.filter(product =>
                product.categories.includes(selectedCategory)
            );
   

    return(
        <>
        <div className="pb-4">

        
       
        <div className=" flex pt-4 pb-4 pl-8 gap-4 bg-white overflow-x-auto scroll-smooth scroll-hide whitespace-nowrap">
          { buttons.map((item, i) => (
                        <button onClick={() => { setSelectedCategory(item);  setActive(item);
                        }} key={i} className={`${active === item ? "bg-black text-white" : "bg-white text-[#58595b]"} text-[#58595b] h-[35px] border border-[#ddd] pt-[8px] pr-[14px] pl-[14px] pb-[8px] rounded-[15px] text-[14px] flex justify-center items-center whitespace-nowrap}`}>{item}</button>

                    ))}

        </div>
        <div className="flex justify-center">
        <div className="collection w-[95%] grid grid-cols-4 gap-2">

       {filteredProducts.map((item) => (
                        <Card
                            key={item.product_id}
                            product={item}
                        />
                    ))}
        </div>
        </div>
        </div>
        </>
    )

}