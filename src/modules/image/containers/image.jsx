import React, {Component} from 'react';
import {connect} from 'react-redux'

import {ImageView} from "../components/imageView";
import {addImageItem, deleteImageItem, addImage} from '../actions/action';

import mapStateToProps from '../selectors'

import {getImageTableConfig} from "./imageTableConfig";
import {getFormConfig as getImageFormConfig} from "./imageFormConfig";

import {FormBlock} from "../../../shared/components/form/formBlock";

class ImageContainer extends Component {

    render() {
      const {page, images, handleDeleteImageItem, handleAddImageItem, handleAddImage} = this.props;

      const imageFormConfig = getImageFormConfig({ onAddImage: handleAddImage });


      const imageTableConfig = getImageTableConfig({
        onAddImageItem: handleAddImageItem,
        onDeleteImageItem: handleDeleteImageItem,

        getImageFormBlock: (props)=>{
          return <FormBlock formConfig={imageFormConfig} {...props} />}
      });

        return <ImageView images={images} page={page}
                          imageTableConfig={imageTableConfig} />
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddImageItem: () => dispatch(addImageItem()),
        handleDeleteImageItem: (id) => dispatch(deleteImageItem(id)),
        handleAddImage: ({id, imageSrc}) => dispatch(addImage({id, imageSrc})),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);
