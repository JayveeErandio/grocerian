import { useState, useEffect, useContext, use } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import ProductCard from "./components/ProductCard.jsx";
import groceryData from "./data/products.js";
import CartPage from "./components/CartPage.jsx";
import CartButton from "./components/CartButton.jsx";
import ModalPurchase from "./components/ModalPurchase.jsx";
import { UserContext } from "./data/userdata.jsx";

export default function App() {
  const { userData, setUserData } = useContext(UserContext);
  let [showPurchase, setShowPurchase] = useState(false);
  let [cost, setCost] = useState(0);
  return (
    <>
      <div
        className="min-h-screen pt-6 lg:pt-12"
        style={{
          background: "var(--background1)",
        }}
      >
        <div className="mx-6 lg:mx-40">
          <Header className="sticky top-0 z-2" />
          <div>
            {groceryData.map((category) => (
              <div
                key={category.id}
                className="grid justify-center gap-4 [grid-template-columns:repeat(auto-fit,132px)]"
              >
                <p
                  className="mt-6 col-span-full font-bold text-2xl"
                  style={{ color: "var(--color1)" }}
                >
                  {category.name}
                </p>
                {category.products.map((products) => (
                  <ProductCard
                    key={products.id}
                    id={products.id}
                    name={products.name}
                    price={products.price}
                  />
                ))}
                <div className="h-6 col-span-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CartButton className="fixed bottom-8 right-8 z-1 w-20 lg:hidden" />
      <CartPage setPurchase={setShowPurchase} setCost={setCost} />
      <ModalPurchase cost={cost} state={[showPurchase, setShowPurchase]} />
    </>
  );
}
