import React, {Component} from 'react';
import classNames from 'classnames';
import get from 'lodash/get';
import {Route, Switch, Link, Redirect} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import {pages} from "../utils/routeConfiguration.js"

import appStyles from './app.module.scss';

//context

class AppContainer extends Component {

  render() {

    return (
      <Box className={appStyles.root}>
        <AppBar position="fixed" >
          <Container fixed>
            <Toolbar>
              <Typography variant="h6" className={appStyles.headerTitle}>
                Admin Panel
              </Typography>

              {pages.filter((page) => page.menuItem)
                .map((page)=>
                {
                  return <Button component={Link} to={page.route} onClick={(()=>this.forceUpdate())} className={classNames(appStyles.headerButton,get(window,'location.pathname')===page.route?appStyles.active:null)}>
                    {page.menuItem}
                  </Button>})}

            </Toolbar>
          </Container>
        </AppBar>

        <Box display={'flex'} flex={1} bgcolor="secondary.main" pt={14} pb={6}>
          <Container style={{display: 'flex', flex: 1}} fixed>
            <Box flex={1} pb={8} bgcolor="primary.contrastText" >
              <Switch>
                {pages.map((page)=><Route exact path={page.route}
                                          component={(props) => <page.component {...props} page={page} />}
                                    />)}
                <Route component={NotFoundPageBlock} />
              </Switch>
            </Box>
          </Container>
        </Box>

        <AppBar position="static" color="primary">
          <Container fixed>
            <Toolbar>
              <Typography>My footer</Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    );
  }
}
export default  AppContainer

