import Item from './Item';
const ItemList = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => {
        return <Item index={index} item={item}></Item>;
      })}
    </ul>
  );
};

export default ItemList;
