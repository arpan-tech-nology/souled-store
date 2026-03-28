import "./collectionMen.css"
import Card from "../card/card"
export default function Collection({children ,products}){
    return(
        <>
        <div className=" flex pt-4 pb-4 pl-8 gap-4 bg-white overflow-x-auto scroll-smooth scroll-hide whitespace-nowrap">{children}</div>
        <div className="collection grid grid-cols-4 gap-4">

        {
            products.map((item)=>(
                <Card {...item}/>
            ))
        }
        </div>
        </>
    )

}