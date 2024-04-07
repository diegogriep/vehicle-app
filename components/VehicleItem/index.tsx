'use client'

import * as S from './styles'

import { VehiclesItemProps } from "@/app/api/route"
import Image from "next/image"

const VehicleItem = (props: VehiclesItemProps) => {
  return (
    <S.Wrapper favourite={props.favourite === true}>
      <Image
        alt={`A placeholder image of a car make ${props.make} model ${props.model}`}
        src={'/assets/images/car-placeholder.jpeg'}
        width={260} height={280} />

        <S.Model>{props.make} {props.model} {props.engineSize} {props.year}</S.Model>
        <S.Details>{props.mileage} km {props.fuel}</S.Details>
        <S.Price>{props.startingBid} <S.Currency>EUR</S.Currency></S.Price>
    </S.Wrapper>
  )
}

export default VehicleItem
