// import "./FilterCollections.css"
import "./filterCollection.css"
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
import Header from "../header/header";
import Footer from "../footer/footer";
// import ProductCard from "../Product card/ProductCard";
import Card from "../card/card";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { menProducts } from "../../data/menProducts";
import { menProducts } from "../../data/menProducts";
import { womenProducts } from "../../data/womenProducts";
// import { sneakers } from "../../data/sneakersProduct";
import { sneakerProducts } from "../../data/sneaker";

export default function FilterCollections({ openCart }) {
    const { type } = useParams();
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [priceRange, setPriceRange] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState([]);

    const menCategories = [
    "Oversized T-shirts",
    "Shirts",
    "Polos",
    "Hoodies",
    "Jackets",
    "Men Pants",
    "Men Joggers",
    "Men Jackets",
    ];
    const womenCategories = [
        "Women T-Shirts",
        "Women Shirts",
        "Women Jeans",
        "Women Pants",
        "Women Cropped Tops",
        "Women Shorts",
        "Women Dresses",
    ];
    const sneakerCategories = [
     
   'Men High Top Sneakers',
      'Men Low Top Sneakers',
      'Men Mid Top Sneakers',
      'Women Mid Top Sneakers',
      'Women Low Top Sneakers',
    ];

    let categories = [];

    if (type === "men") {
        categories = menCategories;
    }
    else if (type === "women") {
        categories = womenCategories;
    }
    else if (type === "sneaker") {
        categories = sneakerCategories;
    }

    const handleChange = (item) => {
        if (selectedCategory.includes(item)) {
            setSelectedCategory(selectedCategory.filter((i) => i !== item));
        } else {
            setSelectedCategory([...selectedCategory, item]);
        }
    };

    let baseProducts = [];
    if (type === "men") {
        baseProducts = menProducts;
    }
    else if (type === "women") {
        baseProducts = womenProducts;
    }
    else if (type === "sneaker") {
        baseProducts = sneakerProducts;
    }

    const products = baseProducts.filter(product => {
        const categoryMatch =
            selectedCategory.length === 0 ||
            product.categories.some(cat =>
                selectedCategory.includes(cat)
            );

        const variantMatch = product.variants?.some(variant => {
            const sizeMatch =
                selectedSizes.length === 0 ||
                selectedSizes.includes(variant.size);

            const price = Number(variant.price);

            const priceMatch =
                !priceRange ||
                (price >= priceRange.min && price <= priceRange.max);

            return sizeMatch && priceMatch;
        });

        return categoryMatch && variantMatch;
    });

    const [filterSidebar, setfilterSidebar] = useState(false)
    useEffect(() => {
        document.body.style.overflow = filterSidebar ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [filterSidebar]);

    const [sortOption, setSortOption] = useState("");

    const sortedProducts = [...products].sort((a, b) => {
        const priceA = Number(a.price_range.max || 0);
        const priceB = Number(b.price_range.max || 0);


        switch (sortOption) {
            case "az":
                return a.title.localeCompare(b.title);
            case "za":
                return b.title.localeCompare(a.title);

            case "priceHighLow":
                return priceB - priceA;

            case "priceLowHigh":
                return priceA - priceB;

            default:
                return 0;
        }
    });

    return (
        <>
          <Header/>

            <div className={`${filterSidebar ? "hidden" : "w-full border p-2 sticky z-10 bg-white top-0 justify-between hidden filter-button"}`}>
                <div onClick={() => setfilterSidebar(true)} className="p-3 h-[36px] w-[120px] flex justify-center items-center bg-black text-white rounded-[4px] top-0 cursor-pointer">Filter</div>
            </div>

            <div className="flex">
                {filterSidebar && (
                    <div className="fixed filter-overlay w-full top-0 h-full bg-[rgba(0,0,0,0.4)] z-40" onClick={() => setfilterSidebar(false)} ></div>

                )}
                <div className={`${filterSidebar ? "active" : ""} filter-section  p-2 w-[400px] sticky top-[150px] bg-white h-[85vh] overflow-y-auto translate-x-0 z-1 `}>
                    {filterSidebar &&
                        <div onClick={() => setfilterSidebar(false)} className="w-full justify-end flex pr-3 pb-2"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></div>
                    }
                    <div>
                        <h2 className="text-[14.5px] text-[#59595b] font-[700] pt-[12px] pb-[12px] pr-[3px] pl-[3px] border-t-[1px]">CATEGORIES</h2>
                        {/* <input className="outline-none border border-rgba(0,0,0,0.15) p-[6px] w-[95%] text-[#59595b] font-[300] text-[15px] rounded-[5px]" placeholder="Search for Categories" /> */}
                        <div className="w-full p-2">
                            {categories.map((item, index) => (
                                <label key={index} className="flex items-center justify-between p-1 cursor-pointer" >
                                    <div className="flex items-center gap-3">
                                        <input type="checkbox"
                                            checked={selectedCategory.includes(item)}
                                            onChange={() => handleChange(item)}
                                            className="w-[16px] h-[16px]" />
                                        <span className="text-gray-700 ">
                                            {item}
                                        </span>
                                    </div>
                                   
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[14.5px] text-[#59595b] font-[700] pt-[12px] pb-[12px] pr-[3px] pl-[3px] border-t-[1px]">SIZE</h2>
                        {/* <input className="outline-none border border-rgba(0,0,0,0.15) p-[6px] w-[95%] text-[#59595b] font-[300] text-[15px] rounded-[5px]" placeholder="Search for Size" /> */}
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
                                    className={`border-2 rounded-[6px] pt-[2px] pb-[2px] pl-2 pr-2 w-max text-[15px] cursor-pointer
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
                                <input type="radio" name="price"
                                    onChange={() => setPriceRange({ min: 0, max: 500 })} />
                                Rs.0 - Rs.500
                            </label>

                            <label className="flex items-center gap-3">
                                <input type="radio" name="price"
                                    onChange={() => setPriceRange({ min: 500, max: 1000 })} />
                                Rs.500 - Rs.1000
                            </label>

                            <label className="flex items-center gap-3">
                                <input type="radio" name="price"
                                    onChange={() => setPriceRange({ min: 1000, max: 2000 })} />
                                Rs.1000+
                            </label>

                        </div>
                    </div>
                    <div onClick={() => setfilterSidebar(false)} className="apply-btn p-3 h-[36px] w-[140px] flex justify-center items-center bg-black absolute bottom-[16px] left-[92px] text-white rounded-[4px] cursor-pointer">Apply</div>

                </div>
                <div className="flex flex-col w-[100%] filter-collection-right-section">
                    <div className="w-full pt-[15px] text-[12px] text-[#a7a9ac] gap-1 flex">Home /<span>T-Shirts /</span></div>
                    <div className=" filter-sort flex justify-between items-center pb-6 pr-3">
                        <div className="text-black text-[14px]">Men T-Shirts</div>
                        <div className="flex border border-[#ccc] p-[8px] rounded-[5px] text-[#58595b] text-[14.5px]">
                            <select
                                className="outline-none w-[190px] bg-white"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                            >
                                <option value="">Select Sorting Option</option>
                                <option value="az">A to Z</option>
                                <option value="za">Z to A</option>
                                <option value="priceHighLow">Price - High to Low</option>
                                <option value="priceLowHigh">Price - Low to High</option>
                            </select>
                        </div>
                    </div>
                    <div className="collection grid grid-cols-4 gap-4">
                        {sortedProducts.map((item, index) => (
                            <Card key={index} product={item} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
            </>
    )
}