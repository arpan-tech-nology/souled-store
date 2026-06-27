import "./card.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import useWishlist from "../handelWishlist";


export default function Card({product}){
    const navigate=useNavigate();

    const [toast, setToast] = useState({
        show: false,
        message: "",
    });
const { toggleWishlist, isWishlisted } = useWishlist();

const handleWishlist = (e) => {
  e.stopPropagation();

  const result = toggleWishlist(product);

  if (result) {
    setToast({
      show: true,
      message: result.message,
    });

    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 2000);
  }
};
   
    // console.log(product)
    return(
        <>
        <div className="card relative" onClick={()=>navigate(`/product/${product.product_id}`, {state:{ product }})}>
            <div onClick={handleWishlist} className=" like cursor-pointer  absolute top-[10px] text-white  backdrop-blur-[30px] rounded-[50%] w-[40px] h-[40px] flex justify-center items-center right-[10px]">
                {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg> */}
                {
                            isWishlisted(product.product_id) ?
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                                        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
                                    </svg>
                                </> : <>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
                                </>
                        }
                </div>
        <div className="card-img">
            <img className="image" alt="" src={`/images/${product?.image_url}`}>
            
            </img>
        </div>
        <div >
            <h5 className="heading font-bold border-b border-b-[#00000021] text-[#58595b]">{product?.title}</h5>
            <p className="text text-[#737577]">{product?.title}</p>
            {product?.price_range?
            <p className="price flex text-[#737577] items-center"><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#737577"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z"/></svg>{product.price_range.min?`${product.price_range.min}-${product.price_range.max}`: product.price_range.max}</p>
            :""}
        </div>

        </div>
         <div
                className={`fixed bottom-6 bg-red-500 text-white rounded-[6px] w-max left-1/2 -translate-x-1/2 z-[9999]
  transition-all duration-300 ease-out
  ${toast.show
                        ? "translate-y-0  px-3 py-2"
                        : " translate-y-12 p-0 pointer-events-none"
                    }`}
            >
                {toast.message}
            </div>
        </>
    )
}