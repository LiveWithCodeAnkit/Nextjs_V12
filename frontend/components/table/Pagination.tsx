import React from "react";
import ReactPaginate from "react-paginate";
import { ceil } from "lodash";

interface Props {
  handlePageChange: Function;
  filteredData: Array<Record<string, any>>;
  currentPage: number;
  perPageList: string;
}

const Pagination = ({
  currentPage,
  handlePageChange,
  filteredData,
  perPageList,
}: Props) => {
  const totalPages = ceil(filteredData.length / Number(perPageList));
  return (
    <div
      className={`py-3 px-2 flex flex-col md:flex-row ${
        !!filteredData.length ? "md:justify-between" : "md:justify-end"
      } items-center border-t border-gray-100 dark:border-slate-800`}
    >
      <div className={` ${!!filteredData.length ? "block" : "hidden"}`}>
        <ReactPaginate
          containerClassName="flex justify-center md:justify-start"
          previousClassName="mr-2 last:mr-0"
          pageClassName="mr-2 last:mr-0 hidden md:block"
          nextClassName="mr-2 last:mr-0"
          previousLinkClassName="pagination-btn"
          pageLinkClassName="pagination-btn"
          nextLinkClassName="pagination-btn"
          activeLinkClassName="bg-gray-100 dark:bg-slate-800"
          disabledLinkClassName="hover:bg-white hover:dark:bg-slate-900 cursor-not-allowed text-[#666666] dark:text-slate-400"
          breakClassName="mr-3 last:mr-0 hidden md:block"
          breakLabel="..."
          nextLabel="Next"
          onPageChange={(e) => handlePageChange(e)}
          pageRangeDisplayed={0}
          pageCount={totalPages}
          previousLabel="Prev"
          forcePage={currentPage}
        />
      </div>
      <span className="text-sm pt-2 md:pr-1 md:pt-0 text-end">
        Showing {`${!!filteredData.length ? currentPage + 1 : currentPage}`}
        of {`${totalPages}`}
      </span>
    </div>
  );
};

export default Pagination;
