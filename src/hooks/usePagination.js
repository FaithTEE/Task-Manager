import { useState } from 'react'

const usePagination = (initialPage = 1, initialPageSize = 10) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [pageSize, setPageSize] = useState(initialPageSize)

  const nextPage = () => setCurrentPage((prev) => prev + 1)
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))
  const goToPage = (page) => setCurrentPage(Math.max(1, page))

  return {
    currentPage,
    pageSize,
    nextPage,
    prevPage,
    goToPage,
    setPageSize,
  }
}

export default usePagination