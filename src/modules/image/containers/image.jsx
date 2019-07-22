import React, {Component} from 'react';

import {ImageView} from "../components/imageView";

import '../../../app/app.module.scss';

export default class Index extends Component{
  state = {
    items: []
  };

  maxId = 1;

  addItem = () => {
    const newItem = {id: this.maxId++};

    this.setState(({items}) => {
      return{
        items: [...items, newItem]
      }
    });
  };

  deleteItem = (id) => {
    this.setState(({items}) => {
      const index = items.findIndex((el) => el.id === id);
      const newState = [...items.slice(0, index), ...items.slice(index + 1)];

      return {
        items: newState
      }
    });
  };

  render() {
    return (
      <ImageView items={this.state.items} addItem={this.addItem} deleteItem={this.deleteItem} />
    );
  }
}
