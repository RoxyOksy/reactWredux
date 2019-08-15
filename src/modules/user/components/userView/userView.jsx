import React from 'react';
import get from 'lodash/get';

import {Box} from 'shared/vendors';

import {PageTitle, Table} from "shared/components";

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
