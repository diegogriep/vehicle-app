'use client'

import * as S from './styles'

import { useVehicles } from '@/hooks/use-vehicles'
import VehicleItem from '../VehicleItem'
import VehicleItemSkeleton from '../VehicleItemSkeleton'

const VehicleList = () => {
  const { items, loading } = useVehicles()
  return (
    <S.Wrapper>
      {loading
        ? Array.from({ length: 10 }).map((_, index) => (
            <VehicleItemSkeleton key={index} />
          ))
        : items.map((vehicle, index) => (
            <VehicleItem key={index} {...vehicle} />
          ))}
    </S.Wrapper>
  )
}

export default VehicleList
