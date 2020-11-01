import React from "react";
import { HeaderStyles } from "./Header.styles";
import { LogoShort } from "@amsterdam/asc-assets";
import HeaderTitle, { TitleProps } from "./HeaderTitle";

const Header: React.FC<TitleProps> = ({ title }) => {
  return (
    <HeaderStyles>
      <HeaderTitle title={title} />
    </HeaderStyles>
  );
};

export default Header;
