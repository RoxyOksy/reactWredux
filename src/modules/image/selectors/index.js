import {createSelector} from "reselect";

const getImagesSelector = (state) => {
  return state.image.images
};

export default createSelector(
  [getImagesSelector],
  (images) => {
    return {images}
  }
);
