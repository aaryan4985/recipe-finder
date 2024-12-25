const SearchBar = ({ fetchRecipes, setQuery }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="button" onClick={fetchRecipes}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
