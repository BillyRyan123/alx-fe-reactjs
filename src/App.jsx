import { Routes, Route } from "react-router-dom";
import RecipeListPage from "./pages/RecipeListPage";
import AddRecipePage from "./pages/AddRecipePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";


function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<RecipeListPage />} />
      <Route path="/add" element={<AddRecipePage />} />
      <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
    </Routes>
    </>
  )
}

export default App
