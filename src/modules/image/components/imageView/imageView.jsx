import React from 'react';
import Box from '@material-ui/core/Box';

import {pages} from "../../../../utils/routeConfiguration.js"
import {PageTitle} from "../../../../shared/components";
import {ImagesListBlock} from "./components/imagesListBlock";
import {AddImageBlock} from "./components/addImageBlock";

import '../../../../app/app.module.scss';

const ImageViewComponent = ({images, onAddImage, onDeleteImage} )=> (
  <Box className="App">
    <PageTitle componentStyle={{theme:'darken', size: 'big'}} title={'Images'} variant={'h1'} />
    <AddImageBlock onAddImage={onAddImage}/>
    <ImagesListBlock images={images}

                     onDeleteImage={onDeleteImage}/>
  </Box>
);

export default ImageViewComponent
