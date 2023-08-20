import React from "react";
import { TableLayout } from "@components/table";
import { data } from "@constants/table";

const ProjectTable = () => {
  return (
    <TableLayout
      data={data}
      perPage={5}
      searchableField={["name"]}
    />
  );
};
export default ProjectTable;
