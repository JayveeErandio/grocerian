import { useContext, useEffect, useState } from "react";
import { UserContext, ProductCarted } from "../data/userdata";
import ItemNoProductPage from "./ItemNoProductPage";

export default function ProductCard(props) {
  const { userData, setUserData } = useContext(UserContext);

  //A template for the product that is not yet carted
  let nonCarted = { id: props.id, quantity: 0, isListed: true };

  let quantity =
    userData.cart.find((item) => item.id == props.id)?.quantity || 0;

  useEffect(() => {
    quantity = userData.cart.find((item) => item.id == props.id)?.quantity || 0;
  }, [userData]);

  useEffect(() => {
    if (quantity > 0) {
      const exists = userData.cart.some((item) => item.id == props.id);

      const updatedCart = exists
        ? userData.cart.map((item) =>
            item.id == props.id ? { ...item, quantity: quantity } : item,
          )
        : [
            ...userData.cart,
            { id: props.id, quantity: quantity, isListed: true },
          ];

      setUserData({
        ...userData,
        cart: updatedCart,
      });
    } else {
      const updatedCart = userData.cart.filter((item) => item.id != props.id);

      setUserData({
        ...userData,
        cart: updatedCart,
      });
    }
  }, [quantity]);

  return (
    <div
      className={"relative shadow-md w-33 p-2.5 rounded-lg " + props.className}
      style={{ background: "var(--background2)" }}
    >
      <div className="w-full aspect-square relative">
        <img
          className="object-cover absolute top-1/2 -translate-y-1/2"
          src={"products/" + props.name + ".png"}
          onError={(e) => {
            e.target.src = "products/undefined.png";
            e.target.className += " opacity-50";
          }}
        />
      </div>

      <div className="w-18" style={{ color: "var(--color1)" }}>
        <p className="flex items-end text-xs leading-none min-h-[2.4rem]">
          {props.name
            ? props.name
                ?.split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            : "Product"}
        </p>
        <p className="font-bold text-md">
          {props.price ? "₱" + props.price?.toFixed(2) : "Price"}
        </p>
      </div>
      <ItemNoProductPage
        quantity={quantity}
        setQuantity={(newQty) => {
          // An event of quantity 0 to 1 (Inserting to cart)
          if (quantity == 0) {
            setUserData((prev) => ({
              ...prev,
              cart: prev.cart.concat(nonCarted),
            }));
          }
          setUserData((prev) => ({
            ...prev,
            cart: prev.cart.map((item) =>
              item.id === props.id ? { ...item, quantity: newQty } : item,
            ),
          }));
        }}
        className="absolute right-0 bottom-0 translate-5 z-1"
      />
    </div>
  );
}
