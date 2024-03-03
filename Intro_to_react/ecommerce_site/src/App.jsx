import { useState } from "react";
// import the pages first
import Home from "./pages/Home.js";
import ProductDetails from "./pages/ProductDetails.js";
//import the Contexts
import CartContext from "./contexts/CartContext.js";
import ProductContext from "./contexts/ProductContext.js";
import SidebarContext from "./contexts/SidebarContext.js";
// import the Components
import CartItem from "./components/CartItem.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Product from "./components/Product.js";
import Sidebar from "./components/Sidebar.js";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return <></>;
}

export default App;
