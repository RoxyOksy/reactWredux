import React, {useState} from 'react';

import {Box, Button, Dialog, DialogActions, DialogTitle, Check} from "shared/vendors";

import {translate} from 'shared/helpers';

const ModalDialog = ({isModalOpen, changeModalState, handleConfirmUser})=> {
  return (
    <Box>

      {/*<Button variant="contained" color="primary" onClick={changeModalState}>*/}
      {/*  <Check />*/}
      {/*</Button>*/}

      <Dialog open={isModalOpen} onClose={changeModalState}>

        <DialogTitle>{translate('MODAL.CONFIRM_USER')}</DialogTitle>

        <DialogActions>
          <Button variant="outlined" color="primary" onClick={changeModalState}>
            {translate('MODAL.CANCEL')}
          </Button>

          <Button variant="outlined" onClick={() => handleConfirmUser()} autoFocus>
            {translate('MODAL.OK')}
          </Button>
        </DialogActions>

      </Dialog>

    </Box>
  );
};

export default ModalDialog
