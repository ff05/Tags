import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";

export type ButtonVariant = "primary" | "secondary" | "textButton";

type Props = {
  variant?: ButtonVariant;
};

const getVariant = () => ({ variant }: { variant?: ButtonVariant }) => {
  switch (variant) {
    case "primary":
      return css`
        border: 1px solid black;
        padding: 4px 8px;
        &:hover {
          color: white;
          background-color: ${colors.valid};
        }
      `;

    case "secondary":
      return css`
        border: 1px solid black;
        padding: 4px 8px;
        &:hover {
          color: white;
          background-color: ${colors.secondary};
        }
      `;

    default:
      return css`
        background-color: transparent;
        border: 0;
        font-size: 1rem;
        cursor: pointer;
        outline: none;
      `;
  }
};

export const ButtonStyles = styled.button<Props>`
  ${getVariant()};
`;
