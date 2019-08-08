import React from "react";

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import {withTranslation} from 'react-i18next';

import '../../../../../../locale/i18n';

import {useTableHeadStyle} from './tableHead.style';

const TableHeadComponent = ( { order, orderBy, onCreateSort, headColumns, t })=> {

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
                {t(column.label)}
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

export default withTranslation()(TableHeadComponent)

