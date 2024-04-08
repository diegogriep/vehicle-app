'use client'

import Image from 'next/image'
import * as S from './styles'
import Link from 'next/link'

export const Header = () => {
  return (
    <S.Wrapper>
      <Link href={'/'} title="Home">
        <Image
          alt="Vehicle finder brand"
          src={'/assets/images/logo.jpg'}
          width={80}
          height={50}
          priority
        />

        <S.Title>Vehicle finder</S.Title>
      </Link>
    </S.Wrapper>
  )
}
