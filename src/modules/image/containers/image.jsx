import React, {Component} from 'react';
import {connect} from 'react-redux'

import {ImageView} from "../components/imageView";
import {addItem,deleteItem, addImage} from '../actions/action';

import mapStateToProps from '../selectors'

import {getImageTableConfig} from "./imageTableConfig";
import {getFormConfig as getImageFormConfig} from "./imageFormConfig";

import {FormBlock} from "../../../shared/components/form/formBlock";

class ImageContainer extends Component {

    render() {
      const {page, images, handleDeleteItem, handleAddItem, handleAddImage} = this.props;

      const imageFormConfig = getImageFormConfig({ onAddImage: handleAddImage });


      const imageTableConfig = getImageTableConfig({
        onDeleteItem:handleDeleteItem,
        onAddItem: handleAddItem,

        getImageFormBlock: (props)=>{
          return <FormBlock formConfig={imageFormConfig} {...props} />}
      });

        return <ImageView images={images} page={page}
                          imageTableConfig={imageTableConfig} />
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddItem: () => dispatch(addItem()),
        handleDeleteItem: (id) => dispatch(deleteItem(id)),
        handleAddImage: ({id, imageSrc}) => dispatch(addImage({id, imageSrc})),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);
