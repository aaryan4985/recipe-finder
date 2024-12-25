const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
