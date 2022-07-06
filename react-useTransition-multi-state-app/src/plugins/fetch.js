import { sleep } from './sleep';

async function fetchData1() {
  await sleep(1000);
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
}

export { fetchData1 };
