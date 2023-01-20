import { combineReducers } from "redux";
import data from "./data";
import hotels from "./hotels";
import favorite from "./favorite";



const reducer = combineReducers({
    data,
    hotels,
    favorite,
})

export default reducer