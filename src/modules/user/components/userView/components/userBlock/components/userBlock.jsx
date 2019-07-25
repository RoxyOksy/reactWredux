import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import {LoginBlock} from "../../loginBlock"
import {PasswordBlock} from "../../passwordBlock"
import {PositionBlock} from "../../positionBlock"
import {GenderBlock} from "../../genderBlock"
import {SelectImageBlock} from "../../selectImageBlock"
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  item: {
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '1px solid blue',
    alignItems: 'center',
  }
}));

const UserBlockComponent = () => {
  const classes = useStyles();

  return (
    <Box display={'flex'} width={0.5} border={'1px solid red'}>

      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={5}>
            <Box className={classes.item}>
              <LoginBlock />
              <PasswordBlock />
            </Box>
          </Grid>

          <Grid item xs={5}>
            <Box className={classes.item} >
              <PositionBlock />
              <SelectImageBlock />
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box className={classes.item} alignSelf={'flex-start'}>
              <GenderBlock />
            </Box>
          </Grid>
        </Grid>
      </Grid>

    </Box>
  );
};


export default UserBlockComponent
