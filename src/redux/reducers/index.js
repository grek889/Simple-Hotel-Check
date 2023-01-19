import { combineReducers } from "redux";
import data from "./data";
import hotels from "./hotels";


const reducer = combineReducers({
    data,
    hotels,
})

export default reducer