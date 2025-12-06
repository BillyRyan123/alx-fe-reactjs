import { useRecipeStore } from "./recipeStore"
import {useState} from 'react'

const EditRecipeRecipe = ({recipeId}) => {
  const recipe = useRecipeStore(state => state.recipe.find((recipe)=>recipe.id===recipeId))
  const updateRecipe = useRecipeStore((state)=>state.updateRecipe)
  
  if (!recipe) return <p>Recipe not found</p>;

  const[title, setTitle] = useState(recipe.title);
  const[description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
      e.prevent.default();
      updateRecipe(recipeId, {title, description});
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e)=>setTitle(e.target.value)}
          value={title}
          type="text"
      />
      <textarea 
      onChange={(e)=>setDescription(e.target.value)}
      value={description}/>

    </form>
  )
}

export default EditRecipeForm