import "./card.css"
export default function Card({image , title , category ,price}){
    return(
        <>
        <div className="card">
        <div>
            <img src={`../images/${image}`}>
            
            </img>
        </div>
        <div>
            <h5 className="heading font-bold border-b border-b-[#00000021] text-[#58595b]">{title}</h5>
            <p className="text text-[#737577]">{category}</p>
            {price?
            <p className="price flex text-[#737577] items-center"><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#737577"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z"/></svg>{price}</p>
            :""}
        </div>

        </div>
        </>
    )
}