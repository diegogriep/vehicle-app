import Filters from '@/components/Filters'
import Pagination from '@/components/Pagination'
import VehicleList from '@/components/VehiclesList'
import { Suspense } from 'react'
import Loading from './loading'

export default function Home() {
  return (
    <>
      <Filters />
      <Suspense fallback={<Loading />}>
        <VehicleList />
      </Suspense>
      <Pagination />
    </>
  )
}
