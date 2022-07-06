import React from 'react';
import Skeleton from 'react-loading-skeleton';

import styled from '@emotion/styled';

const StyledSection = styled.section``;

const StyledSectionHeader = styled.h2``;

import {SkeletonCardItem} from './SkeletonCardItem';
import {SkeletonCardItemList} from './SkeletonCardItemList';

const SkeletonCard = () => {
  return (
    <StyledSection>
      <StyledSectionHeader>
        <Skeleton duration={1} height={30} width={300} />
      </StyledSectionHeader>

      <SkeletonCardItemList>
        {Array(9)
          .fill()
          .map((item, index) => {
            return (
              <SkeletonCardItem key={index} index={index}></SkeletonCardItem>
            );
          })}
      </SkeletonCardItemList>
    </StyledSection>
  );
};

export default SkeletonCard;
