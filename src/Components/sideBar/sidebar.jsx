import { useNavigate ,Link} from "react-router-dom";
// import { Link } from "react-router-dom";
import { useState } from "react";
import "./sidebar.css"
import { closeSidebar ,openSidebar } from "../../Redux/CartSlice/cartSlice";
import { useSelector ,useDispatch } from "react-redux";
import { useEffect } from "react";
import CardSlider from "../cardSlider/cardSlider";
import MenCategory from "../categorySection/category";
import { menSidebarData ,womenSidebarData ,sneakerSidebarData  } from "../../data/sidebarData";
export default function SideBar() {
    const isOpen = useSelector(state => state.cart.isSidebarOpen);
    const dispatch = useDispatch();
    // const navigate=useNavigate()
    const type = useSelector(state => state.cart.sidebarType);

    const handleTabChange = (type) => {
        dispatch(openSidebar(type));
    };

    let data;

    if (type === "men") data = menSidebarData;
    else if (type === "women") data = womenSidebarData;
    else if (type === "sneakers") data = sneakerSidebarData;

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen], [type]);
    const [showCategories, setShowCategories] = useState(true);
    const [showShopAll, setShowShopAll] = useState(false);
    // const [showJuniors, setShowJuniors] = useState(false);
    const [showMore, setShowMore] = useState(false);


   
    return (
        <>
            <div className={`${isOpen ? "sidebar w-full h-full flex z-[999] fixed  top-0 overflow-hidden " : "hidden"}`}>
                <div onClick={()=>dispatch(closeSidebar())} className=" absolute w-full h-full  bg-[rgba(0,0,0,0.4)]"></div>
                <div className="w-[500px] z-20 overflow-y-auto  h-full bg-white ">
                    <div className="flex p-[20px] items-center w-full justify-between gap-6">
                        <div className="flex  items-center">
                            <img alt="" className=" w-[80px]" src="../images/logo.webp"></img>
                        </div>
                        <div className="login-text border border-[#158b8d] rounded-[6px] pt-[13px] pb-[13px] pl-[13px] pr-[13px] flex items-center justify-center cursor-pointer  "   onClick={()=>dispatch(closeSidebar())}><Link to="/loginPage">Login In/Register </Link></div>
                        <div className="flex justify-end cursor-pointer">
                            <svg onClick={()=>dispatch(closeSidebar())} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                        </div>
                    </div>
                    <div className="text-white bg-[#148c8d] flex justify-center border-b rounded-br-[16px] rounded-bl-[16px] p-3 gap-4">
                        <span className="cashback-text">
                            Earn 10% Cashback on Every App Order
                        </span>
                        <div className="image-hide w-[24px] border border-[#18a7a8] rounded-[5px] shadow-[0px_1px_2px_0px_#0b0b0b] "><img alt="" src="./images/google-play-store.avif"></img></div>
                        <div className=" image-hide w-[24px] border border-[#18a7a8] rounded-[5px] shadow-[0px_1px_2px_0px_#0b0b0b] "><img alt="" src="./images/appstore.avif"></img></div>

                    </div>
                    <div className="w-full h-[60px]  items-center shadow-[0px_4px_4px_0px_#dce9ea] ">
                        <ul className="flex justify-center items-center w-full h-full ">
                            <li onClick={() => handleTabChange("men")} className={`${type === "men" ?"font-[700] text-[#148c8d]" : "text-[#8a8a8a] font-[500] "} w-[33%] flex justify-center text-[17px] cursor-pointer`}>MEN</li>
                            <li onClick={() => handleTabChange("women")} className={`${type === "women" ? "font-[700] text-[#148c8d]" : "text-[#8a8a8a] font-[500]"} w-[33%] flex justify-center  text-[17px] cursor-pointer`}>WOMEN</li>
                            <li onClick={() => handleTabChange("sneakers")} className={`${type === "sneakers" ? "font-[700] text-[#148c8d]" : "text-[#8a8a8a] font-[500] "} w-[33%] flex justify-center text-[17px] cursor-pointer`}>SNEAKERS</li>
                        </ul>

                    </div>
                    <div className="slider border-b border-dashed border-b-[#e5e5e5] pb-[1px] cursor-pointer ">
                        <CardSlider products={data.products} sidebar ></CardSlider>
                    </div>
                    <div>
                        <ul className="  text-[15px] font-bold cursor-pointer">
                            {/*                     
                <li className=" p-3 flex items-center justify-between">Shop All <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                    </li> */}
                            <div className="border-b border-dashed border-b-[#e5e5e5]">
                                <li
                                    className="p-3 flex items-center justify-between  "
                                    onClick={() => setShowShopAll(!showShopAll)}
                                >
                                    Shop All

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill="#000000"
                                        className={`transition-transform duration-700 ease-in-out ${showShopAll ? "rotate-180" : "rotate-0"
                                            }`}
                                    >
                                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                                    </svg>
                                </li>
                                {/* <ul className="font-normal text-[16px]"> */}
                                <ul
                                    className={`font-normal text-[16px] overflow-hidden transition-all duration-700 ease-in-out cursor-pointer ${showShopAll
                                        ? "max-h-[1000px] opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <li className="border-b p-3 border-dashed  border-b-[#e5e5e5] text-[#282d3f] flex items-center justify-between" onClick={() => setShowCategories(!showCategories)}>Categories <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#282d3f" className={`transition-transform duration-700 ease-in-out ${showCategories ? "rotate-0" : "rotate-180"
                                        }`}><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></li>

                                    <li
                                        className={`overflow-hidden transition-all duration-700 ease-in-out ${showCategories
                                            ? "max-h-screen opacity-100"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <MenCategory cards={data.categories}></MenCategory>
                                    </li>
                                </ul>
                            </div>
                            {/* <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center  ">Topwear </li> */}
                            {/* <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center  ">Bottomwear</li> */}
                            <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center ">All Accessories </li>
                            <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center slider"><CardSlider products={data.products} sidebar></CardSlider></li>
                            {/* <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center  ">Official Merch </li> */}
                            {/* <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center ">Sneakers<sup className=" text-[#ff0000] p-1 text-[10px] font-[700]">New Drops</sup></li> */}
                            {/* <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center ">TSS Plus Size <sup className="p-1 text-[10px]">XL,XXL&XXXL</sup></li> */}
                            {/* <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center justify-between">Juniors <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                    <ul>
                        <li>shop For girls</li>
                        <li>shop For boys</li>
                    </ul>
                    </li> */}
                            {/* <li className="border-b border-dashed border-b-[#e5e5e5]">
                                <div
                                    className="p-3 flex items-center justify-between cursor-pointer"
                                    onClick={() => setShowJuniors(!showJuniors)}
                                >
                                    <span>Juniors</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill="#000000"
                                        className={`transition-transform duration-700 ${showJuniors ? "rotate-180" : ""
                                            }`}
                                    >
                                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                                    </svg>
                                </div>

                                <ul
                                    className={`overflow-hidden transition-all duration-700 text-[#282d3f] font-normal ${showJuniors
                                        ? "max-h-screen opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <li className="pl-6 py-2 border-b border-dashed border-b-[#e5e5e5] hover:text-[#af5e5e] ">Shop For Girls</li>
                                    <li className="pl-6 py-2 border-b border-dashed border-b-[#e5e5e5] hover:text-[#af5e5e] ">Shop For Boys</li>
                                </ul>
                            </li> */}
                            {/* <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center">Markdowns</li> */}
                            {/* <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center text-[#00787a]">My MEMBERSHIP</li> */}
                            <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center">Stores Near Me</li>
                            <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center">Track My Order ?</li>
                            {/* <li className=" border-b p-3 border-dashed  border-b-[#e5e5e5] flex items-center mb-5 justify-between">More <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></li> */}
                            <li className="border-b border-dashed border-b-[#e5e5e5]">
                                <div
                                    className="p-3 flex items-center justify-between cursor-pointer"
                                    onClick={() => setShowMore(!showMore)}
                                >
                                    <span>More</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill="#000000"
                                        className={`transition-transform duration-700 ${showMore ? "rotate-180" : ""
                                            }`}
                                    >
                                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                                    </svg>
                                </div>

                                <ul
                                    className={`overflow-hidden transition-all duration-700 text-[#282d3f] font-normal ${showMore
                                        ? "max-h-screen opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <li className="pl-6 py-2 border-b border-dashed border-b-[#e5e5e5] hover:text-[#af5e5e]" onClick={()=>dispatch(closeSidebar())}><Link to="/loginPage">My Account</Link></li>
                                    <li className="pl-6 py-2 border-b border-dashed border-b-[#e5e5e5] hover:text-[#af5e5e]" onClick={()=>dispatch(closeSidebar())}><Link to="/loginPage">Contact Us</Link></li>
                                    <li className="pl-6 py-2 border-b border-dashed border-b-[#e5e5e5] hover:text-[#af5e5e]">Careers</li>
                                    <li className="pl-6 py-2 border-b border-dashed border-b-[#e5e5e5] hover:text-[#af5e5e]">Community Initiatives</li>
                                    <li className="pl-6 py-2 border-b border-dashed border-b-[#e5e5e5] hover:text-[#af5e5e]">About Us</li>
                                    <li className="pl-6 py-2 border-b border-dashed border-b-[#e5e5e5] hover:text-[#af5e5e]">T&C</li>
                                    <li className="pl-6 py-2 border-b border-dashed border-b-[#e5e5e5] hover:text-[#af5e5e]">Privacy Policy</li>
                                    <li className="pl-6 py-2 border-b border-dashed border-b-[#e5e5e5] hover:text-[#af5e5e]">FAQs</li>

                                </ul>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>
        </>
    )
}