import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(10);

  const increaseBy = ( value: number ) => {
    setCount( count + value);
  }

  return (
    <>
      <h1>
        Contador: <small> {count}</small>
      </h1>

      <div>
        <button onClick={ () => increaseBy(+1)}>+1</button>
        &nbsp;
        <button onClick={ () => increaseBy(-1)}>-1</button>
      </div>
    </>
  );
};
