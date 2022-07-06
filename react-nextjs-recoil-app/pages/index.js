import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { countState, userState } from '../stores';

const Home = () => {
  //atomの値の操作を定義（read,write)
  const [count, setCount] = useRecoilState(countState);
  const [user, setUser] = useRecoilState(userState);

  const increment = (c) => {
    return c + 1;
  };

  const updateUser = (u) => {
    return { ...u, ...{ age: u.age + 1 } };
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <p>count:{count}</p>
        <button
          onClick={() => {
            setCount(increment);
          }}
        >
          count increment
        </button>
        <hr />
        <p>user.name:{user.name}</p>
        <p>user.age:{user.age}</p>
        <button
          onClick={() => {
            setUser(updateUser);
          }}
        >
          age increment
        </button>
      </div>
      <hr />
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
