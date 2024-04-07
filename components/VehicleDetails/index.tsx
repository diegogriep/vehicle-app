'use client'

import Image from 'next/image'
import * as S from './styles'

import {
  useVehicleDetails,
  UseVehicleDetailsProps
} from '@/hooks/use-vehicle-details'
import patchVehicle from '@/utils/patchVehicle'

const VehicleDetails = ({
  make,
  model,
  year,
  mileage
}: UseVehicleDetailsProps) => {
  const [vehicleData] = useVehicleDetails({ make, model, year, mileage })

  const updateFavourite = async () => {
    const updateVehicle = await patchVehicle(
      !vehicleData.favourite,
      make,
      model,
      year,
      mileage
    )
    console.log(updateVehicle)
  }

  return (
    vehicleData && (
      <S.Wrapper>
        {vehicleData.favourite && <span>favourite</span>}
        <button onClick={updateFavourite}>Update favourite</button>
        <Image
          alt={`A placeholder image of a car make ${vehicleData.make} model ${vehicleData.model}`}
          src={'/assets/images/car-placeholder.jpeg'}
          width={260}
          height={280}
          priority
        />

        <S.Model>
          {vehicleData.make} {vehicleData.model} {vehicleData.engineSize}{' '}
          {vehicleData.year}
        </S.Model>
        <S.Details>
          {vehicleData.mileage} km {vehicleData.fuel}
        </S.Details>
        <S.Price>
          {vehicleData.startingBid} <S.Currency>EUR</S.Currency>
        </S.Price>
      </S.Wrapper>
    )
  )
}

export default VehicleDetails
