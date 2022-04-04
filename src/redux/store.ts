import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist'
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))
export const persistor = persistStore(store);
export default store;