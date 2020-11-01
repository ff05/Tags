import React from "react";

import { ClickableTagStyles } from "./ClickableTag.styles";

type Props = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ClickableTag: React.FC<Props> = ({ label, ...props }) => {
  return <ClickableTagStyles {...props}>{label} ✗</ClickableTagStyles>;
};

export default ClickableTag;
