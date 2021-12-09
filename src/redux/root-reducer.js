import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //local storage
import toggleReducer from "./toggle/toggle.reducer";
const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
  whiteList: [],
};
const appReducer = combineReducers({
  toggle: toggleReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGGED_OUT") {
    storage.removeItem("persist:root");
    // storage.removeItem('persist:otherKey')
    state = undefined;
  }
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
