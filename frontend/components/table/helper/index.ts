import { compact } from "lodash";

export const handleSearchFilter = (
  data: Array<Record<string, any>>,
  searchInput: string,
  searchableField?: string[]
) => {
  const matchSearchInput = (item: Record<string, any>, field: string) =>
    !!item[field].toString().toLowerCase().match(searchInput.toLowerCase());

  const filteredData = !!searchableField
    ? compact(
        data.map(
          (item) =>
            compact(
              searchableField.map((field: string) =>
                matchSearchInput(item, field)
              )
            )[0] && item
        )
      )
    : data;

  return filteredData;
};
