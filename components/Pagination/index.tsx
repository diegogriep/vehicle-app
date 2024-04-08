'use client'

import {
  ELLIPSIS_END,
  ELLIPSIS_START,
  usePagination
} from '@/hooks/use-pagination'
import Link from 'next/link'
import SelectField from '../SelectField'
import { useVehicles } from '@/hooks/use-vehicles'

import * as S from './styles'

export type PaginationProps = {
  total: number
}

const pageItems = [
  { label: '10', value: '10' },
  { label: '25', value: '25' },
  { label: '50', value: '50' }
]

const Pagination = () => {
  const { setLimitAPI, setCurrentPageAPI, total } = useVehicles()

  const { setLimit, setPage, pages, isCurrentPage } = usePagination({ total })

  const onChange = (value: number) => {
    setLimit(+value)
    setLimitAPI(+value)
  }

  const handlePagination = (page: number) => {
    setCurrentPageAPI(page)
    setPage(page)
  }

  return (
    <S.Wrapper>
      <SelectField
        labelFor="vehiclesPerPage"
        name="perPage"
        items={pageItems}
        onInput={onChange}
        label="Vehicles per page"
      />

      <S.List>
        {pages.map((page) => {
          const isEllipsis = page === ELLIPSIS_START || page === ELLIPSIS_END

          if (isEllipsis) {
            return <li key={page}>...</li>
          }

          return (
            <S.ListItem key={page} current={isCurrentPage(page)}>
              <Link href={'#'} onClick={() => handlePagination(page)}>
                {page}
              </Link>
            </S.ListItem>
          )
        })}
      </S.List>
    </S.Wrapper>
  )
}

export default Pagination
