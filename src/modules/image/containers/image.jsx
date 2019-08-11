import React, {Component} from 'react';
import { connect } from 'react-redux'

import {ImageView} from "../components/imageView";
import {getImageTableConfig} from "./imageTableConfig";
import {addItem} from '../actions/action';
import {deleteItem} from '../actions/action';
import {getItems} from '../selectors/selectors'

import '../../../app/app.module.scss';

class ImageContainer extends Component{

    render() {
        const {page, items} = this.props;
        const imageTableConfig = getImageTableConfig({
            onDeleteItem:this.props.handleDeleteItem,
            onAddItem: this.props.handleAddItem,
        });
        return <ImageView items={items} page={page}
                          imageTableConfig={imageTableConfig} />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: getItems(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddItem: () => dispatch(addItem()),
        handleDeleteItem: (id) => dispatch(deleteItem(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);
