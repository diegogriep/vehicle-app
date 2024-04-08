import { VehiclesItemProps, VehiclesProps } from '@/app/api/route'

const getModels = async (
  signal: AbortSignal,
  make: string
): Promise<string[]> => {
  if (!make) return []

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, { signal })
  const vehiclesMakes: VehiclesProps = await response.json()
  const models = vehiclesMakes.filter((vehicle) => vehicle.make === make)

  const removeDuplicated = models.reduce<VehiclesProps>(
    (accumulator, current) => {
      if (checkIfAlreadyExist(current)) {
        return accumulator
      } else {
        return [...accumulator, current]
      }

      function checkIfAlreadyExist(currentVal: VehiclesItemProps) {
        return accumulator.some((item) => {
          return (
            item.make === currentVal.make && item.model === currentVal.model
          )
        })
      }
    },
    []
  )

  return removeDuplicated.map((vehicle) => vehicle.model).sort()
}

export default getModels
