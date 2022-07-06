import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { countState, userState } from '../../stores';

const Home = () => {
  //useRecoilState（読み書きできる）
  const [count, setCount] = useRecoilState(countState);
  const [user, setUser] = useRecoilState(userState);

  //countをインクリメント
  const increment = (c) => {
    return c + 1;
  };

  //user.ageをインクリメント（機能的な意味はなし）
  const updateUser = (u) => {
    return { ...u, ...{ age: u.age + 1 } };
  };

  return (
    <div>
      <h1>Home</h1>
      <p>count:{count}</p>
      <button onClick={() => setCount(increment)}>increment</button>
      <hr />
      <p>
        user.name:{user.name}, user.age:{user.age}
      </p>
      <button onClick={() => setUser(updateUser)}>user age increment</button>
      <br />
      <br />
      <Link to="/about">About</Link>
    </div>
  );
};

export { Home };
