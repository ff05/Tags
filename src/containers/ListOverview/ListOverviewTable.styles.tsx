import styled from "styled-components";
import { colors } from "../../styles/colors";

const ListOverviewTableStyles = styled.table`
  td {
  }
  svg {
    width: 1.5rem;
  }
`;

type CustomDataCellProps = {
  highlighted?: boolean;
};

const CustomDataCell = styled.td<CustomDataCellProps>`
  color: ${({ highlighted }) => (highlighted ? colors.secondary : "black")};
  transition: 0.3s ease;
`;

export { CustomDataCell, ListOverviewTableStyles };
