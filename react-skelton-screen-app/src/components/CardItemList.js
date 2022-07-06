import React from 'react';
import Card from './CardItem';
import styled from '@emotion/styled';

const StyledCardItemList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CardItemList = ({list}) => {
  return (
    <StyledCardItemList>
      {list.items.map((item, index) => {
        return <Card key={index} item={item} channel={list.channel} />;
      })}
    </StyledCardItemList>
  );
};

export default CardItemList;
