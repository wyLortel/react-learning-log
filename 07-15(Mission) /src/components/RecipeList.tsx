import { useState } from 'react';

export default function RecipeList() {
  const initialRecipes = [
    {
      id: 'greek-salad',
      name: 'Greek Salad',
      ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta'],
    },
    {
      id: 'hawaiian-pizza',
      name: 'Hawaiian Pizza',
      ingredients: [
        'pizza crust',
        'pizza sauce',
        'mozzarella',
        'ham',
        'pineapple',
      ],
    },
    {
      id: 'hummus',
      name: 'Hummus',
      ingredients: [
        'chickpeas',
        'olive oil',
        'garlic cloves',
        'lemon',
        'tahini',
      ],
    },
  ];

  const [recipes, setRecipes] = useState(initialRecipes);

  const handleDelete = (id: string): void => {
    setRecipes((recipes) => recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <>
      <h1>RecipeList</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>

            {recipe.ingredients.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <button onClick={() => handleDelete(recipe.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}
