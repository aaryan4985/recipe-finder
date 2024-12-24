const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <img src={recipe.image} alt={recipe.label} />
      <h2>{recipe.label}</h2>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer">
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
