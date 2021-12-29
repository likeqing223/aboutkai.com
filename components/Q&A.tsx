import { useState } from 'react';

type QAndAProps = {
  q: string;
  a: number;
  e: string;
  options: Array<string>;
};

export function QAndA({ a, q, e, options }: QAndAProps) {
  const [select, setSelect] = useState<number>();

  const correct = select === a;

  return (
    <div className="">
      <h2>{q}</h2>
      <ul>
        {options.map((o, i) => (
          <li key={i}>{o}</li>
        ))}
      </ul>
    </div>
  );
}
