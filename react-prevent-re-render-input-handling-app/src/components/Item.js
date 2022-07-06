import { memo } from 'react';

const Item = memo(({ id, value, onChange }) => {
  return <input onChange={(e) => onChange(id, e.target.value)} value={value} />;
});

export { Item };
