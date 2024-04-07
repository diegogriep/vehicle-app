import { SelectHTMLAttributes, useState } from 'react'
import * as S from './styles'
import { SortValues } from '@/utils/getVehicles'

export type SelectOptionProps = {
  label: string
  value: string
}

export type SelectFieldProps = {
  items: SelectOptionProps[]
  initialValue?: string
  label?: string
  labelFor?: string
  placeholder?: string
  onInput?: (value: string | SortValues) => void
} & SelectHTMLAttributes<HTMLSelectElement>

const SelectField = ({
  items,
  label,
  labelFor = '',
  initialValue = '',
  placeholder = '',
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
        <S.Select onChange={onChange} {...props} value={value}>
          <option value="0">{placeholder ? placeholder : 'Select'}</option>
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
