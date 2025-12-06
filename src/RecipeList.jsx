import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
    const recipes = useRecipeStore((state)=>state.recipes)
    const deleteRecipe = useRecipeStore((state)=>(state.deleteRecipe))
  return (
    <div>
     { recipes.map(recipe => (
            <div key={recipe.id}>
                 <Link to={`/recipe/${recipe.id}`}>
                   <h3>{recipe.title}</h3>
                </Link>

                <p>{recipe.description}</p>
               <button onClick={()=>deleteRecipe(recipe.id)}>Delete</button>
            </div>
        ))}
    </div>
  );
}

export default RecipeList