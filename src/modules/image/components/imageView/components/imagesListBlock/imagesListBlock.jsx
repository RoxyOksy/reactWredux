import React, {Component} from 'react';
import Box from "@material-ui/core/Box";
import {Table} from "../../../../../../shared/components";
import makeStyles from "@material-ui/core/styles/makeStyles";

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

const ImagesListBlockComponent  = ({images, onDeleteImage, imageTableConfig}) => {
// const classes = useStyles();

    return (
      <Box display={'flex'} flex={1}>
          <Table rowData={images} onDeleteItem={onDeleteImage} tableConfig={imageTableConfig} />
      </Box>
    );
};

export default ImagesListBlockComponent
