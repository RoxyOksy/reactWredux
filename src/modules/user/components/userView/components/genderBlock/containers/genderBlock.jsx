import React, {Component} from 'react';

import {GenderBlock} from '../components'

export default class GenderBlockContainer extends Component {
 state = {
    label: ''
 };

 handleChange = (event) => {
   this.setState({
   label: event.target.value
   });
 };

  render () {
    return (
      <GenderBlock onChange={this.handleChange}/>
    );
  }
}



