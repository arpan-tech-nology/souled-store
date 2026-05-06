
import { BrowserRouter as Router ,Route ,Link, Routes } from "react-router-dom";



import WomenPage from "./womenPage";
import MenPage from "./menPage";
import SneakerPage from "./sneakers";
import LoginPage from "./Components/registrationPage/loginPage";
import ProductPage from "./Components/productPage/productPage";
import Cart from "./Components/Cart/Cart";
import FilterCollections from "./Components/filterCollections/filterCollection";


function App() {
    
  
      
        
   

    return (
        <>
    <Router>
        <Routes>

        <Route path="/" element={<MenPage></MenPage>}></Route>
        <Route path="/womenPage" element={<WomenPage></WomenPage>}></Route>
        <Route path="/sneakerPage" element={<SneakerPage/>}></Route>
        <Route path="/loginPage" element={<LoginPage></LoginPage>}></Route>
        <Route path="/product/:id" element={<ProductPage></ProductPage>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/filter" element={<FilterCollections></FilterCollections>}></Route>


        </Routes>
    </Router>
       


        </>
    );
}

export default App;
