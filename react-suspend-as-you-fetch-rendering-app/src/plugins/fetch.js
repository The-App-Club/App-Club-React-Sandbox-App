import { sleep } from './sleep';

async function fetchData1() {
  await sleep(Math.floor(Math.random() * 1000));
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
}

export { fetchData1 };
