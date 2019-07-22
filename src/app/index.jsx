import React, {Component} from 'react';

import {Image} from "../modules/image";

import styles from './app.module.scss';

//context

export default class Index extends Component{
  render() {
    return (<div className={styles.app}>
      <button>images</button>
      <button>users</button>
      <Image />
    </div>);
  }
}
