import React from "react";
import './addItem.css';

const AddItem = ({onAddItem}) => {

  return(
    <div>
      <button className="addItem" onClick={onAddItem}>+</button>
      <span>One more picture</span>
    </div>
  );
};

export default AddItem;
