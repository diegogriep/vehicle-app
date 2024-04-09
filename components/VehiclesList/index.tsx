'use client'

import * as S from './styles'

import { useVehicles } from '@/hooks/use-vehicles'
import VehicleItem from '../VehicleItem'
import VehicleItemSkeleton from '../VehicleItemSkeleton'
import Empty from '../Empty'

const VehicleList = () => {
  const { items, loading } = useVehicles()
  return (
    <S.Wrapper>
      {loading ? (
        Array.from({ length: 10 }).map((_, index) => (
          <VehicleItemSkeleton key={index} />
        ))
      ) : items?.length ? (
        items.map((vehicle, index) => <VehicleItem key={index} {...vehicle} />)
      ) : (
        <Empty />
      )}
    </S.Wrapper>
  )
}

export default VehicleList
