
import { BrowserRouter as Router ,Route , Routes } from "react-router-dom";
import WomenPage from "./womenPage";
import MenPage from "./menPage";
import SneakerPage from "./sneakers";
import LoginPage from "./Components/registrationPage/loginPage";
import ProductPage from "./Components/productPage/productPage";
import Cart from "./Components/Cart/Cart";
import FilterCollections from "./Components/filterCollections/filterCollection";
import CartSideBar from "./Components/cartSideBar/cartSideBar";
import { useState } from "react";
import Wishlist from "./Components/wishlistPage/wishlist";


function App() {
    const [cartSideBar ,setCartSideBar]=useState(false);
    const [sidebarOpen, setSidebarOpen]=useState(false);
    
    
    return (
        <>
    <Router>
                  <CartSideBar isOpen={cartSideBar} closeSideBar={() => setCartSideBar(false)}/>
        
        <Routes>

        <Route path="/" element={<MenPage openCart={() =>setCartSideBar(true)} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}></MenPage>}></Route>
        <Route path="/womenPage" element={<WomenPage openCart={() =>setCartSideBar(true) } sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>}></Route>
        <Route path="/sneakerPage" element={<SneakerPage openCart={() =>setCartSideBar(true)} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>}></Route>
        <Route path="/loginPage" element={<LoginPage openCart={() =>setCartSideBar(true)} />}></Route>
        <Route path="/product/:id" element={<ProductPage openCart={() =>setCartSideBar(true)} />}></Route>
        <Route path="/cart" element={<Cart openCart={() =>setCartSideBar(true)} />}></Route>
        <Route path="/filter" element={<FilterCollections openCart={() =>setCartSideBar(true)}/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>} />


        </Routes>
    </Router>
       


        </>
    );
}

export default App;
