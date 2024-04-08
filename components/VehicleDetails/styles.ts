import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  border-radius: 0.4rem;
  color: black;
  font-size: 1.6rem;
  margin-top: 2rem;
  padding: 1rem;
  position: relative;

  img {
    height: auto;
    width: 100%;

    ${media.greaterThan('medium')`
      width: revert-layer;
    `}
  }
`

export const Header = styled.header`
  a {
    color: blue;
    font-size: 1.4rem;
  }

  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Model = styled.h1`
  font-size: inherit;
  font-weight: bold;
  padding-top: 0.6rem;
  width: 26rem;

  ${media.greaterThan('small')`
    font-size: 2rem;
  `}
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
  right: 12rem;
  position: absolute;
  top: 1.7rem;
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

  ${media.greaterThan('medium')`
    right: 15.3rem;
    top: 1.7rem;
  `}
`

export const Button = styled.button`
  align-self: end;
  border: 0;
  border-radius: 0.4rem;
  cursor: pointer;
  display: inline-flex;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 0.03rem;
  padding: 1.2rem;
  text-decoration: none;

  &:hover {
    background-color: #666;
    color: #fff;
  }
`

export const Text = styled.p`
  background-color: orange;
  color: #fff;
  margin: 2rem -2rem;
  padding: 1rem 0;
  text-align: center;
`

export const DetailsSection = styled.section`
  padding-top: 1.5rem;
`

export const Subtitle = styled.h5`
  padding: 1rem 0;
`

export const Container = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
  `}
`
export const TextContainer = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: column;
  `}
`
