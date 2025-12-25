import {create} from 'zustand'

export const useRecipeStore = create ((set)=>({
    recipes: [],
   
    searchTerm: '',

     favorites: [],
  recommendations: [],

    setSearchTerm: (term)=>set({searchTerm: term}),

 

    addRecipe: (newRecipe)=>set((state)=>({recipes:[...state.recipes,  newRecipe]})),

    setRecipes : (recipes)=>set(()=>({recipes})),

    deleteRecipe:(id)=>set((state)=>({recipes:state.recipes.filter((recipe)=>recipe.id !== id),})),
    
    updateRecipe:(id, updatedData)=>set((state)=>(
         {recipes:state.recipes.map((recipe)=>recipe.id === id ?
         {...recipe, ...updatedData} : recipe)})),

        addFavorite: (id) =>
    set((state) => ({
      favorites: [...state.favorites, id],
    })),

      removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

      generateRecommendations: () =>
    set((state) => ({
      recommendations: state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      ),
    })),
}))