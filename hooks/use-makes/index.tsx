import { SelectOptionProps } from "@/components/SelectField"
import getMakes from "@/utils/getMakes";
import { useState, useEffect } from "react"

export const useMakes = () => {
  const [makeItems, setMakeItems] = useState<SelectOptionProps[]>([])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    async function fetchData() {
      const result = await getMakes(signal)
      const parsed = result.map(make => {
        return ({
          label: make,
          value: make,
        })
      })

      setMakeItems(parsed)
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [])

  return { makeItems }
}
