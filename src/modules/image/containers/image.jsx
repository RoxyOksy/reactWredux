import React from 'react';

import {ImageView} from "../components/imageView";

import {withListControl} from "../../../shared/hocs";

import '../../../app/app.module.scss';

const ImageContainer = ({ page, items, onAddItem, onDeleteItem }) => (
      <ImageView images={items}
                 page={page}

                 onAddImage={onAddItem}
                 onDeleteImage={onDeleteItem} />
    );

export default  withListControl(ImageContainer);
