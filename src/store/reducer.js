const initialState = {
  age: 21,
  history: [],
};
const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "AGE_INCREMENT":
      //   newState.age += action.value;
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.value,
        }),
      };

    case "AGE_DECREMENT":
      //   newState.age -= action.value;
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age - action.value,
        }),
      };
    case "DEL_ITEM":
      return {
        ...state,
        history: state.history.filter((el) => el.id !== action.key),
      };
    default:
      break;
  }
  return newState;
};
export default reducer;
