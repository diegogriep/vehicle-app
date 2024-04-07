'use client'

import { FormEvent, useEffect, useState } from "react"
import SelectField from "../SelectField"
import { useMakes } from "@/hooks/use-makes"
import { useVehicles } from "@/hooks/use-vehicles"
import { useModels } from "@/hooks/use-models"
import TextField from "../TextField"
import Checkbox from "../Checkbox"

const Filters = () => {
  const { makeItems } = useMakes()
  const { filterBy, sortBy, limitAPI } = useVehicles()

  const [updateValues, setUpdateValues] = useState({
    make: '',
    model: '',
    startBidRange: 0,
    endBidRange: 10000000,
    favorite: null
  })

  const handleInputEdit = (field: string, value: string | FormEvent | boolean) => {
    setUpdateValues((s) => ({ ...s, [field]: value }))
  }

  const modelItems = useModels(updateValues.make)

  useEffect(() => {
    filterBy(updateValues)
  }, [filterBy, updateValues])

  const sortItems = [{label: 'Make', value: 'make'}, {label: 'Starting Bid', value: 'startingBid'}, {label: 'Milage', value: 'mileage'}, {label: 'Auction Date', value: 'auctionDateTime'}]

  return (
    <div>
      Filters (<button onClick={() => setUpdateValues({
    make: '',
    model: '',
    startBidRange: 0,
    endBidRange: 10000000,
    favorite: null
  })}>clear filters</button>)

      <div>
        <SelectField
          name="make"
          items={makeItems}
          placeholder="Select the make"
          onInput={(v) => handleInputEdit('make', v)}
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
        />

        <TextField
          name="endBidRange"
          placeholder="End bid"
          onInputChange={(v) => handleInputEdit('endBidRange', v)}
        />

        <Checkbox label="Search by favorites" labelFor="favorite"
          onCheck={(v) => handleInputEdit('favorite', v)} />
      </div>

      <div>
        <SelectField
          label="Sort by"
          labelFor="sortBy"
          name="model"
          items={sortItems}
          initialValue={limitAPI}
          onInput={(v) => sortBy(v)}
        />
      </div>
    </div>
  )
}

export default Filters
