const SearchBar = ({ fetchRecipes, setQuery }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for recipes..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
