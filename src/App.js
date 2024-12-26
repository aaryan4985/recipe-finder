import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const App = () => {
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
    <div className="min-h-screen bg-[#0f0f1a] relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 via-transparent to-pink-800/30 animate-gradient" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000" />

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto py-12 px-4 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-6xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
        >
          Culinary Explorer
        </motion.h1>

        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <SearchBar query={query} setQuery={setQuery} />
                <Filters
                  setSelectedCategory={setSelectedCategory}
                  setSelectedArea={setSelectedArea}
                />
                {loading ? (
                  <Loader />
                ) : recipes.length > 0 ? (
                  <RecipeList recipes={recipes} />
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 text-center text-xl text-gray-300"
                  >
                    No recipes found. Try searching for something else!
                  </motion.div>
                )}
              </motion.div>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </div>
  );
};

const SearchBar = ({ query, setQuery }) => (
  <div className="relative max-w-2xl mx-auto mb-8">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for recipes..."
      className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
    />
    <div className="absolute inset-y-0 right-4 flex items-center">
      <svg
        className="w-6 h-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  </div>
);

const Filters = ({ setSelectedCategory, setSelectedArea }) => {
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    const fetchFilters = async () => {
      const [categoryRes, areaRes] = await Promise.all([
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list"),
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list"),
      ]);

      const [categoryData, areaData] = await Promise.all([
        categoryRes.json(),
        areaRes.json(),
      ]);

      setCategories(categoryData.meals || []);
      setAreas(areaData.meals || []);
    };

    fetchFilters();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12">
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all appearance-none"
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option
            key={cat.strCategory}
            value={cat.strCategory}
            className="text-gray-900"
          >
            {cat.strCategory}
          </option>
        ))}
      </select>

      <select
        onChange={(e) => setSelectedArea(e.target.value)}
        className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all appearance-none"
      >
        <option value="">Select Region</option>
        {areas.map((area) => (
          <option
            key={area.strArea}
            value={area.strArea}
            className="text-gray-900"
          >
            {area.strArea}
          </option>
        ))}
      </select>
    </div>
  );
};

const RecipeList = ({ recipes }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {recipes.map((recipe) => (
      <motion.div
        key={recipe.idMeal}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          to={`/recipe/${recipe.idMeal}`}
          className="block overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-500/50 transition-all"
        >
          <div className="relative">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              {recipe.strMeal}
            </h3>
            <div className="flex items-center text-gray-300">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>View Recipe</span>
            </div>
          </div>
        </Link>
      </motion.div>
    ))}
  </div>
);

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setRecipe(data.meals[0]);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <Loader />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20">
        <div className="relative h-96">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <h1 className="absolute bottom-8 left-8 text-4xl font-bold text-white">
            {recipe.strMeal}
          </h1>
        </div>
        <div className="p-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Instructions
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {recipe.strInstructions}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Loader = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <div className="w-12 h-12 border-4 border-white/20 border-t-purple-500 rounded-full animate-spin" />
  </div>
);

export default App;
