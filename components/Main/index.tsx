import { PropsWithChildren } from 'react'
import * as S from './style'
import { Header } from '../Header'

const Main = ({ children }: PropsWithChildren) => (
  <S.Wrapper>
    <Header />
    {children}
  </S.Wrapper>
)

export default Main
