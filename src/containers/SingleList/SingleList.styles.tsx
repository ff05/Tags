import styled from "styled-components";

const TagsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
`;

export { TagsWrapper };
