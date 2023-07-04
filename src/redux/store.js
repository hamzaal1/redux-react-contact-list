import { createStore,combineReducers } from "redux";
import employeReducer from './employeReducer';

const store = createStore(combineReducers({
    employeReducer,
}))
export default store;