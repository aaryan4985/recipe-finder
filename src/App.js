import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./SearchBar";
import RecipeList from "./RecipeList";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      setRecipes(data.meals || []); // Fallback to empty array if no results
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto p-4">
        <SearchBar fetchRecipes={fetchRecipes} setQuery={setQuery} />
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};

export default App;
