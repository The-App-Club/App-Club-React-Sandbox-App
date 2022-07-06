import userData from '../data/user.json';

function login({loginPayload}) {
  return new Promise(async (resolve, reject) => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(loginPayload),
    };
    try {
      // const response = await fetch('hogehoge', options);
      // const json = await response.json();
      if (
        loginPayload.email === userData.user.email &&
        loginPayload.password === userData.user.password
      ) {
        resolve(
          Object.assign({user: userData}, {status: 0, message: 'login success'})
        );
      } else {
        resolve(Object.assign({status: 1, message: 'login fail'}));
      }
    } catch (error) {
      reject(error);
    }
  });
}

export {login};
