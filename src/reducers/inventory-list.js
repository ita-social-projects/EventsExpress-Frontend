import initialState from "../store/initialState";
import { GET_INVENTORY_DATA } from "../actions/inventory/inventory-list-action";

const reducer = (state = initialState.inventories, action) => {
  if (action.type === GET_INVENTORY_DATA) {
    return {
      ...state,
      items: action.payload,
    };
  }

  return state;
};

export default reducer;
