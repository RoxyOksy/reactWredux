import React from "react";
import get from "lodash/get";

import makeStyles from "@material-ui/core/styles/makeStyles";
import {lighten} from "@material-ui/core/styles";

import {ImageField} from "../..";

import {Layout1} from "./layouts";

const useStyles = makeStyles((theme) => {
  return ({
  root: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  button: {
    background: (props)=>{
      return props.background
    },
    color: (props)=>{
      return props.color
    },
    '&:hover': {
      background: (props)=>{
        return  lighten(props.background, 0.2)
      },
    }
  }
})});

const getLayout = ({formConfig, data})=>{
  switch(get(formConfig,'layout','layout1')){
    case 'layout1':
    default:
      return <Layout1 formConfig={formConfig} data={data} />
  }
};

export const getFormField = ({formField, data})=>{
  switch(get(formField,'type','image')){
    case 'image':
    default:
      return <ImageField key={get(data,'id')} data={data} formField={formField} />
  }
};

const FormBlockComponent = ({onSubmit, formConfig, data}) => {

  return (
    <form onSubmit={onSubmit} >
      {getLayout({formConfig, data})}
    </form>
  );
};

export default FormBlockComponent
