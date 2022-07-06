import styled from '@emotion/styled';
import { Item } from './Item';
const ItemList = ({ index, logo, searchTerm }) => {
  return (
    <Item key={index} index={index} logo={logo} searchTerm={searchTerm}></Item>
  );
};

export { ItemList };
