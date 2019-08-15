import React from 'react';

import {RadioField} from '../components'

const RadioFieldContainer = (props) => {

 // handleChange = (event) => {
 //   this.setState({
 //   label: event.target.value
 //   });
 // };

  return (
    <RadioField {...props}/>
  );
};

export default RadioFieldContainer
