import React from "react";
import NpGrid from "../components/np/NpGrid";
import { useSelector } from "react-redux";
import { RootState } from "../modules";

type gridProps = {
  componentRef?: any;
};

function GridContainer({ componentRef }: gridProps) {
  const cond = useSelector((state: RootState) => state.cond);

  const width = "500";
  const columns = [
    {
      text: "id",
      datafield: "id",
      width: 100,
    },
    {
      text: "name",
      datafield: "name",
      width: 200,
    },
  ];
  const datafields = [
    {
      name: "id",
      type: "string",
    },
    {
      name: "name",
      type: "string",
    },
  ];

  return (
    <>
      <NpGrid
        width={width}
        columns={columns}
        datafields={datafields}
        localdata={cond.data}

        componentRef={componentRef}
      />
    </>
  );
}

export default GridContainer;
