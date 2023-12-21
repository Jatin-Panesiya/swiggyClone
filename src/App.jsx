import React from "react";
import "./index.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import SearchPage from "./components/SearchPage";
import RestaurantDetail from "./components/RestaurantDetail";

const App = () => {
  return (
    <div className="text-black bg-white min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/search-food" element={<SearchPage />} />
          <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
