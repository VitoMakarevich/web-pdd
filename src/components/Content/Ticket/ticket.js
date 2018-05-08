import React, {Component} from 'react';
import TicketComponent from './TicketComponent';
import Loading from 'components/Loading';
import Error from 'components/Error';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from 'ducks/ticket';

class Ticket extends Component{
  componentWillMount() {
    const ticketNumber = this.props.match.params.number;

    this.props.actions.fetchTicketIfNeeded(ticketNumber);
  }

  render() {
    const {isLoading, error} = this.props.ticket;

    if(isLoading || !this.props.ticket.questions){
      return <Loading />
    }
    else if(error) {
      return <Error error={error} />
    }
    else
      return (
        <TicketComponent questions={this.props.ticket.questions}/>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = (state, ownState) => {
  const ticketNumber = ownState.match.params.number;
  return ({
    ticket: {
      questions: state.ticket.byId[ticketNumber],
      isLoading: state.ticket.isLoading,
      error: state.ticket.error
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);