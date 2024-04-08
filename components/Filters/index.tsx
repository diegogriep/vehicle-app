'use client'

import { FormEvent, useEffect, useState } from 'react'
import SelectField from '../SelectField'
import { useMakes } from '@/hooks/use-makes'
import { useVehicles } from '@/hooks/use-vehicles'
import { useModels } from '@/hooks/use-models'
import TextField from '../TextField'
import Checkbox from '../Checkbox'

import * as S from './styles'
import { useDebounce } from 'use-debounce'
import { sortItems } from '@/types/types'

const Filters = () => {
  const { makeItems } = useMakes()
  const { filterBy, sortBy } = useVehicles()

  const [updateValues, setUpdateValues] = useState({
    make: '',
    model: '',
    startBidRange: 0,
    endBidRange: 10000000,
    favorite: null
  })

  const [debouncedValues] = useDebounce(updateValues, 500)

  const handleInputEdit = (
    field: string,
    value: string | FormEvent | boolean
  ) => {
    if (field === 'make' && updateValues.model) {
      setUpdateValues((s) => ({ ...s, ['model']: '' }))
    }

    setUpdateValues((s) => ({ ...s, [field]: value || null }))
  }

  const modelItems = useModels(updateValues.make)

  const clearAll = () =>
    ['make', 'model', 'startBidRange', 'endBidRange', 'favorite'].forEach(
      (field) => handleInputEdit(field, '')
    )

  useEffect(() => {
    filterBy(debouncedValues)
  }, [filterBy, debouncedValues])

  return (
    <S.Wrapper>
      <S.Filters>
        <SelectField
          name="make"
          items={makeItems}
          placeholder="Select the make"
          onInput={(v) => handleInputEdit('make', v)}
          updatedValue={updateValues.make}
        />

        <SelectField
          disabled={!updateValues.make}
          name="model"
          items={modelItems}
          placeholder="Select the model"
          onInput={(v) => handleInputEdit('model', v)}
        />

        <TextField
          label="Bid range"
          name="startBidRange"
          placeholder="Start bid"
          onInputChange={(v) => handleInputEdit('startBidRange', v)}
          updatedValue={updateValues.startBidRange}
        />

        <TextField
          name="endBidRange"
          placeholder="End bid"
          onInputChange={(v) => handleInputEdit('endBidRange', v)}
          updatedValue={updateValues.endBidRange}
        />

        <Checkbox
          label="Search on your favorites?"
          labelFor="favorite"
          onCheck={(v) => handleInputEdit('favorite', v)}
          updatedValue={updateValues.favorite}
        />
      </S.Filters>

      <S.SortBy>
        <S.Button onClick={clearAll}>clear filters</S.Button>

        <SelectField
          label="Sort by"
          labelFor="sortBy"
          name="model"
          items={sortItems}
          onInput={sortBy}
        />
      </S.SortBy>
    </S.Wrapper>
  )
}

export default Filters
