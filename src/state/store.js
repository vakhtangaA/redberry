import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./userSlice";

const persistConfig = {
  key: "root",
  storage,
};
console.log(userReducer);

const rootReducer = combineReducers(userReducer);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
