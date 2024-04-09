import { SelectOptionProps } from '@/types/types'
import getMakes from '@/utils/parseMakes'
import { getStorageItem } from '@/utils/localStorage'
import { useState, useEffect } from 'react'

export const useMakes = () => {
  const [makeItems, setMakeItems] = useState<SelectOptionProps[]>([])

  useEffect(() => {
    const database = getStorageItem()
    const result = getMakes(database)
    const parsed = result.map((make) => {
      return {
        label: make,
        value: make
      }
    })

    setMakeItems(parsed)
  }, [])

  return { makeItems }
}
