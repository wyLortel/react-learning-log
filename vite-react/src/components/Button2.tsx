function Button2({
  onHa,
}: {
  onHa: (e: React.MouseEvent<HTMLButtonElement>, msg: string) => void;
}) {
  return (
    <button onClick={(e) => onHa(e, "hello")}>안녕</button>
  );
}


export default Button2