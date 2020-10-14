import { NUMBER, SYMBOL, ALL_CLEAR, ENTER } from "../actions";
import { Initialize } from "../initialize";

const Reducer = (state, action) => {
  switch (action.type) {
    case NUMBER:
      const inputValue = state.inputValue + action.num;
      const numBox = state.outputValue + state.symbol + inputValue;
      return {
        ...state,
        inputValue,
        outputValueFlag: false,
        numBox,
        firstTouchFlag: true,
      }

    case SYMBOL:
      try {
        if (state.firstTouchFlag) {
          const outputValue = new Function("return " + state.numBox)();
          return { 
            ...state, 
            outputValue, 
            inputValue: "", 
            outputValueFlag: true, 
            symbol: action.symbol }
          }
      } catch (e) {
           return state;
      }


    case ENTER:
      if (state.firstTouchFlag) {
        const outputValue = new Function("return " + state.numBox)();
        return {
          ...state,
          outputValue,
          inputValue: "",
          outputValueFlag: true,
        }
      }

    case ALL_CLEAR:
      return Initialize;

    default:
      return state;
      
  }
};

export default Reducer;
