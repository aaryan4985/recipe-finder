const SearchBar = ({ fetchRecipes, setQuery }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex justify-center items-center gap-4 my-6"
    >
      <input
        type="text"
        placeholder="Search for recipes..."
        className="px-4 py-2 border rounded-lg shadow-sm w-1/2 focus:outline-none focus:ring focus:ring-indigo-300"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 focus:ring focus:ring-indigo-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
