type ButtonProps = React.ComponentPropsWithRef<'button'>;

function Button({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>;
}

export default Button;
