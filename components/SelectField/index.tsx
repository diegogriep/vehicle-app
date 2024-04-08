import { useState } from 'react'
import * as S from './styles'
import { SelectFieldProps } from '@/types/types'

const SelectField = ({
  items,
  label,
  labelFor = '',
  initialValue = '',
  placeholder = '',
  updatedValue = '',
  onInput,
  ...props
}: SelectFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.SelectWrapper>
        <S.Select
          onChange={onChange}
          {...props}
          value={typeof updatedValue === 'object' ? '' : value}
          id={labelFor}
        >
          <option value="">{placeholder ? placeholder : 'Select'}</option>
          {items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </S.Select>
      </S.SelectWrapper>
    </S.Wrapper>
  )
}

export default SelectField
