import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import ProductCard from "./components/ProductCard.jsx";

class ProductCarted {
  product_id;
  quantity;
}

export default function App() {
  let data;
  if (localStorage.getItem("grocerian"))
    data = JSON.parse(localStorage.getItem("grocerian"));
  else data = { cart: [] };

  return (
    <div
      className="min-h-screen pt-6 lg:pt-12"
      style={{
        background: "var(--background1)",
      }}
    >
      <div className="mx-6 lg:mx-40">
        <Header className="sticky top-0 z-2" />
        <div className="grid justify-center gap-4 [grid-template-columns:repeat(auto-fit,132px)]">
          <ProductCard name="milk chocolate" price="875.59" />
          <ProductCard name="butter" price="109.00" />
          <ProductCard name="Fleux De Bananue Amoir" />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
