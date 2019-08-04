import React from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';

import {TableHead} from './tableHead';
import {getSorting, stableSort} from '../../../helpers';

import {useTableStyle} from './table.style';

const TableComponent =  ( {items, onCreateSort, orderBy, addItemButton, order, cellComponents, tableConfig:{headColumns,tableWithAddItemButton} }) => {
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
                .map((row, rowIndex) => {

                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id} counter={rowIndex}>
                      {
                        headColumns.map((headColumn, index)=>{
                          const CellComponent = cellComponents[headColumn.type];
                          const labelId = `enhanced-table-checkbox-${row.id}${index}`;
                          let counter = rowIndex+1;

                          return <TableCell id={labelId} key={`${row.id}${index}`} >
                            <CellComponent row={row} {...headColumn} counter={counter} />
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
