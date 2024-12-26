import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  if (recipes.length === 0) {
    return (
      <p className="text-center">No recipes found. Try a different search!</p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Link
          to={`/recipe/${recipe.idMeal}`}
          key={recipe.idMeal}
          className="block p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition"
        >
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="rounded-lg mb-2"
          />
          <h3 className="text-gray-700 font-semibold text-lg">
            {recipe.strMeal}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
