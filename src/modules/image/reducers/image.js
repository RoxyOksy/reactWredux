const initialState = {
  items: [],
  smt_else: ''
};

export default function imageReducer (state = initialState, action) {
  const {items} = state;

  switch (action.type) {

    case 'ADD_ITEM':
      return {
        ...state,
        items: [...items, action.payload]
      };

    case 'DELETE_ITEM':
      const newState = [...items.filter((item) => item.id !== action.payload)];

      return {
        ...state,
        items: newState
      };

    default:
      return state
  }
}
