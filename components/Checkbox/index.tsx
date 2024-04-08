import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'
export type CheckBoxProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label: string
  updatedValue?: string | number
  labelFor: string
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

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
