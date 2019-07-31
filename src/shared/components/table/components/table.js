import React from "react";
import {keys} from "lodash";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';

import TableRow from '@material-ui/core/TableRow';

import {TableHead} from './tableHead';
import {getSorting,stableSort} from '../../../helpers';

import {useTableStyle} from './table.style';

const TableComponent =  ( {rowData, onCreateSort, orderBy, order, cellComponents, tableConfig}) => {
  const classes = useTableStyle();

    return (
    <Box className={classes.root}>
        <Box className={classes.tableWrapper}>
          <Table className={classes.table}
            aria-labelledby="tableTitle"
          >
            <TableHead
              classes={classes}
              tableConfig={tableConfig}
              order={order}
              orderBy={orderBy}
              onCreateSort={onCreateSort}
              rowCount={rowData.length}
            />
            <TableBody>
              {stableSort(rowData, getSorting(order, orderBy))
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {
                        tableConfig.headColumns.map((headColumn, index)=>{
                          const CellComponent = cellComponents[headColumn.type];
                          const labelId = `enhanced-table-checkbox-${row.id}${index}`;

                          return   <TableCell id={labelId} key={`${row.id}${index}`} ><CellComponent {...row} /></TableCell>
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
