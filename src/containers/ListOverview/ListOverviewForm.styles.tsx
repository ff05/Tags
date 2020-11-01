import styled from "styled-components";
import { colors } from "../../styles/colors";

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  input[type="submit"]:hover {
    color: ${colors.valid};
  }
`;

export const ErrorStyles = styled.p`
  margin-top: 8px;
  color: ${colors.secondary};
`;
