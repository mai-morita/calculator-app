import React, { useContext } from "react";
import MyContext from "../context";
import { SYMBOL } from "../actions";

const Operator = ({ symbol }) => {
  const { dispatch } = useContext(MyContext);
  const handleClickOperator = () => {
    dispatch({
      type: SYMBOL,
      symbol,
    });
  };
  return (
    <td>
      <button onClick={handleClickOperator}>{symbol}</button>
    </td>
  );
};
export default Operator;
