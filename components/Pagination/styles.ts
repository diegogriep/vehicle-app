import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
`

export const List = styled.ul`
  align-self: end;
  background-color: #f0f0f0;
  border: 1px solid #333;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  list-style: none;

  li {
    display: inline-block;

    a {
      color: #333;
      display: inline-block;
      padding: 1rem 1.2rem;
      text-decoration: none;

      &:hover {
        background-color: #666;
        color: white;
      }
    }
  }
`
type ListProps = {
  $current?: boolean
}

export const ListItem = styled.li<ListProps>`
  ${({ $current }) => css`
    background-color: ${$current ? '#666' : '#f0f0f0'};

    a {
      color: #fff;
    }
  `}
`
