import React from 'react';
import {RadioButton} from 'material-ui/RadioButton';
const Answer = (props) => {
  const {answer} = props;
  console.log(answer)
  
  return (
    <RadioButton
      label = {answer.text}
      value = {answer.id}
      text = {answer.text}
    />
  )
}

export default Answer;