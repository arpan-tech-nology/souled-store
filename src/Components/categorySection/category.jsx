import "./category.css"
import { useNavigate } from "react-router-dom"
export default function MenCategory({ cards,tag}){
    const navigate=useNavigate();
    
   
    return(
        <>
        <div className="w-full flex flex-col justify-center items-center">
        <div className="men-category grid grid-cols-3 gap-4 w-[80%] ">
        {cards.map((item)=>(
            
            <img onClick={() =>
                            navigate("/filter", { state: { tag } })} src={item.image}></img>
        ))}
     
        </div>
        </div>

        </>
    )
}