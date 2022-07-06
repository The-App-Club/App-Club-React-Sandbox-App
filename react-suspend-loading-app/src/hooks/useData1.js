import { fetchData1 } from '../plugins/fetch';

const dataMap = new Map();

function useData1(cacheKey) {
  const cachedData = dataMap.get(cacheKey);
  if (cachedData === undefined) {
    throw fetchData1().then((d) => dataMap.set(cacheKey, d));
  }
  return cachedData;
}

export { useData1 };
