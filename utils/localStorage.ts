import { VehiclesProps } from '@/app/api/route'

export const APP_KEY = 'VEHICLES_APP'

export function getStorageItem() {
  // handle server side
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}`)
  return JSON.parse(data!)
}

export function setStorageItem(value: VehiclesProps) {
  // handle server side
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}`, data)
}
