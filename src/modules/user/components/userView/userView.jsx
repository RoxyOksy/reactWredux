import React from 'react';
import get from 'lodash/get';

import {Box} from 'shared/vendors';

import {PageTitle, Table} from "shared/components";
import {ModalDialog} from 'shared/components/modalDialog';

const UserViewComponent = ({isModalOpen, users, page, tableConfig, changeModalState, handleConfirmUser}) => {
  return (
    <Box className="App">
      <PageTitle componentStyle={{theme: 'darken', size: 'big'}} title={get(page,'title')} variant={'h1'} />
      <Table items={users}
             page={page}
             tableConfig={tableConfig} />
      <ModalDialog isModalOpen={isModalOpen} changeModalState={changeModalState} handleConfirmUser={(id) => handleConfirmUser(id)} />
    </Box>
  )};

export default UserViewComponent
