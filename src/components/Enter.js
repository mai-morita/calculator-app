import React, { useContext } from "react";
import MyContext from "../context";
import { ENTER } from "../actions";

const EnterBtn = ({ symbol }) => {
  const { dispatch } = useContext(MyContext);
  const handleClickEnter = () => {
    dispatch({
      type: ENTER,
    });
  };
  return (
    <td>
      <button onClick={handleClickEnter}>{symbol}</button>
    </td>
  );
};
export default EnterBtn;
