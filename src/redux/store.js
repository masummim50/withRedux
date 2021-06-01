import { createStore } from "redux";
import { reducers } from "./combinedReducer";
// an empty object in createstore is necessary because i used combinereducer function to form my reducer. probably wouldn't have needed it otherwise.
const store = createStore(reducers,{})

export default store;