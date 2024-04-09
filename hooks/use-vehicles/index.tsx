import { VehiclesProps } from '@/app/api/route'
import {
  VehiclesContextData,
  VehiclesContextDefaultValues,
  FilterByProps,
  MAX_VALUE,
  SortValues
} from '@/types/types'
import getVehicles from '@/utils/getVehicles'
import { listItems, sortItems } from '@/utils/utilsVehicles'
import {
  useContext,
  createContext,
  useState,
  useEffect,
  useReducer
} from 'react'

export const VehiclesContext = createContext<VehiclesContextData>(
  VehiclesContextDefaultValues
)

export type VehiclesProviderProps = {
  children: React.ReactNode
}

const VehiclesProvider = ({ children }: VehiclesProviderProps) => {
  function reducer(state, action) {
    switch (action.type) {
      case 'request':
        return { loading: true }
      case 'success':
        return { loading: false, data: action.results }
      case 'failure':
        return { loading: false, error: action.error }
    }
  }

  const [{ data, loading, error }, dispatch] = useReducer(reducer, {
    loading: true
  })

  // const [loading, setLoading] = useState(true)
  const [vehiclesData, setVehiclesData] = useState<VehiclesProps>([])
  const [parsedVehiclesData, setParsedVehiclesData] = useState<VehiclesProps>(
    []
  )
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
      dispatch({ type: 'request' })
      console.log(loading)
      const { result, total } = await getVehicles(
        signal
        // filteredData,
        // sortedData,
        // limitAPI,
        // currentPageAPI
      )
      setVehiclesData(result)
      setTotal(total)
      // setLoading(false)
      dispatch({ type: 'success', results: result })
      console.log(loading)
    }

    fetchData()

    return () => {
      controller.abort()
    }
  }, [])

  useEffect(() => {
    const paginatedResult = listItems(vehiclesData, currentPageAPI, limitAPI)
    setParsedVehiclesData(paginatedResult)
  }, [currentPageAPI, limitAPI, vehiclesData])

  useEffect(() => {
    const sortedResult = sortItems(vehiclesData, sortedData)
    setParsedVehiclesData(sortedResult)
  }, [sortedData, vehiclesData])

  useEffect(() => {
    const result = listItems(vehiclesData, currentPageAPI, limitAPI)
    setParsedVehiclesData(result)
  }, [currentPageAPI, limitAPI, vehiclesData])

  const filterBy = (filters: FilterByProps) => {
    setFilteredData(filters)
  }

  const sortBy = (property: SortValues) => {
    setSortedData(property)
  }

  return (
    <VehiclesContext.Provider
      value={{
        items: parsedVehiclesData,
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
