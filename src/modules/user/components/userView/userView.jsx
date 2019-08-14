import React from 'react';
import get from 'lodash/get';
import Box from '@material-ui/core/Box';

import {PageTitle, Table} from "../../../../shared/components";

import '../../../../app/app.module.scss';

const UserViewComponent = ({ users, page, tableConfig }) => {
  return (
    <Box className="App">
      <PageTitle componentStyle={{theme: 'darken', size: 'big'}} title={get(page,'title')} variant={'h1'} />
      <Table items={users}
                 page={page}
                 tableConfig={tableConfig}/>
    </Box>
  )};

export default UserViewComponent
