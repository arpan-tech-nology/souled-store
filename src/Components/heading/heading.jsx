import UserContext from "../../userContext"
import { useContext } from "react"

export default function Heading({children  }){
    const user=useContext(UserContext);
    
    return(
        <>
        <div>
                <h1>{user.name}</h1>
                <h2>{user.age}</h2>
            <div className="w-full flex justify-center text-[28px] font-bold h-[100px] items-center">{children}
            </div>
          
        </div>
        </>
    )
}