import React from 'react';
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import Clear from "@material-ui/icons/Clear";
import makeStyles from "@material-ui/core/styles/makeStyles";

import {ImageBlock} from "../imageBlock";

const useStyles = makeStyles(theme => ({
    root: {
        listStyle: 'none'
    },
    list: {},
    item: {
        display: 'flex',
        direction: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: '50px'
    },
    fabButton: {}
}));



const ImagesListBlockComponent = ({images, onDeleteImage}) => {
    const classes = useStyles();

    return (
      <ul className={classes.root}>
          {images.map((image) => (
            <li key={image.id} className={classes.list}>
                <Box className={classes.item}>
                    <ImageBlock id={image.id}/>
                    <Fab color="secondary" className={classes.fabButton}
                               onClick={() => onDeleteImage(image.id)}>
                    <Clear/>
                </Fab>
                </Box>
            </li>
          ))}
      </ul>
    );
};

export default ImagesListBlockComponent;
