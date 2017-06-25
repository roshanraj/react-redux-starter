import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

// import { selectedUsersPage, usersByPage } from '../reducers/users';
// import { selectedReposPage, reposByPage } from '../reducers/repos';
import alerts from '../reducers/alerts'

const logger = createLogger();
const rootReducer = combineReducers(
  {
    alerts
  }
);

const initialState = {

};


export default function configureStore() {
  let store;

  if (module.hot) {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware, logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
  } else {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware , socketMiddleware, logger), f=>f
    ));
  }

  return store;
}
