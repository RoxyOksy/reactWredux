import React from 'react'
import {Table, CounterCell,ControlCell,ImageUploaderCell} from '../components'


const TableContainer = (props) => {
  const defaultTableConfig ={
    frameworkComponents:{
      counterCell: CounterCell,
      controlCell: ControlCell,
      imageUploaderCell: ImageUploaderCell
    }
  }

  return (
    <Table {...defaultTableConfig} {...props} />
  )
};

export default TableContainer
