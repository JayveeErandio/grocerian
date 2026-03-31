import { useState, useEffect } from "react";

export default function DarkModeButton() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }, [dark]);

  return (
    <img
      className="h-7"
      onClick={() => setDark(!dark)}
      src={dark ? "icons/lightmode.svg" : "icons/darkmode.svg"}
    />
  );
}
