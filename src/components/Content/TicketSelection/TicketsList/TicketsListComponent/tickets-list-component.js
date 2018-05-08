import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {Link} from 'react-router-dom';
import './style.css';

const TicketsListComponent = ({tickets}) => {
  return (
      <GridList
        className = 'tickets-list'
        cellHeight={50}
        cols={8}>
        {
          tickets.ids.map((ticketId) => (
              <GridTile
                className = 'tickets-list__item'
                key={ticketId}
                title={ticketId}
                containerElement = {<Link to={`/tickets/${ticketId}`} />}
              />
            )
          )
        }
      </GridList>
  )
}

export default TicketsListComponent;