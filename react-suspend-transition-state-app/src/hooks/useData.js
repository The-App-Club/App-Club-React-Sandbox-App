const dataMap = new Map();

function useData(cacheKey, fetch) {
  const cachedData = dataMap.get(cacheKey);
  if (cachedData === undefined) {
    // fetch().then((d)=>{console.log(d)});
    throw fetch().then((d) => dataMap.set(cacheKey, d));
  }
  return cachedData;
}

export {useData}