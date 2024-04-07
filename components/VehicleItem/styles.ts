import styled, { css } from "styled-components"
import media from "styled-media-query"

type WrapperProps = {
  favourite?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ favourite }) => css`
    background-color: ${favourite ? `gold` : `#ccc`};
  `}
  color: black;
  font-size: 1.6rem;
  padding: 1rem 2rem;

  img {
    width: 100%;

    ${media.greaterThan('small')`
      width: auto;
    `}
  }
`

export const Model = styled.h1`
  font-size: inherit;
  font-weight: bold;
  padding-top: 0.6rem;
`

export const Details = styled.p`
  font-weight: normal;
  padding: 0.6rem 0;
`

export const Price = styled.strong`
  color: blue;
`

export const Currency = styled.sub`
  font-size: 1rem;
`
