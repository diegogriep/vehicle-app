// import vehicles from './vehicles_dataset.json'

// export type VehiclesProps = typeof vehicles
// export type VehiclesItemProps = typeof vehicles[number]

// export async function GET() {
//   return Response.json(vehicles);
// }
import path from 'path'
import fsPromises from 'fs/promises'

import dataset from './vehicles_dataset.json'
import { NextRequest, NextResponse } from 'next/server'
import { UseVehicleDetailsProps } from '@/types/types'

export type VehiclesProps = typeof dataset
export type VehiclesItemProps = (typeof dataset)[number]

const vehiclesDataset = path.join(
  process.cwd(),
  'app/api/vehicles_dataset.json'
)

const getDataFromFile = async () => {
  const vehicles = await fsPromises.readFile(vehiclesDataset, 'utf-8')
  const json = JSON.parse(vehicles)

  return json
}

function getVehicleByDetails(
  vehicle: VehiclesItemProps,
  { make, model, year, mileage }: UseVehicleDetailsProps
) {
  if (
    vehicle.make === make &&
    vehicle.model === model &&
    vehicle.year === year &&
    vehicle.mileage === mileage
  ) {
    return true
  }

  return false
}

export async function GET() {
  try {
    const json = await getDataFromFile()
    return NextResponse.json(json)
  } catch (error) {
    return NextResponse.json({ message: error })
  }
}

export async function PATCH(request: NextRequest) {
  const json = await getDataFromFile()

  const { make, model, year, mileage, favourite } = await request.json()

  const vehicleIndexOnFile = json.findIndex((element: VehiclesItemProps) =>
    getVehicleByDetails(element, { make, model, year, mileage })
  )

  if (vehicleIndexOnFile === -1) {
    return new NextResponse(JSON.stringify({ message: 'Vehicle not found.' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const selectedVehicle = json[vehicleIndexOnFile]

  selectedVehicle.favourite = favourite

  json[vehicleIndexOnFile] = selectedVehicle

  const updatedInformation = JSON.stringify(json)

  await fsPromises.writeFile(vehiclesDataset, updatedInformation)

  return new NextResponse(
    JSON.stringify({ message: 'Favourite was updated.' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  )
}
