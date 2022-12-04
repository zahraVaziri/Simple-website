import React, { useState } from "react";
import './App.css'
import Search from "./common/Search/Search";
import Filter from "./component/Filter/Filter";
import NavBar from "./component/NavBar/NavBar";
import ProductPrvider from "./component/provider/ProductProvider";
import ProductList from "./ProductList/ProductList";


const App =()=>{
  
    return(
        <div className="container">

        <ProductPrvider>
        <NavBar/>
        <Filter/>
        <ProductList /> 
        </ProductPrvider>
        </div>
    )
  
}

export default App;
