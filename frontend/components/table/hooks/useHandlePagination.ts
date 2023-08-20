import { useEffect, useState } from "react";

const useHandlePagination = (
  filteredData: Array<Record<string, any>>,
  perPageList: string,
  searchInput: string
) => {
  const [currentPage, setCurrentPage] = useState(0);
  const endOffset = currentPage * Number(perPageList) + Number(perPageList);
  const list = filteredData.slice(currentPage * Number(perPageList), endOffset);

  useEffect(() => {
    setCurrentPage(0);
  }, [perPageList, searchInput]);

  const handlePageChange = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };
  return { list, handlePageChange, currentPage };
};

export default useHandlePagination;
