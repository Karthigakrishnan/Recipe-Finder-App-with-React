function RecipeCard({ recipe, onSelect }) {
  return (
    <div className="recipe-card" onClick={() => onSelect(recipe)}>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h4>{recipe.strMeal}</h4>
    </div>
  );
}

export default RecipeCard;
