import React from "react";
import Box from "@material-ui/core/Box";
import get from "lodash/get";

import {getFormField} from "../formBlock";




const Layout1Component = (props) => {

  console.log('data',props.data);
  return (
    <Box display={'flex'} flexDirection={'column'} width={1} flex={1} >
      {get(props,'formConfig.position4')&& <Box display={'flex'} flexDirection={'column'} width={1} flex={1} >
        {
          get(props,'formConfig.position4.formFields',[]).map((formField)=>{

            return getFormField({formField, data:props.data})})
        }

      </Box>}
    </Box>
  );
};

export default Layout1Component
