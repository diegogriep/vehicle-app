import { VehiclesProps } from '@/app/api/route'

const getVehicle = async (
  signal: AbortSignal,
  make: string,
  model: string,
  year: number,
  mileage: number
): Promise<VehiclesProps> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { signal })
  const vehicles: VehiclesProps = await response.json()
  let vehicle: VehiclesProps = []

  if (make) {
    vehicle = vehicles.filter((vehicle) => vehicle.make === make)
  }

  if (model) {
    vehicle = vehicles.filter(
      (vehicle) => vehicle.model.replace(' ', '') === model
    )
  }

  if (year) {
    vehicle = vehicles.filter((vehicle) => vehicle.year === year)
  }

  if (mileage) {
    vehicle = vehicles.filter((vehicle) => vehicle.mileage === mileage)
  }

  return vehicle
}

export default getVehicle
