import React from 'react';

export default function Button({
  message,
  handle,
  children,
}: {
  message: string;
  handle: (message: string) => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <button onClick={() => handle(message)}>{children}</button>
    </>
  );
}
