import React, {Component} from 'react';
import {Route, Switch, Link} from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

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
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
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
            <Box flex={1} height={'100vh'} paddingTop={'80px'} overflow="auto" bgcolor="primary.contrastText" >
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
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <Fab color="secondary" aria-label="add" className={classes.fabButton}>
              <AddIcon />
            </Fab>
            <div className={classes.grow} />
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton edge="end" color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
export default  withStyles(styles)(AppContainer)

