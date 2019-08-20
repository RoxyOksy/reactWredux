import React from "react";
import get from "lodash/get";

import {Box} from "shared/vendors";

import {getFormToggleField} from "../formBlock";

const Layout1Component = (props) => {
  return (
    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} width={1} flex={1} >
      {
        get(props,'formConfig.position1')&&
        <Box display={'flex'} flexDirection={'column'} width={1} flex={3} >
          { get(props,'formConfig.position1.formFields',[])
            .map((formField)=> getFormToggleField( {formField, data: props.data} )) }
        </Box>
      }
      {
        get(props,'formConfig.position2')&&
        <Box display={'flex'} flexDirection={'column'} width={1} flex={3} >
          { get(props,'formConfig.position2.formFields',[])
            .map((formField)=> getFormToggleField( {formField, data:props.data} )) }
        </Box>
      }
      {
        get(props,'formConfig.position3')&&
        <Box display={'flex'} flexDirection={'column'} width={1} flex={1} >
          { get(props,'formConfig.position3.formFields',[])
         //   .map((formField)=> getFormField( {formField, data:props.data} )) }
            .map((formField)=> getFormToggleField( {formField, data: props.data} )) }
        </Box>
      }
      {
        get(props,'formConfig.position4')&&
        <Box display={'flex'} flexDirection={'column'} width={1} flex={1} >
          { get(props,'formConfig.position4.formFields',[])
            .map((formField) => getFormToggleField( {formField, data: props.data} ) ) }
        </Box>
      }
    </Box>
  );
};

export default Layout1Component
