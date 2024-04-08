import styled from 'styled-components'

export const Wrapper = styled.article`
  border-radius: 0.4rem;
  box-shadow: 0 0 0.5rem #000;
  color: black;
  font-size: 1.6rem;
  position: relative;
  height: 36.2rem;
`

export const ImageBox = styled.img`
    position: relative;
    height: 26rem;
    width: 28rem;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 28rem 26rem;
    border-radius: 1rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
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
