'use client'

import Image from 'next/image'
import * as S from './styles'

import {
  useVehicleDetails,
  UseVehicleDetailsProps
} from '@/hooks/use-vehicle-details'
import patchVehicle from '@/utils/patchVehicle'
import countdown from '@/utils/countdown'

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

  const counter = (datetime: string) => {
    return countdown(datetime)
  }

  return (
    vehicleData && (
      <S.Wrapper>
        {vehicleData.favourite && <S.Favourite>&#9829;</S.Favourite>}
        <S.Button onClick={updateFavourite}>
          &#9829; {vehicleData.favourite ? 'Unfavorite' : 'Favourite'} this car
        </S.Button>

        <S.Text>
          Auction begins in {counter(vehicleData.auctionDateTime)}
        </S.Text>

        <S.Container>
          <Image
            alt={`A placeholder image of a car make ${vehicleData.make} model ${vehicleData.model}`}
            src={'/assets/images/car-placeholder.jpeg'}
            width={520}
            height={560}
            priority
          />

          <S.TextContainer>
            <S.Model>
              {vehicleData.make} {vehicleData.model} {vehicleData.engineSize}{' '}
              {vehicleData.year}
            </S.Model>

            <S.Footer>
              <S.Details>
                {vehicleData.mileage}km {vehicleData.fuel}
              </S.Details>
              <S.Price>
                {vehicleData.startingBid} <S.Currency>EUR</S.Currency>
              </S.Price>
            </S.Footer>

            <S.DetailsSection>
              <h4>Details</h4>

              <S.Subtitle>Specifications</S.Subtitle>

              <p>
                Vehicle Type: {vehicleData.details.specification.vehicleType}
              </p>

              <p>Colour: {vehicleData.details.specification.colour}</p>

              <p>Fuel: {vehicleData.details.specification.fuel}</p>

              <p>
                Transmission: {vehicleData.details.specification.transmission}
              </p>

              <p>
                Number Of Doors:{' '}
                {vehicleData.details.specification.numberOfDoors}
              </p>

              <p>
                CO2 Emissions: {vehicleData.details.specification.co2Emissions}
              </p>

              <p>
                NOX Emissions: {vehicleData.details.specification.noxEmissions}
              </p>

              <p>
                Number Of Keys: {vehicleData.details.specification.numberOfKeys}
              </p>

              <S.Subtitle>Ownership</S.Subtitle>

              <p>Logbook: {vehicleData.details.ownership.logBook}</p>

              <p>
                Number Of Owners: {vehicleData.details.ownership.numberOfOwners}
              </p>

              <p>
                Date Of Registration:{' '}
                {vehicleData.details.ownership.dateOfRegistration}
              </p>

              <S.Subtitle>Equipment</S.Subtitle>
              {vehicleData.details.equipment
                .map((equipment) => equipment)
                .join(', ')}
            </S.DetailsSection>
          </S.TextContainer>
        </S.Container>
      </S.Wrapper>
    )
  )
}

export default VehicleDetails
