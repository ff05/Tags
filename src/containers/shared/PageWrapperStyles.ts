import styled from "styled-components";

const PageWrapperStyles = styled.div`
  padding: 0 16px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
  }
`;

export default PageWrapperStyles;
