//이렇게 함으로서 범용적인 버튼 컴포넌트가 만들어짐
type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <>
      <button {...rest}>{children}</button>
    </>
  );
}
