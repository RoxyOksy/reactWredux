const initialState = {
  images: [],
  smt_else: ''
};

export default function imageReducer (state = initialState, action) {
  const {images} = state;

  switch (action.type) {

    case 'ADD_IMAGE_ITEM':
      return {
        ...state,
        images: [...images, action.payload]
      };

    case 'DELETE_IMAGE_ITEM':
      const newState = [...images.filter((image) => image.id !== action.payload)];

      return {
        ...state,
        images: newState
      };

    case 'CHANGE_IMAGE':
      return {
        ...state,
        images:  images.map((image) => {
          if(image.id === action.payload.id) {
            image.imageSrc = action.payload.imageSrc
          }
          return image
        })
      };

      case 'DELETE_IMAGE':
      return {
        ...state,
        images:  images.map((image) => {
          if(image.id === action.payload.id) {
            image.imageSrc = null
          }
          return image
        })
      };

    default:
      return state
  }
}
