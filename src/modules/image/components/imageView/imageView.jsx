import React from 'react';
import get from 'lodash/get';
import Box from '@material-ui/core/Box';

import {PageTitle, Table} from "../../../../shared/components";

import '../../../../app/app.module.scss';

const ImageViewComponent = ({imageTableConfig, page, items} )=> {

  return (
  <Box display={'flex'} flexDirection={'column'} flex={1} className="App">
    <PageTitle componentStyle={{theme:'darken', size: 'big'}} title={get(page,'title')} variant={'h1'} />
    <Table items={items} tableConfig={imageTableConfig} />
  </Box>
)};

export default ImageViewComponent
