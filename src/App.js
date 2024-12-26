import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import RecipeList from "./RecipeList";
import SearchBar from "./SearchBar";
import RecipeDetail from "./RecipeDetail";
import Filters from "./Filters";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
        if (selectedCategory) {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
        } else if (selectedArea) {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query, selectedCategory, selectedArea]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-center text-4xl font-bold mb-8">Recipe Finder</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar query={query} setQuery={setQuery} />
                <Filters
                  setSelectedCategory={setSelectedCategory}
                  setSelectedArea={setSelectedArea}
                />
                {loading ? (
                  <div className="mt-8">
                    <Loader />
                  </div>
                ) : recipes.length > 0 ? (
                  <RecipeList recipes={recipes} />
                ) : (
                  <div className="mt-8 text-center text-lg">
                    No recipes found. Try searching for something else!
                  </div>
                )}
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
