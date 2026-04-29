import "./sidebar.css"
export default function SideBar({children , isOpen , closeSideBar}){
    if(isOpen){
        document.body.style.overflow='hidden';
    }
    else{
        document.body.style.overflow='auto';
    }
    return(
        <>
         <div className={`${isOpen?"sidebar w-full h-full flex z-10 fixed  top-0 overflow-hidden ":"hidden"}`}>
            <div onClick={closeSideBar} className=" absolute w-full h-full  bg-[rgba(0,0,0,0.4)]"></div>
            <div className="w-[500px] z-20 overflow-y-auto h-full bg-white">
            <div className="flex p-[20px] gap-6">
                  <div className="logo-img w-[90px] flex  items-center">
                <img className=" w-full" src="../images/logo.webp"></img>
            </div>
                <div className=" w-[200px] border border-[#158b8d] rounded-[6px] pt-[13px] pb-[13px] pl-[13px] pr-[13px] flex items-center justify-center ">Login In/Register </div>
            </div>
            <div className="text-white bg-[#148c8d] flex justify-center border-b rounded-br-[16px] rounded-bl-[16px] p-3 gap-4">
                <span>
                    Earn 10% Cashback on Every App Order
                    </span>
                    <div className="w-[24px] border border-[#18a7a8] rounded-[5px] shadow-[0px_1px_2px_0px_#0b0b0b] "><img src="./images/google-play-store.avif"></img></div>
                    <div className="w-[24px] border border-[#18a7a8] rounded-[5px] shadow-[0px_1px_2px_0px_#0b0b0b] "><img src="./images/appstore.avif"></img></div>
                
            </div>
            <div className="w-full h-[60px]  items-center shadow-[0px_4px_4px_0px_#dce9ea] ">
                <ul className="flex justify-center items-center w-full h-full ">
                    <li className="w-[33%] flex justify-center font-[700] text-[#148c8d]  text-[17px]">MEN</li>
                    <li className="w-[33%] flex justify-center text-[#8a8a8a] font-[500]  text-[17px]">WOMEN</li>
                    <li className="w-[33%] flex justify-center text-[#8a8a8a] font-[500]  text-[17px]">SNEAKERS</li>
                </ul>

            </div>
            <div className="slider border-b border-dashed border-b-[#e5e5e5] pb-[1px] ">
                {children[0]}
            </div>
            <div>
                <ul className="  text-[15px] font-bold">
                    
                <li className=" p-3 flex items-center justify-between">Shop All <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                    </li>
                <ul className="font-normal text-[16px]">
                    <li className="border-b p-3 border-dashed  border-b-[#e5e5e5] text-[#282d3f] flex items-center justify-between">Categories <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#282d3f"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></li>
                    <li>{children[1]}</li>
                </ul>
                    <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center justify-between">Topwear <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></li>
                    <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center justify-between">Bottomwear <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></li>
                    <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center">All Accessories </li>
                    <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center slider">{children[2]}</li>
                    <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center justify-between">Official Merch <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></li>
                    <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center">Sneakers<sup className=" text-[#ff0000] p-1 text-[10px] font-[700]">New Drops</sup></li>
                    <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center">TSS Plus Size <sup className="p-1 text-[10px]">XL,XXL&XXXL</sup></li>
                    <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center justify-between">Juniors <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></li>
                    <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center">Markdowns</li>
                    <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center">My MEMBERSHIP</li>
                    <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center">Stores Near Me</li>
                    <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center">Track My Order ?</li>
                    <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center mb-5 justify-between">More <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></li>








                    


                </ul>
            </div>
            
            </div>

        </div>
        </>
    )
}