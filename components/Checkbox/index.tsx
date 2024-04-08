import { useState } from 'react'
import * as S from './styles'
import { CheckBoxProps } from '@/types/types'

const Checkbox = ({
  onCheck,
  isChecked = false,
  updatedValue = '',
  label,
  labelFor,
  value,
  ...props
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <S.Wrapper>
      {updatedValue}
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={typeof updatedValue === 'object' ? false : checked}
        value={value}
        {...props}
      />
      <S.Label htmlFor={labelFor}>{label}</S.Label>
    </S.Wrapper>
  )
}

export default Checkbox
