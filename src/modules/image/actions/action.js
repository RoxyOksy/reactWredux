import uid from "uid";

export const addImageItem = () => {
  return {
    type: 'ADD_IMAGE_ITEM',
    payload: {
      id: uid(),
      imageSrc: null
    }
  }
};

export const deleteImageItem = (id) => {
  return {
    type: 'DELETE_IMAGE_ITEM',
    payload: id
  };
};

export const changeImage = ({id, imageSrc}) => {
  return {
    type: 'CHANGE_IMAGE',
    payload: {id, imageSrc}
  };
};

export const toggleEditState = (id) => {

};
