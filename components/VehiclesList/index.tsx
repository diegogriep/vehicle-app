'use client'

import * as S from './styles'

import { useVehicles } from "@/hooks/use-vehicles";
import VehicleItem from "../VehicleItem";

const VehicleList = () => {
  const { items } = useVehicles()
  const showItem = items
  return (
    <S.Wrapper>
      {showItem.map((vehicle, index) =>
        <VehicleItem key={index} {...vehicle} />
      )}
    </S.Wrapper>
  )
}

export default VehicleList
