'use client'

import * as S from './styles'

import { useVehicles } from "@/hooks/use-vehicles";
import VehicleItem from "../VehicleItem";

const VehicleList = () => {
  const { items } = useVehicles()
  return (
    <S.Wrapper>
      {items.map((vehicle, index) =>
        <VehicleItem key={index} {...vehicle} />
      )}
    </S.Wrapper>
  )
}

export default VehicleList
