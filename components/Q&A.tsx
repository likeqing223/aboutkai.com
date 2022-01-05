import classNames from 'classnames';
import { useCallback, useState } from 'react';

type QAndAProps = {
  q: string;
  a: number;
  e: string;
  options: Array<string>;
};

export function QAndA({ a, q, e, options }: QAndAProps) {
  const [select, setSelect] = useState<number>();

  const correct = useCallback(
    (i: number) => {
      return select === i && select === a;
    },
    [a, select]
  );

  return (
    <div className="">
      <h2 className="">{q}</h2>
      <div className="flex flex-col space-y-4">
        {options.map((o, i) => (
          <button
            className={classNames(
              'flex justify-between items-center w-full py-2 px-4 border dark:border-gray-700 rounded text-left transition-all',
              select === i
                ? correct(i)
                  ? 'border-green-500 dark:border-green-500 bg-green-100 dark:bg-green-900'
                  : 'border-red-500 dark:border-red-500 bg-red-100 dark:bg-red-900'
                : undefined
            )}
            key={i}
            onClick={() => setSelect(i)}
          >
            {o}
            {select === i ? (
              correct(i) ? (
                <svg
                  className="w-6 h-6 text-green-500 dark:text-green-500 transition-all"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-red-500 dark:text-red-500 transition-all"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"
                  />
                </svg>
              )
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}
