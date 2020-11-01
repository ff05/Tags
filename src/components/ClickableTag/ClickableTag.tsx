import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

type Props = {
  label: string;
  onClick: () => void;
};

const WrapperStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
  border-radius: 30px;
  padding: 8px;
  margin: 8px;
  border: 1px solid black;
`;

const ClickableTag: React.FC<Props> = ({ label, onClick }) => {
  return <WrapperStyles onClick={onClick}>{label} x</WrapperStyles>;
};

export default ClickableTag;
