const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{recipe.strMeal}</h3>
        <a
          href={recipe.strSource}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:underline"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
