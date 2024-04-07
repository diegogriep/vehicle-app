import { VehiclesProps } from "@/app/api/route"

const getMakes = async (signal: AbortSignal): Promise<string[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { signal })
  const vehiclesMakes: VehiclesProps = await response.json()
  const makes = vehiclesMakes.map(vehicle => vehicle.make)
  const removeDuplicated = makes.filter((value, index) => makes.indexOf(value) === index)

  return removeDuplicated.sort()
}

export default getMakes
