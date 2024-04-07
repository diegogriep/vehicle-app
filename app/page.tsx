import Filters from '@/components/Filters'
import Main from '@/components/Main'
import Pagination from '@/components/Pagination'
import VehicleList from '@/components/VehiclesList'

export default function Home() {

  return <Main>
    <Filters />
    <VehicleList />
    <Pagination />
  </Main>
}
