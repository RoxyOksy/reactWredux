import React from "react";
import {makeStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import {LoginBlock} from "../../loginBlock"
import {PasswordBlock} from "../../passwordBlock"
import {PositionBlock} from "../../positionBlock"
import {GenderBlock} from "../../genderBlock"
import {SelectImageBlock} from "../../selectImageBlock"

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: '10px',
    width: '90%'
  },
  item: {
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid blue'
  }
}));

const UserBlockComponent = (props) => {
  const classes = useStyles();

  const{userInfo} = props

  return (
    <Card className={classes.root}>

      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={5}>
            <Box className={classes.item}>
              <LoginBlock userInfo={userInfo}/>
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

    </Card>
  );
};

export default UserBlockComponent
