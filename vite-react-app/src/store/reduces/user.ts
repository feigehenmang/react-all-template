const defaultState = {};

export default function user(state = defaultState, action: any) {
  switch (action.type) {
    case "UPDATE":
      return (state = Object.assign(state, action.payload));
    default:
      return state;
  }
}
