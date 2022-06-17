import { GET_CONFIG_DATA } from "../actions/config/get-config-action";

const initialState = {
  config: {
    facebookClientId: null,
    googleClientId: null,
    twitterCallbackUrl: null,
    twitterConsumerKey: null,
    twitterConsumerSecret: null,
    twitterLoginEnabled: null,
  },
};

const reducer = (state = initialState, action) => {
  if (action.type === GET_CONFIG_DATA) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};

export default reducer;
