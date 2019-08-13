import {createSelector} from "reselect";

const getItemsSelector = (state) => {
  return state.image.items
};

export default createSelector(
  [getItemsSelector],
  (items) => {
    return {items}
  }
);
