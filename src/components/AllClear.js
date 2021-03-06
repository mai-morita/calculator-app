import React, { useContext } from "react";
import MyContext from "../context";
import { ALL_CLEAR } from "../actions";

const AllClear = ({ colSpan }) => {
  const { dispatch } = useContext(MyContext);
  const handleClickAllClear = () => {
    dispatch({
      type: ALL_CLEAR,
    });
  };
  return (
    <td colSpan={colSpan}>
      <button className="ACBtn" onClick={handleClickAllClear}>AC</button>
    </td>
  );
};
export default AllClear;
