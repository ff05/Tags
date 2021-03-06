import React from "react";

export type TitleProps = {
  title: string;
};

const HeaderTitle: React.FC<TitleProps> = ({ title }) => <h1>{title}</h1>;

export default HeaderTitle;
