import React, {Component} from 'react';
import TicketsListComponent from './TicketsListComponent';
import Loading from 'components/Loading';
import Error from 'components/Error';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from 'ducks/tickets';
import PropTypes from 'prop-types';

class TicketsList extends Component {

  componentWillMount() {
    this.props.actions.fetchTicketsIfNeeded();
  }

  render() {
    const {isLoading, error} = this.props.tickets;

    if(isLoading){
      return <Loading />
    }
    else if(error) {
      return <Error error={error} />
    }
    else
      return (
        <TicketsListComponent tickets={this.props.tickets}/>
      )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = state => ({
  tickets: state.tickets
})

TicketsList.propTypes = {
  tickets: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.object.isRequired,
    ids: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);