import React from 'react';

import {ImageView} from "../components/imageView";

import {withListControl} from "../../../shared/hocs";

import {imageTableConfig} from "./imageTableConfig";

import '../../../app/app.module.scss';

const ImageContainer = ({ page, items, onAddItem, onDeleteItem }) => (
      <ImageView images={items}
                 page={page}
                 imageTableConfig={imageTableConfig}
                 onAddImage={onAddItem}
                 onDeleteImage={onDeleteItem} />
    );

export default  withListControl(ImageContainer);
