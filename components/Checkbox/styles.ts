/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  &:focus {
    + label {
      box-shadow: 0 0 0.5rem #000;
    }
  }
  &:checked {
    + label {
      background-color: green;
      color: white;
    }
  }
`

export const Label = styled.label`
  background-color: #f0f0f0;
  border-radius: 0.4rem;
  color: #black;
  cursor: pointer;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: weight;
  padding: 0.4rem 0.8rem;
  transition: background border '0.1s ease-in-out';
  line-height: 1.8rem;
`
