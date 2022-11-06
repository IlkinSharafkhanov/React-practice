import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/Button";
import CounterText from "../../components/CounterText";
import { countUp, countDown } from "../../redux/actions/countActions";
import "./index.scss";

const CountIncrease = () => {
  const dispatch = useDispatch()
  const count = useSelector((store) => store.counterData.count)

  return (
    <div className="counter">
      <div className="counter-content">
        <Button text="+" onCLick={() => dispatch(countUp())} className="increment"/>
        <CounterText count = {count}/>
        <Button text="-" onCLick={() => dispatch(countDown())} className="decrement"/>
      </div>
    </div>
  );
};

export default CountIncrease;
