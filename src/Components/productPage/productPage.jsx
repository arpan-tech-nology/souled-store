import Header from "../header/header"
import Footer from "../footer/footer"
import "./productPage.css"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice/cartSlice";
// import SideBar from "../sideBar/sidebar";
import CartSideBar from "../cartSideBar/cartSideBar";
import { allProducts } from "../../data/allProducts";
import { useLocation } from "react-router-dom";
import { addToWishlist , removeFromWishlist } from "../../Redux/WishlistSlice/WishlistSlice";
// import CartSideBar from "../cartSideBar/cartSideBar";

export default function ProductPage() {
const { id } = useParams();
const { state } = useLocation();
    let product = state?.product
    if (!product) {
        product = allProducts.find(p => p.product_id === id);
    }

const [selectedSize,setSelectedSize]=useState("");
const [selectedColor,setSelectedColor]=useState("");
const [error, setError] = useState("");
const [cartStatus, setCartStatus] = useState("idle");
const [quantity, setQuantity] = useState(1);
const selectedVariant = product.variants.find(v => v.size === selectedSize &&
        v.color === selectedColor
    );

//    const [sideBar, setSideBar] = useState(false);
  const [cartSideBar ,setCartSideBar]=useState(false);
const availableColors = selectedSize? product.variants.filter(v => v.size === selectedSize).map(v => v.color)
        : [];


const variantData=product.variant_values[0];

let displayPrice = "";

    if (selectedVariant) {
        displayPrice = `${selectedVariant.price}`;
    } else if (product.price_range.min) {
        displayPrice = `${product.price_range.min} - $${product.price_range.max}`;
    } else {
        displayPrice = `${product.price_range.max}`;
    }

const dispatch = useDispatch();
    //    const navigate = useNavigate();
    // const [added, setAdded] = useState(false);

   const handleAddToCart = () => {
        if (!selectedSize) {
            setError("Please select a size");
            return;
        }

        if (variantData.color && !selectedColor) {
            setError("Please select a color");
            return;
        }
        setCartStatus("adding");
        setError("");

        setTimeout(() => {
            dispatch(addToCart({
                id: crypto.randomUUID(),
                product_id: product.product_id,
                title: product.title,
                image: selectedVariant?.image_url || product.image_url,
                price: selectedVariant?.price || product.price_range.max,
                size: selectedSize,
                color: selectedColor,
                quantity: quantity
            }));
            setCartStatus("added");
            setTimeout(() => {
                setCartStatus("idle");
            }, 2000);

        }, 2000);
    };
    const wishlistItems = useSelector(state => state.wishlist.items);
    const isWishlisted = wishlistItems.some(
        item => item.product_id === product.product_id
    );
    const handleWishlist = () => {

        const exists = wishlistItems.find(
            item => item.product_id === product.product_id
        );

        if (exists) {
            dispatch(removeFromWishlist(exists.id));

        }
        else {
            dispatch(addToWishlist({
                id: crypto.randomUUID(),
                product_id: product.product_id,
                title: product.title,
                image: selectedVariant?.image_url || product.image_url,
                price: selectedVariant?.price || product.price_range.max,
                size: selectedSize,
                color: selectedColor
            }));
   
        }

    };

    return (
        <>
            {/* <Header /> */}
             <Header cartSideBar={()=>setCartSideBar(true)} />
                      <CartSideBar isOpen={cartSideBar} closeSideBar={() => setCartSideBar(false)}/>
            {/* <SideBar isOpen={sideBar} closeSideBar={() => setSideBar(false)}>
                      <CardSlider products={sideBarImages} ></CardSlider>
                      <MenCategory cards={menCategory}></MenCategory>
                      <CardSlider products={sideBarImages} ></CardSlider>
            </SideBar> */}
            <div className="w-full flex  justify-center items-center">
                <div className="w-[80%] cart-container">
                    <div className="flex text-[14px] pt-8 pb-8 flex-wrap">
                        <span className="text-[#a7a9ac] pl-1">Home </span>
                        <span className="text-[#a7a9ac] pl-1">/ Oversized Shirts </span>
                        <span className="text-[#a7a9ac] pl-1">/ The Souled Store </span>
                        <span className="pl-1"> / TSS Originals:Chitrakatha</span>

                    </div>
                    <div className="flex justify-between cart-item">
                        <div className="grid grid-cols-2 gap-4 w-[60%] cart-item-img">
                            <img alt="" src={selectedVariant? `../images/${selectedVariant.image_url}` : `../images/${product?.image_url}`}></img>
                            <img alt="" src={selectedVariant? `../images/${selectedVariant.image_url}` : `../images/${product?.image_url}`}></img>
                            <img alt="" src={selectedVariant? `../images/${selectedVariant.image_url}` : `../images/${product?.image_url}`}></img>
                            <img alt="" src={selectedVariant? `../images/${selectedVariant.image_url}` : `../images/${product?.image_url}`}></img>
                        </div>
                        <div className="w-[35%] cart-item-content ">
                            <div>
                                <h2 className="font-bold text-[25px] mb-0 pb-0 text-[#58595b]">{product.title}</h2>
                                <p className="text-[#a7a9ac] text-[15px] pb-4 ">Cotton Linen Shirts</p>
                                <hr className="w-full "></hr>
                              {/* <div className="flex"> */}

                                <h2 className="font-bold text-[25px] mb-0 pb-0 pt-2 flex items-center text-[#58595b]"><span>$</span>{displayPrice}</h2>
                              {/* </div> */}

                                <p className="text-[13px] text-[#888] pb-[10px]">Price incl. of all taxes</p>

                              <div className="flex">
                                <h3 className="font-bold text-[#58595b] text-[16px]">{variantData.size.label} <span className="text-[16px] text-[#117a7a] font-normal border-b border-b-[#117a7a]">SIZE CHART</span></h3>
                              </div>
                              

                                <div className="flex gap-4 pt-4">
                                 
                               {Object.values(variantData.size.values[0]).map((val) => (
                                <div key={val.key} onClick={() => { setSelectedSize(val.key); setSelectedColor("") }} className={`${selectedSize === val.key ? "bg-black text-white" : "bg-white text-[#58595b]"} rounded-[5px] text-[#58595b] border-[2px] border-[#ccc] flex justify-center items-center p-1 w-[45px] }`}>{val.label}</div>
                            ))}
                                </div>
                               
                             {variantData.color && (
                            <>
                                <div className="pt-3 pb-3 gap-2 flex font-[700] text-[16px] text-[#58595b]">{variantData.color.label}</div>
                                <div className="flex gap-2 pb-4">
                                    {Object.values(variantData.color.values[0]).map((val) => {
                                        const isAvailable = selectedSize ? availableColors.includes(val.key) : true;

                                        return (
                                            <>
                                            
                                            <div className={`rounded-full p-1 border-2   ${selectedColor === val.key ? "border-black " : "border-white"}`}>
                                            <div key={val.key} onClick={() => isAvailable && setSelectedColor(val.key)} style={{ backgroundColor: val.color_code }} className={`rounded-full flex justify-center items-center w-[25px] h-[25px]  ${isAvailable ? "cursor-pointer" : "opacity-30"}`}></div>

                                            </div>

                                            </>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                                <div className="flex ">
                                <h3 className="font-bold text-[#58595b] text-[16px] ">Size not available?<span className="text-[16px] text-[#117a7a] font-normal border-b border-b-[#117a7a] ml-1">Notify Me</span></h3>
                              </div>
                              <div className="flex items-center gap-3 pt-4 pb-4">
                                <p className="text-[#58595b] text-[15px]">Quantity</p>
                                <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))} className="border rounded-[5px] w-[45px] p-1 h-[30px] text-[14px] ">
                                  <option value={1}>01</option>
                                  <option value={2}>02</option>
                                  <option value={3}>03</option>
                                  <option value={4}>04</option>
                                </select>

                              </div>
                              {error && (
                            <div className="text-[#a94442] bg-[#f2dede] rounded-[6px] p-3 mb-4 text-[14px]">{error}</div>
                        )}
                             <div className="flex gap-2 cart-btn">
                            {cartStatus === "idle" && (
                                <div onClick={handleAddToCart}
                                    className="bg-[#ec3d25] w-[229px] text-white pt-[8px] pb-[8px] flex justify-center items-center rounded-[3px] font-[700] text-[14px] cursor-pointer">
                                    ADD TO CART
                                </div>
                            )}

                            {cartStatus === "adding" && (
                                <div className="bg-gray-500 w-[229px] text-white pt-[8px] pb-[8px] flex justify-center items-center rounded-[3px] font-[700] text-[14px]">
                                    ADDING TO CART...
                                </div>
                            )}

                            {cartStatus === "added" && (
                                <div className="bg-green-600 w-[229px] text-white pt-[8px] pb-[8px] flex justify-center items-center rounded-[3px] font-[700] text-[14px]">
                                    ADDED 
                                </div>
                            )}
                            {/* <div className="wishlist-btn text-[#148c8d] flex items-center w-[170px] justify-center border border-[#148c8d] h-[39px] "><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#148c8d"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>ADD TO WISHLIST</div> */}
                     <div onClick={handleWishlist} className="cart-button text-[#148c8d] flex items-center w-[170px] justify-center border border-[#148c8d] h-[39px] text-[14px] cursor-pointer">
                                {
                                    isWishlisted ?
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="20px" fill="#148c8d">
                                                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                                            </svg>ADDED TO WISHLIST
                                        </> :
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="20px" fill="#148c8d"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
                                            ADD TO WISHLIST
                                        </>
                                }

                            </div>
                        </div>
                              <div className="flex gap-1 items-center pt-4">
                                 <p className="text-[#58595b] text-[15px] pr-2">Share
                                 </p>
                                  <i class="color fa-brands fa-whatsapp"></i>
                                  <i class="color fa-brands fa-square-facebook"></i>
                                  <i class="color fa-brands fa-twitter"></i>
                                  <i class="color fa-brands fa-instagram"></i>

                              </div>
                              <div className="font-bold text-[#282d3] pt-4">
                                Delivery Details
                              </div>
                              <div className="border flex justify-between rounded-[6px]   pt-[10px] pb-[10px] pl-[10px] pr-[10px] mt-[15px] mb-[15px]">
                                <input className="outline-none w-full text-[#58595b] font-[200] text-[16px] " placeholder="Enter Pincode"/>
                                <div className="text-[16px] text-[#148c8d] font-[700]">CHECK</div>
                              </div>
                              <div className="flex shadow-[0px_1px_2px_rgba(0,0,0,0.2)] gap-2">
                                <div className="flex justify-center items-center"><svg className="logo" xmlns=" http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#58595b"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z"/></svg></div>
                                <p>This product is eligible for return or exchange under our 30-day return or exchange policy. No questions asked.</p>
                              </div>
                              <div className="border border-[rgba(0,0,0,0.125)] text-[#58595b] mt-[40px]">
                                <div className="flex justify-between text-[16px] border-b font-[700] p-3">Product Details <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></div>
                                <div className="flex justify-between text-[16px] border-b font-[700] p-3">Product description <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></div>
                                <div className="flex justify-between text-[16px] font-[700] p-3">Artist's Details <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}