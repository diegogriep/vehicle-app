import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  background-color: #ccc;
  color: black;
  font-size: 1.6rem;
  margin-top: 2rem;
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

  width: 26rem;
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

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`

export const Favourite = styled.span`
  color: red;
  font-size: 2rem;
  left: 2rem;
  position: absolute;
  top: 2rem;
  animation: 1.5s ease 0s infinite beat;

  @keyframes beat {
    0%,
    50%,
    100% {
      transform: scale(1, 1);
    }
    30%,
    80% {
      transform: scale(0.92, 0.95);
    }
  }
`
