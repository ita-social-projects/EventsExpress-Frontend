import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import rootReducers from "../reducers/root";

export default function configureStore(history, initialState) {
  const middleware = [thunk, routerMiddleware(history)];

  // In development, use the browser's Redux dev tools extension if installed
  const isDevelopment = process.env.NODE_ENV === "development";
  const composeEnhancers =
    isDevelopment &&
    typeof window !== "undefined" &&
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
  const rootReducer = combineReducers({
    ...rootReducers,
  });

<<<<<<< HEAD
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
=======
    // In development, use the browser's Redux dev tools extension if installed
    const isDevelopment = process.env.NODE_ENV === 'development';
    const composeEnhancers = (isDevelopment && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const rootReducer = combineReducers({
        ...rootReducers
    });

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware)
        ));
>>>>>>> 9f0202e6cb942d1752434bea98f2f1bb176395c2
}
