import styled from "styled-components";
import { colors } from "../../styles/colors";

const TableStyles = styled.table`
  td {
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const TagsListStyles = styled.ul`
  border: double 5px black;
`;

type CustomDataCellProps = {
  highlighted?: boolean;
};

const CustomDataCell = styled.td<CustomDataCellProps>`
  color: ${({ highlighted }) => (highlighted ? colors.secondary : "black")};
  transition: 0.3s ease;
`;

export { CustomDataCell, TableStyles, TagsListStyles };
