import "./curated.css"
export default function Curated({image=[]}){
    return(
        <>
        <div className="flex justify-center w-full">
        <div className="curated-images w-[98%] grid grid-cols-4 gap-4">
            {
                image.map((items)=>(
                    <img className="hower-img cursor-pointer"  alt="" src={items.image}></img>

                ))

            }
        </div>
        </div>
        </>
    )
}