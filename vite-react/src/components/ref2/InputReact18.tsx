import React, { forwardRef } from 'react';
type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  label: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...rest }, ref) => {
    const id = rest.id;
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input ref={ref} {...rest} />
      </div>
    );
  },
);

Input.displayName = 'Input';
export default Input;
