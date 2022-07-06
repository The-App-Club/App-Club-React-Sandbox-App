import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import dummyData from './data';
import CardItemList from './components/CardItemList';
import SkeletonCard from './components/SkeletonCard';

import styled from '@emotion/styled';

const StyledContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  font-size: 16px;

  /* Tablets */
  @media (max-width: 1000px) {
    max-width: 600px;
  }

  /* Mobiles */
  @media (max-width: 640px) {
    max-width: 100%;
    padding: 0 15px;
  }
`;

const StyledContainerSection = styled.section``;

const StyledContainerSectionHeader = styled.h2`
  margin-top: 30px;
`;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load this effect on mount
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(dummyData);
      setLoading(false);
    }, 5000);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledContainer>
      {loading && <SkeletonCard />}
      {!loading &&
        videos.map((list, index) => {
          return (
            <StyledContainerSection key={index}>
              <StyledContainerSectionHeader>
                {list.section}
              </StyledContainerSectionHeader>
              <CardItemList list={list} />
              <hr />
            </StyledContainerSection>
          );
        })}
    </StyledContainer>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
