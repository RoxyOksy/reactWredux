import React from "react";
import Box from "@material-ui/core/Box";
import get from "lodash/get";

import {getFormField} from "../formBlock";

const Layout1Component = (props) => {

  console.log('data', props.data);
  return (
    <Box display={'flex'} flexDirection={'column'} width={1} flex={1} >
      {
        get(props,'formConfig.position1')&&
        <Box display={'flex'} flexDirection={'column'} width={1} flex={1} >
          { get(props,'formConfig.position1.formFields',[])
            .map((formField)=> getFormField( {formField, data:props.data} )) }
        </Box>
      }
      {
        get(props,'formConfig.position2')&&
        <Box display={'flex'} flexDirection={'column'} width={1} flex={1} >
          { get(props,'formConfig.position2.formFields',[])
            .map((formField)=> getFormField( {formField, data:props.data} )) }
        </Box>
      }
      {
        get(props,'formConfig.position3')&&
        <Box display={'flex'} flexDirection={'column'} width={1} flex={1} >
          { get(props,'formConfig.position3.formFields',[])
            .map((formField)=> getFormField( {formField, data:props.data} )) }
        </Box>
      }
      {
        get(props,'formConfig.position4')&&
        <Box display={'flex'} flexDirection={'column'} width={1} flex={1} >
          { get(props,'formConfig.position4.formFields',[])
            .map((formField)=> getFormField( {formField, data:props.data} )) }
        </Box>
      }
      {
        get(props,'formConfig.position5')&&
        <Box display={'flex'} flexDirection={'column'} width={1} flex={1} >
          { get(props,'formConfig.position5.formFields',[])
            .map((formField)=> getFormField( {formField, data: props.data} )) }
        </Box>
      }
    </Box>
  );
};

export default Layout1Component
