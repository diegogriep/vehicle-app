import { VehiclesProps } from '@/app/api/route'
import { UseVehicleDetailsProps } from '@/types/types'
import getVehicleDetails from '@/utils/getVehicleDetails'
import { useState, useEffect } from 'react'

export const useVehicleDetails = ({
  make,
  model,
  year,
  mileage
}: UseVehicleDetailsProps) => {
  const [details, setDetails] = useState<VehiclesProps>([])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    async function fetchData() {
      const result = await getVehicleDetails(signal, make, model, year, mileage)

      setDetails(result)
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [make, mileage, model, year])

  return details
}
