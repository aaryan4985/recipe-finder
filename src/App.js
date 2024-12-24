import React, { useState } from "react";
import RecipeList from "./RecipeList";
import SearchBar from "./SearchBar";
import Header from "./Header"; // Add this line to import the Header component

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const fetchRecipes = async () => {
    const API_URL = `https://api.edamam.com/search?q=${query}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`;
    const response = await fetch(API_URL);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div>
      <Header />
      <SearchBar fetchRecipes={fetchRecipes} setQuery={setQuery} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
