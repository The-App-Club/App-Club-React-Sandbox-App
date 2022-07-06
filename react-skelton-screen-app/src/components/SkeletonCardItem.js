import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';

const StyledSkeletonCardItem = styled.div`
  width: calc(33% - 10px);
  margin: 20px 0;
  /* Tablets */
  @media (max-width: 1000px) {
    width: calc(50% - 22px);
  }

  /* Mobiles */
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const StyledSkeletonCardItemTitle = styled.div`
  margin: 10px 0 0;
`;

const StyledSkeletonCardItemChannel = styled.div`
  margin: 5px 0 5px;
  font-size: 14px;
`;

const StyledSkeletonCardItemMetrics = styled.div``;

const SkeletonCardItem = ({index}) => {
  return (
    <StyledSkeletonCardItem>
      <Skeleton height={180} />
      <StyledSkeletonCardItemTitle>
        <Skeleton circle={true} height={50} width={50} />
        <br />
        <Skeleton height={36} width={`80%`} />
      </StyledSkeletonCardItemTitle>
      <StyledSkeletonCardItemChannel>
        <Skeleton width={`60%`} />
      </StyledSkeletonCardItemChannel>
      <StyledSkeletonCardItemMetrics>
        <Skeleton width={`90%`} />
      </StyledSkeletonCardItemMetrics>
    </StyledSkeletonCardItem>
  );
};

export {SkeletonCardItem};
