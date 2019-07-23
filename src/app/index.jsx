import React from 'react';

import {Image} from "../modules/image";
import {User} from "../modules/user"

import styles from './app.module.scss';

//context

const AppContainer = () => (
  <div className={styles.app}>
    <button>images</button>
    <button>users</button>
    <Image/>
    <User/>
  </div>);

export default AppContainer;


