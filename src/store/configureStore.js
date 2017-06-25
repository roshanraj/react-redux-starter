import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

// import auth from '../reducers/auth';
// import alerts from '../reducers/alerts';
import roster from '../reducers/roster';
import alert from '../reducers/alert';
import auth  from '../reducers/auth';

import sidemenu from '../reducers/sidemenu';
import message from '../reducers/message';

// import { selectedUsersPage, usersByPage } from '../reducers/users';
// import { selectedReposPage, reposByPage } from '../reducers/repos';

import socketMiddleware from '../middleware/socket'

const logger = createLogger();
const rootReducer = combineReducers(
  {
    roster,
    alert,
    auth,
    sidemenu,
    message,
  }
);

const initialState = {

};


export default function configureStore() {
  let store;

  if (module.hot) {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware, logger, socketMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
  } else {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware , socketMiddleware, logger), f=>f
    ));
  }

  return store;
}
