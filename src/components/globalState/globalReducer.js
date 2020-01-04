export default (state, action) => {
  const newLang = action.payload;
  switch (action.type) {
    case "CHANGE_LANG": {
      return {
        ...state,
        language: newLang.value
      };
    }
    default:
      return "";
  }
};
