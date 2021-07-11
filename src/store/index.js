import storage from "redux-persist/lib/storage";
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import signup from "../features/signup/slice";
import login from "../features/login/slice";
import jobs from "../features/jobs/slice";
import pricing from "../features/pricing/slice";
import services from "../features/services/slice";
import forgotPassword from "../features/forgotPassword/slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["signup"],
};
const reducers = combineReducers({
  signup,
  login,
  jobs,
  pricing,
  services,
  forgotPassword,
});

const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//   reducer: {
//     signup,
//     login,
//     jobs,
//     pricing,
//     services,
//     forgotPassword,
//   },
// });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export let persistor = persistStore(store);
