import getVehicles from '@/utils/getVehicles'
import Wrapper from '@/components/Wrapper'

async function getData() {
  const res = await getVehicles()

  if (!res) {
    throw new Error('Failed to fetch data')
  }

  return res
}

export default async function Home() {
  const data = await getData()

  return <Wrapper vehicles={data} />
}
