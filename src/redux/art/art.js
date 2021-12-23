export const GET_RECORDS = 'artStore/api/GET_RECORDS';

const initialState = [{
  detail: 'flex',
  id: 'kjvgjk',
}];

const artReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECORDS:
      return action.arr;
    default:
      return state;
  }
};

export default artReducer;
