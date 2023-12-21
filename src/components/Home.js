import React from "react";
import Header from "./Header";
import Offers from "./Offers";
import MindProduct from "./MindProduct";
import { Products } from "./Products";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-white text-black">
      <Header />
      <div className="mx-[10%]">
        <Offers />
        <MindProduct />
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
