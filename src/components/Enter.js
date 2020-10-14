import React, { useContext } from "react";
import MyContext from "../context";
import { ENTER } from "../actions";

const EnterBtn = ({ symbol, colSpan}) => {
  const { dispatch } = useContext(MyContext);
  const handleClickEnter = () => {
    dispatch({
      type: ENTER,
    });
  };
  return (
    <td colSpan={colSpan}>
      <button class="EnterBtn" onClick={handleClickEnter}>{symbol}</button>
    </td>
  );
};
export default EnterBtn;
