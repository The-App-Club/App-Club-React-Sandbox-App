const ROOT_URL = 'https://secret-hamlet-03431.herokuapp.com';
import userData from '../data/user.json';

import {login} from '../plugins/login';

async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({type: 'REQUEST_LOGIN'});
    const resultLoginInfo = await login({loginPayload});
    if (resultLoginInfo.status === 0) {
      dispatch({type: 'LOGIN_SUCCESS', payload: resultLoginInfo.user});
      localStorage.setItem('currentUser', JSON.stringify(resultLoginInfo.user));
      return resultLoginInfo;
    }
    if (resultLoginInfo.status === 1) {
      dispatch({type: 'LOGIN_ERROR', error: resultLoginInfo.message});
      return resultLoginInfo;
    }
  } catch (error) {
    dispatch({type: 'LOGIN_ERROR', error: error});
  }
}

function logout(dispatch) {
  dispatch({type: 'LOGOUT'});
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}

export {logout, loginUser};
