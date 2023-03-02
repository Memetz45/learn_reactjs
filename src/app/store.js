import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk";
import counterReducer from "./features/Counter/reducer"

let rootReducer = combineReducers ({
    counter: counterReducer
});

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnchancers(applyMiddleware(thunk)));

export default store;