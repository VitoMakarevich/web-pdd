import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TicketSelection from './TicketSelection';
import Ticket from './Ticket';
import './style.css'

const Content = () => {
  return (
    <div className = "content">
      <Switch>
        <Route exact path='/tickets' component = {TicketSelection} />
        <Route path='/tickets/:number' component = {Ticket} />
      </Switch>
    </div>
  )
}

export default Content;