import { sleep } from '../plugins/sleep';

const SometimesSuspend = () => {
  if (Math.random() < 0.5) {
    throw sleep(1000);
  }
  return <p>Hello, world!</p>;
};

export { SometimesSuspend };
