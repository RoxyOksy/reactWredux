import React from 'react';

import {UserView} from "../components/userView";

import {withListControl} from "../../../shared/hocs";

import '../../../app/app.module.scss';

const UserContainer = ({onAddItem, onDeleteItem, items}) => (
  <UserView users={items}

             onAddUser={onAddItem}
             onDeleteUser={onDeleteItem} />
);

export default withListControl(UserContainer);
