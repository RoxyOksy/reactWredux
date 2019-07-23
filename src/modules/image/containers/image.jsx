import React from 'react';

import {ImageView} from "../components/imageView";

import {withListControl} from "../../../shared/hocs";

import '../../../app/app.module.scss';

const ImageContainer = ({ onAddItem,onDeleteItem, items }) => (
      <ImageView images={items}

                 onAddImage={onAddItem}
                 onDeleteImage={onDeleteItem} />
    );

export default  withListControl(ImageContainer);
