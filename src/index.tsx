import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import theme from "./theme/theme";
import { NextUIProvider } from "@nextui-org/react";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextUIProvider theme={theme}>
          <App />
        </NextUIProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
