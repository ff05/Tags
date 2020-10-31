import React from "react";
import { HeaderStyles } from "./Header.styles";

const Header: React.FC = ({ children }) => {
  return <HeaderStyles>{children}</HeaderStyles>;
};

export default Header;
