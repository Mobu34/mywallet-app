import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import walletSlice from "./reducers/wallet.reducer";

const persistConfig = {
  key: "root2",
  storage: AsyncStorage,
};

const combinedReducers = combineReducers({
  walletSlice,
});

const persistedReducers = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducers,
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
