import React, {useState} from "react";
import Button from "../../components/Button";
import CounterText from "../../components/CounterText";
import "./index.scss";

const CountIncrease = () => {
  const [count, setCount] = useState(0)


  const increment = () =>{
    setCount(count + 1)
  }

  const decrement = () =>{
    if(count!=0){
    setCount(count- 1)
    }else{
      alert("0-dan az olmaz")
    }
  }

  return (
    <div className="counter">
      <div className="counter-content">
        <Button text="+" onCLick={increment} className="increment"/>
        <CounterText count = {count}/>
        <Button text="-" onCLick={decrement} className="decrement"/>
      </div>
    </div>
  );
};

export default CountIncrease;
