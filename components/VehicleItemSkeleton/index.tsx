'use client'

import * as S from './styles'

const VehicleItemSkeleton = () => (
  <S.Wrapper>
    <S.ImageBox />

    <S.Model></S.Model>

    <S.Footer>
      <S.Details></S.Details>
      <S.Price>
        <S.Currency>EUR</S.Currency>
      </S.Price>
    </S.Footer>
  </S.Wrapper>
)

export default VehicleItemSkeleton
