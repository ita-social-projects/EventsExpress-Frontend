import { GET_INVENTORY_DATA } from "../actions/inventory/inventoryActionTypes";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === GET_INVENTORY_DATA) {
    return {
      ...state,
      items: action.payload,
    };
  }

  return state;
};

export default reducer;
