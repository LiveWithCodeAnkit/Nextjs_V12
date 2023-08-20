import React, { useState } from "react";
import { debounce } from "lodash";
import { useHandlePagination } from "./hooks";
import { handleSearchFilter } from "./helper";
import Pagination from "./Pagination";

interface Props {
  data: Array<Record<string, any>>;
  perPage: number;
  searchableField?: string[];
}

const TableLayout = ({ data, perPage, searchableField }: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const [perPageList, setPerPageList] = useState(`${perPage}`);
  const filteredData = handleSearchFilter(data, searchInput, searchableField);
  const pagination = useHandlePagination(
    filteredData,
    perPageList,
    searchInput
  );
  const entries = [10, 50, 100, 500];
  const field = Object.keys(data[0]);

  return (
    <section>
      <div className="h-25 sm:h-14 flex items-center flex-col my-2 md:my-1 md:flex-row md:justify-between text-md xl:text-lg">
        <div>
          <span className="pr-2">Show</span>
          <select
            className="p-2 rounded dark:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 "
            onChange={(e) => setPerPageList(e.target.value)}
          >
            <option hidden className="rounded">
              Select value
            </option>
            {entries.map((item, index) => (
              <option key={`${index}- entries`} value={item}>
                {item}
              </option>
            ))}
          </select>
          <span className="pl-2">entries</span>
        </div>

        <div
          className={`py-2 text-sm sm:py-0 ${
            !!searchableField ? "block" : "hidden"
          } `}
        >
          <label className="pr-1 sm:pr-2"> Search:</label>
          <input
            type="text"
            onChange={debounce((e) => setSearchInput(e.target.value), 500)}
            className="border border-[#dee2e6] rounded w-36 p-1 sm:w-44 dark:text-black"
          />
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-2xl dark:bg-slate-900/70 ">
        <table>
          <thead>
            <tr>
              {field.map((item, index) => (
                <th key={`${index}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!!filteredData.length ? (
              pagination.list.map((item, index) => (
                <tr key={`${index}`}>
                  {field.map((k, i) => (
                    <td key={`${i}-${k}`} data-label={`${k}`}>
                      {item[k]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="text-center text-lg py-2 bg-gray-100 dark:bg-slate-700"
                >
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <Pagination
          handlePageChange={pagination.handlePageChange}
          filteredData={filteredData}
          currentPage={pagination.currentPage}
          perPageList={perPageList}
        />
      </div>
    </section>
  );
};
export default TableLayout;
