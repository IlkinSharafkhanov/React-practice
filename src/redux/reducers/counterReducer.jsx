const initialStateCount = {
  count: 0,
};

export function counterReducer(state = initialStateCount, action) {
  switch (action.type) {
    case "COUNT_UP":
      return {
        ...state,
        count: state.count + 1,
      }
    case "COUNT_DOWN":
      if(state.count > 0){
      return {
        ...state,
        count: state.count - 1,
      }
    }else{
      return alert("0-dan az olmaz!")
    }
    default:
      return state
  }
}
