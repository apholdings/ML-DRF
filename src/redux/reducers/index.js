import { combineReducers } from "redux";
import alert from "./alert";
import web3 from "./web3";
import user from "./user";
import categories from "./categories";
import blog from "./blog";
import ml from "./ml";


export default combineReducers({
    alert,
    web3,
    user,
    categories,
    blog,
    ml,
});