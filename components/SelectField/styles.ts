import styled from 'styled-components'

export const Wrapper = styled.div``

export const SelectWrapper = styled.div`
  background-color: #fff;
  border: 0.1rem solid #333;
  border-radius: 0.4rem;
  padding: 0.8rem 1.2rem 0.8rem;

  &:focus-within {
    border-color: rgba(142, 216, 248, 0.5);
  }
`

export const Select = styled.select`
  border-radius: 0.4rem;
  color: #666;
  padding: 0;
  background: transparent;
  border: 0;
  outline: none;
  width: 100%;
`

export const Label = styled.label`
  color: #000;
  cursor: pointer;
  display: inline-block;
`
