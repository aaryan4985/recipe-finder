import React, { useState } from "react";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const fetchRecipes = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    setRecipes(data.meals || []); // Fallback to empty array if no results
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <input
        type="text"
        placeholder="Search for recipes..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchRecipes}>Search</button>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.idMeal}>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <a
              href={recipe.strSource}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Recipe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
