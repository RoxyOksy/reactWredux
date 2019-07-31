import {AgGridReact} from "ag-grid-react";
import React from "react";
import Box from "@material-ui/core/Box";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const TableComponent = (props) =>  {
  const {defaultTableConfig, frameworkComponents, onGridReady}  = props;
  const {columnDefs, rowData} = props.tableConfig;

  console.log(frameworkComponents);

  return (
    <Box
      className="ag-theme-material"
      style={{
        height: '100%',
        width: '100%'
      }}
    >
      <AgGridReact columnDefs={columnDefs}
                   rowData={rowData}
                   onGridReady={onGridReady}
                   defaultColDef={defaultTableConfig}
                   frameworkComponents={frameworkComponents}
      />
    </Box>
)};

export default TableComponent
