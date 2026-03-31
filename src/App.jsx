import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import DarkModeButton from "./components/DarkModeButton.jsx";

export default function App() {
  const [count, setCount] = useState(3);

  return (
    <div
      className="h-screen pt-6"
      style={{
        background: "var(--background1)",
      }}
    >
      <div className="mx-6">
        <Header />
      </div>
    </div>
  );
}
