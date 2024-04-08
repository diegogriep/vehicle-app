import { PaginationProps } from '@/components/Pagination'
import { useState } from 'react'

export const ELLIPSIS_START = -10
export const ELLIPSIS_END = -20

const listNumberPages = (page: number, totalPages: number) => {
  const current = Math.min(page, totalPages)
  const total = Math.max(1, totalPages)

  if (total <= 5) {
    return Array.from({ length: total }).map((_, i) => i + 1)
  }

  if (current < 3) {
    return [1, 2, 3, ELLIPSIS_START, total - 1, total]
  }

  if (current === 3) {
    return [1, 2, 3, 4, ELLIPSIS_START, total - 1, total]
  }

  if (current > total - 2) {
    return [1, 2, ELLIPSIS_END, total - 2, total - 1, total]
  }

  if (current === total - 2) {
    return [1, 2, ELLIPSIS_END, total - 2, total - 1, total]
  }

  return [
    1,
    ELLIPSIS_START,
    current - 1,
    current,
    current + 1,
    ELLIPSIS_END,
    total
  ]
}

export const usePagination = ({ total }: PaginationProps) => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const totalPages = Math.ceil(total / limit)
  const pages = listNumberPages(page, totalPages)
  const isCurrentPage = (n: number) => n === page

  return { setPage, pages, setLimit, limit, isCurrentPage }
}
