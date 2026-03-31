import SearchBar from "./SearchBar";
import { useState } from "react";
import DarkModeButton from "./DarkModeButton";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex w-full items-center gap-4 justify-between">
      <SearchBar onSearch={setSearchTerm} />
      <DarkModeButton />
    </div>
  );
}
