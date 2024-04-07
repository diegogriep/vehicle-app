import { VehiclesProps } from "@/app/api/route"
import getVehicles, { FilterByProps, SortValues } from "@/utils/getVehicles"
import { useContext, createContext, useState, useEffect } from "react"

export const MAX_VALUE = 100000000

export type VehiclesContextData = {
  filteredItems: FilterByProps
  items: VehiclesProps
  filterBy: (filters: FilterByProps) => void
  sortBy: (property: SortValues) => void
  total: number
  setLimitAPI: (value: number) => void
  setCurrentPageAPI: (value: number) => void
  limitAPI: number
}

export const VehiclesContextDefaultValues = {
  filteredItems: {},
  items: [],
  filterBy: () => null,
  sortBy: () => null,
  total: 0,
  setLimitAPI: () => null,
  setCurrentPageAPI: () => null,
  limitAPI: 0
}

export const VehiclesContext = createContext<VehiclesContextData>(VehiclesContextDefaultValues)

export type VehiclesProviderProps = {
  children: React.ReactNode
}

const VehiclesProvider = ({ children }: VehiclesProviderProps) => {
  const [vehiclesData, setVehiclesData] = useState<VehiclesProps>([])
  const [filteredData, setFilteredData] = useState<FilterByProps>({ make: '', model: '', startBidRange: 0, endBidRange: MAX_VALUE })
  const [sortedData, setSortedData] = useState<SortValues>()
  const [total, setTotal] = useState(0)
  const [limitAPI, setLimitAPI] = useState(10)
  const [currentPageAPI, setCurrentPageAPI] = useState(1)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    async function fetchData() {
      const { result, total } = await getVehicles(signal, filteredData, sortedData, limitAPI, currentPageAPI)
      setVehiclesData(result)
      setTotal(total)
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [currentPageAPI, filteredData, limitAPI, sortedData])

  const filterBy = (filters: FilterByProps) => {
    setFilteredData(filters)
  }

  const sortBy = (property: SortValues) => {
    setSortedData(property)
  }

  return (
    <VehiclesContext.Provider
      value={{ items: vehiclesData, filteredItems: filteredData, filterBy, sortBy, total, setLimitAPI, setCurrentPageAPI, limitAPI }}
    >
      {children}
    </VehiclesContext.Provider>
  )
}

const useVehicles = () => useContext(VehiclesContext)

export { VehiclesProvider, useVehicles }
