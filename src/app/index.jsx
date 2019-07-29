import React, {Component} from 'react';
import {Route, Switch, Link} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import {Image} from "../modules/image";
import {User} from "../modules/user"

import appStyles from './app.module.scss';

//context

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  footer: {
    top: 'auto',
    bottom: 0,
  }
});

class AppContainer extends Component {

  render() {
    const {classes} = this.props;

    return (
      <Box className={appStyles.root}>
        <AppBar position="fixed">
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

        <Box flex={1} bgcolor="secondary.main" >
          <Container fixed>
            <Box flex={1} height={'100vh'} padding={'100px 0px'} overflow="auto" bgcolor="primary.contrastText" >
              <Switch>
                <Route exact path="/" component={User}/>
                <Route path="/users" component={User} />
                <Route path="/images" component={Image } />
              </Switch>
            </Box>
          </Container>
        </Box>

        <AppBar position="fixed" color="primary" className={classes.footer}>
          <Toolbar>
            <Typography>My footer</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
export default  withStyles(styles)(AppContainer)

