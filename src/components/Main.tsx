import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { state } from "../redux/reducer";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { counter, name }: state = useSelector((state: any) => state.reducer);
  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREAMENT" })}>
        increament
      </button>
      <button onClick={() => dispatch({ type: "DECREAMENT" })}>
        decreament
      </button>
      <h1>{name}</h1>
      <p>{counter}</p>
    </div>
  );
};

export default Main;
