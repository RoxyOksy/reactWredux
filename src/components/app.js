import React, {Component} from 'react';
import ItemList from "./itemList";
import AddItem from "./addItem";
import './app.css';

export default class App extends Component{

  maxId = 1;

  state = {
    items: []
  };

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
      <div className="App">
        <AddItem onAddItem={this.addItem}/>
        <ItemList items={this.state.items} onDeleteItem={this.deleteItem}/>
      </div>
    );
  }
}
