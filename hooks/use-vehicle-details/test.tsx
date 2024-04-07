import { renderHook } from '@testing-library/react'

import { useVehicleDetails } from './'
import { vehicleDetailsMock } from './mock'

describe("useVehicles", () => {
  it("should return vehicles from the hook", async () => {

    const { result } = renderHook(() => useVehicleDetails())

    expect(result.current.items).toStrictEqual(vehicleDetailsMock)

  })
})
