import React from 'react';
import CardItem from './CardItem';

const CardItemList = ({ data }) => {
  return data.pages.map((page) => (
    <React.Fragment key={page.nextId}>
      {page.data.map((project, index) => {
        return <CardItem key={index} project={project}></CardItem>;
      })}
    </React.Fragment>
  ));
};

export default CardItemList;
