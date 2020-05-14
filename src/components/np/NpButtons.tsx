import React from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import JqxButton, { IButtonProps } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons";

export interface NpButtonsProps extends IButtonProps {
  width?: number | string;
  value: string;
  onClick: (e: Event | undefined) => void;
}

function NpButtons({width, value, onClick}: NpButtonsProps) {
  return <JqxButton width={width} value={value} onClick={onClick} />
}

export default NpButtons;