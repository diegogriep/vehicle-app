import Filters from '@/components/Filters'
import Pagination from '@/components/Pagination'
import VehicleList from '@/components/VehiclesList'

export default function Home() {
  return (
    <>
      <Filters />
      <VehicleList />
      <Pagination />
    </>
  )
}
