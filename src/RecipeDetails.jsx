  // RecipeDetails component
  import { useRecipeStore } from './recipeStore';
  import EditRecipeForm from './EditRecipeForm';
  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );
    const deleteRecipe = useRecipeStore((state)=> state.deleteRecipe)
      if(!recipe) return<p>Recipe not found</p>
    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <button onClick={ ()=>deleteRecipe(recipe.id)}>Delete</button>
        <EditRecipeForm recipeId = {recipeId}/>
      </div>
    );
  };
