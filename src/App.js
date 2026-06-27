
import { BrowserRouter as Router ,Route , Routes } from "react-router-dom";
import WomenPage from "./womenPage";
import MenPage from "./menPage";
import SneakerPage from "./sneakers";
import LoginPage from "./Components/registrationPage/loginPage";
import ProductPage from "./Components/productPage/productPage";
import Cart from "./Components/Cart/Cart";
import FilterCollections from "./Components/filterCollections/filterCollection";
import CartSideBar from "./Components/cartSideBar/cartSideBar";
// import { useState } from "react";
import Wishlist from "./Components/wishlistPage/wishlist";
import SideBar from "./Components/sideBar/sidebar";


function App() {
    // const [cartSideBar ,setCartSideBar]=useState(false);
    // const [sidebarOpen, setSidebarOpen]=useState(false);
    
    
    return (
        <>
    <Router>
                  <CartSideBar/>
                  <SideBar></SideBar>
        
        <Routes>

        <Route path="/" element={<MenPage></MenPage>}></Route>
        <Route path="/womenPage" element={<WomenPage />}></Route>
        <Route path="/sneakerPage" element={<SneakerPage />}></Route>
        <Route path="/loginPage" element={<LoginPage  />}></Route>
        <Route path="/product/:id" element={<ProductPage  />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/filter/:type" element={<FilterCollections/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>} />


        </Routes>
    </Router>
       


        </>
    );
}

export default App;
