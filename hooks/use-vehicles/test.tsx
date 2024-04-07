import { renderHook } from '@testing-library/react'

import { useVehicles } from './'
import { vehiclesMock } from './mock'

describe("useVehicles", () => {
  it("should return vehicles from the hook", async () => {

    const { result } = renderHook(() => useVehicles())

    expect(result.current.items).toStrictEqual(vehiclesMock)

  })
})
