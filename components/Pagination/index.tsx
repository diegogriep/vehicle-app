'use client'

import { usePagination } from "@/hooks/use-pagination"
import Link from "next/link"
import SelectField from "../SelectField"
import { useVehicles } from "@/hooks/use-vehicles"

export type PaginationProps = {
  total: number
}

const pageItems = [
  {label: '10', value: '10'},
  { label: '25', value: '25' },
  { label: '50', value: '50' }
]

const Pagination = () => {
  const { setLimitAPI, setCurrentPageAPI, total } = useVehicles()

  const { setLimit, setPage, pages } = usePagination({ total })

  const onChange = (value: number) => {
    setLimit(+value)
    setLimitAPI(+value)
  }

  const handlePagination = (page: number) => {
    setCurrentPageAPI(page)
    setPage(page)
  }

  return (
    <>
    <SelectField
      labelFor="vehiclesPerPage"
      name="perPage"
      items={pageItems}
      onInput={onChange}
      label="Vehicles per page"
    />
    <ul>
      {pages.map((page, i) => (
        <li key={i}>
          <Link href={'#'} onClick={() => handlePagination(page)}>{page}</Link>
        </li>
      ))}

    </ul>
    </>
  )
}

export default Pagination
