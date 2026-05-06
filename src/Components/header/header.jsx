import { useState } from "react"
import "./header.css"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux";


export default function Header({toggleSideBar ,cartSideBar}){
    const cartItems = useSelector(state => state.cart.items);

const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
}, 0);
    
    
    const location=useLocation();

     
    return(
        <>
        <div className="header flex-col">
        <div className="announcement-bar hidden bg-[#e12d2d]  text-white  justify-center  w-[100%] ">
        <div className="text w-[95%] flex items-center justify-between p-4">
            <div >Download Our App & Get 10% Additional Cashback On All Orders</div>
            <div className="app border-2 w-[120px] border-white p-1 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm0 0v-720 720Zm228.5-51.5Q520-183 520-200t-11.5-28.5Q497-240 480-240t-28.5 11.5Q440-217 440-200t11.5 28.5Q463-160 480-160t28.5-11.5Z"/></svg>
                
                OPEN APP</div>
            </div>
            </div>
            <div className="header-height w-full flex justify-center shadow-[0_0px_5px_rgba(0,0,0,0.25)] z-10 relative h-[70px]">
        <div className=" flex justify-between w-[96%] ">
            {/* </div> */}
            <div className=" nav-item-container flex w-[23%]  justify-between ">
            <div className="flex w-[50px]  items-center "onClick={toggleSideBar}>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"  fill="#b6b6b6"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                {/* <img data-v-0a2dc9ea src="https://prod-img.thesouledstore.com/static/hamburger-bleack.svg?w=480&dpr=2" alt="Logo" class="gm-added gm-loaded gm-observing gm-observing-cb" ></img> */}
            </div>
            <div className=" nav-item flex w-[82%] justify-between ">
                <ul className="flex items-center text-[20px] font-bold justify-between w-[100%] ">
                   <Link to="/">

                   <li className={`nav-item  relative ${location.pathname == "/"?"item":""}`}  >MEN</li>
                   </Link> 
                    {/* <li><a >WOMEN</a></li> */}
                    <Link to="/womenPage"><li  className={`nav-item relative ${location.pathname == "/womenPage"?"item":""}`}>WOMEN</li></Link>
                    <Link to="/sneakerPage">
                    
                    <li className={`nav-item relative ${location.pathname =="/sneakerPage"?"item":""}`}>SNEAKERS</li>
                    </Link>
                </ul>
            </div>
            </div>
            <div className="logo-img w-[110px] flex justify-center items-center">
                <img className="img w-full" src="../images/logo.webp"></img>
            </div>
            <div className="search-container  flex w-[32%]  items-center justify-between ">
                <div className=" flex justify-between rounded-full border w-[67%] border-black  h-[45px] p-4 items-center">
                <input placeholder="What are you looking for?" className="w-[215px] text-[14px] h-[40px] bg-transparent outline-none"></input>
                <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M395-435q-35-35-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35q-50 0-85-35Zm85-205Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm68.5-371.5Q520-503 520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480q17 0 28.5-11.5Z"/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                </div>
                {/* <span data-v-716a925a class="fa fa-microphone mic-icon"></span> */}
                {/* <img data-v-716a925a src="https://prod-img.thesouledstore.com/static/search-black.svg?w=30&dpr=2" alt="search" width="18" height="20" class="gm-added gm-loaded gm-observing gm-observing-cb"/> */}
                </div>
                {/* <div> */}
                <div className="flex   justify-between w-[28%]">
                    <div className="icon relative">
                        <Link to="/loginPage">

                <svg className="icon relative" xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z"/></svg>
                        </Link>

                    </div>

                    <div className="icon relative">
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>

                    </div>
                    {/* <Link to="/cart"> */}
                    
                    
                    <div className="icon relative"onClick={cartSideBar}>
                        

                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                    {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-[2px] rounded-full">
            {totalQuantity}
        </span>
    )}
                    </div>

                    
                    {/* </Link> */}

            </div>
            </div>
            <div className="header-icons items-center justify-end gap-3 w-[40%] hidden">
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
                
            </div>
            </div>
            </div>
            <div className="header-category-section w-full  justify-center hidden " >
                <ul className=" nav-menu flex w-full items-center justify-between text-[18px] pt-3 pb-3 ">
                   
                    
                    <li className="flex justify-center item w-full border-[#d3d4d8]  border-r-[1px] relative font-bold"> <Link to="/">MEN</Link></li>

                    
                    
                    <li className="flex justify-center border-[#d3d4d8]  border-r-[1px] w-full"><Link to="/womenPage">WOMEN </Link></li>
                   
                  
                    
                    <li className="flex justify-center w-full">  <Link to="/sneakerPage">SNEAKERS</Link></li>
                    
                </ul>
            </div>

        </div>

       
        </>
    )
} 