import React, {Component} from 'react'

import {Table} from '../components'
import {getDefaultTableConfig} from './defaultUsersTableConfig'

export default class UserTableContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'counter'
    };
  }

  requestSort = (event, property) =>{
    const {orderBy, order} = this.state;
    const isDesc = orderBy === property && order === 'desc';

    this.setState({
      order: isDesc ? 'asc' : 'desc',
      orderBy: orderBy
    })
  };

  handleCreateSort = property => event =>  this.requestSort(event, property);

  render(){
    const {orderBy, order} = this.state;

    return (
      <Table orderBy={orderBy} order={order} onCreateSort={this.handleCreateSort}
             {...getDefaultTableConfig(this)} {...this.props} />
    )
  }
}
