import React from 'react';

type InputType = 'text' | 'checkbox' | 'radio';

interface UseInputProps<T> {
  initialValue: T;
  validateFn: (value: T) => string | undefined;
  type?: InputType;
}

export default function useInputEx<T>({
  initialValue,
  validateFn,
  type = 'text',
}: UseInputProps<T>) {
  const [value, setValue] = React.useState<T>(initialValue);
  const [error, setError] = React.useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      type === 'checkbox'
        ? (e.target.checked as unknown as T)
        : (e.target.value as unknown as T);

    setValue(newValue);
  };

  React.useEffect(() => {
    const validationError = validateFn(value);
    setError(validationError || '');
  }, [value, validateFn]);

  const reset = () => {
    setValue(initialValue);
    setError('');
  };

  return {
    value,
    onChange,
    error,
    reset,
    isValid: error === '',
  };
}
