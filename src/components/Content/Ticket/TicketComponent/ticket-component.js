import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Question from './Question';

const Ticket = (props) => (
  <Tabs className= 'ticket__tabs'>
    { 
      props.questions.map((question) => (
        <Tab
          className = 'ticket__tab'
          label = {question.id}
          key = {question.id}
          >
          <Question question={question} />
        </Tab>
      ))
    }
  </Tabs>
);

export default Ticket;