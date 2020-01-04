import React, { useReducer } from "react";
import GlobalContext from "./globalContext";
import GlobalReducer from "./globalReducer";

import { changeLang } from "./actions";

const SwapState = props => {
  const initialState = {
    language: "en"
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  const onChangeLang = newLang => dispatch(changeLang(newLang));

  return (
    <GlobalContext.Provider
      value={{
        language: state.language,

        // actions
        onChangeLang
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default SwapState;
