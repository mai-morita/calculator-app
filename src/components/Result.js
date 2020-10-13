import React, { useContext } from "react";
import MyContext from "../context";

const Result = ({ colSpan, id }) => {
  const { state } = useContext(MyContext);

  return (
    <td colSpan={colSpan} id={id}>
      {state.outputValueFlag ? state.outputValue : state.inputValue}
    </td>
  );
};

export default Result;
