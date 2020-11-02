import React from "react";
import { HeaderStyles } from "./Header.styles";
import HeaderTitle, { TitleProps } from "./HeaderTitle";

const Header: React.FC<TitleProps> = ({ title }) => {
  return (
    <HeaderStyles>
      <HeaderTitle title={title} />
    </HeaderStyles>
  );
};

export default Header;
