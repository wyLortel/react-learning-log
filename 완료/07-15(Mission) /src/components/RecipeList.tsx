import { useState } from 'react';
import { initialRecipes } from '../data/iData';
import Recipe from './Recipe';

export default function RecipeList() {
  const [recipes, setRecipes] = useState(initialRecipes);

  const handleDelete = (id: string): void => {
    setRecipes((recipes) => recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <>
      <h1>RecipeList</h1>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} handleDelete={handleDelete} />
      ))}
    </>
  );
}
