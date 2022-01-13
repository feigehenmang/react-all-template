import { combineReducers, createStore } from "redux";
import count from "./reduces/count";
import user from "./reduces/user";

const store = createStore(combineReducers({ count, user }));

export default store;
