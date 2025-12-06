import { useParams } from "react-router-dom";
import RecipeDetails from "../RecipeDetails";

export default function RecipeDetailsPage() {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
}
