import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import IconsEventCard from "./IconsEventCard";
import { viewModes } from "../../../../constants/EventsViewModeConstants";

const { matrix, slider, list } = viewModes;

const mockStore = configureStore([]);

const treeWithViewMode = (store, viewMode) =>
  renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <IconsEventCard styleForIcon={viewMode} />
      </Provider>
      ,
    </BrowserRouter>,
  );

describe("renders icons in different view modes when user logged in", () => {
  const store = mockStore({
    user: {
      id: true,
    },
  });

  it("should return matrix view mode with two icons", () => {
    const tree = treeWithViewMode(store, matrix).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should return list view mode with two icons", () => {
    const tree = treeWithViewMode(store, list).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should return slider view mode with two icons", () => {
    const tree = treeWithViewMode(store, slider).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("renders icons in different view modes when user is not logged in", () => {
  const store = mockStore({
    user: {
      id: null,
    },
  });

  it("should return matrix view mode with one icon", () => {
    const tree = treeWithViewMode(store, matrix).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should return list view mode with one icon", () => {
    const tree = treeWithViewMode(store, list).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should return slider view mode with one icon", () => {
    const tree = treeWithViewMode(store, slider).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
