import React from "react";

import {Box, Table, TableBody, TableRow, TableCell} from "shared/vendors";

import {TableHead} from './tableHead';

import {getSorting, stableSort} from 'shared/helpers';

import {useTableStyle} from './table.style';

const TableComponent =  ({ items, onCreateSort, orderBy, addItemButton, order, cellComponents, tableConfig:{headColumns, tableWithAddItemButton} }) => {
  const classes = useTableStyle();

    return (
    <Box className={classes.root}>
      {
        addItemButton&& addItemButton(tableWithAddItemButton)
      }
        <Box className={classes.tableWrapper}>
          <Table className={classes.table}
            aria-labelledby="tableTitle"
          >
            <TableHead
              classes={classes}
              headColumns={headColumns}
              order={order}
              orderBy={orderBy}
              onCreateSort={onCreateSort}
              rowCount={items.length}
            />
            <TableBody>
              {stableSort(items, getSorting(order, orderBy))
                .map((rowData, rowIndex) => {

                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={rowData.id} counter={rowIndex}>
                      {
                        headColumns.map((headColumn, index)=>{
                          const CellComponent = cellComponents[headColumn.type];
                          const labelId = `enhanced-table-checkbox-${rowData.id}${index}`;
                          let counter = rowIndex+1;

                          return <TableCell id={labelId} key={`${rowData.id}${index}`} >
                            <CellComponent data={rowData} {...headColumn} counter={counter} />
                          </TableCell>
                        })
                      }
                    </TableRow>
                  );
                })}

            </TableBody>
          </Table>
        </Box>

    </Box>
)};

 export default TableComponent
