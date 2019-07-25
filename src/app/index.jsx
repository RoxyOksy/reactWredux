import React, {Component} from 'react';

import {Image} from "../modules/image";
import {User} from "../modules/user"

import styles from './app.module.scss';

//context

export default class AppContainer extends Component {

  state = {
    tab: 'image'
  };

  switchTab = (tabName) => {
    this.setState({
      tab: tabName,
    });
  };

  render() {
    const {tab} = this.state;

    return (
      <div className={styles.app}>
        <button onClick={() => this.switchTab('image')}>images</button>
        <button onClick={() => this.switchTab('user')}>users</button>
        { (tab === 'image') ? <Image /> : <User /> }
      </div>
    );
  }
}


