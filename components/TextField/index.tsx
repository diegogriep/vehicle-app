import { useState, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  updatedValue?: string | number
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>

const TextField = ({
  label,
  name,
  initialValue = '',
  updatedValue = '',
  disabled = false,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const { type } = props

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {type !== 'textarea' && type !== 'file' && (
          <S.Input
            type="text"
            onChange={onChange}
            value={typeof updatedValue === 'object' ? '' : value}
            disabled={disabled}
            name={name}
            {...(label ? { id: name } : {})}
            {...props}
          />
        )}
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
