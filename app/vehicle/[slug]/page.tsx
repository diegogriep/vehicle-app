import VehicleDetails from '@/components/VehicleDetails'

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const splitSlug = slug.split('--')
  const make = splitSlug[0]
  const model = splitSlug[1]
  const year = +splitSlug[2]
  const mileage = +splitSlug[3]

  const props = {
    make,
    model,
    year,
    mileage
  }

  return <VehicleDetails {...props} />
}
