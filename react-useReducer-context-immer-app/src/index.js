import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import LoginUseState from './LoginUseState';
import LoginUseReducer from './LoginUseReducer';
import LoginUseReducerImmer from './LoginUseReducerImmer';
import LoginWithContext from './LoginWithContext';

function useLocationHash() {
  const [hash, setHash] = useState(window.location.hash);
  function onHashChange() {
    setHash(window.location.hash);
  }
  useEffect(() => {
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return hash;
}

function useSimpleHashRouter(routes) {
  const hash = useLocationHash();
  // Exclude '#' when calculating hash.
  const currentRoute = routes[hash.substr(1)];
  if (currentRoute) {
    return currentRoute;
  }
  return null;
}

function App() {
  const CurrentRoute = useSimpleHashRouter({
    useState: LoginUseState,
    useReducer: LoginUseReducer,
    useReducerImmer: LoginUseReducerImmer,
    withContext: LoginWithContext,
  });
  return (
    <>
      {!CurrentRoute && (
        <div className="App App-Column">
          <a href="#useState">useState</a>
          <br />
          <br />
          <a href="#useReducer">useReducer</a>
          <br />
          <br />
          <a href="#useReducerImmer">useReducerImmer</a>
          <br />
          <br />
          <a href="#withContext">LoginWithContext</a>
          <br />
        </div>
      )}
      {CurrentRoute && <CurrentRoute />}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
