import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div
      className="shadow-md card flex items-center rounded-4xl px-3 w-full"
      style={{ background: "var(--background2" }}
    >
      <img
        src="icons/search.svg"
        className="opacity-75 h-6 "
        style={{ filter: "var(--invert" }}
      />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for chips, soap bar, etc..."
        className="outline-none text-sm px-2 py-3 w-full"
        style={{ color: "var(--color1)" }}
      />
    </div>
  );
}
