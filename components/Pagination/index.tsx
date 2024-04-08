'use client'

import { usePagination } from '@/hooks/use-pagination'
import Link from 'next/link'
import SelectField from '../SelectField'
import { useVehicles } from '@/hooks/use-vehicles'

import * as S from './styles'
import { FormEvent } from 'react'
import { ELLIPSIS_START, ELLIPSIS_END, pageItems } from '@/types/types'

const Pagination = () => {
  const { setLimitAPI, setCurrentPageAPI, total, limitAPI } = useVehicles()

  const { setLimit, setPage, pages, isCurrentPage } = usePagination({ total })

  const onChange = (value: number | FormEvent | string) => {
    setCurrentPageAPI(1)
    setPage(1)
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
        initialValue={limitAPI}
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
            <S.ListItem key={page} $current={isCurrentPage(page)}>
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
