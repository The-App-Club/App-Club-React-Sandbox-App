import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const count = useSelector((state) => {
    return state.count;
  });
  const user = useSelector((state) => {
    return state.user;
  });

  const dispatch = useDispatch();

  const incrementCount = (e) => {
    dispatch({ type: 'count_increment' });
  };

  const incrementAge = (e) => {
    dispatch({ type: 'age_increment' });
  };

  return (
    <div>
      <h1>Home</h1>
      <p>count:{count}</p>
      <button
        onClick={(e) => {
          incrementCount(e);
        }}
      >
        increment
      </button>
      <hr />
      <p>user.name:{user.name}</p>
      <p>user.name:{user.age}</p>
      <button
        onClick={(e) => {
          incrementAge(e);
        }}
      >
        increment user age
      </button>
      <br />
      <br />
      <Link to="/about">About</Link>
    </div>
  );
};

export { Home };
