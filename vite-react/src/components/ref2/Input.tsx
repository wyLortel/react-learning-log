type InputProps = React.ComponentPropsWithRef<'input'> & {
  label?: string;
};

function Input({ label, ...rest }: InputProps) {
  const id = rest.id;
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input {...rest} />
    </div>
  );
}

export default Input;
