import styled from 'styled-components'
import media from 'styled-media-query'

export const InputWrapper = styled.div`
    display: flex;
    background: #fff;
    border-radius: 0.2rem;
    border: 0.1rem solid;
    border-color: rgba(0, 0, 0, 0.25);
    border-radius: 0.4rem;
    padding: 0 0.8rem;
    &:focus-within {
      border-color: rgba(142, 216, 248, 0.5);
    }
`

export const Input = styled.input`
    border-radius: 0.4rem;
    color: black;
    font-size: 1.2rem;
    padding: 1.2rem 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    ${media.greaterThan('medium')`
      padding: 1.2rem 0;
    `}
`

export const Textarea = styled.textarea`
    border-radius: 0.4rem;
    color: black;
    font-size: 1.2rem;
    padding: 1.2rem 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    ${media.greaterThan('medium')`
      padding: 1.2rem 0;
    `}
`

export const Label = styled.label`
    font-size: 1rem;
    color: #000;
    cursor: pointer;
    display: inline-block;
    font-weight: bold;
    margin-bottom: 0.8rem;
`

export const Error = styled.p`
    color: red;
    font-size: 1.2rem;

`

export const Wrapper = styled.div``
