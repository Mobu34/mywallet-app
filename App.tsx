import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import * as S from "./screens";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <S.Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
