import React from 'react';

import {ImagesListBlock} from "./components/imagesListBlock";
import {AddImageBlock} from "./components/addImageBlock";

import '../../../../app/app.module.scss';

const ImageViewComponent = ({images, onAddImage, onDeleteImage} )=> (
  <div className="App">
    <AddImageBlock onAddImage={onAddImage}/>
    <ImagesListBlock images={images}

                     onDeleteImage={onDeleteImage}/>
  </div>
);

export default ImageViewComponent
