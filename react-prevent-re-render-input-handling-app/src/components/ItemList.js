import { Item } from './Item';
import { useState, useCallback } from 'react';

const ItemList = ({ itemInfoList, handleDelete }) => {
  const [items, setItems] = useState(itemInfoList);

  const onChange = useCallback((id, value) => {
    setItems((prevItems) =>
      prevItems.map((item, index) => {
        return index !== id ? item : { value: value };
      })
    );
  }, []); // No dependencies

  return (
    <>
      <div>{JSON.stringify(items)}</div>
      <div>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <Item
                id={index}
                value={item.value}
                onChange={onChange}
              />
              <button
                onClick={(e) => {
                  handleDelete(e, item.value, items);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export { ItemList };
