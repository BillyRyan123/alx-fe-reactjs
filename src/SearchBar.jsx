import RecipeList from "../RecipeList";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

export default function RecipeListPage() {
  return (
    <div>
      <h1>Recipes</h1>

      <SearchBar />

      <RecipeList />

      <Link to="/add">
        <button>Add Recipe</button>
      </Link>
    </div>
  );
}
