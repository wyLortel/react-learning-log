export default function Recipe({
  id,
  name,
  ingredients,
  handleDelete,
}: {
  id: string;
  name: string;
  ingredients: string[];
  handleDelete: (id: string) => void;
}) {
  return (
    <>
      <h2>{name}</h2>
      {ingredients.map((ingredient) => (
        <p key={ingredient}>{ingredient}</p>
      ))}
      <button onClick={() => handleDelete(id)}>삭제</button>
    </>
  );
}
