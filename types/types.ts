import { VehiclesProps } from '@/app/api/route'
import { InputHTMLAttributes, SelectHTMLAttributes } from 'react'

export const MAX_VALUE = 100000000
export const ELLIPSIS_START = -10
export const ELLIPSIS_END = -20

export type VehiclesContextData = {
  filteredItems: FilterByProps
  items: VehiclesProps
  filterBy: (filters: FilterByProps) => void
  sortBy: (property: SortValues) => void
  total: number
  setLimitAPI: (value: number) => void
  setCurrentPageAPI: (value: number) => void
  limitAPI: number
  loading: boolean
}

export const VehiclesContextDefaultValues = {
  filteredItems: {},
  items: [],
  filterBy: () => null,
  sortBy: () => null,
  total: 0,
  setLimitAPI: () => null,
  setCurrentPageAPI: () => null,
  limitAPI: 0,
  loading: false
}

export type UseVehicleDetailsProps = {
  make: string
  model: string
  year: number
  mileage: number
}

export type FilterByProps = {
  make?: string
  model?: string
  startBidRange?: number
  endBidRange?: number
  favorite?: boolean | null
}

export type SortValues = 'make' | 'startingBid' | 'mileage' | 'auctionDateTime'

export type SelectOptionProps = {
  label: string
  value: string
}

export type SelectFieldProps = {
  items: SelectOptionProps[]
  initialValue?: string | number
  updatedValue?: string | number
  label?: string
  labelFor?: string
  placeholder?: string
  onInput?: (value: string | SortValues) => void
} & SelectHTMLAttributes<HTMLSelectElement>

export type CheckBoxProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label: string
  updatedValue?: string | number | null
  labelFor: string
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

export type PaginationProps = {
  total: number
}

export const pageItems = [
  { label: '10', value: '10' },
  { label: '25', value: '25' },
  { label: '50', value: '50' }
]

export const sortItems = [
  { label: 'Make', value: 'make' },
  { label: 'Starting Bid', value: 'startingBid' },
  { label: 'Milage', value: 'mileage' },
  { label: 'Auction Date', value: 'auctionDateTime' }
]
