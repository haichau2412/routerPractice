import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Error from './container/404/index';
import History from './container/detailNews/history';
import Login from './container/detailNews/login';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const ListItem = lazy(() => import('./container/list-item'));

const auth = false;

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <>
      {auth ? <Component /> : <Redirect to='/login' />}
    </>
  )
}


ReactDOM.render(
  <Router>
    <Suspense fallback={<div>Loading ........</div>}>
      <Switch>
        <Route exact path='/' component={ListItem} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/history' component={History} />
        <Route component={Error} />
      </Switch>
    </Suspense>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
