import { useEffect, useState } from 'react';

const makeQueue = (i = Math.random()) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(`Hello World ${i + 1}`);
    } catch (error) {
      reject(error);
    }
  });
};

const itemList = [...Array(10)].map((_, index) => {
  return Promise.resolve(index + 1);
});

const Pudding = ({ queue, jobCount, setJobCount, jobQueue, setJobQueue, concurrency }) => {
  const makeQueue = (i = Math.random()) => {
    return new Promise((resolve, reject) => {
      try {
        resolve(`Hello World ${i + 1}`);
      } catch (error) {
        reject(error);
      }
    });
  };

  const handleClick = (e) => {
    // 同時接続数の確認
    setJobCount(Math.floor(100 * Math.random()));
    const itemList = [...Array(jobCount)].map((_, index) => {
      return Promise.resolve(index + 1);
    });

    for (let index = 0; index < itemList.length; index++) {
      const item = itemList[index];
      queue.add(() => item);
    }
    queue.add(() => makeQueue());
  };

  return (
    <>
      <p>This is Pudding</p>
      <button onClick={handleClick}>add item</button>
      <div>NextJobCount: {jobCount}</div>
      <div>Size: {jobQueue.size}</div>
      <div>Pending: {jobQueue.pending}</div>
      <div>Concurrency: {concurrency}</div>
    </>
  );
};

export { Pudding };
