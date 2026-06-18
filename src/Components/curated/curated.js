export default function Curated({image=[]}){
    return(
        <>
        <div className="grid grid-cols-4 gap-4">
            {
                image.map((items)=>(
                    <img alt="" src={items.image}></img>

                ))

            }
        </div>
        </>
    )
}