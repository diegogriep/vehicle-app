import { VehiclesProps } from "@/app/api/route"

export type FilterByProps = {
  make?: string
  model?: string
  startBidRange?: number
  endBidRange?: number
  favorite?: boolean | null
}

export type SortValues = 'make' | 'startingBid' | 'mileage' | 'auctionDateTime'

const getVehicles = async (
  signal: AbortSignal,
  filterBy: FilterByProps,
  sortBy?: SortValues,
  limit = 10,
  current = 0): Promise<VehiclesProps> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { signal })
  let vehicles: VehiclesProps = await response.json()

  const { make, model, favorite, startBidRange, endBidRange } = filterBy

  if (make) {
    vehicles = vehicles.filter(vehicle => vehicle.make === make)
  }

  if (model) {
    vehicles = vehicles.filter(vehicle => vehicle.model === model)
  }

  if (favorite !== null) {
    vehicles = vehicles.filter(vehicle => vehicle.favourite === favorite)
  }

  if (startBidRange || endBidRange) {
    vehicles = vehicles.filter(vehicle => vehicle.startingBid > startBidRange! && vehicle.startingBid < endBidRange!)
  }

  if (sortBy) {
    vehicles.sort((a, b) => sortBy === 'make' || sortBy === 'auctionDateTime' ?
    a[sortBy].localeCompare(b[sortBy]) :
    a[sortBy] - b[sortBy])
  }

  const position = current + limit
  // const total = vehicles.length
  const result = vehicles.slice(current, position)

  return result
}

export default getVehicles
