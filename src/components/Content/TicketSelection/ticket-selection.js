import React from 'react';
import TicketsList from './TicketsList';
import './style.css'

const TicketSelection = () => {
  return (
    <div
      className = 'ticket-selection'>
      <TicketsList />
    </div>   

  )
}

export default TicketSelection;