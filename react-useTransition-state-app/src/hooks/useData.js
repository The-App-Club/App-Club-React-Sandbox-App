import { Loadable } from '../components/Loadable';

const dataMap = new Map();

// function useData(cacheKey, fetch) {
//   const cachedData = dataMap.get(cacheKey);
//   if (cachedData === undefined) {
//     // fetch().then((d)=>{console.log(d)});
//     throw fetch().then((d) => dataMap.set(cacheKey, d));
//   }
//   return cachedData;
// }

function useData(cacheKey, fetch) {
  const cachedData = dataMap.get(cacheKey);
  if (cachedData === undefined) {
    const [loadable, promise] = Loadable.newAndGetPromise(fetch());
    dataMap.set(cacheKey, loadable);
    throw promise;
  }
  return cachedData.getOrThrow();
}

export { useData };
