'use client'

import * as S from './styles'

import { useVehicles } from "@/hooks/use-vehicles";
import VehicleItem from "../VehicleItem";

const VehicleList = () => {
  const { items, filteredItems } = useVehicles()
  const showItem = filteredItems.length > 0 ? filteredItems : items
  return (
    <S.Wrapper>
      {showItem.map((vehicle, index) =>
        <VehicleItem key={index} {...vehicle} />
      )}
    </S.Wrapper>
  )
}

export default VehicleList
