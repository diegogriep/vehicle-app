import { SelectOptionProps } from "@/components/SelectField"
import getModels from "@/utils/getModels";
import { useState, useEffect } from "react"

export const useModels = (make: string) => {
  const [modelItems, setModelItems] = useState<SelectOptionProps[]>([])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    async function fetchData() {
      const result = await getModels(signal, make)
      const parsed = result.map(model => {
        return ({
          label: model,
          value: model,
        })
      })

      setModelItems(parsed)
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [make])

  return modelItems
}
