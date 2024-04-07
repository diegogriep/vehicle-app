import vehicles from './vehicles_dataset.json'

export type VehiclesProps = typeof vehicles
export type VehiclesItemProps = typeof vehicles[number]

export async function GET() {
  return Response.json(vehicles);
}
