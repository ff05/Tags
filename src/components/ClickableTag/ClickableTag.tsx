import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

type Props = {
  label: string;
  onClick: () => void;
};

const WrapperStyles = styled.div`
  display: flex;
  grid-column: span 1;
  background-color: ${colors.primary};
  border-radius: 30px;
  color: white;
  padding: 8px 16px;
  button {
    background-color: transparent;
    border: 0;
    color: white;
    border-left: 1px white solid;
  }
`;

const ClickableTag: React.FC<Props> = ({ label, onClick }) => {
  return (
    <WrapperStyles>
      <span>{label}</span>
      <button type="button" onClick={onClick}>
        x
      </button>
    </WrapperStyles>
  );
};

export default ClickableTag;
