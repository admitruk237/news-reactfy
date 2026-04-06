export type IPaginationProps = {
  totalPages: number
  handlePreviousPage: () => void
  handleNextPage: () => void
  handlePageClick: (page: number) => void
  currentPage: number
}
