import React from 'react';
import get from 'lodash/get';
import Box from '@material-ui/core/Box';

import {PageTitle, UserTable} from "../../../../shared/components";

import '../../../../app/app.module.scss';

const UserViewComponent = ({ users, page, tableConfig }) => {
  return (
    <Box className="App">
      <PageTitle componentStyle={{theme: 'darken', size: 'big'}} title={get(page,'title')} variant={'h1'} />
      <UserTable items={users}
                 page={page}
                 tableConfig={tableConfig}/>
    </Box>
  )};

export default UserViewComponent
