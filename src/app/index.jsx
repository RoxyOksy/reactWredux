import React, {Component} from 'react';
import {Route, Switch, Link} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import {pages} from "../utils/routeConfiguration.js"

import appStyles from './app.module.scss';

//context

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  content: {

  },
  footer: {
    // top: 'auto',
    // bottom: 0,
  },
  title: {
    flexGrow: 1,
  },

});

class AppContainer extends Component {

  render() {
    const {classes} = this.props;

    return (
      <Box className={appStyles.root}>
        <AppBar position="fixed" >
          <Container fixed>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Admin Panel
              </Typography>
              <Button component={Link} to="/images" color="inherit">
                images
              </Button>
              <Button component={Link} to="/users"  color="inherit">
                users
              </Button>
            </Toolbar>
          </Container>
        </AppBar>

        <Box display={'flex'} flex={1} bgcolor="secondary.main" pt={14} pb={6}>
          <Container style={{display: 'flex', flex: 1}} fixed>
            <Box flex={1}   pb={8}  bgcolor="primary.contrastText" >
              <Switch>
                {pages.map((page)=><Route exact path={page.route} component={page.component} title={page.title}/>)}
              </Switch>
            </Box>
          </Container>
        </Box>

        <AppBar position="static" color="primary" className={classes.footer}>
          <Toolbar>
            <Typography>My footer</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
export default  withStyles(styles)(AppContainer)

