import React from "react";
import {defaults, get} from "lodash";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import uid from "uid";

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '100%',
  },
}));

const SelectFieldComponent = ({inputLabel, onItemChange, name, value, defaultValue, items, isSelectFieldClearable}) =>
{
  const classes = useStyles();

  return (
    <Box display={'flex'} alignItems={'center'} flexDirection={'row'}  component="span" m={1}>

      <FormControl className={classes.formControl}>

         { inputLabel && <InputLabel htmlFor="age-customized-select">{inputLabel}</InputLabel> }
         <Select  value={value}
                  inputProps={{
                    name,
                    id: `${name}SelectField`,
                  }}
                  onChange={(event) => onItemChange( get(event,'target.value'))}
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

    { isSelectFieldClearable && <Button><CloseIcon onClick={(event) => onItemChange('')} /></Button> }

  </Box>
  );
};

export default SelectFieldComponent
