const LOAD_REQUEST = 'tickets/LOAD_REQUEST';
const LOAD_FAILURE = 'tickets/LOAD_FAILURE';
const LOAD_SUCCESS = 'tickets/LOAD_SUCCESS';

const initialState = {
  isLoading: false,
  error: null,
  ids: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_REQUEST: 
      return Object.assign(
        {},
        state,
        {isLoading: true, error: null}
      );
    case LOAD_FAILURE:
      return Object.assign(
        {},
        state,
        {error: action.error, isLoading: false}
      )
    case LOAD_SUCCESS:
      return Object.assign(
        {},
        state,
        {isLoading: false, ids: action.ids}
      );
    default: 
      return state;
  }
}

const actions = {};

actions.requestTickets = () => { return {type: LOAD_REQUEST}};
actions.errorTickets = (error) => { 
  return {
    type: LOAD_FAILURE,
    error
  };
};
actions.successTickets = (ids) => {
  return {
    type: LOAD_SUCCESS,
    ids
  }
}

actions.loadTickets = (dispatch) => {
  return async (dispatch) => {
    dispatch(actions.requestTickets());
    try{
      const response = await fetch(`http://138.68.157.14/api/tickets`);
      const parsedResponse = await response.json();
      const result = parsedResponse.tickets.map((ticket) => ticket.id);
      // const promiseDelay = new Promise((resolve, reject) => {
      //   setTimeout(_ => resolve(), 30000);
      // })

      // await promiseDelay;
      dispatch(actions.successTickets(result))
    }
    catch(error) {
      console.error(error)
      dispatch(actions.errorTickets(error));
    }
  }
}

const shouldFetchTickets = (state) => {
  const {tickets} = state;
  if(!(tickets.ids && tickets.ids.length)) {
    return true;
  }
  else if (state.tickets.isLoading) {
    return false;
  }
}

actions.fetchTicketsIfNeeded = () => {
  return (dispatch, getState) => {
    if(shouldFetchTickets(getState())) {
      return dispatch(actions.loadTickets());
    }
  }
}

export {actions};