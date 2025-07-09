function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h4>Ingredients:</h4>
        <ul>
          {[...Array(20).keys()].map((i) => {
            const ing = recipe[`strIngredient${i + 1}`];
            const measure = recipe[`strMeasure${i + 1}`];
            return ing ? <li key={i}>{`${ing} - ${measure}`}</li> : null;
          })}
        </ul>
        <h4>Instructions:</h4>
        <p>{recipe.strInstructions}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default RecipeModal;
