import "./curated.css"
export default function Curated({image=[]}){
    return(
        <>
        <div className="flex justify-center">
        <div className="curated-images grid grid-cols-4 gap-4">
            {
                image.map((items)=>(
                    <img alt="" src={items.image}></img>

                ))

            }
        </div>
        </div>
        </>
    )
}