'use client'

import { useEffect } from 'react'
import Filters from '../Filters'
import Pagination from '../Pagination'
import VehicleList from '../VehiclesList'
import { VehiclesProps } from '@/app/api/route'
import { getStorageItem, setStorageItem } from '@/utils/localStorage'

type WrapperProps = {
  vehicles: VehiclesProps
}

export default function Wrapper({ vehicles }: WrapperProps) {
  useEffect(() => {
    if (getStorageItem() !== vehicles) {
      // saving data on localStorage
      setStorageItem(vehicles)
    }
  }, [vehicles])

  return (
    <>
      <Filters />
      <VehicleList />
      <Pagination />
    </>
  )
}
