
const DISPLAY_ART = 'bookStore/books/DISPLAY_ART';

const initialState = [];

export const addART = (payload) => ({
  type: DISPLAY_ART,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ART:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
