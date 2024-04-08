import { VehiclesProps } from '@/app/api/route'

export type FilterByProps = {
  make?: string
  model?: string
  startBidRange?: number
  endBidRange?: number
  favorite?: boolean | null
}

export type SortValues = 'make' | 'startingBid' | 'mileage' | 'auctionDateTime'

const listItems = (
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

const getVehicles = async (
  signal: AbortSignal,
  filterBy: FilterByProps,
  sortBy?: SortValues,
  limit = 10,
  current = 1
): Promise<VehiclesProps> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { signal })
  let vehicles: VehiclesProps = await response.json()

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

  if (sortBy) {
    vehicles.sort((a, b) =>
      sortBy === 'make' || sortBy === 'auctionDateTime'
        ? a[sortBy].localeCompare(b[sortBy])
        : a[sortBy] - b[sortBy]
    )
  }

  const total = vehicles.length
  const result = listItems(vehicles, current, limit)

  return { result, total }
}

export default getVehicles
