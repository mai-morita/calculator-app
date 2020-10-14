import NumBtn from "./NumBtn";
import Operator from "./Operator";
import EnterBtn from "./Enter";
import AllClear from "./AllClear";
import Result from "./Result";

import React, { useReducer } from "react";
import "../App.css";
import Reducer from "../reducers";
import MyContext from "../context";
import { Initialize } from "../initialize";

const App = () => {
  const [state, dispatch] = useReducer(Reducer, Initialize);
  return (
    <MyContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="container">
        <table border="1" cellSpacing="0">
          <thead>
            <tr>
              <Result colSpan={4} id={"answerView"} />
            </tr>
          </thead>
          <tbody>
            <tr>
              <AllClear num={"AC"} colSpan={2} /> 
              <NumBtn num={"."} />
              <Operator symbol={"/"} />

            </tr>
            <tr>
              <NumBtn num={"7"} />
              <NumBtn num={"8"} />
              <NumBtn num={"9"} />
              <Operator symbol={"*"} />
            </tr>
            <tr>
              <NumBtn num={"4"} />
              <NumBtn num={"5"} />
              <NumBtn num={"6"} />
              <Operator symbol={"-"} />
            </tr>
            <tr>
              <NumBtn num={"1"} />
              <NumBtn num={"2"} />
              <NumBtn num={"3"} />
              <Operator symbol={"+"} />
            </tr>
            <tr>
              <NumBtn num={"0"} colSpan={2} />
              <EnterBtn symbol={"="} colSpan={2} />
            </tr>
          </tbody>
        </table>
      </div>
    </MyContext.Provider>
  );
};
export default App;
