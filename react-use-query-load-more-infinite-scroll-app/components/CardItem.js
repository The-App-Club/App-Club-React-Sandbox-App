import styled from '@emotion/styled';

const StyledParagraph = styled.p`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10rem 1rem;
`;

const CardItem = ({ project }) => {
  return (
    <StyledParagraph
      key={project.id}
      style={{
        background: `hsla(${project.id * 30}, 60%, 80%, 1)`,
      }}
    >
      {project.name}
    </StyledParagraph>
  );
};

export default CardItem;
