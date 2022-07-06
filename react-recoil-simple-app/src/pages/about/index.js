import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { countState, userState } from '../../stores';
const About = () => {
  //useRecoilValue（読み取るだけ）
  const count = useRecoilValue(countState);
  const user = useRecoilValue(userState);

  return (
    <div>
      <h1>About</h1>
      <p>count:{count}</p>
      <p>user_name:{user.name}</p>
      <p>user_age:{user.age}</p>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
};

export { About };
