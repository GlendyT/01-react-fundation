import { useCounter } from "../hooks/useCounter";


export const CounterWithHook = () => {

  const { count, increaseBy} = useCounter({
    initialeValue:5
  })


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
