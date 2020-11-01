import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/colors";

const TagsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: -8px;
`;

const CustomLinkStyles = styled(Link)`
  color: ${colors.secondary};
  font-size: 0.9rem;
`;

export { CustomLinkStyles, TagsWrapper };
