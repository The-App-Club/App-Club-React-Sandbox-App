import {Link} from 'react-router-dom';
import {LinkItem} from './LinkItem';
import {LinkItemList} from './LinkItemList';
import {HashLink as HashLink} from 'react-router-hash-link';

const Navigation = () => {
  return (
    <LinkItemList>
      {[1, 2, 3, 4, 5].map((num, index) => {
        return (
          <LinkItem key={num}>
            <Link to={`/#section${num}`}>Section {num}</Link>
          </LinkItem>
        );
      })}
      <HashLink to="/#section4">hash link jump lib section4</HashLink>
    </LinkItemList>
  );
};

export {Navigation};
