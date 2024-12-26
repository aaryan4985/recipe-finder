import React from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="flex items-center mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg shadow-sm text-gray-700"
        placeholder="Search for a recipe..."
      />
    </div>
  );
};

export default SearchBar;
