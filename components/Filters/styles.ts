import styled from 'styled-components'
import media from 'styled-media-query'

import * as SelectFieldStyles from '../SelectField/styles'
import * as TextFieldStyles from '../TextField/styles'

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;

  ${TextFieldStyles.Wrapper},
  ${SelectFieldStyles.Wrapper} {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }

    ${media.greaterThan('small')`
      margin-bottom: 0;
    `}
  }
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

export const Filters = styled.section`
  padding: 2rem 0;

  ${media.greaterThan('small')`
    align-items: end;
    display: flex;
    justify-content: center;
    padding-top: 0;
    column-gap: 2rem;
  `}
`

export const SortBy = styled.section`
  display: flex;
  justify-content: space-between;
`
