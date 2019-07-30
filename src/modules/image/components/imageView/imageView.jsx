import React from 'react';
import get from 'lodash/get';
import Box from '@material-ui/core/Box';

import {PageTitle} from "../../../../shared/components";
import {ImagesListBlock} from "./components/imagesListBlock";
import {AddImageBlock} from "./components/addImageBlock";

import '../../../../app/app.module.scss';

const ImageViewComponent = ({images, onAddImage, page, onDeleteImage} )=> (
  <Box className="App">
    <PageTitle componentStyle={{theme:'darken', size: 'big'}} title={get(page,'title')} variant={'h1'} />
    <AddImageBlock onAddImage={onAddImage}/>
    <ImagesListBlock images={images}

                     onDeleteImage={onDeleteImage}/>
  </Box>
);

export default ImageViewComponent
