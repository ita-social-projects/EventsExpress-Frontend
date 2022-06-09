/* eslint-disable no-param-reassign */
import { stringify, exclude } from "query-string";
import { getEvents } from "../../event/event-list-action";
import {ENUM_LOCATION_TYPE} from "../../../constants/eventConstants";

const { MAP } = ENUM_LOCATION_TYPE;

export const applyFilters = filters => {
  return async dispatch => {
    filters.owners = filters?.organizers?.map(organizer => organizer.id);
    filters.locationtype = filters?.location.type;
    if (filters.location.type === MAP) {
      filters.x = filters?.location.latitude;
      filters.y = filters?.location.longitude;
      filters.radius = filters?.location.radius;
    }
    const options = { arrayFormat: "index", skipNull: true };
    const filter = exclude(
      `?${stringify(filters, options)}`,
      ["organizers"],
      ["location"],
      options,
    );

    dispatch(getEvents(filter));
  };
};

export const resetFilters = () => {
  return async dispatch => {
    dispatch(getEvents(""));
  };
};
