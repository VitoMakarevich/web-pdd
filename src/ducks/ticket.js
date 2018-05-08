const LOAD_REQUEST = 'ticket/LOAD_REQUEST';
const LOAD_FAILURE = 'ticket/LOAD_FAILURE';
const LOAD_SUCCESS = 'ticket/LOAD_SUCCESS';

const initialState = {
  isLoading: false,
  error: null,
  byId: {}
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
        {
          isLoading: false,
          byId: Object.assign(
            {},
            state.byId,
            {
              [action.ticket.id]: action.ticket.questions
            }
          ) 
        }
      );
    default: 
      return state;
  }
}

const actions = {};

actions.requestTicket = () => { return {type: LOAD_REQUEST}};
actions.errorTicket = (error) => { 
  return {
    type: LOAD_FAILURE,
    error
  };
};
actions.successTicket = (ticket) => {
  return {
    type: LOAD_SUCCESS,
    ticket
  }
}

actions.loadTicket = (id) => {
  return async (dispatch) => {
    dispatch(actions.requestTicket());
    try{
      const response = await fetch(`http://138.68.157.14/api/ticket?id=${id}`);
      const ticket = await response.json();
      // const promiseDelay = new Promise((resolve, reject) => {
      //   setTimeout(_ => resolve(), 2000);
      // })

      // await promiseDelay;
      dispatch(actions.successTicket(ticket))
    }
    catch(error) {
      console.error(error)
      dispatch(actions.errorTicket(error));
    }
  }
}

const shouldFetchTicket = (state, id) => {
  const ticket = state.ticket.byId[id];
  if(!ticket) {
    return true;
  }
  else if (state.ticket.isLoading) {
    return false;
  }
}

actions.fetchTicketIfNeeded = (id) => {
  return (dispatch, getState) => {
    if(shouldFetchTicket(getState(), id)) {
      return dispatch(actions.loadTicket(id));
    }
  }
}

export {actions};