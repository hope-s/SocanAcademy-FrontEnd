import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import reducer from "./reducers";
import storage from 'redux-persist/lib/storage';
 
const rootPersistConfig = {
  key: 'app',
  storage
}

const rootReducer = combineReducers({
  reducer
})

export default persistReducer(rootPersistConfig, rootReducer);