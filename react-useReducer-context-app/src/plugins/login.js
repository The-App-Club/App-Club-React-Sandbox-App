const login = ({email, password}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const reposnse = await fetch('https://hookedbe.herokuapp.com/api/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const json = await reposnse.json();
      resolve(json);
    } catch (error) {
      reject(error);
    }
  });
};

export {login};
