import { sleep } from '../plugins/sleep';

let sleeping = true;

const Sleep1s = () => {
  if (sleeping) {
    throw sleep(1000).then(() => {
      sleeping = false;
    });
  }
  return <p>Hello!</p>;
};

export { Sleep1s };
