import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import routes from './config/routes.js';
import {AuthProvider} from './context';
import AppRoute from './components/AppRoute';
import {AnimatePresence} from 'framer-motion';
import {Global, css} from '@emotion/react';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route) => {
            return (
              <AppRoute
                key={route.path}
                path={route.path}
                component={route.component}
                isPrivate={route.isPrivate}
              />
            );
          })}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
