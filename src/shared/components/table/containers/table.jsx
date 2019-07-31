import React, {Component} from 'react'
import {Table, CounterCell, ControlCell, ImageUploaderCell} from '../components'
import {getDefaultTableConfig} from './defaultTableConfig'

class TableContainer extends Component{
  gridApi=null
  render(){
console.log('^^^^^^^');
console.log(this.gridApi);

    return (
      <Table

        {...getDefaultTableConfig(this)} {...this.props} />
    )
  }
}

export default TableContainer
