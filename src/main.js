///////////////////////////////////////////
// jquery and tether for bootstrap to use
// alternative is to link them in index.html
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import jquery from 'jquery';
import tether from 'tether';
window.$ = window.jQuery=jquery;
//window.Tether=require('tether');
window.Tether = tether;
require('bootstrap/dist/js/bootstrap');
/////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute} from 'react-router';

/////////////////////////////////////////////////////////////////////////
// browserHistory would be preferred over hashHistory, but browserHistory
// would require configuring the server. So we will use hashHistory here.
// Please change to browserHistory if you have your own backend server.
import {browserHistory as history} from 'react-router';
// import { useRouterHistory } from 'react-router';
// import { createHashHistory } from 'history'
// const history = useRouterHistory(createHashHistory)({ queryKey: false });
//////////////////////////////////////////////////////////////////////////

import configureStore from './store/configureStore';

import App from './containers/app/App';
import Home from './containers/home/Home';
import Page1 from './containers/page1/Page1';
import NotFound from './containers/misc/NotFound';

import './index.scss';

const store = configureStore();
// connectToAlerts(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>

            <Route path="/" component={App}>
              <IndexRoute component={Home}/>
              <Route path="/page1" component={Page1} />
              <Route path="*" component={NotFound}/>
         </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);
