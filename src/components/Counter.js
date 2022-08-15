import React from "react";
import { useSelector } from "react-redux";

export const CounterComponent = () => {
    const counter = useSelector(
        (state) => state.counter);
  return <div>{counter}</div>;
};


