import React, {Component} from 'react';
import './app.css';
import Item from "./item";
import AddItem from "./addItem";

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

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <AddItem onAddItem={this.addItem}/>
        {this.state.items.map((item) => (
          <Item key={item.id} id={item.id}/>
        ))
        }
      </div>
    );
  }
}
