import "./category.css"
export default function MenCategory({children , cards}){
   
    return(
        <>
        <div className="w-full flex flex-col justify-center items-center">


    
        {/* <div className="w-full flex justify-center text-[28px] font-bold h-[100px] items-center">{children}</div> */}
        <div className="men-category grid grid-cols-3 gap-4 w-[80%] ">
        {cards.map((item)=>(
            <img src={item.image}></img>
        ))}
     
        </div>
        </div>

        </>
    )
}