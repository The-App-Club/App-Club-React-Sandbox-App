import React, {useReducer, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {AuthContext, authInitialState, authReducer} from './context/auth';
import Login from './pages/login';
import Home from './pages/song';
import Header from './components/header';

function App() {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    const user = JSON.parse(
      (localStorage.getItem('user') === `undefined`
        ? null
        : localStorage.getItem('user')) || null
    );
    const token = JSON.parse(
      (localStorage.getItem('token') === `undefined`
        ? null
        : localStorage.getItem('token')) || null
    );

    if (user && token) {
      dispatch({
        type: 'LOGIN',
        payload: {
          user,
          token,
        },
      });
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Header />
      <div className="App">{!state.isAuthenticated ? <Login /> : <Home />}</div>
    </AuthContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
