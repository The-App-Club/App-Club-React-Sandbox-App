import { useData } from '../hooks/useData';

import { fetchData1 } from '../plugins/fetch';

const ShowData = ({ dataKey }) => {
  const data = useData(`ShowData:${dataKey}`, fetchData1);
  return (
    <p>
      Data for {dataKey} is {data}
    </p>
  );
};

export { ShowData };
