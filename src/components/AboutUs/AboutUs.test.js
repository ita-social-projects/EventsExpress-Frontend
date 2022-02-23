/* eslint-disable prefer-const */
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import AboutUs from "./AboutUs";

const mockStore = configureStore([]);

it("renders when user don`t registered", () => {
  let store;
  store = mockStore({
    user: {},
  });
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <AboutUs />
        </Provider>
        ,
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders when user registered", () => {
  let store;
  store = mockStore({
    user: {
      id: 1,
      name: "Anton",
    },
  });
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <AboutUs user={store.user} />
        </Provider>
        ,
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
