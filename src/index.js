import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { createBrowserHistory } from "history";
import "./styles/main.scss";
import configureStore from "./store/configureStore";
import App from "./components/app/app";
import registerServiceWorker from "./registerServiceWorker";
import { FIRST_TAG_BASE } from "./constants/constants";

// Create browser history to use in the Redux store
const baseUrl = document
  .getElementsByTagName("base")
  [FIRST_TAG_BASE].getAttribute("href");
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

const rootElement = document.getElementById("root");

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement,
);

registerServiceWorker();
