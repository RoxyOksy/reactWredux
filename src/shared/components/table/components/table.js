import {AgGridReact} from "ag-grid-react";
import React from "react";
import Box from "@material-ui/core/Box";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const TableComponent = (props) =>  {
  return (
    <Box
      className="ag-theme-material"
      style={{
        height: '500px',
        width: '600px'
      }}
    >
      <AgGridReact {...props} />
    </Box>
)};

export default TableComponent
