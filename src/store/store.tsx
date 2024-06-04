import { createStore } from "redux";
import reducer from "./reducer/number";


const store = createStore(reducer);

export default store;
