import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  color: black;
  column-gap: 2rem;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  row-gap: 2rem;

  ${media.greaterThan('small')`
    column-gap: 2.7rem;
    flex-direction: row;
    flex-wrap: wrap;
  `}
`
