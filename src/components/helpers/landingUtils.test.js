import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import viewModeSwitcher from "./landingUtils";
import { viewModeTypes } from "../../constants/EventsViewModeConstants";

const { MATRIX, SLIDER, LIST } = viewModeTypes;

const events = [
  {
    id: "1",
    title: "Vegan For Beginners Online Workshop",
    description:
      "More and more people are interested in vegan/plant-based eating. Some are curious, some want to get their feet wet, and others are ready to come to the V-side! I am here for you all! I offer information to introduce you to what eating vegan is like. This workshop occurs on Zoom and it would be awesome if you turned your camera on!",
    dateFrom: "2022-03-01T10:00:00.0000000Z",
    dateTo: "2022-03-01T18:30:00.0000000Z",
    isReccurent: true,
    maxParticipants: 250,
    frequency: 2,
    periodicity: "Monthly",
    location: "Online",
    isPublic: true,
    isOnlyForAdults: true,
    categories: [
      {
        id: "3",
        name: "Self-education",
        CategoryGroupId: "2",
        countOfUser: 0,
        countOfEvents: 0,
      },
    ],
    organizers: [
      {
        id: "1",
        username: "Dev",
        email: "dev@gmail.com",
        birthday: "2000-06-14T13:30:00.0000000Z",
        rating: 9.6,
        attitude: "Like",
        userStatusEvent: "Approved",
      },
    ],
    members: [
      {
        id: "1",
        username: "Test",
        email: "test@gmail.com",
        birthday: "1983-01-25T10:15:00.0000000Z",
        rating: 5.6,
        attitude: "Like",
        userStatusEvent: "Approved",
      },
    ],
  },
  {
    id: "2",
    title:
      "Football, Finances & Fundraising Workshop - Get top tips to help your club",
    description:
      "The workshop will cover a range of areas including: budgeting, planning, grant funding, sponsorship, fundraising. Attendees will receive advice and ideas from the tutor and be encouraged to share their experiences and views in breakouts rooms.",
    dateFrom: "2022-02-20T13:30:00.0000000Z",
    dateTo: "2022-02-20T15:30:00.0000000Z",
    isReccurent: true,
    maxParticipants: 100,
    frequency: 1,
    periodicity: "Yearly",
    location: "Map",
    isPublic: true,
    isOnlyForAdults: true,
    categories: [
      {
        id: "8",
        name: "Football",
        CategoryGroupId: "3",
        countOfUser: 0,
        countOfEvents: 0,
      },
    ],
    organizers: [
      {
        id: "1",
        username: "Dev",
        email: "dev@gmail.com",
        birthday: "2000-06-14T13:30:00.0000000Z",
        rating: 9.6,
        attitude: "Like",
        userStatusEvent: "Approved",
      },
    ],
    members: [
      {
        id: "1",
        username: "Test",
        email: "test@gmail.com",
        birthday: "1983-01-25T10:15:00.0000000Z",
        rating: 5.6,
        attitude: "Like",
        userStatusEvent: "Approved",
      },
    ],
  },
];

describe("renders events in different view modes without events", () => {
  it("should return slider", () => {
    const tree = renderer.create(viewModeSwitcher([], SLIDER)).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should return matrix", () => {
    const tree = renderer.create(viewModeSwitcher([], MATRIX)).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should return list", () => {
    const tree = renderer.create(viewModeSwitcher([], LIST)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const mockStore = configureStore([]);

const store = mockStore({
  user: {
    id: true,
  },
});

const treeWithEvents = viewMode =>
  renderer.create(
    <BrowserRouter>
      <Provider store={store}>{viewModeSwitcher(events, viewMode)}</Provider>,
    </BrowserRouter>,
  );

describe("renders events in different view modes with events", () => {
  it("should return slider", () => {
    const tree = treeWithEvents(SLIDER).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should return matrix", () => {
    const tree = treeWithEvents(MATRIX).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should return list", () => {
    const tree = treeWithEvents(LIST).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
