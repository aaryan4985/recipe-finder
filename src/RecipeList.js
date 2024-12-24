import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe.recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
