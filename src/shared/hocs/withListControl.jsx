import React from 'react';
import uid from "uid";

export const withListControl = (Component) =>{
  return class extends React.Component {
    state = {
      items: []
    };

    counter = 1;

    handleAddItem = () => {
      const newItem = {id: uid(), counter: this.counter++};

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
      const {items} = this.state;

      return <Component {...this.props} items={items} onAddItem={this.handleAddItem} onDeleteItem={this.handleDeleteItem} />
    }
  }
};
