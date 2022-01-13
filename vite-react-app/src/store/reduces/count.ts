const defaultState = 0;
export default function counter(state = defaultState, action: any) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "ANO":
      return state + action.payload;
    default:
      return state;
  }
}
