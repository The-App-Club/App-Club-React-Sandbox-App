import styled from '@emotion/styled';

const StyledSkeletonCardItemList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SkeletonCardItemList = ({children}) => {
  return <StyledSkeletonCardItemList>{children}</StyledSkeletonCardItemList>;
};

export {SkeletonCardItemList};
