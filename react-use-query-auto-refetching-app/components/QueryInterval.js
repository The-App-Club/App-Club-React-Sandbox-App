import clsx from 'clsx';
import styled from '@emotion/styled';

const Beacon = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  transform: scale(2);
  background: transparent;
  transition: none;
  &.is-active {
    background: green;
    transition: all 0.3s ease;
  }
`;

const QueryInterval = ({ intervalMs, setIntervalMs, isFetching }) => {
  return (
    <label>
      Query Interval speed {intervalMs / 1000} s{' '}
      <input
        value={intervalMs}
        onChange={(ev) => setIntervalMs(Number(ev.target.value))}
        type="number"
        step={100}
        min={0}
        max={100000}
      />
      <Beacon className={clsx('', { ['is-active']: isFetching })}></Beacon>
    </label>
  );
};

export default QueryInterval;
