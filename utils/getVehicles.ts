import { VehiclesProps } from '@/app/api/route'

const getVehicles = async (): Promise<VehiclesProps> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
  const vehicles: VehiclesProps = await response.json()
  return vehicles
}

export default getVehicles
