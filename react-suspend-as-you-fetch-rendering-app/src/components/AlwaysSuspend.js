import { sleep } from '../plugins/sleep';

const AlwaysSuspend = () => {
  throw sleep(1000);
};

export { AlwaysSuspend };
