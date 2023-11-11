import React from 'react'
import { Route, Routes } from "react-router-dom";
import css from '../src/resources/css/bootstrap.css'
import bootsrtap from "../src/resources/css/style.css"
import Header from './FunctionalComponents/Header/Header'
// Main sections...>>>>
import Main from './FunctionalComponents/Main'
import Footer from './FunctionalComponents/Footer/Footer'
import YouTube from './FunctionalComponents/Youtube/YouTube'
// Pages....>>>>>>
import Mac from './FunctionalComponents/Pages/Mac/Mac'
// import Iphone from './FunctionalComponents/Pages/iphone/Iphone'
import Ipad from './FunctionalComponents/Pages/ipad/Ipad'
import Watch from './FunctionalComponents/Pages/Watch/Watch'
import Music from './FunctionalComponents/Pages/Music/Music'
import Support from './FunctionalComponents/Pages/Support/Support'
import Cart from './FunctionalComponents/Pages/Cart/Cart'
import Search from './FunctionalComponents/Pages/Search/Search'

import Four04 from './FunctionalComponents/Pages/Four04/Four04'


import SharedLayout from './FunctionalComponents/Pages/SharedLayout'
import AirPods from './FunctionalComponents/Pages/AirPods/AirPods'
import Tv from './FunctionalComponents/Pages/Tv&Home/TV&Home'
import Entertainment from './FunctionalComponents/Pages/Entertainment/Entertainment'
import Accessories from './FunctionalComponents/Pages/Accessories/Accessories'
import Iphone from './FunctionalComponents/Iphone';
import ProductPage from './FunctionalComponents/Pages/ProductPage/ProductPage';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="Mac" element={<Mac />} />
          <Route path="Iphone" element={<Iphone />} />
          <Route path="Iphone/:productID" element={<ProductPage />} />
          <Route path="Ipad" element={<Ipad />} />
          <Route path="Watch" element={<Watch />} />
          <Route path="Airpods" element={<AirPods />} />
          <Route path="TV & Home" element={<Tv />} />
          <Route path="Entertainment" element={<Entertainment />} />
          <Route path="Accessories" element={<Accessories />} />
          <Route path="Support" element={<Support />} />
          <Route path="Search" element={<Search />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
