
import {
  BrowserRouter,
  Route, 
  Routes,
} from "react-router-dom";
import './App.css';
import Beauty from "./Components/Beauty/Beauty";
import HomeLifestyle from "./Components/Home&Lifestyle/HomeLifestyle";

import Home from "./Components/Home/Home";
import Kids from "./Components/Kids/Kids";
import Men from "./Components/Men/Men";
import Women from "./Components/Women/Women";
import Product from "./Components/Product/Product";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/women" element={<Women/>}/>
      <Route path="/kids" element={<Kids/>}/>
      <Route path="/home&style" element={<HomeLifestyle/>}/>
      <Route path="/beauty" element={<Beauty/>}/>
      <Route path="/product" element={<Product/>}/>
    
    </Routes>
    </BrowserRouter>
     
    
    
  );
}

export default App;
