import React from "react";
import {defaults, get} from "lodash";
import uid from "uid";

import {Typography, Box, Button, MenuItem, ListItemAvatar, Avatar,
        FormControl, InputLabel, Select, Clear, makeStyles} from "shared/vendors";

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '100%',
  },
}));

const SelectFieldComponent = ({isSelectFieldClearable, label, name, value, defaultValue, items, onItemChange}) =>
{
  const classes = useStyles();

  return (
    <Box display={'flex'} alignItems={'center'} flexDirection={'row'}  component="span" m={1}>

      <FormControl className={classes.formControl}>

         { label && <InputLabel htmlFor="age-customized-select">{label}</InputLabel> }
         <Select  value={value}
                  inputProps={{
                    name,
                    id: `${name}SelectField`,
                  }}
                  onChange={onItemChange}
         >
           <MenuItem value={defaults('', get(defaultValue, 'value'))}>
             <em>{defaults('None', get(defaultValue, 'label'))}</em>
           </MenuItem>
           {
             items.map((item, index) =>
               <MenuItem value={get(item, 'value', '')} key={uid()}>
                 <Box display={'flex'} alignItems={'center'} flexDirection={'row'} component="span" m={1}>
                   { get(item, 'image')&&
                     <ListItemAvatar>
                       <Avatar>
                         <img src={get(item, 'image')} alt='avatar' />
                       </Avatar>
                     </ListItemAvatar> }

                   {
                     get(item, 'text')&&<Typography variant="body2" gutterBottom>
                       {get(item, 'text')}
                     </Typography>
                   }
                 </Box>

               </MenuItem>)
           }
         </Select>

     </FormControl>

    { isSelectFieldClearable && <Button><Clear onClick={(event) => onItemChange('')} /></Button> }

  </Box>
  );
};

export default SelectFieldComponent
