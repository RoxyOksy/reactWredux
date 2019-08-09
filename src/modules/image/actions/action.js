import uid from "uid";

const addItem = () => {
  const newItem = {id: uid()};

  return {
    type: 'ADD_ITEM',
    payload: newItem
  }
};

const deleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    payload: id
  };
};

export {
  addItem,
  deleteItem
}
