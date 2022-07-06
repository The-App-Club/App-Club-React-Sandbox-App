const getSongInfoList = () => {
  // https://picsum.photos/
  return new Promise(async (resolve, reject) => {
    try {
      const reposnse = await fetch('https://picsum.photos/v2/list', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await reposnse.json();
      resolve(json);
    } catch (error) {
      reject(error);
    }
  });
};

const addSongInfo = ({song}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const reposnse = await fetch('https://picsum.photos/v2/list', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(song),
      });
      const json = await reposnse.json();
      resolve(json);
    } catch (error) {
      reject(error);
    }
  });
};

export {getSongInfoList, addSongInfo};
