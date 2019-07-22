import React, {Component} from 'react';

import ItemList from "./components/imagesListBlock/imagesListBlock";
import {AddImageBlock} from "./components/addImageBlock";

import '../../../../app/app.module.scss';

export default class Index extends Component{
  render() {
    return (
      <div className="App">
        <AddImageBlock onAddItem={this.props.addItem}/>
        <ItemList items={this.props.items} onDeleteItem={this.props.deleteItem}/>
      </div>
    );
  }
}
