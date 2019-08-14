import React from "react";

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import {useTableHeadStyle} from './tableHead.style';

const TableHeadComponent = ( { order, orderBy, onCreateSort, headColumns })=> {

  const classes = useTableHeadStyle();
    return (
      <TableHead>
        <TableRow>
          {headColumns.map(column => (
            <TableCell
              key={column.id}
              sortDirection={orderBy === column.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === column.id}
                direction={order}
                onClick={onCreateSort(column.id)}
              >
                {column.label}
                {orderBy === column.id ? (
                  <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
};

export default TableHeadComponent

