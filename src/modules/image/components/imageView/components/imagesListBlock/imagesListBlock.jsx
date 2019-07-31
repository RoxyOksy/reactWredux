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

export default class ImagesListBlockComponent extends Component {
    // const classes = useStyles();

    render() {
        const {onDeleteImage, imageTableConfig} = this.props;

        return (
          <Box>
              {/*<ul className={classes.root}>*/}
              {/*    {images.map((image) => (*/}
              {/*      <li key={image.id} className={classes.list}>*/}
              {/*          <Box className={classes.item}>*/}

              {/*              <Fab color="secondary" className={classes.fabButton}*/}
              {/*                   onClick={() => onDeleteImage(image.id)}>*/}

              {/*              </Fab>*/}
              {/*          </Box>*/}
              {/*      </li>*/}
              {/*    ))}*/}
              {/*</ul>*/}


                  <Table onDeleteItem={onDeleteImage} tableConfig={imageTableConfig} />
          </Box>
        );
    };
};
