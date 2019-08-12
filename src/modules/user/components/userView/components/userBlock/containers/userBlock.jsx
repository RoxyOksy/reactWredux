import React from "react";

import {UserBlock} from "../components";

const UserBlockContainer = (props) => {
  return (
    <UserBlock userInfo={props.row}/>
  )
};

export default UserBlockContainer
