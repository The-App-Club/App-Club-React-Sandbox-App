import { atom } from 'recoil';

const countState = atom({
  key: 'count',
  default: 0,
});

const userState = atom({
  key: 'user',
  default: {
    name: 'hoge',
    age: 11,
  },
});

export { countState, userState };
