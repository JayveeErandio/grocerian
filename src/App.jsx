import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import DarkModeButton from "./components/DarkModeButton.jsx";

export default function App() {
  const [count, setCount] = useState(3);

  return (
    <div className="bg-gray-200 h-screen pt-6">
      <div className="mx-6">
        <Header />
      </div>
    </div>
  );
}
