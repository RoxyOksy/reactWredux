import React from 'react';

import {UserView} from "../components/userView";

import {withListControl} from "../../../shared/hocs";

import '../../../app/app.module.scss';

const UserContainer = ({onAddItem, onDeleteItem, page, items}) => {
  return (
  <UserView users={items}
            page={page}

            onAddUser={onAddItem}
            onDeleteUser={onDeleteItem} />
)};

export default withListControl(UserContainer);
