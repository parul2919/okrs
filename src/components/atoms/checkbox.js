import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { ContextApiConsumer } from './../../config/contextApi';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  checkBlock: {
    margin: '0 8px  8px',
  },
  wrapper: {
    margin:'0 !important',
  }
}); 
const CheckboxLabels = props => {
  const classes = useStyles();
  const {label, onCheckBoxChnage, type} = props;
  const handleChange = (evt) => {
    onCheckBoxChnage(evt.currentTarget);
  }
  return (
    <div className={`checkbox-group ${classes.wrapper}`}>
    <FormGroup className={classes.checkBlock}>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name={label}
            color="primary"
            id= {`checkbox-${label}`}
            value={type}
          />
        }
        label={label}
      />
    </FormGroup>
    </div>
  );
};


const ConnectedCheckbox = props => (
  <ContextApiConsumer>
    {({ updateContextData, checkedFilter}) => (
      <CheckboxLabels
        {...props}
        updateContextData={updateContextData}
        checkedFilter={checkedFilter}
      />
    )}
  </ContextApiConsumer>
);

export default ConnectedCheckbox;
export { CheckboxLabels };