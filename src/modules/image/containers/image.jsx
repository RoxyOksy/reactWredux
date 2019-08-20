import React, {Component} from 'react';
import {connect} from 'react-redux'

import {FormBlock} from "shared/components";

import {ImageView} from "../components/imageView";
import mapStateToProps from '../selectors';
import {addImageItem, deleteImageItem, changeImage, toggleEditState} from '../actions/action';

import {getImageTableConfig} from "./imageTableConfig";
import {getFormConfig as getImageFormConfig} from "./imageFormConfig";

class ImageContainer extends Component {
    render() {
      const {page, images, handleDeleteImageItem, handleAddImageItem, handleChangeImage, handleEditState} = this.props;

      const imageFormConfig = getImageFormConfig({
        onChangeImage: handleChangeImage,
        onEditState: handleEditState
      });

      const imageTableConfig = getImageTableConfig({
        onAddImageItem: handleAddImageItem,
        onDeleteImageItem: handleDeleteImageItem,

        getImageFormBlock: (props) => {
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
    handleChangeImage: ({id, imageSrc}) => dispatch(changeImage({id, imageSrc})),
    handleEditState: (id) => dispatch(toggleEditState(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);
