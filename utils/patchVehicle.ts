import { VehiclesProps } from '@/app/api/route'

const patchVehicle = async (
  favourite: boolean,
  make: string,
  model: string,
  year: number,
  mileage: number
): Promise<VehiclesProps> => {
  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      favourite,
      make,
      model,
      year,
      mileage
    })
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}`,
    requestOptions
  )
  const vehicles: VehiclesProps = await response.json()

  return vehicles
}

export default patchVehicle
