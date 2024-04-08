'use client'

import * as S from './styles'

import { VehiclesItemProps } from '@/app/api/route'
import Image from 'next/image'
import Link from 'next/link'

const VehicleItem = (props: VehiclesItemProps) => {
  const slug = `${props.make}-${props.model.replace(' ', '')}-${props.year}-${
    props.mileage
  }`
  return (
    <S.Wrapper>
      <Link href={`/vehicle/${slug}`}>
        {props.favourite && <S.Favourite>&#9829;</S.Favourite>}
        <Image
          alt={`A placeholder image of a car make ${props.make} model ${props.model}`}
          src={'/assets/images/car-placeholder.jpeg'}
          width={260}
          height={280}
          priority
        />

        <S.Model>
          {props.make} {props.model} {props.engineSize} {props.year}
        </S.Model>

        <S.Footer>
          <S.Details>
            {props.mileage}km {props.fuel}
          </S.Details>
          <S.Price>
            {props.startingBid} <S.Currency>EUR</S.Currency>
          </S.Price>
        </S.Footer>
      </Link>
    </S.Wrapper>
  )
}

export default VehicleItem
