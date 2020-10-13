import React, { useContext } from "react";
import MyContext from "../context";
import { NUMBER } from "../actions";

const NumBtn = ({ num, colSpan }) => {
  const { dispatch } = useContext(MyContext);
  const handleClickNumBtn = () => {
    dispatch({
      type: NUMBER,
      num,
    });
  };
  return (
    <td colSpan={colSpan}>
      <button onClick={handleClickNumBtn}>{num}</button>
    </td>
  );
};
export default NumBtn;
