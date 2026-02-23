import { useState } from 'react';

interface ExampleProps {
  title: string;
}

export function ExampleComponent({ title }: ExampleProps) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
    </div>
  );
}