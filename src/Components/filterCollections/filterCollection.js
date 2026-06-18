// import Navbar from "../Navbar/Navbar";
import Header from "../header/header";
import Footer from "../footer/footer";
import Card from "../card/card";
// import ProductCard from "../Product card/ProductCard";
import { useLocation } from "react-router-dom";
import { allProducts } from "../../data/allProducts";
import { useState } from "react";

export default function FilterCollections({openCart}) {
   const { state } = useLocation();
    const tag = state?.tag;
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [priceRange, setPriceRange] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(tag || "");

    const categories = [
        ...new Set(
            allProducts
                .filter(product => product.tags?.includes(tag))
                .flatMap(product => product.tags || [])
                .filter(item => item !== tag)
        )
    ];


    const baseProducts = selectedCategory
        ? allProducts.filter(product =>
            product.tags?.includes(selectedCategory)
        )
        : allProducts;

    const products = baseProducts.filter(product => {

        return product.variants?.some(variant => {


            const sizeMatch =
                selectedSizes.length === 0 ||
                selectedSizes.includes(variant.size);


            const price = Number(variant.price);

            const priceMatch =
                !priceRange ||
                (price >= priceRange.min && price <= priceRange.max);

            return sizeMatch && priceMatch;
        });
    });



    return (
        <>
            <Header cartSideBar={openCart}/>
            <div className="flex p-2">
                <div className="w-[350px] sticky z-10 top-[160px] bg-white h-[60vh] overflow-y-auto">
                    <div>
                        <h2 className="text-[14.5px] text-[#59595b] font-[700] pt-[12px] pb-[12px] pr-[3px] pl-[3px] border-t-[1px]">CATEGORIES</h2>
                        <input className="outline-none border border-rgba(0,0,0,0.15) p-[6px] w-[95%] text-[#59595b] font-[300] text-[15px] rounded-[5px]" placeholder="Search for Categories" />
                        <div className="w-full p-2">
                            {categories.map((item, index) => (
                                <label key={index} className="flex items-center justify-between p-1 cursor-pointer" >
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategory === item}
                                            onChange={() => setSelectedCategory(item)}
                                            className="w-[16px] h-[16px]"
                                        />
                                        <span className="text-gray-700 text-sm">{item}</span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                  
                    <div>
                        <h2 className="text-[14.5px] text-[#59595b] font-[700] pt-[12px] pb-[12px] pr-[3px] pl-[3px] border-t-[1px]">SIZE</h2>
                        <input className="outline-none border border-rgba(0,0,0,0.15) p-[6px] w-[95%] text-[#59595b] font-[300] text-[15px] rounded-[5px]" placeholder="Search for Size" />
                        <div className="w-full p-2 pt-4 flex flex-wrap gap-3">

                            {["XS", "small", "medium", "large", "XL"].map(size => (
                                <div
                                    key={size}
                                    onClick={() => {
                                        setSelectedSizes(prev =>
                                            prev.includes(size)
                                                ? prev.filter(s => s !== size)
                                                : [...prev, size]
                                        );
                                    }}
                                    className={`border-2 rounded-[6px] pt-[6px] pb-[6px] pl-4 pr-4 w-max text-[15px] cursor-pointer
                ${selectedSizes.includes(size)
                                            ? "bg-black text-white"
                                            : "border-[#58595b]"
                                        }`}
                                >
                                    {size}
                                </div>
                            ))}

                        </div>
                    </div>
                    <div>
                        <h2 className="text-[14.5px] text-[#59595b] font-[700] pt-[12px] pb-[12px] pr-[3px] pl-[3px] border-t-[1px]">PRICES</h2>
                        <div className="w-full p-2 flex flex-col gap-2">

                            <label className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="price"
                                    onChange={() =>
                                        setPriceRange({ min: 0, max: 500 })
                                    }
                                />
                                Rs.0 - Rs.500
                            </label>

                            <label className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="price"
                                    onChange={() =>
                                        setPriceRange({ min: 500, max: 1000 })
                                    }
                                />
                                Rs.500 - Rs.1000
                            </label>

                            <label className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    name="price"
                                    onChange={() =>
                                        setPriceRange({ min: 1000, max: 2000 })
                                    }
                                />
                                Rs.1000+
                            </label>

                        </div>
                    </div>

                </div>
                <div className="flex flex-col w-[80%] ">
                    <div className="w-full pt-[15px] text-[12px] text-[#a7a9ac] gap-1 flex">Home /<span>T-Shirts /</span></div>
                    <div className="flex justify-between items-center pb-6">
                        <div className="text-black text-[14px]">Men T-Shirts<span className="text-[#58595b]">-1414 items</span></div>
                        <div className="flex border border-[#ccc] p-[8px] rounded-[5px] text-[#58595b] text-[14.5px]">
                            <select className="outline-none w-[220px]">
                                <option>Selecting Sorting options</option>
                                <option>e</option>
                                <option>e</option>
                            </select>
                        </div>
                    </div>
                    <div className="category-images grid grid-cols-4 gap-4 all-filter-images">
                        {products.map((item, index) => (
                            <Card key={index} product={item} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}