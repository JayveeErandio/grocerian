import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import DarkModeButton from "./DarkModeButton";
import CartButton from "./CartButton";

export default function Header(props) {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    props.setSearch(searchTerm);
  }, [searchTerm]);
  return (
    <div
      className={
        "py-3 flex w-full items-center gap-5 justify-between " + props.className
      }
      style={{ background: "var(--background1)" }}
    >
      <SearchBar onSearch={setSearchTerm} className="w-full lg:w-1/2" />
      <DarkModeButton className="block lg:hidden" />
      <div className="hidden lg:flex items-center gap-7">
        <DarkModeButton className="h-8" />
        <CartButton />
      </div>
    </div>
  );
}
