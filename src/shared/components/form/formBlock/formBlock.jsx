import React from "react";
import get from "lodash/get";

import {Typography, Button, Check} from "shared/vendors";

import {ImageField, SelectField} from "../../form";
import {InputField, RadioField} from "../formFields";
import {ToggleEditor} from "../toggleEditor";

import {Layout1} from "./layouts";

export const getFormField = ({formField, data}) => {

  const type = get(formField,'type','text');
  const label = get(formField,'label','');
  const placeholder = get(formField,'params.placeholder','');
  const radioButtons = get(formField,'params.radioButtons',[]);
  const handleChangeValue = get(formField,'onChange',null);
  const name = get(formField,'name','');

  const value = get(data,`${name}.value`, '');
  const id = get(data,'id', '');
  const key=`${name}${id}`;

  switch(type){
    case 'image':
      return <ImageField key={key}
                         data={data}

                         handleChangeValue={handleChangeValue} />;

    case 'select' :
      return <SelectField isSelectFieldClearable

                          key={key}
                          id={id}
                          name={name}
                          label={label}
                          value={value}

                          // items={}

                          handleChangeValue={handleChangeValue}
      />;

    case 'radio' :

      return <RadioField key={key}
                         id={id}
                         name={name}
                         label={label}
                         value={value}

                         radioButtons={radioButtons}

                         handleChangeValue={handleChangeValue}/>

    case 'text' :
    case 'password':
    default:
      return <InputField key={key}
                         id={id}
                         type={type}
                         label={label}
                         value={value}
                         name={name}
                         placeholder={placeholder}

                         handleChangeValue={handleChangeValue}
      />;
  }
};

export const getFormToggleField = (props) => {
  const isToggleField = (get(props,'formField.params.withConfirmation',true));
  const fieldName = get(props,'formField.name','');
  const value = get(props,`data.${fieldName}.value`, '');
  const isEditState = get(props,`data.${fieldName}.isEditable`, true);
  const handleChangeEditState = get(props,'formField.onConfirm',null);
  const id = get(props,'data.id', '');
  const label = get(props,'formField.label','');

  return isToggleField ? <ToggleEditor id={id}
                                      fieldName={fieldName}
                                      isEditState={isEditState}
                                      handleChangeEditState={handleChangeEditState}

                          InputField={ () => getFormField(props) }
                          ConfirmationButton={ (props) => <Button onClick={props.onClick}><Check/></Button> }
                          Typography={ (props) => <Typography onClick={props.onClick}>{label}: {value}</Typography> }
                        /> : getFormField(props)
};

const getLayout = ({formConfig, data})=>{
  switch (get(formConfig,'layout','layout1')) {
    case 'layout1':
    default:
      return <Layout1 formConfig={formConfig} data={data} />
  }
};

const FormBlockComponent = ({onSubmit, formConfig, data}) => {
  return (
    <form onSubmit={onSubmit} >
      { getLayout({formConfig, data}) }
    </form>
  );
};

export default FormBlockComponent
