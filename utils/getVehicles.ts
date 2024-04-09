import { VehiclesProps } from '@/app/api/route'

const getVehicles = async (signal: AbortSignal): Promise<VehiclesProps> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { signal })
  const vehicles: VehiclesProps = await response.json()
  const total = vehicles.length
  const result = vehicles

  return { result, total }
}

export default getVehicles
