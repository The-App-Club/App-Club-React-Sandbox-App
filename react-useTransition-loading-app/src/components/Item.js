import styled from '@emotion/styled';

const Item = ({ index, logo, searchTerm }) => {
  return (
    <div key={index}>
      <img src={logo} alt="logo" />
      <div>
        {index + 1}. {searchTerm}
      </div>
    </div>
  );
};

export { Item };
