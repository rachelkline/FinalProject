import React, { createContext, useReducer, useContext } from "react";
import {
    ADD_USER
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;




export { StoreProvider, useStoreContext };