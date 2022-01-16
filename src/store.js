import { createStore } from "redux";
import { colorReducer } from "./reducers/change-color";

export const store = createStore(colorReducer);