import { VehiclesProps } from '@/app/api/route'
import {
  VehiclesContextData,
  VehiclesContextDefaultValues,
  FilterByProps,
  MAX_VALUE,
  SortValues
} from '@/types/types'
import getVehicles from '@/utils/getVehicles'
import { useContext, createContext, useState, useEffect } from 'react'

export const VehiclesContext = createContext<VehiclesContextData>(
  VehiclesContextDefaultValues
)

export type VehiclesProviderProps = {
  children: React.ReactNode
}

const VehiclesProvider = ({ children }: VehiclesProviderProps) => {
  const [loading, setLoading] = useState(true)
  const [vehiclesData, setVehiclesData] = useState<VehiclesProps>([])
  const [filteredData, setFilteredData] = useState<FilterByProps>({
    make: '',
    model: '',
    startBidRange: 0,
    endBidRange: MAX_VALUE
  })
  const [sortedData, setSortedData] = useState<SortValues>()
  const [total, setTotal] = useState(0)
  const [limitAPI, setLimitAPI] = useState(10)
  const [currentPageAPI, setCurrentPageAPI] = useState(1)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    async function fetchData() {
      const { result, total } = await getVehicles(
        signal,
        filteredData,
        sortedData,
        limitAPI,
        currentPageAPI
      )
      setVehiclesData(result)
      setTotal(total)
      setLoading(false)
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
      value={{
        items: vehiclesData,
        filteredItems: filteredData,
        filterBy,
        sortBy,
        total,
        setLimitAPI,
        setCurrentPageAPI,
        limitAPI,
        loading
      }}
    >
      {children}
    </VehiclesContext.Provider>
  )
}

const useVehicles = () => useContext(VehiclesContext)

export { VehiclesProvider, useVehicles }
