import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Answer from './Answer';

import './style.css'
console.log(Answer)
const Question = (props) => {
  const {question} = props; 
  
  return (
    <div className = 'question'>
      {question.imageName &&
        <img 
        alt={`question ${question.id}`}
        className = 'question__image'
        src={question.imageName} />
      }
      <p className = 'question__text'> {question.text} </p>
      <RadioButtonGroup 
        className = 'question__answers'
        name='answers' 
        defaultSelected={0}>
        {question.answers.map((answer, index) => (
          <RadioButton
          className = 'question__answer'
          label = {answer.text}
          value = {index}
          key = {answer.id}
          />
        ))}
      </RadioButtonGroup>
    </div>
  )
}

export default Question;