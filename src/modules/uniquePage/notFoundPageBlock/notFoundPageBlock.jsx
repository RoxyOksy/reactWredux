import React from 'react'

import {Typography, Box} from "shared/vendors";

import styles from './notFoundPage.module.scss'

const NotFoundPageBlockComponent = () => {

  return (
    <Box className={styles.root}>
      <Typography variant={'h1'}>404 error</Typography>
      <Typography>This page could not be found</Typography>
    </Box>
  )

};

export default NotFoundPageBlockComponent
