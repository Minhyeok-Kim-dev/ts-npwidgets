import React from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import JqxInput, {
  IInputProps,
} from "jqwidgets-scripts/jqwidgets-react-tsx/jqxinput";

export interface NpInputProps extends IInputProps {
  value?: string;
  onChange?: (e: any) => void;
  componentRef?: React.RefObject<JqxInput>;
}

function NpInput({ value, onChange, componentRef }: NpInputProps) {
  const JqxComponent = React.forwardRef((props, ref: any) => {
    return (
      <JqxInput value={value} onChange={onChange} ref={ref} />
    )
  });

  return <JqxComponent ref={componentRef} />;
}

export default NpInput;
