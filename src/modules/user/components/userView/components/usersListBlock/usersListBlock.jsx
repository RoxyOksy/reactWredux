import React from 'react';
import Box from "@material-ui/core/Box";
import Clear from "@material-ui/icons/Clear";
import Fab from "@material-ui/core/Fab";
import makeStyles from "@material-ui/core/styles/makeStyles";

import {UserBlock} from "../userBlock";

const useStyles = makeStyles(theme => ({
    root: {
        width: '80%',
        margin: '30px auto',
        listStyle: 'none',
    },
    list: {
        marginLeft: '-40px',
    },
    item: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fabButton: {
        marginLeft: '15px'
    }
}));

const UsersListBlockComponent = ({users, onDeleteUser}) => {
    const classes = useStyles();

    return(
      <ul className={classes.root}>
          { users.map((user) => (
            <li key={user.id} className={classes.list}>
                <Box className={classes.item}>
                    <UserBlock />
                    <Fab color="secondary" className={classes.fabButton}
                         onClick={() => onDeleteUser(user.id)} >
                        <Clear />
                    </Fab>
                </Box>
            </li>
          )) }
      </ul>
    )
};


export default UsersListBlockComponent;
