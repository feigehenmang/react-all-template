import { useReducer } from "react";

export function useForceUpdate() {
  let [, forceUpdate] = useReducer((x) => x + 1, 0);
  return forceUpdate;
}
