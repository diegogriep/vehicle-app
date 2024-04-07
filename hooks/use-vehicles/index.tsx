import { VehiclesProps } from "@/app/api/route"
import getVehicles, { FilterByProps, SortValues } from "@/utils/getVehicles"
import { useContext, createContext, useState, useEffect } from "react"

export type VehiclesContextData = {
  filteredItems: FilterByProps
  items: VehiclesProps
  filterBy: (filters: FilterByProps) => void
  sortBy: (property: SortValues) => void
}

export const VehiclesContextDefaultValues = {
  filteredItems: {},
  items: [],
  filterBy: () => null,
  sortBy: () => null
}

export const VehiclesContext = createContext<VehiclesContextData>(VehiclesContextDefaultValues)

export type VehiclesProviderProps = {
  children: React.ReactNode
}

const VehiclesProvider = ({ children }: VehiclesProviderProps) => {
  const [vehiclesData, setVehiclesData] = useState<VehiclesProps>([])
  const [filteredData, setFilteredData] = useState<FilterByProps>({ make: '', model: '', startBidRange: 0, endBidRange: 100000000 })
  const [sortedData, setSortedData] = useState<SortValues>()

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    async function fetchData() {
      const result = await getVehicles(signal, filteredData, sortedData)
      setVehiclesData(result)
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [filteredData, sortedData])

  const filterBy = (filters: FilterByProps) => {
    setFilteredData(filters)
  }

  const sortBy = (property: SortValues) => {
    setSortedData(property)
  }

  return (
    <VehiclesContext.Provider
      value={{ items: vehiclesData, filteredItems: filteredData, filterBy, sortBy }}
    >
      {children}
    </VehiclesContext.Provider>
  )
}

const useVehicles = () => useContext(VehiclesContext)

export { VehiclesProvider, useVehicles }
