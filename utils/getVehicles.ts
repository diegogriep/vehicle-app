import { VehiclesProps } from '@/app/api/route'
import { FilterByProps, SortValues } from '@/types/types'
import { filterItems, listItems, sortItems } from './utilsVehicles'

const getVehicles = async (
  signal: AbortSignal,
  filterBy: FilterByProps,
  sortBy?: SortValues,
  limit = 10,
  current = 1
): Promise<VehiclesProps> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { signal })
  let vehicles: VehiclesProps = await response.json()

  vehicles = filterItems(vehicles, filterBy)
  vehicles = sortItems(vehicles, sortBy)

  const total = vehicles.length
  const result = listItems(vehicles, current, limit)

  return { result, total }
}

export default getVehicles
