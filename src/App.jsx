import React from "react";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store, { persist } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <Main />
        </PersistGate>
      </Provider>
    </div>
  );
}
