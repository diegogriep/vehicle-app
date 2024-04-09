import { VehiclesProps } from '@/app/api/route'
import { FilterByProps, SortValues } from '@/types/types'

export const listItems = (
  items: VehiclesProps,
  pageActual: number,
  limitItems: number
): VehiclesProps => {
  const result: VehiclesProps = []
  const totalPage = Math.ceil(items.length / limitItems)
  let count = pageActual * limitItems - limitItems
  const delimiter = count + limitItems

  if (pageActual <= totalPage) {
    for (let i = count; i < delimiter; i++) {
      if (items[i]) {
        result.push(items[i])
      }

      count++
    }
  }

  return result
}

export const filterItems = (
  filterBy: FilterByProps,
  vehicles: VehiclesProps
) => {
  const { make, model, favorite, startBidRange, endBidRange } = filterBy

  if (make) {
    vehicles = vehicles.filter((vehicle) => vehicle.make === make)
  }

  if (model) {
    vehicles = vehicles.filter((vehicle) => vehicle.model === model)
  }

  if (favorite !== null) {
    vehicles = vehicles.filter((vehicle) => vehicle.favourite === favorite)
  }

  if (startBidRange || endBidRange) {
    vehicles = vehicles.filter(
      (vehicle) =>
        vehicle.startingBid > startBidRange! &&
        vehicle.startingBid < endBidRange!
    )
  }

  return vehicles
}

export const sortItems = (vehicles: VehiclesProps, sortBy?: SortValues) => {
  if (sortBy) {
    vehicles.sort((a, b) =>
      sortBy === 'make' || sortBy === 'auctionDateTime'
        ? a[sortBy].localeCompare(b[sortBy])
        : a[sortBy] - b[sortBy]
    )
  }

  return vehicles
}
