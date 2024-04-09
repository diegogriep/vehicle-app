import VehicleItemSkeleton from '@/components/VehicleItemSkeleton'

export default function Loading() {
  return Array.from({ length: 10 }).map((_, index) => (
    <VehicleItemSkeleton key={index} />
  ))
}
