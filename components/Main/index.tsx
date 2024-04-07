import { PropsWithChildren } from 'react'
import * as S from './style'

const Main = ({ children }: PropsWithChildren) => (
  <S.Wrapper>
    <S.Title>Vehicles finder</S.Title>
    {children}
  </S.Wrapper>
)

export default Main
