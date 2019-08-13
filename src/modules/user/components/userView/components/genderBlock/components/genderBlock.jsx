import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { withTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

const GenderBlockComponent = ({value, handleChange, t}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{t('FORM_FIELD.GENDER.LABEL')}</FormLabel>
        <RadioGroup
          aria-label={t('FORM_FIELD.GENDER.LABEL')}
          name="gender1"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="female" control={<Radio/>} label={t('FORM_FIELD.FEMALE.LABEL')} />
          <FormControlLabel value="male" control={<Radio/>} label={t('FORM_FIELD.MALE.LABEL')}/>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default withTranslation()(GenderBlockComponent)
