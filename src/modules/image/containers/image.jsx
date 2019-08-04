import React, {Component} from 'react';
import { connect } from 'react-redux'
import uid from "uid";

import {ImageView} from "../components/imageView";
import {getImageTableConfig} from "./imageTableConfig";

import '../../../app/app.module.scss';

class ImageContainer  extends Component{
    state={
        items:[]
    };

    handleAddItem = () => {
        const newItem = {id: uid()};

        this.setState(({items}) => {
            return{
                items: [...items, newItem]
            }
        });
    };

    handleDeleteItem = (id) => {
        this.setState(({items}) => {
            const index = items.findIndex((el) => el.id === id);
            const newState = [...items.slice(0, index), ...items.slice(index + 1)];

            return {
                items: newState
            }
        });
    };

    render() {
        const {page} = this.props;
        const {items} = this.state;
        const imageTableConfig = getImageTableConfig({
            onDeleteItem:this.handleDeleteItem,
            onAddItem:this.handleAddItem,
        });
        return <ImageView items={items} page={page}
                          imageTableConfig={imageTableConfig} />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        counter: state
    }
};

const mapDispatchToProps = { };

export default  connect(mapStateToProps,
  mapDispatchToProps)(ImageContainer);
