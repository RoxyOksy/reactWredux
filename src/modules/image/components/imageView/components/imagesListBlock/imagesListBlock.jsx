import React from 'react';

import {ImageBlock} from "../imageBlock";

import styles from './imagesListBlock.module.scss';

const ImagesListBlockComponent = ({images, onDeleteImage}) => (
    <ul className={styles.imagesListBlock}>
      { images.map((image) => (
        <li key={image.id} >
          <ImageBlock id={image.id} />
          <button className={styles.deleteItem} onClick={() => onDeleteImage(image.id)}>remove item</button>
        </li>
      )) }
    </ul>
);

export default ImagesListBlockComponent;
