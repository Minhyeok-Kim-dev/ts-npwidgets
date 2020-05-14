import React from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import JqxGrid, { jqx, IGridProps, IGridColumn, IGridSourceDataFields } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";

export interface NpGridProps extends IGridProps {
  width?: string | number;
  columns?: IGridColumn[];
  datafields?: IGridSourceDataFields[] | any[];
  localdata?: any | any[];
  componentRef?: React.RefObject<JqxGrid>;
}

function NpGrid({ width, columns, datafields, localdata, componentRef }: NpGridProps) {
  const JqxComponent = React.forwardRef((props, ref: any) => {
    const source = {
      datafields: datafields,
      datatype: 'json',
      localdata: (localdata && localdata.length > 0) ? localdata : []
    }
    const dataAdapter = new jqx.dataAdapter(source);

    return (
      <JqxGrid width={width} columns={columns} source={dataAdapter} ref={ref} />
    )
  });

  return (
    <>
      <JqxComponent ref={componentRef} />
    </>
  )
}

export default NpGrid;