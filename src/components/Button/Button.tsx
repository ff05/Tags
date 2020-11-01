import React from "react";
import { ButtonStyles, ButtonVariant } from "./Button.styles";

type Props = { variant?: ButtonVariant } & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, ...props }) => (
  <ButtonStyles type="button" {...props}>
    {children}
  </ButtonStyles>
);

export default Button;
