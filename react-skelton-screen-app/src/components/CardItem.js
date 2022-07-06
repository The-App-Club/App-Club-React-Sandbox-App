import React from 'react';
import styled from '@emotion/styled';

const StyledCard = styled.div`
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

const StyledCardLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const StyledCardThumbnail = styled.img`
  width: 100%;
`;

const StyledCardThumbnailChannel = styled.img`
  border-radius: 100%;
  padding: 0, 10px, 0, 0;
  width: 40px;
  height: 40px;
`;

const StyledCardTitle = styled.h4`
  margin: 10px 0 0;
`;

const StyledCardChannelTitle = styled.div`
  margin: 5px 0;
`;

const StyledCardChannelMetrics = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 1 auto;
  align-self: flex-start;
  position: relative;
`;

const StyledCardChannelMetricsView = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCardChannelMetricsPublishedAt = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardItem = ({item, channel}) => {
  return (
    <StyledCard>
      <StyledCardLink
        href={`https://www.youtube.com/watch?v=${item.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledCardThumbnail src={item.image} alt={item.title} />
        <StyledCardThumbnailChannel src={item.image} alt={item.title} />
        <StyledCardTitle>{item.title}</StyledCardTitle>
        <StyledCardChannelTitle>
          <i>{channel}</i>
        </StyledCardChannelTitle>
        <StyledCardChannelMetrics>
          <StyledCardChannelMetricsView>
            {item.views}
          </StyledCardChannelMetricsView>
          <StyledCardChannelMetricsPublishedAt>
            {item.published}
          </StyledCardChannelMetricsPublishedAt>
        </StyledCardChannelMetrics>
      </StyledCardLink>
    </StyledCard>
  );
};

export default CardItem;
