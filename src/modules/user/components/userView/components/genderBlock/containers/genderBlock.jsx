import React, {Component} from 'react';

import {GenderBlock} from '../components'

export default class GenderBlockContainer extends Component {
 state = {
    label: ''
 }

 handleChange = (event) => {
   this.setState({
   label: event.target.value
   });
   console.log(event);
 };

  render () {
    return (
      <GenderBlock onChange={this.handleChange}/>
    );
  }
}



