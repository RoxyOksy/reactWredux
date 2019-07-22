import React from 'react';

import ImageBlock from "../imageBlock/imageBlock";

import styles from './imagesListBlock.module.scss';

const Index = ({items, onDeleteItem}) => {

  const elements = items.map((item) => {
    return (
      <li key={item.id} >
        <ImageBlock id={item.id} />
        <button className={styles.deleteItem} onClick={() => onDeleteItem(item.id)}> remove item </button>
      </li>
    );
  });

  return (
    <ul className={styles.imagesListBlock}>
      { elements }
    </ul>
  )
};

export default Index;
