import {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

const ScrollHandler = ({location}) => {
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(`${location.hash}`);
      console.log(element);
      setTimeout(() => {
        window.scrollTo({
          behavior: element ? 'smooth' : 'auto',
          top: element ? element.offsetTop : 0,
        });
      }, 100);
    }
  }, [location]);

  return null;
};

export default withRouter(ScrollHandler);
