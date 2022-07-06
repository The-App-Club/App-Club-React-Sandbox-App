import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const About = () => {
  const count = useSelector((state) => {
    return state.count;
  });
  const user = useSelector((state) => {
    return state.user;
  });

  return (
    <div>
      <h1>About</h1>
      <p>count:{count}</p>
      <hr />
      <p>user.name:{user.name}</p>
      <p>user.name:{user.age}</p>
      <br />
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export { About };
