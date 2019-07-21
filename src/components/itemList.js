import React from 'react';
import Item from "./item";
import './itemList.css';

const ItemList = ({items, onDeleteItem}) => {

  const elements = items.map((item) => {
    return (
      <li key={item.id} id={ item.id }>
        <Item key={item.id} id={item.id} />
        <button className='deleteItem' onClick={() => onDeleteItem(item.id)}> remove item </button>
      </li>
    );
  });

  return (
    <ul className="list-group">
      { elements }
    </ul>
  )
};

export default ItemList;
