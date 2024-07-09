import { useState } from "react";

interface Options {
    initialeValue?: number
}

export const useCounter = ({initialeValue = 0}: Options) => {
  const [count, setCount] = useState<number>(initialeValue);

  const increaseBy = (value: number) => {
    const newValue = count + value
    if( newValue < 0) return 
        setCount(count + value);
    
  };

  return {
    //TODO: PROPERTIES
    count,
    //TODO: METHODS
    increaseBy
  }
};
