import styled from "styled-components";

const MainStyles = styled.main`
  display: grid;
  grid-gap: 24px;
  grid-column: 4 / span 8;
  @media (min-width: 768px) {
    grid-gap: 40px;
  }
`;

export { MainStyles };
