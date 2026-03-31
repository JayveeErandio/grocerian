import { useState, useEffect } from "react";

export default function DarkModeButton() {
  const temp = document.querySelector("body");
  let [mode, setMode] = useState("light");
  const oppose = () => {
    if (mode == "light") return "dark";
    else return "light";
  };
  temp.setAttribute("data-theme", mode);

  return (
    <img
      className="h-7"
      onClick={() => {
        setMode(oppose());
      }}
      src={"icons/" + oppose() + "mode.svg"}
    />
  );
}
