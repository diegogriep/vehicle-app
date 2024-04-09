import { VehiclesProps } from '@/app/api/route'

const parseMakes = (vehicles: VehiclesProps): string[] => {
  const makes = vehicles.map((vehicle) => vehicle.make)
  const removeDuplicated = makes.filter(
    (value, index) => makes.indexOf(value) === index
  )

  return removeDuplicated.sort()
}

export default parseMakes
